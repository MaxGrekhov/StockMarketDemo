using System.Collections.Generic;

namespace StockMarketDemo.Database.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string PasswordHash { get; set; }
        public string Name { get; set; }

        public List<Message> Messages { get; set; }
    }
}