import { Server as ServerIO } from "socket.io";

export const config = {
    api: {
        bodyParser: false,
    },
};

const handle = async (req, res) => {
    console.log("接受到请求", req, res);
    if (!res.socket.server.io) {
        console.log("创建服务");
        const httpServer = res.socket.server ;
        const io = new ServerIO(httpServer, {
            path: "/api/socketio",
        });
        //将io挂在到res上
        res.socket.server.io = io;
    }
    res.end();
};

export default handle;
