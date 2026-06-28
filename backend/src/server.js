require("dotenv").config();

const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`Socket Connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`Socket Disconnected: ${socket.id}`);
    });
});

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");

        server.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Failed");
        console.error(err.message);
        process.exit(1);
    });