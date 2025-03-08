// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import "./Layout.css";

// const Sidebar = () => {
// 	const [isOpen, setIsOpen] = useState(true);

// 	return (
// 		<div className={`app-menu navbar-menu ${isOpen ? "" : "navbar-menu-hide"}`}>
// 			<div className="navbar-brand-box">
// 				<Link to="/" className="logo logo-dark">
// 					<span className="logo-sm">
// 						<img src="/assets/images/logo-sm.png" alt="" height="22" />
// 					</span>
// 					<span className="logo-lg">
// 						<img src="/assets/images/logo-dark.png" alt="" height="17" />
// 					</span>
// 				</Link>

// 				<Link to="/" className="logo logo-light">
// 					<span className="logo-sm">
// 						<img src="/assets/images/logo-sm.png" alt="" height="22" />
// 					</span>
// 					<span className="logo-lg">
// 						<img src="/assets/images/logo-light.png" alt="" height="17" />
// 					</span>
// 				</Link>
// 				<button
// 					type="button"
// 					className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
// 					onClick={() => setIsOpen(!isOpen)}>
// 					<i className="ri-record-circle-line"></i>
// 				</button>
// 			</div>

// 			<div id="scrollbar">
// 				<div className="container-fluid">
// 					<div id="two-column-menu"></div>
// 					<ul className="navbar-nav" id="navbar-nav">
// 						<li className="menu-title">
// 							<span data-key="t-menu">Menu</span>
// 						</li>
// 						<li className="nav-item">
// 							<Link className="nav-link menu-link" to="/dashboard">
// 								<i className="ri-dashboard-2-line"></i>{" "}
// 								<span data-key="t-dashboards">Dashboards</span>
// 							</Link>
// 						</li>

// 						<li className="nav-item">
// 							<Link className="nav-link menu-link" to="/apps">
// 								<i className="ri-apps-2-line"></i> <span data-key="t-apps">Apps</span>
// 							</Link>
// 						</li>

// 						{/* Add more menu items as needed */}
// 					</ul>
// 				</div>
// 			</div>

