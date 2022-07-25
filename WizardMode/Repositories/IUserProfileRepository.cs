using System.Collections.Generic;
using WizardMode.Models;

namespace WizardMode.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);

    }
}