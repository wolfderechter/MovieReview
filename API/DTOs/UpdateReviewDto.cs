using API.Entities;

namespace API.DTOs
{
    public class UpdateReviewDto
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public Movie Movie { get; set; }
        public int AppUserId { get; set; }
    }
}