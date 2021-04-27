using Microsoft.EntityFrameworkCore;
using MovieApi.Models;
using System;

namespace MovieApi.Data
{
    public class ReviewContext : DbContext
    {
        public ReviewContext(DbContextOptions<ReviewContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Review> Reviews { get; set; }
    }
}