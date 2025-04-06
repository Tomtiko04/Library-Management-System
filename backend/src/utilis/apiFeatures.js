class APIFeatures {
	constructor(query, queryString) {
		this.query = query;
		this.queryString = queryString;
	}

	search() {
		const queryObj = { ...this.queryString };

		const searchFields = ["title", "author", "isbn", "category"];

		let regexQuery = {};

		searchFields.forEach((field) => {
			if (queryObj[field]) {
				regexQuery[field] = { $regex: queryObj[field], $options: "i" };
				delete queryObj[field]; // remove from queryObj so filter() doesn’t process it again
			}
		});

		// Merge regexQuery into the main query
		this.query = this.query.find(regexQuery);

		// Keep other query params for filtering (e.g. gte, lte) alive in filter()
		this.queryString = queryObj;

		return this;
	}

	// filter() {
	// 	const queryObj = { ...this.queryString };
	// 	const excludedFields = ["page", "sort", "limit", "fields"];
	// 	excludedFields.forEach((el) => delete queryObj[el]);

	// 	let queryStr = JSON.stringify(queryObj);
	// 	queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

	// 	this.query = this.query.find(JSON.parse(queryStr));

	// 	return this;
	// }

	filter() {
		const queryObj = { ...this.queryString };
		const excludedFields = ["page", "sort", "limit", "fields"];
		excludedFields.forEach((el) => delete queryObj[el]);

		// Convert gte/gt/lte/lt
		let queryStr = JSON.stringify(queryObj);
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

		let parsedQuery = JSON.parse(queryStr);

		// Convert numeric fields to numbers
		const numericFields = ["publishedYear", "totalCopies", "availableCopies"];
		for (let key in parsedQuery) {
			if (numericFields.includes(key)) {
				if (typeof parsedQuery[key] === "object") {
					// Handle filters like publishedYear[gte]=2000
					for (let op in parsedQuery[key]) {
						parsedQuery[key][op] = Number(parsedQuery[key][op]);
					}
				} else {
					parsedQuery[key] = Number(parsedQuery[key]);
				}
			}
		}

		this.query = this.query.find(parsedQuery);
		return this;
	}

	sort() {
		if (this.queryString.sort) {
			const sortBy = this.queryString.sort.split(",").join(" ");
			this.query = this.query.sort(sortBy);
		} else {
			this.query = this.query.sort("-createdAt");
		}

		return this;
	}

	limitFields() {
		if (this.queryString.fields) {
			const fields = this.queryString.fields.split(",").join(" ");
			this.query = this.query.select(fields);
		} else {
			this.query = this.query.select("-__v");
		}

		return this;
	}

	paginate() {
		//page=3&limit=10, 1-10, page 1, 11-20, page 2, 21-30, page 3
		const page = this.queryString.page * 1 || 1;
		const limit = this.queryString.limit * 1 || 100;
		const skip = (page - 1) * limit;

		this.query = this.query.skip(skip).limit(limit);

		return this;
	}
}

module.exports = APIFeatures;
