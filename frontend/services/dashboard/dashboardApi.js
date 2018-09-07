import http from 'root/http';

const baseUrl = 'dashboard/';

export async function getPrice() {
    const response = await http.request({
        baseURL: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo'
    });
    return response.data;
}