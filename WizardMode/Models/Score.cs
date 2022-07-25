using System;
using System.ComponentModel.DataAnnotations;

namespace WizardMode.Models
{
    public class Score
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int ScoreValue { get; set; }
        [Required]
        public int UserProfileId { get; set; }
        [Required]
        public string OpdbId { get; set; }
        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime DateCreated { get; set; }
    }
}
