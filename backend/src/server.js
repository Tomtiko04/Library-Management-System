const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/../.env" });

const app = require("../app.js");

const DB = process.env.DATABASE;

// Simplified connection without deprecated options
mongoose.connect(DB)
	.then(() => {
		console.log("DB connection successful");
	})
	.catch((err) => {
		console.error("MongoDB connection error details:", {
			name: err.name,
			message: err.message
		});
		// Log the connection string (with password masked) for debugging
		const maskedDB = DB?.replace(/:([^@]+)@/, ':****@');
		console.log("Attempting to connect with:", maskedDB);
		process.exit(1);
	});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listen on port ${port}...`);
});