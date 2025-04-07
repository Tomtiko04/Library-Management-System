import React from 'react'

export default function Logo() {
  return (
		<div className="text-center mt-sm-5 mb-4 text-white-50">
			<div>
				<div className="d-flex justify-content-center align-items-center gap-3 auth-logo">
					<img
						src="https://my.tasued.edu.ng/assets/media/school_logo/tasued-logo.png"
						alt="Tasued Logo"
					/>
					<h1 style={{ color: "white", marginTop: "5px" }}>TASUED</h1>
				</div>
				<p className="mt-3 fs-15 fw-medium">Tai Solarin University of Education Library</p>
			</div>
		</div>
	);
}
