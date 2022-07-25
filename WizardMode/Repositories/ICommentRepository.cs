using System.Collections.Generic;
using WizardMode.Models;

namespace WizardMode.Repositories
{
    public interface ICommentRepository
    {
        Comment GetById(int id);
        List<Comment> GetCommentsByScoreId(int scoreId);
        void Add(Comment comment);
        void Edit(Comment comment);
        void Delete(int id);
    }
}