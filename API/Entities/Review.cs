using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Reviews")]
    public class Review
    {
        public int Id { get; set; }
        public int Score { get; set; }

        // Fully defining the relationship between appuser and review, so that the appuserid not nullable is
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }


        public Movie Movie { get; set; }


    }
}