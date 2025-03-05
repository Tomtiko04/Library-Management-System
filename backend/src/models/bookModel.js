const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Book title is required"],
	},
	author: {
		type: String,
		required: [true, "Author name is required"],
	},
	category: {
		type: String,
		required: [true, "Book category is required"],
	},
	availability: {
		type: Boolean,
		default: true,
	},
	dueDate: {
        type: Number,
        default: 14
    }, 
	loanPeriod: {
		type: Number,
		default: 14,
	},
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;