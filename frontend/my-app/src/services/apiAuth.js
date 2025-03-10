// localhost:5000/api/v1/auth/login
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";

export async function login({ email, password }) {
	try {
		const { data } = await axios.post(`${API_URL}/auth/login`, {
			email,
			password,
		});
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}

export async function register({ name, email, password }) {
    try {
		const { data } = await axios.post(`${API_URL}/auth/register`, {
			name,
			email,
			password,
			role,
			libraryId
		});
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}