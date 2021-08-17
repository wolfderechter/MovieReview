using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ReviewDto
    {
        public int Id { get; set; }
        [Required]
        [Range(0, 10)]
        public int Score { get; set; }
        public string Reviewtext { get; set; }
        public MovieDto Movie { get; set; }
        public int AppUserId { get; set; }

    }
}