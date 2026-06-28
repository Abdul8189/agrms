const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(mongoSanitize());

// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "AGRMS Backend API Running Successfully 🚀"
    });
});

// API Health
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date(),
        uptime: process.uptime()
    });
});

// Future Routes
// app.use("/api/auth", require("./routes/auth.routes"));
// app.use("/api/owners", require("./routes/owner.routes"));
// app.use("/api/drivers", require("./routes/driver.routes"));
// app.use("/api/trucks", require("./routes/truck.routes"));
// app.use("/api/transports", require("./routes/transport.routes"));
// app.use("/api/loads", require("./routes/load.routes"));

module.exports = app;