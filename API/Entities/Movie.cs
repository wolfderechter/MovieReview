using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Movies")]
    public class Movie
    {
        // Primary key
        [Key]
        public int Id { get; set; }
        public string ImdbId { get; set; }
        public string Title { get; set; }
        public string Poster { get; set; }
    }
}