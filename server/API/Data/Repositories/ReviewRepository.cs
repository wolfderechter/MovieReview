using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly DataContext _context;

        public ReviewRepository(DataContext context)
        {
            _context = context;
        }

        public void AddReview(Review review)
        {
            _context.Reviews.Add(review);
        }

        public void DeleteReview(Review review)
        {
            _context.Reviews.Remove(review);
        }

        public async Task<Review> GetReview(string imdbId)
        {
            return await _context.Reviews.FindAsync(imdbId);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}