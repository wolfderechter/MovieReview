using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApi.Models
{
    public class Review
    {
        [Required]
        public string ImdbID { get; set; }
        //Redundant want zit al in imdbId?
        //public string Title { get; set; }
        public int Score { get; set; }
        public DateTime Created { get; set; }


        public Review(string imdbID, int score)
        {
            ImdbID = imdbID;
            Score = score;
            Created = DateTime.Now;
        }
    }
}
