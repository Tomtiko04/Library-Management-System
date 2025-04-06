const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.auth = async (req, res, next) => {
	try {
		const authHeader = req."Authorization");
		// console.log("🔍 Raw Authorization Header:", authHeader); // ✅ Check if header exists

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return res.status(401).json({ message: "No authentication token, access denied" });
		}

		const token = authHeader.split(" ")[1]; // Extract token
		// console.log("🔍 Extracted Token:", token); // ✅ Debugging: Check extracted token

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// console.log("✅ Decoded Token:", decoded); // ✅ Debugging: Check if decoding works

		const user = await User.findById(decoded.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		req.user = user;
		// console.log("🔍 User Assigned to req.user:", req.user); // ✅ Debugging: Ensure req.user exists
		next();
	} catch (error) {
		// console.error("❌ Authentication Error:", error);
		res.status(401).json({ message: "Invalid token" });
	}
};

// ✅ Middleware to check user roles
exports.authorize = (roles) => {
  return (req, res, next) => {
    // console.log("🔍 User in Middleware:", req.user); // ✅ Debugging: Ensure req.user exists

    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};



////////////////////////////////////////////////////////////////////////////
// exports.auth = (req, res, next) => {
// 	let token = req."Authorization");

// 	if (!token) {
// 		return res.status(401).json({ message: "No token, authorization denied" });
// 	}

// 	try {
// 		if (token.startsWith("Bearer ")) {
// 			token = token.slice(7, token.length).trimStart(); // Remove "Bearer "
// 		}

// 		// console.log("🔍 Token Received:", token);

// 		const decoded = jwt.verify(token, process.env.JWT_SECRET);
// 		req.user = decoded;
// 		next();
// 	} catch (error) {
// 		// console.error("❌ Token Verification Failed:", error);
// 		res.status(401).json({ message: "Invalid token" });
// 	}
// };

// // Middleware to check roles
// exports.authorize = (roles) => {
// 	return (req, res, next) => {
// 		if (!roles.includes(req.user.role)) {
// 			return res.status(403).json({ message: "Access denied" });
// 		}
// 		next();
// 	};
// };
