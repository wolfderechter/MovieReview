using API.Entities;

namespace API.DTOs
{
    public class CreateReviewDto
    {
        // public int Id { get; set; }
        public int Score { get; set; }
        public Movie Movie { get; set; }
        // public int AppUserId { get; set; }
        public string Username { get; set; }
    }
}