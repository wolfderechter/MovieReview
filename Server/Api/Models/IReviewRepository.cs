using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApi.Models
{
    public interface IReviewRepository
    {
        Review GetBy(int imdbID);
        IEnumerable<Review> GetAll();
        void Add(Review review);
        void Delete(Review review);
        void Update(Review review);
        void SaveChanges();
    }
}
