import React from 'react'

export default function Footer() {
  return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="text-center">
							<p className="mb-0 text-muted">
								&copy; {new Date().getFullYear()} Group 1. Crafted with{" "}
								<i className="mdi mdi-heart text-danger"></i> by Tomtiko
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
