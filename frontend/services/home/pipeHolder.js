import * as signalR from '@aspnet/signalr';
import store from 'root/store';
import * as homeActions from './homeActions';
const later = delay => new Promise(resolve => setTimeout(resolve, delay));
class PipeHolder {
    constructor() {
        this.isConnected = false;
        this.connection = new signalR.HubConnectionBuilder().withUrl("/test").build();
        this.connection.on("ReceiveMessage", function (message) {
            store.dispatch(homeActions.addMessage(message));
        });
        this.connection.on("NewUser", function (user) {
            store.dispatch(homeActions.addUser(user));
        });
        this.connection.onclose(() => this.disconnected());
        this.connect();
    }

    tryReconnect() {
        setTimeout(() => this.connect(), 1000);
    }

    disconnected() {
        console.log("connection was closed");
        this.isConnected = false;
        this.tryReconnect()
    }

    async connect() {
        try {
            console.log("try connect");
            await this.connection.start();
            console.log("connect successfully1");
            console.log("connect successfully2");
            const response = await this.connection.invoke("GetHistory");

            console.log("GetHistory", response);
            store.dispatch(homeActions.setMessages(response.item2));
            store.dispatch(homeActions.setUsers(response.item1));
            //store.dispatch(homeActions.addMessage({ user, message }));            
            this.isConnected = true;
        } catch (error) {
            console.log("can't connect", error);
            this.isConnected = false;
            this.tryReconnect();
        }
    }

    async sendMessage(user, message) {
        try {
            await this.connection.invoke("SendMessage", user, message);
        } catch (error) {
            console.log(error);
        }
    }
}

const pipeHolder = new PipeHolder();
export default pipeHolder;