// 			<div className="sidebar-background"></div>
// 		</div>
// 	);
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="app-menu navbar-menu">
			{/* LOGO */}
			<div className="navbar-brand-box">
				{/* Light Logo*/}
				<a href="index.html" className="logo logo-light">
					<span className="logo-sm">
						<img src="./src/assets/images/logo-sm.png" alt="" height={22} />
					</span>
					<span className="logo-lg">
						<img src="./src/assets/images/logo-light.png" alt="" height={17} />
					</span>
				</a>
				<button
					type="button"
					className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
					id="vertical-hover">
					<i className="ri-record-circle-line" />
				</button>
			</div>
			<div id="scrollbar" data-simplebar="init" className="h-100 simplebar-scrollable-y">
				<div className="simplebar-wrapper" style={{ margin: "0px" }}>
					<div className="simplebar-height-auto-observer-wrapper">
						<div className="simplebar-height-auto-observer" />
					</div>
					<div className="simplebar-mask">
						<div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
							<div
								className="simplebar-content-wrapper"
								tabIndex={0}
								role="region"
								aria-label="scrollable content"
								style={{ height: "100%", overflow: "hidden scroll" }}>
								<div className="simplebar-content" style={{ padding: "0px" }}>
									<div className="container-fluid">
										<div id="two-column-menu"></div>
										<ul className="navbar-nav" id="navbar-nav" data-simplebar="init">
											<div className="simplebar-wrapper" style={{ margin: "0px" }}>
												<div className="simplebar-height-auto-observer-wrapper">
													<div className="simplebar-height-auto-observer" />
												</div>
												<div className="simplebar-mask">
													<div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
														<div
															className="simplebar-content-wrapper"
															tabIndex={0}
															role="region"
															aria-label="scrollable content"
															style={{ height: "auto", overflow: "hidden" }}>
															<div className="simplebar-content" style={{ padding: "0px" }}>
																<li className="menu-title">
																	<span data-key="t-menu">Menu</span>
																</li>
																<li className="nav-item">
																	<a
																		className="nav-link menu-link active"
																		href="#sidebarDashboards"
																		data-bs-toggle="collapse"
																		role="button"
																		aria-expanded="false"
																		aria-controls="sidebarDashboards">
																		<i className="ri-dashboard-2-line" />{" "}
																		<span data-key="t-dashboards">Dashboards</span>
																	</a>
																	<div
																		className="menu-dropdown collapse"
																		id="sidebarDashboards"
																		style={{}}>
																		<ul className="nav nav-sm flex-column">
																			<li className="nav-item">
																				<a
																					href="dashboard-analytics.html"
																					className="nav-link"
																					data-key="t-analytics">
																					Analytics
																				</a>
																			</li>
																			<li className="nav-item">
																				<a
																					href="dashboard-crm.html"
																					className="nav-link"
																					data-key="t-crm">
																					CRM
																				</a>
																			</li>
																		</ul>
																	</div>
																</li>{" "}
																{/* end Dashboard Menu */}
																<li className="nav-item">
																	<a
																		className="nav-link menu-link"
																		href="#sidebarApps"
																		data-bs-toggle="collapse"
																		role="button"
																		aria-expanded="true"
																		aria-controls="sidebarApps">
																		<i className="ri-apps-2-line" />{" "}
																		<span data-key="t-apps">Apps</span>
																	</a>
																	<div
																		className="menu-dropdown collapse"
																		id="sidebarApps"
																		style={{}}>
																		<ul className="nav nav-sm flex-column">
																			<li className="nav-item">
																				<a
																					href="#sidebarCalendar"
																					className="nav-link collapsed"
																					data-bs-toggle="collapse"
																					role="button"
																					aria-expanded="false"
																					aria-controls="sidebarCalendar"
																					data-key="t-calender">
																					Calendar
																				</a>
																				<div
																					className="collapse menu-dropdown"
																					id="sidebarCalendar">
																					<ul className="nav nav-sm flex-column">
																						<li className="nav-item">
																							<a
																								href="apps-calendar.html"
																								className="nav-link"
																								data-key="t-main-calender">
																								Main Calender
																							</a>
																						</li>
																						<li className="nav-item">
																							<a
																								href="apps-calendar-month-grid.html"
																								className="nav-link"
																								data-key="t-month-grid">
																								Month Grid
																							</a>
																						</li>
																					</ul>
																				</div>
																			</li>
																			<li className="nav-item">
																				<a
																					href="apps-chat.html"
																					className="nav-link"
																					data-key="t-chat">
																					Chat
																				</a>
																			</li>
																			<li className="nav-item">
																				<a
																					href="apps-api-key.html"
																					className="nav-link"
																					data-key="t-api-key">
																					API Key
																				</a>
																			</li>
																		</ul>
																	</div>
																</li>
																{/* end Dashboard Menu */}
															</div>
														</div>
													</div>
												</div>
												<div
													className="simplebar-placeholder"
													style={{ width: "249px", height: "1383px" }}
												/>
											</div>
											<div
												className="simplebar-track simplebar-horizontal"
												style={{ visibility: "hidden" }}>
												<div
													className="simplebar-scrollbar"
													style={{
														width: "0px",
														display: "none",
														transform: "translate3d(0px, 0px, 0px)",
													}}
												/>
											</div>
											<div
												className="simplebar-track simplebar-vertical"
												style={{ visibility: "hidden" }}>
												<div
													className="simplebar-scrollbar"
													style={{ height: "0px", display: "none" }}
												/>
											</div>
											<div className="simplebar-track simplebar-horizontal">
												<div className="simplebar-scrollbar" />
											</div>
											<div className="simplebar-track simplebar-vertical">
												<div className="simplebar-scrollbar" />
											</div>
											<div className="simplebar-track simplebar-horizontal">
												<div className="simplebar-scrollbar" />
											</div>
											<div className="simplebar-track simplebar-vertical">
												<div className="simplebar-scrollbar" />
											</div>
											<div className="simplebar-track simplebar-horizontal">
												<div className="simplebar-scrollbar" />
											</div>
											<div className="simplebar-track simplebar-vertical">
												<div className="simplebar-scrollbar" />
											</div>
											<div className="simplebar-track simplebar-horizontal">
												<div className="simplebar-scrollbar" />
											</div>
											<div className="simplebar-track simplebar-vertical">
												<div className="simplebar-scrollbar" />
											</div>
										</ul>
									</div>
									{/* Sidebar */}
								</div>
							</div>
						</div>
					</div>
					<div className="simplebar-placeholder" style={{ width: "249px", height: "1383px" }} />
				</div>
				<div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
					<div
						className="simplebar-scrollbar"
						style={{ width: "0px", display: "none", transform: "translate3d(0px, 0px, 0px)" }}
					/>
				</div>
				<div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
					<div
						className="simplebar-scrollbar"
						style={{ height: "179px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}
					/>
				</div>
			</div>
			<div className="sidebar-background" />
		</div>
	);
};

export default Sidebar;
