import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "./useAuth";
import axios from "axios";
import { toast } from "react-hot-toast";
import axiosInstance from '../../utils/axiosInstance';
import ParticlesBackground from "../../UI/ParticlesBackground";
import "../../styles/Particles.css";
import "../../styles/auth.css";

const SignUp = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		role: "underGraduate",
		libraryId: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({});
	const [passwordValidation, setPasswordValidation] = useState({
		length: false,
		lower: false,
		upper: false,
		number: false,
	});

	const { register, isRegistering } = useRegister();

	
	const shouldShowLibraryId = !["admin", "librarian"].includes(formData.role);

	const validatePassword = (password) => {
		return {
			length: password.length >= 8,
			lower: /[a-z]/.test(password),
			upper: /[A-Z]/.test(password),
			number: /[0-9]/.test(password),
		};
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData(prev => ({
			...prev,
			[id]: value,
		}));

		if (id === "password") {
			setPasswordValidation(validatePassword(value));
		}

		
		if (errors[id]) {
			setErrors(prev => ({
				...prev,
				[id]: ""
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};
		
		
		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		
		if (!formData.email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		// Password validation
		if (!formData.password) {
			newErrors.password = "Password is required";
		} 
		// else {
		// 	const validation = validatePassword(formData.password);
		// 	if (!Object.values(validation).every(Boolean)) {
		// 		newErrors.password = "Password doesn't meet requirements";
		// 	}
		// }

		
		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		
		if (shouldShowLibraryId && !formData.libraryId) {
			newErrors.libraryId = "Library ID is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			toast.error("Please check all required fields");
			return;
		}

		setIsLoading(true);

		try {
			const response = await axiosInstance.post('/auth/register', {
				name: formData.name,
				email: formData.email,
				password: formData.password,
				role: formData.role,
				...(shouldShowLibraryId && { libraryId: formData.libraryId })
			});

			if (response.status === 201) {
				toast.success("Registration successful!");
				navigate('/auth/sign-in');
			}

		} catch (error) {
			console.error('Registration error:', error);
			
			if (error.response) {
				switch (error.response.status) {
					case 400:
						toast.error("Invalid registration data");
						break;
					case 409:
						toast.error("Email already exists");
						break;
					case 500:
						toast.error("Server error. Please try again later");
						break;
					default:
						toast.error(error.response.data.message || "Registration failed");
				}
			} else if (error.request) {
				toast.error("No response from server. Please check your internet connection");
			} else {
				toast.error("An error occurred. Please try again");
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="auth-page-wrapper pt-5">
			{/* auth page bg */}
			<div className="auth-one-bg-position auth-one-bg">
				<div className="bg-overlay">
					<ParticlesBackground />
				</div>
				<div className="shape">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 1440 120">
						<path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
					</svg>
				</div>
			</div>

			{/* auth page content */}
			<div className="auth-page-content">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center mt-sm-5 mb-4 text-white-50">
								<div>
									<Link to="/" className="d-flex justify-content-center auth-logo">
										<img
											src="https://my.tasued.edu.ng/assets/media/school_logo/tasued-logo.png"
											alt=""
											height="20"
										/>
										<h1 style={{ color: "white" }}>TASUED</h1>
									</Link>
								</div>
								<p className="mt-3 fs-15 fw-medium">Tai Solarin University of Education Library</p>
							</div>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-md-8 col-lg-6 col-xl-5">
							<div className="card mt-4">
								<div className="card-body p-4">
									<div className="text-center mt-2">
										<h5 className="text-primary">Create New Account</h5>
										<p className="text-muted">Get your free library account now.</p>
									</div>
									<div className="p-2 mt-4">
										<form className="needs-validation" onSubmit={handleSubmit} noValidate>
											<div className="mb-3">
												<label htmlFor="name" className="form-label">
													Full Name <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													className={`form-control ${errors.name ? "is-invalid" : ""}`}
													id="name"
													placeholder="Enter your fullname"
													value={formData.name}
													onChange={handleChange}
												/>
												{errors.name && <div className="invalid-feedback">{errors.name}</div>}
											</div>

											<div className="mb-3">
												<label htmlFor="email" className="form-label">
													Email <span className="text-danger">*</span>
												</label>
												<input
													type="email"
													className={`form-control ${errors.email ? "is-invalid" : ""}`}
													id="email"
													placeholder="Enter email address"
													value={formData.email}
													onChange={handleChange}
												/>
												{errors.email && <div className="invalid-feedback">{errors.email}</div>}
											</div>

											<div className="mb-3">
												<label htmlFor="role" className="form-label">
													Role <span className="text-danger">*</span>
												</label>
												<select
													className="form-control"
													id="role"
													value={formData.role}
													onChange={handleChange}>
													<option value="underGraduate">Under-Graduate</option>
													<option value="postGraduate">Post-Graduate</option>
													<option value="faculty">Faculty</option>
													<option value="nonTeachingStaff">Non-Teaching Staff</option>
													<option value="researcher">Researcher</option>
													<option value="librarian">Librarian</option>
													<option value="admin">Admin</option>
												</select>
											</div>

											{/* Conditional Library ID Input */}
											{shouldShowLibraryId && (
												<div className="mb-3">
													<label htmlFor="libraryId" className="form-label">
														Library ID <span className="text-danger">*</span>
													</label>
													<input
														type="text"
														className={`form-control ${errors.libraryId ? "is-invalid" : ""}`}
														id="libraryId"
														placeholder="Enter your library ID number"
														value={formData.libraryId}
														onChange={handleChange}
													/>
													{errors.libraryId && (
														<div className="invalid-feedback">{errors.libraryId}</div>
													)}
												</div>
											)}

											<div className="mb-3">
												<label className="form-label" htmlFor="password">
													Password <span className="text-danger">*</span>
												</label>
												<div className="position-relative auth-pass-inputgroup">
													<input
														type={showPassword ? "text" : "password"}
														className={`form-control pe-5 ${errors.password ? "is-invalid" : ""}`}
														placeholder="Enter password"
														id="password"
														value={formData.password}
														onChange={handleChange}
														required
													/>
													<button
														className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
														type="button"
														onClick={() => setShowPassword(!showPassword)}>
														{showPassword ? (
															<i className="mdi mdi-eye-off-outline"></i>
														) : (
															<i className="mdi mdi-eye-outline"></i>
														)}
													</button>
													{errors.password && (
														<div className="invalid-feedback">{errors.password}</div>
													)}
												</div>
											</div>

											<div className="mb-3">
												<label className="form-label" htmlFor="confirmPassword">
													Confirm Password <span className="text-danger">*</span>
												</label>
												<div className="position-relative auth-pass-inputgroup">
													<input
														type={showPassword ? "text" : "password"}
														className={`form-control pe-5 ${
															errors.confirmPassword ? "is-invalid" : ""
														}`}
														placeholder="Confirm password"
														id="confirmPassword"
														value={formData.confirmPassword}
														onChange={handleChange}
														required
													/>
													<button
														className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
														type="button"
														onClick={() => setShowPassword(!showPassword)}>
														{showPassword ? (
															<i className="mdi mdi-eye-off-outline"></i>
														) : (
															<i className="mdi mdi-eye-outline"></i>
														)}
													</button>
													{errors.confirmPassword && (
														<div className="invalid-feedback">{errors.confirmPassword}</div>
													)}
												</div>
											</div>

											<div className="mb-4">
												<p className="mb-0 fs-12 text-muted fst-italic">
													By registering you agree to tasued library
													<Link
														to="#"
														className="text-primary text-decoration-underline fst-normal fw-medium">
														{" "}
														Terms of Use
													</Link>
												</p>
											</div>

											<div id="password-contain" className="p-3 bg-light mb-2 rounded">
												<h5 className="fs-13">Password must contain:</h5>
												<p
													className={`fs-12 mb-2 ${
														passwordValidation.length ? "text-success" : "text-muted"
													}`}>
													Minimum <b>8 characters</b>
												</p>
												<p
													className={`fs-12 mb-2 ${
														passwordValidation.lower ? "text-success" : "text-muted"
													}`}>
													At <b>lowercase</b> letter (a-z)
												</p>
												<p
													className={`fs-12 mb-2 ${
														passwordValidation.upper ? "text-success" : "text-muted"
													}`}>
													At least <b>uppercase</b> letter (A-Z)
												</p>
												<p
													className={`fs-12 mb-0 ${
														passwordValidation.number ? "text-success" : "text-muted"
													}`}>
													A least <b>number</b> (0-9)
												</p>
											</div>

											<div className="mt-4">
												<button
													className="btn btn-success w-100"
													type="submit"
													disabled={isLoading}>
													{isLoading ? "Signing Up..." : "Sign Up"}
												</button>
											</div>

											<div className="mt-4 text-center">
												<p className="mb-0">
													Already have an account ?
													<Link
														to="/auth/sign-in"
														className="fw-semibold text-primary text-decoration-underline">
														{" "}
														Signin{" "}
													</Link>
												</p>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* footer */}
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center">
								<p className="mb-0 text-muted">
									&copy; {new Date().getFullYear()} Group 1. Crafted with{" "}
									<i className="mdi mdi-heart text-danger"></i> by Tomtiko dev blaaaaa, no be only
									you jorr.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SignUp;
