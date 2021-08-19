using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // Er is authenticatie wanneer een gebruiker users wilt ophalen moet hij geauthenticeert zijn
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }


        // GET: api/Users
        /// <summary>
        /// Get all users
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepository.GetMembersAsync();
            return Ok(users);
        }



        // GET: api/Users
        /// <summary>
        /// Get a specific user
        /// </summary>
        /// <param name="username">Username of the user to retrieve</param>
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await _userRepository.GetMemberAsync(username);
        }


        // PUT: api/Account
        /// <summary>
        /// Delete or add movie in watchlist
        /// </summary>
        /// <param name="movieDto">Movie to add or delete</param> 
        [HttpPut]
        [Route("watchlist")]
        public async Task<ActionResult> DeleteOrAddMovieFromWatchlist(MovieDto movieDto){
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _userRepository.GetUsersByUsernameAsync(username);

            var movie = user.Watchlist.FirstOrDefault(m => m.ImdbId == movieDto.ImdbId);

            if(movie == null){
                movie = new Movie{
                    ImdbId = movieDto.ImdbId,
                    Poster = movieDto.Poster,
                    Title = movieDto.Title
                };
                user.Watchlist.Add(movie);
            }

            else{
                user.Watchlist.Remove(movie);
            }

            _userRepository.Update(user);
            

            if(await _userRepository.SaveAllAsync())
                return NoContent();
            
            return BadRequest("Failed to update watchlist");
        }



    }
}