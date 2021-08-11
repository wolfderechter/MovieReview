using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class MovieDto
    {
        [Key]
        public int Id { get; set; }
        public string ImdbId { get; set; }
        public string Title { get; set; }
        public string Poster { get; set; }
    }
}