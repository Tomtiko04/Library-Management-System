import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axiosClient from "../../utils/axios";
import axiosInstance from '../../utils/axiosInstance';
import { toast } from "react-hot-toast";
import ParticlesBackground from "../../UI/ParticlesBackground";
import "../../styles/Particles.css";
import "../../styles/auth.css";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({
		email: "",
		password: ""
	});
	const navigate = useNavigate();

	const validateForm = () => {
		let tempErrors = {};
		let isValid = true;

		if (!email) {
			tempErrors.email = "Email is required";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			tempErrors.email = "Email is invalid";
			isValid = false;
		}

		if (!password) {
			tempErrors.password = "Password is required";
			isValid = false;
		}
		// else if (password.length < 6) {
		// 	tempErrors.password = "Password must be at least 6 characters";
		// 	isValid = false;
		// }

		setErrors(tempErrors);
		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			// toast.error("Please check all required fields");
			return;
		}
		const payload = {
			email,
			password
		};

		setIsLoading(true);

		try {
			// axiosClient.post('/auth/login', payload)
            //     .then(({ data }) => {
            //         localStorage.setItem('token', data.token);
            //         localStorage.setItem('user', JSON.stringify(data.user));
            //         toast.success("User logged in successfully!");
            //         navigate('/component/dashboard');
            //     }
            //     );

			const response = await axiosInstance.post('/auth/login', payload);
			const { token } = response.data;
			const { user } = response.data;
			localStorage.setItem('token', token);
			localStorage.setItem('user', JSON.stringify(user));
			toast.success("User logged in successfully!");
			navigate('/dashboard');
		} catch (error) {
			console.error('Login error:', error);

			if (error.response) {
				switch (error.response.status) {
					case 400:
						toast.error("Invalid email or password");
						break;
					case 401:
						toast.error("Unauthorized access");
						break;
					case 404:
						toast.error("User not found");
						break;
					case 500:
						toast.error("Server error. Please try again later");
						break;
					default:
						toast.error(error.response.data.message || "Login failed");
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
								<div className="">
									<Link to="/" className="d-flex justify-content-center auth-logo">
										<img src="https://my.tasued.edu.ng/assets/media/school_logo/tasued-logo.png" alt="" />
										<h1 style={{ color: 'white' }}>TASUED</h1>
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
										<h5 className="text-primary">Welcome Back !</h5>
										<p className="text-muted">Sign in to continue on Library.</p>
									</div>
									<div className="p-2 mt-4">
										<form onSubmit={handleSubmit}>
											<div className="mb-3">
												<label htmlFor="email" className="form-label">
													Email <span className="text-danger">*</span>
												</label>
												<input
													type="email"
													className={`form-control ${errors.email ? 'is-invalid' : ''}`}
													id="email"
													placeholder="Enter email"
													value={email}
													onChange={(e) => {
														setEmail(e.target.value);
														if (errors.email) {
															setErrors({ ...errors, email: "" });
														}
													}}
												/>
												{errors.email && (
													<div className="invalid-feedback">
														{errors.email}
													</div>
												)}
											</div>

											<div className="mb-3">
												<div className="float-end">
													<Link to="/auth/pass-reset" className="text-muted">
														Forgot password?
													</Link>
												</div>
												<label className="form-label" htmlFor="password-input">
													Password <span className="text-danger">*</span>
												</label>
												<div className="position-relative auth-pass-inputgroup mb-3">
													<input
														type={showPassword ? "text" : "password"}
														className={`form-control pe-5 ${errors.password ? 'is-invalid' : ''}`}
														placeholder="Enter password"
														id="password-input"
														value={password}
														onChange={(e) => {
															setPassword(e.target.value);
															if (errors.password) {
																setErrors({ ...errors, password: "" });
															}
														}}
													/>
													<button
														className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
														type="button"
														onClick={() => setShowPassword(!showPassword)}>
														{showPassword ? (
															<i className="mdi mdi-eye-off-outline"></i>
														) : (
															<i className="mdi mdi-eye-outline"></i>
														)}
													</button>
													{errors.password && (
														<div className="invalid-feedback">
															{errors.password}
														</div>
													)}
												</div>
											</div>

											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													id="auth-remember-check"
												/>
												<label className="form-check-label" htmlFor="auth-remember-check">
													Remember me
												</label>
											</div>

											<div className="mt-4">
												<button
													className="btn btn-success w-100"
													type="submit"
													disabled={isLoading}
												>
													{isLoading ? "Signing In..." : "Sign In"}
												</button>
											</div>

											<div className="mt-4 text-center">
												<div className="mt-4 text-center">
													<p className="mb-0">
														Don't have an account ?{" "}
														<Link
															to="/auth/sign-up"
															className="fw-semibold text-primary text-decoration-underline">
															{" "}
															Signup{" "}
														</Link>
													</p>
												</div>
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
									<i className="mdi mdi-heart text-danger"></i> by Tomtiko dev blaaaa, no be only you jorr.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SignIn;
