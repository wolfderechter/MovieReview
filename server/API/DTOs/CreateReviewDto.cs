using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs
{
    public class CreateReviewDto
    {
        // public int Id { get; set; }
        [Required]
        [Range(0, 10)]
        public int Score { get; set; }
        public string Reviewtext{ get; set; }
        public Movie Movie { get; set; }
        // public int AppUserId { get; set; }
        public string Username { get; set; }
    }
}