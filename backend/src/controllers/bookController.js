exports.getAllBook = async (req, res) => {
	res.status(200).json({
		status: "success",
	});
};

exports.getBook = async (req, res) => {
	res.status(200).json({
		status: "success",
	});
};

exports.createBook = async (req, res) => {
	res.status(201).json({
		status: "success",
	});
};

exports.updateBook = async (req, res) => {
	res.status(200).json({
		status: "success",
	});
};

exports.deleteBook = async (req, res) => {
	res.status(204).json({
		status: "success",
	});
};