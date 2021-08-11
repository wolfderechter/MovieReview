using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface IReviewRepository
    {
        void AddReview(Review review);
        void DeleteReview(Review review);
        Task<Review> GetReview(string imdbId);
        // Task<PagedList<ReviewDto>> GetReviewsForUser();
        Task<bool> SaveAllAsync();
    }
}