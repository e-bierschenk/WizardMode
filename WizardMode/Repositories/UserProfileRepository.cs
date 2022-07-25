using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using WizardMode.Models;

namespace WizardMode.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, FirebaseUserId, Initials, Email
                          FROM UserProfile 
                         WHERE FirebaseUserId = @FirebaseuserId";

                    cmd.Parameters.AddWithValue("@FirebaseUserId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                            Initials = reader.GetString(reader.GetOrdinal("Initials")),
                            Email = reader.GetString(reader.GetOrdinal("Email"))
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FirebaseUserId, Initials, Email)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @Initials, @Email)";
                    cmd.Parameters.AddWithValue("@FirebaseUserId", userProfile.FirebaseUserId);
                    cmd.Parameters.AddWithValue("@Initials", userProfile.Initials);
                    cmd.Parameters.AddWithValue("@Email", userProfile.Email);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, FirebaseUserId, Initials, Email
                          FROM UserProfile";

                    using (var reader = cmd.ExecuteReader())
                    {
                        var profiles = new List<UserProfile>();
                        while (reader.Read())
                        {
                            profiles.Add(new UserProfile()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                                Initials = reader.GetString(reader.GetOrdinal("Initials")),
                                Email = reader.GetString(reader.GetOrdinal("Email"))
                            });
                        }
                        return profiles;
                    };
                }
            }
        }
    }
}
