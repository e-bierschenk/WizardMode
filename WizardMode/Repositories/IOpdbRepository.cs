using System.Threading.Tasks;
using System.Collections.Generic;
using WizardMode.Models;

namespace WizardMode.Repositories
{
    public interface IOpdbRepository
    {
        Task<Machine> GetMachineById(string opdbId);
        Task<List<Machine>> SearchOpdb(string query);
    }
}