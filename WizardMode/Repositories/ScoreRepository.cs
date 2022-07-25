using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using WizardMode.Models;

namespace WizardMode.Repositories
{
    public class ScoreRepository : BaseRepository, IScoreRepository
    {
        public ScoreRepository(IConfiguration configuration) : base(configuration) { }

        public Score GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, ScoreValue, UserProfileId, OpdbId, DateCreated
                                        FROM Score
                                        WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    using (var reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return BuildScore(reader);
                        }
                        return null;
                    }
                }
            }
        }

        public List<Score> GetScoresByUserId(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, ScoreValue, UserProfileId, OpdbId, DateCreated
                                        FROM Score
                                        WHERE UserProfileId = @userId";
                    cmd.Parameters.AddWithValue("@userId", userId);

                    using (var reader = cmd.ExecuteReader())
                    {
                        List<Score> scores = new List<Score>();
                        while (reader.Read())
                        {
                            scores.Add(BuildScore(reader));
                        }
                        return scores;
                    }
                }
            }
        }

        public List<Score> GetScoresByOpdbId(string machineId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, ScoreValue, UserProfileId, OpdbId, DateCreated
                                        FROM Score
                                        WHERE OpdbId = @opdbId";
                    cmd.Parameters.AddWithValue("@opdbId", machineId);

                    using (var reader = cmd.ExecuteReader())
                    {
                        List<Score> scores = new List<Score>();
                        while (reader.Read())
                        {
                            scores.Add(BuildScore(reader));
                        }
                        return scores;
                    }
                }
            }
        }

        public void Add(Score score)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Score (ScoreValue, UserProfileId, OpdbId, DateCreated)
                                        OUTPUT INSERTED.Id
                                        VALUES (@score, @userId, @opId, @date)";
                    cmd.Parameters.AddWithValue("@score", score.ScoreValue);
                    cmd.Parameters.AddWithValue("@userId", score.UserProfileId);
                    cmd.Parameters.AddWithValue("@opId", score.OpdbId);
                    cmd.Parameters.AddWithValue("@date", score.DateCreated);

                    score.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        private Score BuildScore(SqlDataReader reader)
        {
            return new Score()
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                ScoreValue = reader.GetInt32(reader.GetOrdinal("ScoreValue")),
                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                OpdbId = reader.GetString(reader.GetOrdinal("OpdbId")),
                DateCreated = reader.GetDateTime(reader.GetOrdinal("DateCreated"))
            };
        }
    }
}
