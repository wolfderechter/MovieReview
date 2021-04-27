using Microsoft.AspNetCore.Mvc;
//using MovieApi.DTOs;
using MovieApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace RecipeApi.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewsController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        // GET: api/Reviews
        //get all reviews
        [HttpGet]
        public IEnumerable<Review> GetReviews()
        {
            return _reviewRepository.GetAll();
        }

        // GET: api/Reviews/2
        // Get the review with given id
        [HttpGet("{id}")]
        public ActionResult<Review> GetReview(int imdbID)
        {
            Review review = _reviewRepository.GetBy(imdbID);
            if (review == null) 
                return NotFound();
            return review;
        }
    }
}