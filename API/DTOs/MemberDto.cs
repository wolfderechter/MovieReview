using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public ICollection<ReviewDto> Reviews { get; set; }
        public ICollection<MovieDto> Watchlist { get; set; }
    }
}