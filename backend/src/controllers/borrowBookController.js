exports.borrowBook = async (req, res) => {
	res.status(201).json({
		status: "success",
	});
};

exports.getBorrowedBooks = async (req, res) => {
	res.status(200).json({
		status: "success",
	});
};

exports.renewBook = async (req,res) => {
    res.status(200).json({
		status: "success",
	});
}

exports.returnBook = async (req,res) => {
    res.status(200).json({
		status: "success",
	});
}