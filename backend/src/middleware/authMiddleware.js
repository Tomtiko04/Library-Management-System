const jwt = require("jsonwebtoken");

// Middleware to verify token
// exports.auth = (req, res, next) => {
// 	const token = req.header("Authorization");
// 	if (!token) return res.status(401).json({ message: "Access denied. No token provided" });

// 	try {
// 		const decoded = jwt.verify(token, process.env.JWT_SECRET);
// 		req.user = decoded;
// 		next();
// 	} catch (error) {
// 		res.status(401).json({ message: "Invalid token" });
// 	}
// };

exports.auth = (req, res, next) => {
	let token = req.header("Authorization");

	if (!token) {
		return res.status(401).json({ message: "No token, authorization denied" });
	}

	try {
		if (token.startsWith("Bearer ")) {
			token = token.slice(7, token.length).trimStart(); // Remove "Bearer "
		}

		// console.log("🔍 Token Received:", token);

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		// console.error("❌ Token Verification Failed:", error);
		res.status(401).json({ message: "Invalid token" });
	}
};

// Middleware to check roles
exports.authorize = (roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return res.status(403).json({ message: "Access denied" });
		}
		next();
	};
};
