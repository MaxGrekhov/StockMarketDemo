using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using StockMarketDemo.Database.Models;

namespace StockMarketDemo.Database
{
    public class DatabaseContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public DbSet<User> User { get; set; }
        public DbSet<Message> Message { get; set; }

        public DatabaseContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(_configuration.GetConnectionString("DefaultConnection"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Message>()
                .HasOne(x => x.User)
                .WithMany(x => x.Messages)
                .HasForeignKey(x => x.UserId);
        }
    }
}