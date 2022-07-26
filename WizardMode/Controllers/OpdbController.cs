using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using System.Collections.Generic;
using WizardMode.Models;
using WizardMode.Repositories;

namespace WizardMode.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OpdbController : ControllerBase
    {
        private readonly IOpdbRepository _opdbRepository;
        public OpdbController(IOpdbRepository opdbRepository)
        {
            _opdbRepository = opdbRepository;
        }

        [HttpGet("Search/{q}")]
        public async Task<IActionResult> Search(string q)
        {
            
            return Ok(await _opdbRepository.SearchOpdb(q));
        }

        [HttpGet("GetById/{opdbId}")]
        public async Task<IActionResult> GetById(string opdbId)
        {           
            return Ok(await _opdbRepository.GetMachineById(opdbId));
        }
    }
}
