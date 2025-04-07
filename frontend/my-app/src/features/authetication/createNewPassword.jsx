import React, { useState } from "react";
import Logo from "../../UI/Logo";
import Footer from "../../UI/Footer";
import ParticlesBackground from "../../UI/ParticlesBackground";
import { Link } from "react-router-dom"; // Corrected import

export default function CreateNewPassword() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		setPasswordError("");
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
		setConfirmPasswordError("");
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible((prev) => !prev);
	};

	const toggleConfirmPasswordVisibility = () => {
		setConfirmPasswordVisible((prev) => !prev);
	};

	const validateForm = () => {
		let isValid = true;
		// Password Validation
		if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters long.");
			isValid = false;
		} else if (!/[a-z]/.test(password)) {
			setPasswordError("Password must contain at least one lowercase letter.");
			isValid = false;
		} else if (!/[A-Z]/.test(password)) {
			setPasswordError("Password must contain at least one uppercase letter.");
			isValid = false;
		} else if (!/\d/.test(password)) {
			setPasswordError("Password must contain at least one number.");
			isValid = false;
		}

		// Confirm Password Validation
		if (password !== confirmPassword) {
			setConfirmPasswordError("Passwords do not match.");
			isValid = false;
		}

		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Password reset successful");
		}
	};

	return (
		<div className="auth-page-wrapper pt-5">
			{/* Background */}
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

			{/* Content */}
			<div className="auth-page-content">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Logo />
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-md-8 col-lg-6 col-xl-5">
							<div className="card mt-4">
								<div className="card-body p-4">
									<div className="text-center mt-2">
										<h5 className="text-primary">Create New Password</h5>
										<p className="text-muted">
											Your new password must be different from the previously used password.
										</p>
									</div>

									<div className="p-2">
										<form onSubmit={handleSubmit}>
											{/* Password Input */}
											<div className="mb-3">
												<label className="form-label" htmlFor="password-input">
													Password <span className="text-danger">*</span>
												</label>
												<div className="position-relative auth-pass-inputgroup">
													<input
														type={passwordVisible ? "text" : "password"}
														className="form-control pe-5 password-input"
														placeholder="Enter password"
														id="password-input"
														value={password}
														onChange={handlePasswordChange}
														required
													/>
													<button
														className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
														type="button"
														onClick={togglePasswordVisibility}>
														<i className="ri-eye-fill align-middle"></i>
													</button>
												</div>
												{passwordError && <div className="text-danger">{passwordError}</div>}
											</div>

											{/* Confirm Password Input */}
											<div className="mb-3">
												<label className="form-label" htmlFor="confirm-password-input">
													Confirm Password <span className="text-danger">*</span>
												</label>
												<div className="position-relative auth-pass-inputgroup">
													<input
														type={confirmPasswordVisible ? "text" : "password"}
														className="form-control pe-5 password-input"
														placeholder="Confirm password"
														id="confirm-password-input"
														value={confirmPassword}
														onChange={handleConfirmPasswordChange}
														required
													/>
													<button
														className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
														type="button"
														onClick={toggleConfirmPasswordVisibility}>
														<i className="ri-eye-fill align-middle"></i>
													</button>
												</div>
												{confirmPasswordError && (
													<div className="text-danger">{confirmPasswordError}</div>
												)}
											</div>

											<div className="mt-4">
												<button className="btn btn-success w-100" type="submit">
													Reset Password
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>

							{/* Link to Sign In */}
							<div className="mt-4 text-center">
								<p className="mb-0">
									Wait, I remember my password...{" "}
									<Link
										to="/auth/signin"
										className="fw-semibold text-primary text-decoration-underline">
										Click here
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}