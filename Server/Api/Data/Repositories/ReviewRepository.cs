using Microsoft.EntityFrameworkCore;
using MovieApi.Data;
using MovieApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace RecipeApi.Data.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly ReviewContext _context;
        private readonly DbSet<Review> _reviews;

        public ReviewRepository(ReviewContext dbContext)
        {
            _context = dbContext;
            _reviews = dbContext.Reviews;
        }

        public IEnumerable<Review> GetAll()
        {
            return _reviews.ToList();
        }

        public Review GetBy(int imdbID)
        {
            return _reviews.SingleOrDefault(r => r.ImdbID.Equals(imdbID));
        }


        public void Add(Review review)
        {
            _reviews.Add(review);
        }

        public void Update(Review review)
        {
            _context.Update(review);
        }

        public void Delete(Review review)
        {
            _reviews.Remove(review);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

    }
}