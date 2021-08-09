using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class MovieDto
    {
        [Key]
        public string ImdbId { get; set; }
        public string Title { get; set; }
        public string Poster { get; set; }
    }
}