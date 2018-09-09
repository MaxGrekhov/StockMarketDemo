using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace StockMarketDemo.Controllers
{
    public class TestHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, $"{DateTime.Now}  {message}");
        }
    }
}