const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./src/routes/authRoutes");
const userRouter = require("./src/routes/userRoutes");
const bookRouter = require("./src/routes/bookRoutes");
const borrowRouter = require("./src/routes/borrowRoutes");
const fineRouter = require("./src/routes/fineRoutes");
const notificationRouter = require("./src/routes/notificationRoutes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/borrow", borrowRouter);
app.use("/api/v1/fine", fineRouter);
app.use("/api/v1/notification", notificationRouter);

module.exports = app;

// app.use(
// 	cors({
// 		origin: "http://localhost:5173",
// 		credentials: true,
// 	})
// );

// // Handle preflight requests
// app.options("*", cors());