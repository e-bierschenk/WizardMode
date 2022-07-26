using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System;
using WizardMode.Models;
using WizardMode.Repositories;

namespace WizardMode.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ScoreController : ControllerBase
    {
        private readonly IScoreRepository _scoreRepository;

        public ScoreController(IScoreRepository scoreRepository)
        {
            _scoreRepository = scoreRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_scoreRepository.GetById(id));
        }

        [HttpGet("GetByUser/{userId}")]
        public IActionResult GetScoresByUserId(int userId)
        {
            return Ok(_scoreRepository.GetScoresByUserId(userId));
        }

        [HttpGet("GetByMachine/{opdbId}")]
        public IActionResult GetScoresByMachineId(string opdbId)
        {
            return Ok(_scoreRepository.GetScoresByOpdbId(opdbId));
        }

        [HttpGet("GetRecent")]
        public IActionResult GetRecent()
        {
            return Ok(_scoreRepository.GetRecent());
        }

        [HttpPost]
        public IActionResult Add(Score score)
        {
            score.DateCreated = DateTime.Now;
            _scoreRepository.Add(score);
            return CreatedAtAction(nameof(GetById), new { id = score.Id }, score);

        }
    }
}
