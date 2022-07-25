using System;
using System.ComponentModel.DataAnnotations;

namespace WizardMode.Models
{
    public class UserProfile
    {
        [Required]
        public int Id { get; set; }

        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        [Required]
        [StringLength(3, MinimumLength = 3)]
        public string Initials { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }
    }
}
