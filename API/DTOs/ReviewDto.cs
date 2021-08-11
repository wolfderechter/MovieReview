namespace API.DTOs
{
    public class ReviewDto
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public MovieDto Movie { get; set; }
        public int AppUserId { get; set; }

    }
}