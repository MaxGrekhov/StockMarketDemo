import * as signalR from '@aspnet/signalr';
import store from 'root/store';
import * as homeActions from './homeActions';

class PipeHolder {
    constructor() {
        this.isConnected = false;
        this.connection = new signalR.HubConnectionBuilder().withUrl("/test").build();
        this.connection.on("ReceiveMessage", function (user, message) {
            store.dispatch(homeActions.addMessage({ user, message }));
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
            console.log("connect successfully");
            this.isConnected = true;
        } catch (error) {
            console.log("can't connect");
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