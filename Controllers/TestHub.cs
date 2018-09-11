using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using StockMarketDemo.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarketDemo.Controllers
{
    public class TestHub : Hub
    {
        private readonly DatabaseContext _db;
        private readonly ILogger<TestHub> _logger;

        public TestHub(DatabaseContext db, ILogger<TestHub> logger)
        {
            _db = db;
            _logger = logger;
            _logger.LogTrace(".ctor");
        }

        public async Task SendMessage(string user, string message)
        {
            var isNewUser = false;
            var dbUser = await _db.User.FirstOrDefaultAsync(x => x.Name == user);
            if (dbUser == null)
            {
                dbUser = new StockMarketDemo.Database.Models.User
                {
                    Name = user
                };
                _db.User.Add(dbUser);
                isNewUser = true;
            }
            _db.Message.Add(new StockMarketDemo.Database.Models.Message { User = dbUser, Text = message });
            await _db.SaveChangesAsync();
            if (isNewUser)
                await Clients.All.SendAsync("NewUser", new User { Name = user });
            await Clients.All.SendAsync("ReceiveMessage", new Message { User = user, Text = message });
        }

        public class User
        {
            public string Name { get; set; }
        }
        public class Message
        {
            public string User { get; set; }
            public string Text { get; set; }
        }

        public async Task<(List<User> users, List<Message> messages)> GetHistory()
        {
            _logger.LogTrace("GH1");
            var users = await _db.User.Select(x => new User { Name = x.Name }).ToListAsync();
            var messages = await _db.Message.Select(x => new Message { User = x.User.Name, Text = x.Text }).ToListAsync();
            _logger.LogTrace("GH2 ");
            var item = (users, messages);
            _logger.LogTrace(item.users.Count.ToString());
            return item;
        }
    }
}