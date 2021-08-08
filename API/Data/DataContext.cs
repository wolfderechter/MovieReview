using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){
                       
        }

        public DbSet<AppUser> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Review
            builder.Entity<Review>()
                .ToTable("Reviews")
                .HasOne(r => r.Movie)
                .WithMany()
                .OnDelete(DeleteBehavior.Cascade);


            // Movie
            builder.Entity<Movie>().Property(p => p.Title).IsRequired();


            // Seeden van DB
            // builder.Entity<AppUser>().HasData(
            //     new{UserName = "Wolf"}
            // );


            builder.Entity<Movie>().HasData(
                new Movie{ImdbId = "tt0120338", Title = "Titanic", Poster = "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
            );


            // builder.Entity<Review>().HasData(
            //     // new{Id = 3, AppUserId = 2, MovieImdbId="tt8946378", Score = 7},
            //     // new{Id = 4, AppUserId = 2, MovieImdbId="tt0118789", Score = 8},
            //     new{Id = 5, AppUserId = 1, MovieImdbId="tt0120338", Score = 8}
            // );
        }
    }
}