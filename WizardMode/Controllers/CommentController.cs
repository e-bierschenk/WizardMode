using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WizardMode.Models;
using WizardMode.Repositories;

namespace WizardMode.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetById (int id)
        {
            return Ok(_commentRepository.GetById(id));
        }
        [HttpGet("GetByScoreId/{scoreId}")]
        public IActionResult GetCommentsByScore(int scoreId)
        {
            return Ok(_commentRepository.GetCommentsByScoreId(scoreId));
        }

        [HttpPost]
        public IActionResult Add(Comment comment)
        {
            _commentRepository.Add(comment);
            return CreatedAtAction(nameof(GetById), new {id = comment.Id}, comment);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }
            _commentRepository.Edit(comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentRepository.Delete(id);
            return NoContent();
        }
    }
}
