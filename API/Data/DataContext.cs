using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){
                       
        }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Movie> Movies { get; set; }
        // public DbSet<AppUserMovie> AppUserMovies { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Review

            // builder.Entity<AppUser>()
            //     .HasMany(a => a.Watchlist)
            //     .WithMany(m => m)
            //     .HasForeignKey("AppUserId");
            

            // Movie mappen MANY to MANY relatie
            // builder.Entity<AppUserMovie>().HasKey(um => new { um.ImdbId, um.AppUserId });

            // builder.Entity<AppUserMovie>()
            //     .HasOne<AppUser>(um => um.AppUser)
            //     .WithMany(u => u.Watchlist)
            //     .HasForeignKey(um => um.AppUserId);


            builder.Entity<AppUser>()
                .HasMany(u => u.Watchlist)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
                



            builder.Entity<Review>()
                .ToTable("Reviews")
                .HasOne(r => r.AppUser)
                .WithMany(m => m.Reviews)
                .HasForeignKey(r => r.AppUserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Movie>()
                .ToTable("Movies");


            // Movie
            builder.Entity<Movie>().Property(p => p.Title).IsRequired();


            // Seeden van DB
            // builder.Entity<AppUser>().HasData(
            //     new{UserName = "Wolf"}
            // );


            builder.Entity<Movie>().HasData(
                new Movie{Id = 1, ImdbId = "tt0120338", Title = "Titanic", Poster = "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
            );


            // builder.Entity<Review>().HasData(
            //     // new{Id = 3, AppUserId = 2, MovieImdbId="tt8946378", Score = 7},
            //     // new{Id = 4, AppUserId = 2, MovieImdbId="tt0118789", Score = 8},
            //     new{Id = 5, AppUserId = 1, MovieImdbId="tt0120338", Score = 8}
            // );
        }
    }
}