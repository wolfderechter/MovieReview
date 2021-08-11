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

        [HttpPost]
        public async Task<ActionResult<ReviewDto>> CreateReview(CreateReviewDto createReviewDto){
            var username = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            var author = await _userRepository.GetUsersByUsernameAsync(username);

            var review = new Review{
                AppUser = author,
                Score = createReviewDto.Score,
                Movie = createReviewDto.Movie
            };

            _reviewRepository.AddReview(review);

            if(await _reviewRepository.SaveAllAsync())
                return Ok(_mapper.Map<ReviewDto>(review));

            return BadRequest("Failed to send message");
        }

    }
}