const multer = require("multer");
const path = require("path");

// Set up storage for uploaded files
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/"); // Save files to the 'uploads' directory
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
	},
});

// File filter (Only CSV files allowed)
const fileFilter = (req, file, cb) => {
	if (file.mimetype === "text/csv") {
		cb(null, true);
	} else {
		cb(new Error("Only CSV files are allowed!"), false);
	}
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
