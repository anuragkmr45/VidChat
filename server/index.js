import { Server } from "socket.io";

// const io = new Server(8000);
const io = new Server({
    cors: {
        origin: ['localhost:3000', 'localhost:8000'],
    },
});

io.on("connection", (socket) => {
    console.log("Socket connection : ", socket.id);
});