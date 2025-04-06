const mongoose = require("mongoose");

const renewalSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	book: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Book",
		required: true,
	},
	previousDueDate: { 
        type: Date, 
        required: true 
    },
	newDueDate: { 
        type: Date, 
        required: true 
    },
	renewalDate: { 
        type: Date, 
        default: Date.now 
    },
});

const Renewal = mongoose.model("Renewal", renewalSchema);

module.exports = Renewal;
