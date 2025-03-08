import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "./useAuth";

import ParticlesBackground from "../../UI/ParticlesBackground";
import "../../styles/Particles.css";
import "../../styles/auth.css";

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		role: "",
		libraryId: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [passwordValidation, setPasswordValidation] = useState({
		length: false,
		lower: false,
		upper: false,
		number: false,
	});

	const { register, isRegistering } = useRegister();

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));

		if (id === "password-input") {
			validatePassword(value);
		}
	};

	const validatePassword = (password) => {
		setPasswordValidation({
			length: password.length >= 8,
			lower: /[a-z]/.test(password),
			upper: /[A-Z]/.test(password),
			number: /[0-9]/.test(password),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your signup logic here
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
									<Link to="/" className="d-inline-block auth-logo">
										{/* <img src="/assets/images/logo-light.png" alt="" height="20" /> */}
										<h1>TASUED</h1>
									</Link>
								</div>
								<p className="mt-3 fs-15 fw-medium">Tai Solarine University of Education Library</p>
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
												<label htmlFor="username" className="form-label">
													Full Name <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													className="form-control"
													id="username"
													placeholder="Enter your fullname"
													value={formData.name}
													onChange={handleChange}
													required
												/>
												<div className="invalid-feedback">Please enter your fullname</div>
											</div>

											<div className="mb-3">
												<label htmlFor="useremail" className="form-label">
													Email <span className="text-danger">*</span>
												</label>
												<input
													type="email"
													className="form-control"
													id="useremail"
													placeholder="Enter email address"
													value={formData.email}
													onChange={handleChange}
													required
												/>
												<div className="invalid-feedback">Please enter email</div>
											</div>

											<div className="mb-3">
												<label htmlFor="libraryId" className="form-label">
													Library ID <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													className="form-control"
													id="libraryId"
													placeholder="Enter your library ID number"
													value={formData.name}
													onChange={handleChange}
													required
												/>
												<div className="invalid-feedback">Please enter your library ID number</div>
											</div>

											{/*TODO let the users so this is a select option drop down. The types of users: ["underGraduate",
				"postGraduate",
				"faculty",
				"nonTeachingStaff",
				"researcher",
				"librarian",
				"admin",]*/}
											<div class="mb-3">
												<label for="roleSelect" class="form-label text-muted">
													Role <span class="text-danger">*</span>
												</label>
												<select class="form-control" id="roleSelect" name="role">
													<option value="student" selected>
														Student
													</option>
													<option value="One">One</option>
													<option value="Two">Two</option>
													<option value="Three">Three</option>
													<option value="Four">Four</option>
													<option value="Five">Five</option>
													<option value="Six">Six</option>
												</select>
											</div>

											<div className="mb-3">
												<label className="form-label" htmlFor="password-input">
													Password <span className="text-danger">*</span>
												</label>
												<div className="position-relative auth-pass-inputgroup">
													<input
														type={showPassword ? "text" : "password"}
														className="form-control pe-5"
														placeholder="Enter password"
														id="password-input"
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
												</div>
											</div>

											<div className="mb-3">
												<label className="form-label" htmlFor="password-input">
													Confirm Password <span className="text-danger">*</span>
												</label>
												<div className="position-relative auth-pass-inputgroup">
													<input
														type={showPassword ? "text" : "password"}
														className="form-control pe-5"
														placeholder="Enter password"
														id="password-input"
														value={formData.password}
														onChange={handleChange}
														required
													/>
													<button
														className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
														type="button"
														onClick={() => setShowPassword(!showPassword)}>
														<i className="ri-eye-fill align-middle"></i>
														{showPassword ? (
															<i className="mdi mdi-eye-off-outline"></i>
														) : (
															<i className="mdi mdi-eye-outline"></i>
														)}
													</button>
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
												<button className="btn btn-success w-100" type="submit">
													{isRegistering ? "Sign Up..." : "Sign Up"}
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
									<i className="mdi mdi-heart text-danger"></i> by Tomtiko dev.
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
