const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/../config.env" });

const app = require("../app.js");

// const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
const DB = process.env.DATABASE;

mongoose.connect(DB)
	.then(() => {
		console.log("DB connection successful");
	})
	.catch((err) => console.error("MongoDB connection error:", err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listen on port ${port}...`);
});