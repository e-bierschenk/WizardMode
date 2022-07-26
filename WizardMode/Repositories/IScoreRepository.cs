using System.Collections.Generic;
using WizardMode.Models;

namespace WizardMode.Repositories
{
    public interface IScoreRepository
    {
        Score GetById(int id);
        List<Score> GetScoresByOpdbId(string machineId);
        List<Score> GetScoresByUserId(int userId);
        List<Score> GetRecent();
        void Add(Score score);
    }
}