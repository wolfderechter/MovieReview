using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApi.Data
{
    public class ReviewDataInitializer
    {
        private readonly ReviewContext _dbContext;

        public ReviewDataInitializer(ReviewContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                //seeding the database with reviews, see DBContext               
            }
        }
    }
}
