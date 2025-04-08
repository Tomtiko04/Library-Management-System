import React, { useState } from "react";
import ParticlesBackground from "../../UI/ParticlesBackground";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../UI/Logo";
import Footer from "../../UI/Footer";

export default function ForgottenPassword() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const validateEmail = () => {
		let tempError = "";
		let isValid = true;

		if (!email) {
			tempError = "Email is required";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			tempError = "Email is invalid";
			isValid = false;
		}

		setError(tempError);
		return isValid;
	};

	function handleResetPassword(e) {
		e.preventDefault();

		if (!validateEmail()) {
			return;
		}

		const payload = {
			email,
		};

		setIsLoading(true);

		try {
			navigate("/auth/reset/newpassword");
		} catch (error) {
			console.error("Error during password reset:", error);
		} finally {
			setIsLoading(false);
		}
	}

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
							<Logo />
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-md-8 col-lg-6 col-xl-5">
							<div className="card mt-4">
								<div className="card-body p-4">
									<div className="text-center mt-2">
										<h5 className="text-primary">Forgot Password?</h5>
										<p className="text-muted">Reset your password</p>

										<lord-icon
											src="https://cdn.lordicon.com/rhvddzym.json"
											trigger="loop"
											colors="primary:#0ab39c"
											className="avatar-xl"></lord-icon>
									</div>

									<div
										className="alert alert-borderless alert-warning text-center mb-2 mx-2"
										role="alert">
										Enter your email and instructions will be sent to you!
									</div>
									<div className="p-2">
										<form onSubmit={handleResetPassword}>
											<div className="mb-4">
												<label className="form-label">
													Email <span className="text-danger">*</span>
												</label>
												<input
													type="email"
													className={`form-control ${error ? "is-invalid" : ""}`}
													id="email"
													placeholder="Enter Email"
													value={email}
													onChange={(e) => {
														setEmail(e.target.value);
														if (error) {
															setError("");
														}
													}}
												/>
												{error && <div className="invalid-feedback">{error}</div>}
											</div>
											<div className="text-center mt-4">
												<button
													className="btn btn-success w-100"
													type="submit"
													disabled={isLoading}>
													{" "}
													{/* Disabled if loading */}
													{isLoading ? "Sending..." : "Send Reset Link"}
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>

							<div className="mt-4 text-center">
								<p className="mb-0">
									Wait, I remember my password...{" "}
									<Link
										to="/auth/signin"
										className="fw-semibold text-primary text-decoration-underline">
										{" "}
										Click here{" "}
									</Link>{" "}
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
