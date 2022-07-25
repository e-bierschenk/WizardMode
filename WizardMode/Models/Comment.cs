using System;
using System.ComponentModel.DataAnnotations;

namespace WizardMode.Models
{
    public class Comment
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int UserProfileId { get; set; }
        [Required]
        public int ScoreId { get; set; }
        
        [Required]
        [MaxLength(500)]
        public string CommentText { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime DateCreated { get; set; }
    }
}
