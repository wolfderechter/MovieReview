using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Authorize]
    public class ReviewsController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IReviewRepository _reviewRepository;
        private readonly IMapper _mapper;

        public ReviewsController(IUserRepository userRepository, IReviewRepository reviewRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _reviewRepository = reviewRepository;
            _mapper = mapper;
        }

        // POST: api/Reviews
        /// <summary>
        /// Create a review
        /// </summary>
        /// <param name="createReviewDto">Review to create</param>
        [HttpPost]
        public async Task<ActionResult<ReviewDto>> CreateReview(CreateReviewDto createReviewDto){
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var author = await _userRepository.GetUsersByUsernameAsync(username);

            var review = new Review{
                AppUser = author,
                Score = createReviewDto.Score,
                Reviewtext = createReviewDto.Reviewtext,
                Movie = createReviewDto.Movie
            };

            _reviewRepository.AddReview(review);

            if(await _reviewRepository.SaveAllAsync())
                return Ok(_mapper.Map<ReviewDto>(review));

            return BadRequest("Failed to send message");
        }

        // PUT: api/Reviews
        /// <summary>
        /// Update a review
        /// </summary>
        /// <param name="reviewDto">Review to update</param>
        [HttpPut]
        public async Task<ActionResult> UpdateReview(UpdateReviewDto reviewDto){
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var author = await _userRepository.GetUsersByUsernameAsync(username);

            
            author.Reviews.FirstOrDefault(r => r.Movie.ImdbId == reviewDto.Movie.ImdbId).Score = reviewDto.Score;
            author.Reviews.FirstOrDefault(r => r.Movie.ImdbId == reviewDto.Movie.ImdbId).Reviewtext = reviewDto.Reviewtext;
            _userRepository.Update(author);

            if(await _userRepository.SaveAllAsync())
                return NoContent();

            return BadRequest("Failed to update review");
        }

    }
}