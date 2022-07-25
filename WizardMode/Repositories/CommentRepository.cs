using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using WizardMode.Models;

namespace WizardMode.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }

        public Comment GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT c.Id AS CommentId, c.UserProfileId, c.ScoreId, c.CommentText, c.DateCreated,
                                               up.Initials
                                          FROM Comment c
                                     LEFT JOIN UserProfile up ON c.UserProfileId = up.Id
                                          WHERE c.Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);

                    using (var reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return BuildComment(reader);
                        }
                        return null;
                    }

                }
            }
        }

        public List<Comment> GetCommentsByScoreId(int scoreId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT c.Id AS CommentId, c.UserProfileId, c.ScoreId, c.CommentText, c.DateCreated,
                                               up.Initials
                                          FROM Comment c
                                     LEFT JOIN UserProfile up ON c.UserProfileId = up.Id
                                          WHERE c.scoreId = @scoreId";
                    cmd.Parameters.AddWithValue("@scoreId", scoreId);

                    using (var reader = cmd.ExecuteReader())
                    {
                        List<Comment> comments = new List<Comment>();
                        while (reader.Read())
                        {
                            comments.Add(BuildComment(reader));
                        }
                        return comments;
                    }

                }
            }
        }

        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Comment (UserProfileId, ScoreId, CommentText, DateCreated)
                                        OUTPUT INSERTED.Id
                                        VALUES (@userProfileId, @scoreId, @commentText, @dateCreated)";
                    cmd.Parameters.AddWithValue("@userProfileId", comment.UserProfileId);
                    cmd.Parameters.AddWithValue("@scoreId", comment.ScoreId);
                    cmd.Parameters.AddWithValue("@commentText", comment.CommentText);
                    cmd.Parameters.AddWithValue("@dateCreated", comment.DateCreated);

                    comment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Edit(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Comment
                                           SET CommentText = @commentText
                                         WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@commentText", comment.CommentText);
                    cmd.Parameters.AddWithValue("@id", comment.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Comment WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        private Comment BuildComment(SqlDataReader reader)
        {
            return new Comment()
            {
                Id = reader.GetInt32(reader.GetOrdinal("CommentId")),
                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                ScoreId = reader.GetInt32(reader.GetOrdinal("ScoreId")),
                CommentText = reader.GetString(reader.GetOrdinal("CommentText")),
                DateCreated = reader.GetDateTime(reader.GetOrdinal("DateCreated")),
                UserProfile = new UserProfile()
                {
                    Initials = reader.GetString(reader.GetOrdinal("Initials"))
                }
            };
        }
    }
}
