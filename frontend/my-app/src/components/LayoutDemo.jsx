import React from "react";
import { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

const Layout = () => {
    const [username, setUsername] = useState("");
	return (
		<>
			<div id="layout-wrapper">
				<header id="page-topbar">
					<div className="layout-width">
						<div className="navbar-header">
							<div className="d-flex">
								{/* <!-- LOGO --> */}
								<div className="navbar-brand-box horizontal-logo">
									<a href="index.html" className="logo logo-dark">
										<span className="logo-sm">
											<img src="assets/images/logo-sm.png" alt="" height="22" />
										</span>
										<span className="logo-lg">
											<img src="assets/images/logo-dark.png" alt="" height="17" />
										</span>
									</a>

									<a href="index.html" className="logo logo-light">
										<span className="logo-sm">
											<img src="assets/images/logo-sm.png" alt="" height="22" />
										</span>
										<span className="logo-lg">
											<img src="assets/images/logo-light.png" alt="" height="17" />
										</span>
									</a>
								</div>

								<button
									type="button"
									className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
									id="topnav-hamburger-icon">
									<span className="hamburger-icon">
										<span></span>
										<span></span>
										<span></span>
									</span>
								</button>

								{/* <!-- App Search--> */}
								<form className="app-search d-none d-md-block">
									<div className="position-relative">
										<input
											type="text"
											className="form-control"
											placeholder="Search..."
											autoComplete="off"
											id="search-options"
											value={username}
											onChange={(e) => setUsername(e.target.value)}
										/>
										<span className="mdi mdi-magnify search-widget-icon"></span>
										<span
											className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
											id="search-close-options"></span>
									</div>
									<div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
										<div data-simplebar style={{maxHeight: "320px"}}>
											{/* <!-- item--> */}
											<div className="dropdown-header">
												<h6 className="text-overflow text-muted mb-0 text-uppercase">
													Recent Searches
												</h6>
											</div>

											<div className="dropdown-item bg-transparent text-wrap">
												<a href="index.html" className="btn btn-soft-secondary btn-sm btn-rounded">
													how to setup <i className="mdi mdi-magnify ms-1"></i>
												</a>
												<a href="index.html" className="btn btn-soft-secondary btn-sm btn-rounded">
													buttons <i className="mdi mdi-magnify ms-1"></i>
												</a>
											</div>
											{/* <!-- item--> */}
											<div className="dropdown-header mt-2">
												<h6 className="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
											</div>

											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
												<span>Analytics Dashboard</span>
											</a>

											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
												<span>Help Center</span>
											</a>

											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<i className="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
												<span>My account settings</span>
											</a>

											<div className="dropdown-header mt-2">
												<h6 className="text-overflow text-muted mb-2 text-uppercase">Members</h6>
											</div>

											<div className="notification-list">
												{/* <!-- item --> */}
												<a href="javascript:void(0);" className="dropdown-item notify-item py-2">
													<div className="d-flex">
														<img
															src="assets/images/users/avatar-2.jpg"
															className="me-3 rounded-circle avatar-xs"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="m-0">Angela Bernier</h6>
															<span className="fs-11 mb-0 text-muted">Manager</span>
														</div>
													</div>
												</a>
												{/* <!-- item --> */}
												<a href="javascript:void(0);" className="dropdown-item notify-item py-2">
													<div className="d-flex">
														<img
															src="assets/images/users/avatar-3.jpg"
															className="me-3 rounded-circle avatar-xs"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="m-0">David Grasso</h6>
															<span className="fs-11 mb-0 text-muted">Web Designer</span>
														</div>
													</div>
												</a>
												{/* <!-- item --> */}
												<a href="javascript:void(0);" className="dropdown-item notify-item py-2">
													<div className="d-flex">
														<img
															src="assets/images/users/avatar-5.jpg"
															className="me-3 rounded-circle avatar-xs"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="m-0">Mike Bunch</h6>
															<span className="fs-11 mb-0 text-muted">React Developer</span>
														</div>
													</div>
												</a>
											</div>
										</div>

										<div className="text-center pt-3 pb-1">
											<a href="pages-search-results.html" className="btn btn-primary btn-sm">
												View All Results <i className="ri-arrow-right-line ms-1"></i>
											</a>
										</div>
									</div>
								</form>
							</div>

							<div className="d-flex align-items-center">
								<div className="dropdown d-md-none topbar-head-dropdown header-item">
									<button
										type="button"
										className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
										id="page-header-search-dropdown"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<i className="bx bx-search fs-22"></i>
									</button>
									<div
										className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
										aria-labelledby="page-header-search-dropdown">
										<form className="p-3">
											<div className="form-group m-0">
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Search ..."
														aria-label="Recipient's username"
													/>
													<button className="btn btn-primary" type="submit">
														<i className="mdi mdi-magnify"></i>
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>

								<div className="dropdown ms-1 topbar-head-dropdown header-item">
									<button
										type="button"
										className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<img
											id="header-lang-img"
											src="assets/images/flags/us.svg"
											alt="Header Language"
											height="20"
											className="rounded"
										/>
									</button>
									<div className="dropdown-menu dropdown-menu-end">
										<a
											href="javascript:void(0);"
											className="dropdown-item notify-item language py-2"
											data-lang="en"
											title="English">
											<img
												src="assets/images/flags/us.svg"
												alt="user-image"
												className="me-2 rounded"
												height="18"
											/>
											<span className="align-middle">English</span>
										</a>

										<a
											href="javascript:void(0);"
											className="dropdown-item notify-item language"
											data-lang="sp"
											title="Spanish">
											<img
												src="assets/images/flags/spain.svg"
												alt="user-image"
												className="me-2 rounded"
												height="18"
											/>
											<span className="align-middle">Española</span>
										</a>

										<a
											href="javascript:void(0);"
											className="dropdown-item notify-item language"
											data-lang="gr"
											title="German">
											<img
												src="assets/images/flags/germany.svg"
												alt="user-image"
												className="me-2 rounded"
												height="18"
											/>
											<span className="align-middle">Deutsche</span>
										</a>

										<a
											href="javascript:void(0);"
											className="dropdown-item notify-item language"
											data-lang="it"
											title="Italian">
											<img
												src="assets/images/flags/italy.svg"
												alt="user-image"
												className="me-2 rounded"
												height="18"
											/>
											<span className="align-middle">Italiana</span>
										</a>

										<a
											href="javascript:void(0);"
											className="dropdown-item notify-item language"
											data-lang="ru"
											title="Russian">
											<img
												src="assets/images/flags/russia.svg"
												alt="user-image"
												className="me-2 rounded"
												height="18"
											/>
											<span className="align-middle">русский</span>
										</a>

										<a
											href="javascript:void(0);"
											className="dropdown-item notify-item language"
											data-lang="ch"
											title="Chinese">
											<img
												src="assets/images/flags/china.svg"
												alt="user-image"
												className="me-2 rounded"
												height="18"
											/>
											<span className="align-middle">中国人</span>
										</a>

										<a
											href="javascript:void(0);"
											className="dropdown-item notify-item language"
											data-lang="fr"
											title="French">
											<img
												src="assets/images/flags/french.svg"
												alt="user-image"
												className="me-2 rounded"
												height="18"
											/>
											<span className="align-middle">français</span>
										</a>
									</div>
								</div>

								<div className="dropdown topbar-head-dropdown ms-1 header-item">
									<button
										type="button"
										className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<i className="bx bx-category-alt fs-22"></i>
									</button>
									<div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
										<div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
											<div className="row align-items-center">
												<div className="col">
													<h6 className="m-0 fw-semibold fs-15">Web Apps</h6>
												</div>
												<div className="col-auto">
													<a href="#!" className="btn btn-sm btn-soft-info">
														View All Apps <i className="ri-arrow-right-s-line align-middle"></i>
													</a>
												</div>
											</div>
										</div>

										<div className="p-2">
											<div className="row g-0">
												<div className="col">
													<a className="dropdown-icon-item" href="#!">
														<img src="assets/images/brands/github.png" alt="Github" />
														<span>GitHub</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#!">
														<img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
														<span>Bitbucket</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#!">
														<img src="assets/images/brands/dribbble.png" alt="dribbble" />
														<span>Dribbble</span>
													</a>
												</div>
											</div>

											<div className="row g-0">
												<div className="col">
													<a className="dropdown-icon-item" href="#!">
														<img src="assets/images/brands/dropbox.png" alt="dropbox" />
														<span>Dropbox</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#!">
														<img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
														<span>Mail Chimp</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#!">
														<img src="assets/images/brands/slack.png" alt="slack" />
														<span>Slack</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="dropdown topbar-head-dropdown ms-1 header-item">
									<button
										type="button"
										className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
										id="page-header-cart-dropdown"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										aria-haspopup="true"
										aria-expanded="false">
										<i className="bx bx-shopping-bag fs-22"></i>
										<span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-info">
											5
										</span>
									</button>
									<div
										className="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart"
										aria-labelledby="page-header-cart-dropdown">
										<div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
											<div className="row align-items-center">
												<div className="col">
													<h6 className="m-0 fs-16 fw-semibold">My Cart</h6>
												</div>
												<div className="col-auto">
													<span className="badge badge-soft-warning fs-13">
														<span className="cartitem-badge">7</span> items
													</span>
												</div>
											</div>
										</div>
										<div data-simplebar style={{maxHeight: "300px"}}>
											<div className="p-2">
												<div className="text-center empty-cart" id="empty-cart">
													<div className="avatar-md mx-auto my-3">
														<div className="avatar-title bg-soft-info text-info fs-36 rounded-circle">
															<i className="bx bx-cart"></i>
														</div>
													</div>
													<h5 className="mb-3">Your Cart is Empty!</h5>
													<a
														href="apps-ecommerce-products.html"
														className="btn btn-success w-md mb-3">
														Shop Now
													</a>
												</div>
												<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
													<div className="d-flex align-items-center">
														<img
															src="assets/images/products/img-1.png"
															className="me-3 rounded-circle avatar-sm p-2 bg-light"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="mt-0 mb-1 fs-14">
																<a
																	href="apps-ecommerce-product-details.html"
																	className="text-reset">
																	Branded T-Shirts
																</a>
															</h6>
															<p className="mb-0 fs-12 text-muted">
																Quantity: <span>10 x $32</span>
															</p>
														</div>
														<div className="px-2">
															<h5 className="m-0 fw-normal">
																$<span className="cart-item-price">320</span>
															</h5>
														</div>
														<div className="ps-2">
															<button
																type="button"
																className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn">
																<i className="ri-close-fill fs-16"></i>
															</button>
														</div>
													</div>
												</div>

												<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
													<div className="d-flex align-items-center">
														<img
															src="assets/images/products/img-2.png"
															className="me-3 rounded-circle avatar-sm p-2 bg-light"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="mt-0 mb-1 fs-14">
																<a
																	href="apps-ecommerce-product-details.html"
																	className="text-reset">
																	Bentwood Chair
																</a>
															</h6>
															<p className="mb-0 fs-12 text-muted">
																Quantity: <span>5 x $18</span>
															</p>
														</div>
														<div className="px-2">
															<h5 className="m-0 fw-normal">
																$<span className="cart-item-price">89</span>
															</h5>
														</div>
														<div className="ps-2">
															<button
																type="button"
																className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn">
																<i className="ri-close-fill fs-16"></i>
															</button>
														</div>
													</div>
												</div>

												<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
													<div className="d-flex align-items-center">
														<img
															src="assets/images/products/img-3.png"
															className="me-3 rounded-circle avatar-sm p-2 bg-light"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="mt-0 mb-1 fs-14">
																<a
																	href="apps-ecommerce-product-details.html"
																	className="text-reset">
																	Borosil Paper Cup
																</a>
															</h6>
															<p className="mb-0 fs-12 text-muted">
																Quantity: <span>3 x $250</span>
															</p>
														</div>
														<div className="px-2">
															<h5 className="m-0 fw-normal">
																$<span className="cart-item-price">750</span>
															</h5>
														</div>
														<div className="ps-2">
															<button
																type="button"
																className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn">
																<i className="ri-close-fill fs-16"></i>
															</button>
														</div>
													</div>
												</div>

												<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
													<div className="d-flex align-items-center">
														<img
															src="assets/images/products/img-6.png"
															className="me-3 rounded-circle avatar-sm p-2 bg-light"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="mt-0 mb-1 fs-14">
																<a
																	href="apps-ecommerce-product-details.html"
																	className="text-reset">
																	Gray Styled T-Shirt
																</a>
															</h6>
															<p className="mb-0 fs-12 text-muted">
																Quantity: <span>1 x $1250</span>
															</p>
														</div>
														<div className="px-2">
															<h5 className="m-0 fw-normal">
																$ <span className="cart-item-price">1250</span>
															</h5>
														</div>
														<div className="ps-2">
															<button
																type="button"
																className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn">
																<i className="ri-close-fill fs-16"></i>
															</button>
														</div>
													</div>
												</div>

												<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
													<div className="d-flex align-items-center">
														<img
															src="assets/images/products/img-5.png"
															className="me-3 rounded-circle avatar-sm p-2 bg-light"
															alt="user-pic"
														/>
														<div className="flex-1">
															<h6 className="mt-0 mb-1 fs-14">
																<a
																	href="apps-ecommerce-product-details.html"
																	className="text-reset">
																	Stillbird Helmet
																</a>
															</h6>
															<p className="mb-0 fs-12 text-muted">
																Quantity: <span>2 x $495</span>
															</p>
														</div>
														<div className="px-2">
															<h5 className="m-0 fw-normal">
																$<span className="cart-item-price">990</span>
															</h5>
														</div>
														<div className="ps-2">
															<button
																type="button"
																className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn">
																<i className="ri-close-fill fs-16"></i>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border"
											id="checkout-elem">
											<div className="d-flex justify-content-between align-items-center pb-3">
												<h5 className="m-0 text-muted">Total:</h5>
												<div className="px-2">
													<h5 className="m-0" id="cart-item-total">
														$1258.58
													</h5>
												</div>
											</div>

											<a
												href="apps-ecommerce-checkout.html"
												className="btn btn-success text-center w-100">
												Checkout
											</a>
										</div>
									</div>
								</div>

								<div className="ms-1 header-item d-none d-sm-flex">
									<button
										type="button"
										className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
										data-toggle="fullscreen">
										<i className="bx bx-fullscreen fs-22"></i>
									</button>
								</div>

								<div className="ms-1 header-item d-none d-sm-flex">
									<button
										type="button"
										className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
										<i className="bx bx-moon fs-22"></i>
									</button>
								</div>

								<div className="dropdown topbar-head-dropdown ms-1 header-item">
									<button
										type="button"
										className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
										id="page-header-notifications-dropdown"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<i className="bx bx-bell fs-22"></i>
										<span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
											3<span className="visually-hidden">unread messages</span>
										</span>
									</button>
									<div
										className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
										aria-labelledby="page-header-notifications-dropdown">
										<div className="dropdown-head bg-primary bg-pattern rounded-top">
											<div className="p-3">
												<div className="row align-items-center">
													<div className="col">
														<h6 className="m-0 fs-16 fw-semibold text-white">Notifications</h6>
													</div>
													<div className="col-auto dropdown-tabs">
														<span className="badge badge-soft-light fs-13"> 4 New</span>
													</div>
												</div>
											</div>

											<div className="px-2 pt-2">
												<ul
													className="nav nav-tabs dropdown-tabs nav-tabs-custom"
													data-dropdown-tabs="true"
													id="notificationItemsTab"
													role="tablist">
													<li className="nav-item waves-effect waves-light">
														<a
															className="nav-link active"
															data-bs-toggle="tab"
															href="#all-noti-tab"
															role="tab"
															aria-selected="true">
															All (4)
														</a>
													</li>
													<li className="nav-item waves-effect waves-light">
														<a
															className="nav-link"
															data-bs-toggle="tab"
															href="#messages-tab"
															role="tab"
															aria-selected="false">
															Messages
														</a>
													</li>
													<li className="nav-item waves-effect waves-light">
														<a
															className="nav-link"
															data-bs-toggle="tab"
															href="#alerts-tab"
															role="tab"
															aria-selected="false">
															Alerts
														</a>
													</li>
												</ul>
											</div>
										</div>

										<div className="tab-content" id="notificationItemsTabContent">
											<div
												className="tab-pane fade show active py-2 ps-2"
												id="all-noti-tab"
												role="tabpanel">
												<div data-simplebar style={{maxHeight: "300px"}} className="pe-2">
													<div className="text-reset notification-item d-block dropdown-item position-relative">
														<div className="d-flex">
															<div className="avatar-xs me-3">
																<span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
																	<i className="bx bx-badge-check"></i>
																</span>
															</div>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-2 lh-base">
																		Your <b>Elite</b> author Graphic Optimization
																		<span className="text-secondary">reward</span> is ready!
																	</h6>
																</a>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> Just 30 sec ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="all-notification-check01"
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="all-notification-check01"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="text-reset notification-item d-block dropdown-item position-relative active">
														<div className="d-flex">
															<img
																src="assets/images/users/avatar-2.jpg"
																className="me-3 rounded-circle avatar-xs"
																alt="user-pic"
															/>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
																</a>
																<div className="fs-13 text-muted">
																	<p className="mb-1">
																		Answered to your comment on the cash flow forecast's graph 🔔.
																	</p>
																</div>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> 48 min ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="all-notification-check02"
																		checked
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="all-notification-check02"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="text-reset notification-item d-block dropdown-item position-relative">
														<div className="d-flex">
															<div className="avatar-xs me-3">
																<span className="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
																	<i className="bx bx-message-square-dots"></i>
																</span>
															</div>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-2 fs-13 lh-base">
																		You have received <b className="text-success">20</b> new
																		messages in the conversation
																	</h6>
																</a>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> 2 hrs ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="all-notification-check03"
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="all-notification-check03"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="text-reset notification-item d-block dropdown-item position-relative">
														<div className="d-flex">
															<img
																src="assets/images/users/avatar-8.jpg"
																className="me-3 rounded-circle avatar-xs"
																alt="user-pic"
															/>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
																</a>
																<div className="fs-13 text-muted">
																	<p className="mb-1">We talked about a project on linkedin.</p>
																</div>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> 4 hrs ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="all-notification-check04"
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="all-notification-check04"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="my-3 text-center">
														<button
															type="button"
															className="btn btn-soft-success waves-effect waves-light">
															View All Notifications{" "}
															<i className="ri-arrow-right-line align-middle"></i>
														</button>
													</div>
												</div>
											</div>

											<div
												className="tab-pane fade py-2 ps-2"
												id="messages-tab"
												role="tabpanel"
												aria-labelledby="messages-tab">
												<div data-simplebar style={{maxHeight: "300px"}} className="pe-2">
													<div className="text-reset notification-item d-block dropdown-item">
														<div className="d-flex">
															<img
																src="assets/images/users/avatar-3.jpg"
																className="me-3 rounded-circle avatar-xs"
																alt="user-pic"
															/>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-1 fs-13 fw-semibold">James Lemire</h6>
																</a>
																<div className="fs-13 text-muted">
																	<p className="mb-1">We talked about a project on linkedin.</p>
																</div>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> 30 min ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="messages-notification-check01"
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="messages-notification-check01"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="text-reset notification-item d-block dropdown-item">
														<div className="d-flex">
															<img
																src="assets/images/users/avatar-2.jpg"
																className="me-3 rounded-circle avatar-xs"
																alt="user-pic"
															/>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
																</a>
																<div className="fs-13 text-muted">
																	<p className="mb-1">
																		Answered to your comment on the cash flow forecast's graph 🔔.
																	</p>
																</div>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> 2 hrs ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="messages-notification-check02"
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="messages-notification-check02"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="text-reset notification-item d-block dropdown-item">
														<div className="d-flex">
															<img
																src="assets/images/users/avatar-6.jpg"
																className="me-3 rounded-circle avatar-xs"
																alt="user-pic"
															/>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-1 fs-13 fw-semibold">Kenneth Brown</h6>
																</a>
																<div className="fs-13 text-muted">
																	<p className="mb-1">
																		Mentionned you in his comment on 📃 invoice #12501.
																	</p>
																</div>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> 10 hrs ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="messages-notification-check03"
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="messages-notification-check03"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="text-reset notification-item d-block dropdown-item">
														<div className="d-flex">
															<img
																src="assets/images/users/avatar-8.jpg"
																className="me-3 rounded-circle avatar-xs"
																alt="user-pic"
															/>
															<div className="flex-1">
																<a href="#!" className="stretched-link">
																	<h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
																</a>
																<div className="fs-13 text-muted">
																	<p className="mb-1">We talked about a project on linkedin.</p>
																</div>
																<p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
																	<span>
																		<i className="mdi mdi-clock-outline"></i> 3 days ago
																	</span>
																</p>
															</div>
															<div className="px-2 fs-15">
																<div className="form-check notification-check">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		value={username}
																		onChange={(e) => setUsername(e.target.value)}
																		id="messages-notification-check04"
																	/>
																	<label
																		className="form-check-label"
																		htmlFor="messages-notification-check04"></label>
																</div>
															</div>
														</div>
													</div>

													<div className="my-3 text-center">
														<button
															type="button"
															className="btn btn-soft-success waves-effect waves-light">
															View All Messages <i className="ri-arrow-right-line align-middle"></i>
														</button>
													</div>
												</div>
											</div>
											<div
												className="tab-pane fade p-4"
												id="alerts-tab"
												role="tabpanel"
												aria-labelledby="alerts-tab">
												<div className="w-25 w-sm-50 pt-3 mx-auto">
													<img
														src="assets/images/svg/bell.svg"
														className="img-fluid"
														alt="user-pic"
													/>
												</div>
												<div className="text-center pb-5 mt-2">
													<h6 className="fs-18 fw-semibold lh-base">
														Hey! You have no any notifications
													</h6>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="dropdown ms-sm-3 header-item topbar-user">
									<button
										type="button"
										className="btn"
										id="page-header-user-dropdown"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<span className="d-flex align-items-center">
											<img
												className="rounded-circle header-profile-user"
												src="assets/images/users/avatar-1.jpg"
												alt="Header Avatar"
											/>
											<span className="text-start ms-xl-2">
												<span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
													Anna Adame
												</span>
												<span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
													Founder
												</span>
											</span>
										</span>
									</button>
									<div className="dropdown-menu dropdown-menu-end">
										<h6 className="dropdown-header">Welcome Anna!</h6>
										<a className="dropdown-item" href="pages-profile.html">
											<i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle">Profile</span>
										</a>
										<a className="dropdown-item" href="apps-chat.html">
											<i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle">Messages</span>
										</a>
										<a className="dropdown-item" href="apps-tasks-kanban.html">
											<i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle">Taskboard</span>
										</a>
										<a className="dropdown-item" href="pages-faqs.html">
											<i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle">Help</span>
										</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="pages-profile.html">
											<i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle">
												Balance : <b>$5971.67</b>
											</span>
										</a>
										<a className="dropdown-item" href="pages-profile-settings.html">
											<span className="badge bg-soft-success text-success mt-1 float-end">New</span>
											<i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle">Settings</span>
										</a>
										<a className="dropdown-item" href="auth-lockscreen-basic.html">
											<i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle">Lock screen</span>
										</a>
										<a className="dropdown-item" href="auth-logout-basic.html">
											<i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
											<span className="align-middle" data-key="t-logout">
												Logout
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/* <!-- ========== App Menu ========== --> */}
				<div className="app-menu navbar-menu">
					{/* <!-- LOGO --> */}
					<div className="navbar-brand-box">
						{/* <!-- Dark Logo--> */}
						<a href="index.html" className="logo logo-dark">
							<span className="logo-sm">
								<img src="assets/images/logo-sm.png" alt="" height="22" />
							</span>
							<span className="logo-lg">
								<img src="assets/images/logo-dark.png" alt="" height="17" />
							</span>
						</a>
						{/* <!-- Light Logo--> */}
						<a href="index.html" className="logo logo-light">
							<span className="logo-sm">
								<img src="assets/images/logo-sm.png" alt="" height="22" />
							</span>
							<span className="logo-lg">
								<img src="assets/images/logo-light.png" alt="" height="17" />
							</span>
						</a>
						<button
							type="button"
							className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
							id="vertical-hover">
							<i className="ri-record-circle-line"></i>
						</button>
					</div>

					<div id="scrollbar">
						<div className="container-fluid">
							<div id="two-column-menu"></div>
							<ul className="navbar-nav" id="navbar-nav">
								<li className="menu-title">
									<span data-key="t-menu">Menu</span>
								</li>
								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarDashboards"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarDashboards">
										<i className="ri-dashboard-2-line"></i>
										<span data-key="t-dashboards">Dashboards</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarDashboards">
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
												<a href="dashboard-crm.html" className="nav-link" data-key="t-crm">
													{" "}
													CRM{" "}
												</a>
											</li>
											<li className="nav-item">
												<a href="index.html" className="nav-link" data-key="t-ecommerce">
													{" "}
													Ecommerce{" "}
												</a>
											</li>
											<li className="nav-item">
												<a href="dashboard-crypto.html" className="nav-link" data-key="t-crypto">
													Crypto
												</a>
											</li>
											<li className="nav-item">
												<a
													href="dashboard-projects.html"
													className="nav-link"
													data-key="t-projects">
													Projects
												</a>
											</li>
											<li className="nav-item">
												<a href="dashboard-nft.html" className="nav-link">
													<span data-key="t-nft">NFT</span>
													<span className="badge badge-pill bg-danger" data-key="t-new">
														New
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								{/* <!-- end Dashboard Menu --> */}
								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarApps"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarApps">
										<i className="ri-apps-2-line"></i> <span data-key="t-apps">Apps</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarApps">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a href="apps-calendar.html" className="nav-link" data-key="t-calendar">
													Calendar
												</a>
											</li>
											<li className="nav-item">
												<a href="apps-chat.html" className="nav-link" data-key="t-chat">
													{" "}
													Chat{" "}
												</a>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarEmail"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarEmail"
													data-key="t-email">
													Email
												</a>
												<div className="collapse menu-dropdown" id="sidebarEmail">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a href="apps-mailbox.html" className="nav-link" data-key="t-mailbox">
																Mailbox
															</a>
														</li>
														<li className="nav-item">
															<a
																href="#sidebaremailTemplates"
																className="nav-link"
																data-bs-toggle="collapse"
																role="button"
																aria-expanded="false"
																aria-controls="sidebaremailTemplates">
																<span data-key="t-email-templates">Email Templates</span>
																<span className="badge badge-pill bg-danger" data-key="t-new">
																	New
																</span>
															</a>
															<div className="collapse menu-dropdown" id="sidebaremailTemplates">
																<ul className="nav nav-sm flex-column">
																	<li className="nav-item">
																		<a
																			href="apps-email-basic.html"
																			className="nav-link"
																			data-key="t-basic-action">
																			Basic Action
																		</a>
																	</li>
																	<li className="nav-item">
																		<a
																			href="apps-email-ecommerce.html"
																			className="nav-link"
																			data-key="t-ecommerce-action">
																			Ecommerce Action
																		</a>
																	</li>
																</ul>
															</div>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarEcommerce"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarEcommerce"
													data-key="t-ecommerce">
													Ecommerce
												</a>
												<div className="collapse menu-dropdown" id="sidebarEcommerce">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-ecommerce-products.html"
																className="nav-link"
																data-key="t-products">
																Products
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-product-details.html"
																className="nav-link"
																data-key="t-product-Details">
																Product Details
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-add-product.html"
																className="nav-link"
																data-key="t-create-product">
																Create Product
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-orders.html"
																className="nav-link"
																data-key="t-orders">
																Orders
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-order-details.html"
																className="nav-link"
																data-key="t-order-details">
																Order Details
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-customers.html"
																className="nav-link"
																data-key="t-customers">
																Customers
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-cart.html"
																className="nav-link"
																data-key="t-shopping-cart">
																Shopping Cart
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-checkout.html"
																className="nav-link"
																data-key="t-checkout">
																Checkout
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-sellers.html"
																className="nav-link"
																data-key="t-sellers">
																Sellers
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-ecommerce-seller-details.html"
																className="nav-link"
																data-key="t-sellers-details">
																Seller Details
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarProjects"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarProjects"
													data-key="t-projects">
													Projects
												</a>
												<div className="collapse menu-dropdown" id="sidebarProjects">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-projects-list.html"
																className="nav-link"
																data-key="t-list">
																List
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-projects-overview.html"
																className="nav-link"
																data-key="t-overview">
																Overview
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-projects-create.html"
																className="nav-link"
																data-key="t-create-project">
																Create Project
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarTasks"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarTasks"
													data-key="t-tasks">
													Tasks
												</a>
												<div className="collapse menu-dropdown" id="sidebarTasks">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-tasks-kanban.html"
																className="nav-link"
																data-key="t-kanbanboard">
																Kanban Board
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-tasks-list-view.html"
																className="nav-link"
																data-key="t-list-view">
																List View
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-tasks-details.html"
																className="nav-link"
																data-key="t-task-details">
																Task Details
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarCRM"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarCRM"
													data-key="t-crm">
													CRM
												</a>
												<div className="collapse menu-dropdown" id="sidebarCRM">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-crm-contacts.html"
																className="nav-link"
																data-key="t-contacts">
																Contacts
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-crm-companies.html"
																className="nav-link"
																data-key="t-companies">
																Companies
															</a>
														</li>
														<li className="nav-item">
															<a href="apps-crm-deals.html" className="nav-link" data-key="t-deals">
																Deals
															</a>
														</li>
														<li className="nav-item">
															<a href="apps-crm-leads.html" className="nav-link" data-key="t-leads">
																Leads
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarCrypto"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarCrypto"
													data-key="t-crypto">
													Crypto
												</a>
												<div className="collapse menu-dropdown" id="sidebarCrypto">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-crypto-transactions.html"
																className="nav-link"
																data-key="t-transactions">
																Transactions
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-crypto-buy-sell.html"
																className="nav-link"
																data-key="t-buy-sell">
																Buy & Sell
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-crypto-orders.html"
																className="nav-link"
																data-key="t-orders">
																Orders
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-crypto-wallet.html"
																className="nav-link"
																data-key="t-my-wallet">
																My Wallet
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-crypto-ico.html"
																className="nav-link"
																data-key="t-ico-list">
																ICO List
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-crypto-kyc.html"
																className="nav-link"
																data-key="t-kyc-application">
																KYC Application
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarInvoices"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarInvoices"
													data-key="t-invoices">
													Invoices
												</a>
												<div className="collapse menu-dropdown" id="sidebarInvoices">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-invoices-list.html"
																className="nav-link"
																data-key="t-list-view">
																List View
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-invoices-details.html"
																className="nav-link"
																data-key="t-details">
																Details
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-invoices-create.html"
																className="nav-link"
																data-key="t-create-invoice">
																Create Invoice
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarTickets"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarTickets"
													data-key="t-supprt-tickets">
													Support Tickets
												</a>
												<div className="collapse menu-dropdown" id="sidebarTickets">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-tickets-list.html"
																className="nav-link"
																data-key="t-list-view">
																List View
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-tickets-details.html"
																className="nav-link"
																data-key="t-ticket-details">
																Ticket Details
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarnft"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarnft">
													<span data-key="t-nft-marketplace">NFT Marketplace</span>
													<span className="badge badge-pill bg-danger" data-key="t-new">
														New
													</span>
												</a>
												<div className="collapse menu-dropdown" id="sidebarnft">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="apps-nft-marketplace.html"
																className="nav-link"
																data-key="t-marketplace">
																Marketplace
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-explore.html"
																className="nav-link"
																data-key="t-explore-now">
																Explore Now
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-auction.html"
																className="nav-link"
																data-key="t-live-auction">
																Live Auction
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-item-details.html"
																className="nav-link"
																data-key="t-item-details">
																Item Details
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-collections.html"
																className="nav-link"
																data-key="t-collections">
																Collections
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-creators.html"
																className="nav-link"
																data-key="t-creators">
																Creators
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-ranking.html"
																className="nav-link"
																data-key="t-ranking">
																Ranking
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-wallet.html"
																className="nav-link"
																data-key="t-wallet-connect">
																Wallet Connect
															</a>
														</li>
														<li className="nav-item">
															<a
																href="apps-nft-create.html"
																className="nav-link"
																data-key="t-create-nft">
																Create NFT
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarLayouts"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarLayouts">
										<i className="ri-layout-3-line"></i> <span data-key="t-layouts">Layouts</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarLayouts">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a
													href="layouts-horizontal.html"
													target="_blank"
													className="nav-link"
													data-key="t-horizontal">
													Horizontal
												</a>
											</li>
											<li className="nav-item">
												<a
													href="layouts-detached.html"
													target="_blank"
													className="nav-link"
													data-key="t-detached">
													Detached
												</a>
											</li>
											<li className="nav-item">
												<a
													href="layouts-two-column.html"
													target="_blank"
													className="nav-link"
													data-key="t-two-column">
													Two Column
												</a>
											</li>
											<li className="nav-item">
												<a
													href="layouts-vertical-hovered.html"
													target="_blank"
													className="nav-link"
													data-key="t-hovered">
													Hovered
												</a>
											</li>
										</ul>
									</div>
								</li>
								{/* <!-- end Dashboard Menu --> */}

								<li className="menu-title">
									<i className="ri-more-fill"></i> <span data-key="t-pages">Pages</span>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarAuth"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarAuth">
										<i className="ri-account-circle-line"></i>
										<span data-key="t-authentication">Authentication</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarAuth">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a
													href="#sidebarSignIn"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarSignIn"
													data-key="t-signin">
													Sign In
												</a>
												<div className="collapse menu-dropdown" id="sidebarSignIn">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-signin-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-signin-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarSignUp"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarSignUp"
													data-key="t-signup">
													Sign Up
												</a>
												<div className="collapse menu-dropdown" id="sidebarSignUp">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-signup-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-signup-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>

											<li className="nav-item">
												<a
													href="#sidebarResetPass"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarResetPass"
													data-key="t-password-reset">
													Password Reset
												</a>
												<div className="collapse menu-dropdown" id="sidebarResetPass">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-pass-reset-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-pass-reset-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>

											<li className="nav-item">
												<a
													href="#sidebarchangePass"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarchangePass"
													data-key="t-password-create">
													Password Create
												</a>
												<div className="collapse menu-dropdown" id="sidebarchangePass">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-pass-change-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-pass-change-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>

											<li className="nav-item">
												<a
													href="#sidebarLockScreen"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarLockScreen"
													data-key="t-lock-screen">
													Lock Screen
												</a>
												<div className="collapse menu-dropdown" id="sidebarLockScreen">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-lockscreen-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-lockscreen-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>

											<li className="nav-item">
												<a
													href="#sidebarLogout"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarLogout"
													data-key="t-logout">
													Logout
												</a>
												<div className="collapse menu-dropdown" id="sidebarLogout">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-logout-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-logout-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarSuccessMsg"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarSuccessMsg"
													data-key="t-success-message">
													Success Message
												</a>
												<div className="collapse menu-dropdown" id="sidebarSuccessMsg">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-success-msg-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-success-msg-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarTwoStep"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarTwoStep"
													data-key="t-two-step-verification">
													Two Step Verification
												</a>
												<div className="collapse menu-dropdown" id="sidebarTwoStep">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-twostep-basic.html"
																className="nav-link"
																data-key="t-basic">
																Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-twostep-cover.html"
																className="nav-link"
																data-key="t-cover">
																Cover
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarErrors"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarErrors"
													data-key="t-errors">
													Errors
												</a>
												<div className="collapse menu-dropdown" id="sidebarErrors">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="auth-404-basic.html"
																className="nav-link"
																data-key="t-404-basic">
																404 Basic
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-404-cover.html"
																className="nav-link"
																data-key="t-404-cover">
																404 Cover
															</a>
														</li>
														<li className="nav-item">
															<a href="auth-404-alt.html" className="nav-link" data-key="t-404-alt">
																404 Alt
															</a>
														</li>
														<li className="nav-item">
															<a href="auth-500.html" className="nav-link" data-key="t-500">
																{" "}
																500{" "}
															</a>
														</li>
														<li className="nav-item">
															<a
																href="auth-offline.html"
																className="nav-link"
																data-key="t-offline-page">
																Offline Page
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarPages"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarPages">
										<i className="ri-pages-line"></i> <span data-key="t-pages">Pages</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarPages">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a href="pages-starter.html" className="nav-link" data-key="t-starter">
													Starter
												</a>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarProfile"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarProfile"
													data-key="t-profile">
													Profile
												</a>
												<div className="collapse menu-dropdown" id="sidebarProfile">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="pages-profile.html"
																className="nav-link"
																data-key="t-simple-page">
																Simple Page
															</a>
														</li>
														<li className="nav-item">
															<a
																href="pages-profile-settings.html"
																className="nav-link"
																data-key="t-settings">
																Settings
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a href="pages-team.html" className="nav-link" data-key="t-team">
													{" "}
													Team{" "}
												</a>
											</li>
											<li className="nav-item">
												<a href="pages-timeline.html" className="nav-link" data-key="t-timeline">
													Timeline
												</a>
											</li>
											<li className="nav-item">
												<a href="pages-faqs.html" className="nav-link" data-key="t-faqs">
													{" "}
													FAQs{" "}
												</a>
											</li>
											<li className="nav-item">
												<a href="pages-pricing.html" className="nav-link" data-key="t-pricing">
													Pricing
												</a>
											</li>
											<li className="nav-item">
												<a href="pages-gallery.html" className="nav-link" data-key="t-gallery">
													Gallery
												</a>
											</li>
											<li className="nav-item">
												<a
													href="pages-maintenance.html"
													className="nav-link"
													data-key="t-maintenance">
													Maintenance
												</a>
											</li>
											<li className="nav-item">
												<a
													href="pages-coming-soon.html"
													className="nav-link"
													data-key="t-coming-soon">
													Coming Soon
												</a>
											</li>
											<li className="nav-item">
												<a href="pages-sitemap.html" className="nav-link" data-key="t-sitemap">
													Sitemap
												</a>
											</li>
											<li className="nav-item">
												<a
													href="pages-search-results.html"
													className="nav-link"
													data-key="t-search-results">
													Search Results
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarLanding"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarLanding">
										<i className="ri-rocket-line"></i> <span data-key="t-landing">Landing</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarLanding">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a href="landing.html" className="nav-link" data-key="t-one-page">
													{" "}
													One Page{" "}
												</a>
											</li>
											<li className="nav-item">
												<a href="nft-landing.html" className="nav-link">
													<span data-key="t-nft-landing">NFT Landing</span>
													<span className="badge badge-pill bg-danger" data-key="t-new">
														New
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="menu-title">
									<i className="ri-more-fill"></i> <span data-key="t-components">Components</span>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarUI"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarUI">
										<i className="ri-pencil-ruler-2-line"></i>{" "}
										<span data-key="t-base-ui">Base UI</span>
									</a>
									<div className="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
										<div className="row">
											<div className="col-lg-4">
												<ul className="nav nav-sm flex-column">
													<li className="nav-item">
														<a href="ui-alerts.html" className="nav-link" data-key="t-alerts">
															Alerts
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-badges.html" className="nav-link" data-key="t-badges">
															Badges
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-buttons.html" className="nav-link" data-key="t-buttons">
															Buttons
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-colors.html" className="nav-link" data-key="t-colors">
															Colors
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-cards.html" className="nav-link" data-key="t-cards">
															Cards
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-carousel.html" className="nav-link" data-key="t-carousel">
															Carousel
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-dropdowns.html" className="nav-link" data-key="t-dropdowns">
															Dropdowns
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-grid.html" className="nav-link" data-key="t-grid">
															Grid
														</a>
													</li>
												</ul>
											</div>
											<div className="col-lg-4">
												<ul className="nav nav-sm flex-column">
													<li className="nav-item">
														<a href="ui-images.html" className="nav-link" data-key="t-images">
															Images
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-tabs.html" className="nav-link" data-key="t-tabs">
															Tabs
														</a>
													</li>
													<li className="nav-item">
														<a
															href="ui-accordions.html"
															className="nav-link"
															data-key="t-accordion-collapse">
															Accordion & Collapse
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-modals.html" className="nav-link" data-key="t-modals">
															Modals
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-offcanvas.html" className="nav-link" data-key="t-offcanvas">
															Offcanvas
														</a>
													</li>
													<li className="nav-item">
														<a
															href="ui-placeholders.html"
															className="nav-link"
															data-key="t-placeholders">
															Placeholders
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-progress.html" className="nav-link" data-key="t-progress">
															Progress
														</a>
													</li>
													<li className="nav-item">
														<a
															href="ui-notifications.html"
															className="nav-link"
															data-key="t-notifications">
															Notifications
														</a>
													</li>
												</ul>
											</div>
											<div className="col-lg-4">
												<ul className="nav nav-sm flex-column">
													<li className="nav-item">
														<a href="ui-media.html" className="nav-link" data-key="t-media-object">
															Media object
														</a>
													</li>
													<li className="nav-item">
														<a
															href="ui-embed-video.html"
															className="nav-link"
															data-key="t-embed-video">
															Embed Video
														</a>
													</li>
													<li className="nav-item">
														<a
															href="ui-typography.html"
															className="nav-link"
															data-key="t-typography">
															Typography
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-lists.html" className="nav-link" data-key="t-lists">
															Lists
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-general.html" className="nav-link" data-key="t-general">
															General
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-ribbons.html" className="nav-link" data-key="t-ribbons">
															Ribbons
														</a>
													</li>
													<li className="nav-item">
														<a href="ui-utilities.html" className="nav-link" data-key="t-utilities">
															Utilities
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarAdvanceUI"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarAdvanceUI">
										<i className="ri-stack-line"></i>{" "}
										<span data-key="t-advance-ui">Advance UI</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarAdvanceUI">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a
													href="advance-ui-sweetalerts.html"
													className="nav-link"
													data-key="t-sweet-alerts">
													Sweet Alerts
												</a>
											</li>
											<li className="nav-item">
												<a
													href="advance-ui-nestable.html"
													className="nav-link"
													data-key="t-nestable-list">
													Nestable List
												</a>
											</li>
											<li className="nav-item">
												<a
													href="advance-ui-scrollbar.html"
													className="nav-link"
													data-key="t-scrollbar">
													Scrollbar
												</a>
											</li>
											<li className="nav-item">
												<a
													href="advance-ui-animation.html"
													className="nav-link"
													data-key="t-animation">
													Animation
												</a>
											</li>
											<li className="nav-item">
												<a href="advance-ui-tour.html" className="nav-link" data-key="t-tour">
													Tour
												</a>
											</li>
											<li className="nav-item">
												<a
													href="advance-ui-swiper.html"
													className="nav-link"
													data-key="t-swiper-slider">
													Swiper Slider
												</a>
											</li>
											<li className="nav-item">
												<a href="advance-ui-ratings.html" className="nav-link" data-key="t-ratings">
													Ratings
												</a>
											</li>
											<li className="nav-item">
												<a
													href="advance-ui-highlight.html"
													className="nav-link"
													data-key="t-highlight">
													Highlight
												</a>
											</li>
											<li className="nav-item">
												<a
													href="advance-ui-scrollspy.html"
													className="nav-link"
													data-key="t-scrollSpy">
													ScrollSpy
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a className="nav-link menu-link" href="widgets.html">
										<i className="ri-honour-line"></i> <span data-key="t-widgets">Widgets</span>
									</a>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarForms"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarForms">
										<i className="ri-file-list-3-line"></i> <span data-key="t-forms">Forms</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarForms">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a
													href="forms-elements.html"
													className="nav-link"
													data-key="t-basic-elements">
													Basic Elements
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-select.html" className="nav-link" data-key="t-form-select">
													Form Select
												</a>
											</li>
											<li className="nav-item">
												<a
													href="forms-checkboxs-radios.html"
													className="nav-link"
													data-key="t-checkboxs-radios">
													Checkboxs & Radios
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-pickers.html" className="nav-link" data-key="t-pickers">
													Pickers
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-masks.html" className="nav-link" data-key="t-input-masks">
													Input Masks
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-advanced.html" className="nav-link" data-key="t-advanced">
													Advanced
												</a>
											</li>
											<li className="nav-item">
												<a
													href="forms-range-sliders.html"
													className="nav-link"
													data-key="t-range-slider">
													Range Slider
												</a>
											</li>
											<li className="nav-item">
												<a
													href="forms-validation.html"
													className="nav-link"
													data-key="t-validation">
													Validation
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-wizard.html" className="nav-link" data-key="t-wizard">
													Wizard
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-editors.html" className="nav-link" data-key="t-editors">
													Editors
												</a>
											</li>
											<li className="nav-item">
												<a
													href="forms-file-uploads.html"
													className="nav-link"
													data-key="t-file-uploads">
													File Uploads
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-layouts.html" className="nav-link" data-key="t-form-layouts">
													Form Layouts
												</a>
											</li>
											<li className="nav-item">
												<a href="forms-select2.html" className="nav-link">
													<span data-key="t-select2">Select2</span>
													<span className="badge badge-pill bg-danger" data-key="t-new">
														New
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarTables"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarTables">
										<i className="ri-layout-grid-line"></i> <span data-key="t-tables">Tables</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarTables">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a href="tables-basic.html" className="nav-link" data-key="t-basic-tables">
													Basic Tables
												</a>
											</li>
											<li className="nav-item">
												<a href="tables-gridjs.html" className="nav-link" data-key="t-grid-js">
													Grid Js
												</a>
											</li>
											<li className="nav-item">
												<a href="tables-listjs.html" className="nav-link" data-key="t-list-js">
													List Js
												</a>
											</li>
											<li className="nav-item">
												<a href="tables-datatables.html" className="nav-link">
													<span data-key="t-datatables">Datatables</span>
													<span className="badge badge-pill bg-danger" data-key="t-new">
														New
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarCharts"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarCharts">
										<i className="ri-pie-chart-line"></i> <span data-key="t-charts">Charts</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarCharts">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a
													href="#sidebarApexcharts"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarApexcharts"
													data-key="t-apexcharts">
													Apexcharts
												</a>
												<div className="collapse menu-dropdown" id="sidebarApexcharts">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a
																href="charts-apex-line.html"
																className="nav-link"
																data-key="t-line">
																Line
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-area.html"
																className="nav-link"
																data-key="t-area">
																Area
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-column.html"
																className="nav-link"
																data-key="t-column">
																Column
															</a>
														</li>
														<li className="nav-item">
															<a href="charts-apex-bar.html" className="nav-link" data-key="t-bar">
																Bar
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-mixed.html"
																className="nav-link"
																data-key="t-mixed">
																Mixed
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-timeline.html"
																className="nav-link"
																data-key="t-timeline">
																Timeline
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-candlestick.html"
																className="nav-link"
																data-key="t-candlstick">
																Candlstick
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-boxplot.html"
																className="nav-link"
																data-key="t-boxplot">
																Boxplot
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-bubble.html"
																className="nav-link"
																data-key="t-bubble">
																Bubble
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-scatter.html"
																className="nav-link"
																data-key="t-scatter">
																Scatter
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-heatmap.html"
																className="nav-link"
																data-key="t-heatmap">
																Heatmap
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-treemap.html"
																className="nav-link"
																data-key="t-treemap">
																Treemap
															</a>
														</li>
														<li className="nav-item">
															<a href="charts-apex-pie.html" className="nav-link" data-key="t-pie">
																Pie
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-radialbar.html"
																className="nav-link"
																data-key="t-radialbar">
																Radialbar
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-radar.html"
																className="nav-link"
																data-key="t-radar">
																Radar
															</a>
														</li>
														<li className="nav-item">
															<a
																href="charts-apex-polar.html"
																className="nav-link"
																data-key="t-polar-area">
																Polar Area
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className="nav-item">
												<a href="charts-chartjs.html" className="nav-link" data-key="t-chartjs">
													Chartjs
												</a>
											</li>
											<li className="nav-item">
												<a href="charts-echarts.html" className="nav-link" data-key="t-echarts">
													Echarts
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarIcons"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarIcons">
										<i className="ri-compasses-2-line"></i> <span data-key="t-icons">Icons</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarIcons">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a href="icons-remix.html" className="nav-link" data-key="t-remix">
													Remix
												</a>
											</li>
											<li className="nav-item">
												<a href="icons-boxicons.html" className="nav-link" data-key="t-boxicons">
													Boxicons
												</a>
											</li>
											<li className="nav-item">
												<a
													href="icons-materialdesign.html"
													className="nav-link"
													data-key="t-material-design">
													Material Design
												</a>
											</li>
											<li className="nav-item">
												<a
													href="icons-lineawesome.html"
													className="nav-link"
													data-key="t-line-awesome">
													Line Awesome
												</a>
											</li>
											<li className="nav-item">
												<a href="icons-feather.html" className="nav-link" data-key="t-feather">
													Feather
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarMaps"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarMaps">
										<i className="ri-map-pin-line"></i> <span data-key="t-maps">Maps</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarMaps">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a href="maps-google.html" className="nav-link" data-key="t-google">
													{" "}
													Google{" "}
												</a>
											</li>
											<li className="nav-item">
												<a href="maps-vector.html" className="nav-link" data-key="t-vector">
													{" "}
													Vector{" "}
												</a>
											</li>
											<li className="nav-item">
												<a href="maps-leaflet.html" className="nav-link" data-key="t-leaflet">
													Leaflet
												</a>
											</li>
										</ul>
									</div>
								</li>

								<li className="nav-item">
									<a
										className="nav-link menu-link"
										href="#sidebarMultilevel"
										data-bs-toggle="collapse"
										role="button"
										aria-expanded="false"
										aria-controls="sidebarMultilevel">
										<i className="ri-share-line"></i>{" "}
										<span data-key="t-multi-level">Multi Level</span>
									</a>
									<div className="collapse menu-dropdown" id="sidebarMultilevel">
										<ul className="nav nav-sm flex-column">
											<li className="nav-item">
												<a href="#" className="nav-link" data-key="t-level-1.1">
													{" "}
													Level 1.1{" "}
												</a>
											</li>
											<li className="nav-item">
												<a
													href="#sidebarAccount"
													className="nav-link"
													data-bs-toggle="collapse"
													role="button"
													aria-expanded="false"
													aria-controls="sidebarAccount"
													data-key="t-level-1.2">
													Level 1.2
												</a>
												<div className="collapse menu-dropdown" id="sidebarAccount">
													<ul className="nav nav-sm flex-column">
														<li className="nav-item">
															<a href="#" className="nav-link" data-key="t-level-2.1">
																{" "}
																Level 2.1{" "}
															</a>
														</li>
														<li className="nav-item">
															<a
																href="#sidebarCrm"
																className="nav-link"
																data-bs-toggle="collapse"
																role="button"
																aria-expanded="false"
																aria-controls="sidebarCrm"
																data-key="t-level-2.2">
																Level 2.2
															</a>
															<div className="collapse menu-dropdown" id="sidebarCrm">
																<ul className="nav nav-sm flex-column">
																	<li className="nav-item">
																		<a href="#" className="nav-link" data-key="t-level-3.1">
																			Level 3.1
																		</a>
																	</li>
																	<li className="nav-item">
																		<a href="#" className="nav-link" data-key="t-level-3.2">
																			Level 3.2
																		</a>
																	</li>
																</ul>
															</div>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						{/* <!-- Sidebar --> */}
					</div>

					<div className="sidebar-background"></div>
				</div>
				{/* <!-- Left Sidebar End --> */}
				{/* <!-- Vertical Overlay--> */}
				<div className="vertical-overlay"></div>

				{/* <!-- ============================================================== --> */}
				{/* <!-- Start right Content here --> */}
				{/* <!-- ============================================================== --> */}
				<div className="main-content">
					<div className="page-content">
						<div className="container-fluid">
							{/* <!-- start page title --> */}
							<div className="row">
								<div className="col-12">
									<div className="page-title-box d-sm-flex align-items-center justify-content-between">
										<h4 className="mb-sm-0">Dashboard</h4>

										<div className="page-title-right">
											<ol className="breadcrumb m-0">
												<li className="breadcrumb-item">
													<a href="javascript: void(0);">Dashboards</a>
												</li>
												<li className="breadcrumb-item active">Dashboard</li>
											</ol>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- end page title --> */}

							<div className="row">
								<div className="col">
									<div className="h-100">
										<div className="row mb-3 pb-1">
											<div className="col-12">
												<div className="d-flex align-items-lg-center flex-lg-row flex-column">
													<div className="flex-grow-1">
														<h4 className="fs-16 mb-1">Good Morning, Anna!</h4>
														<p className="text-muted mb-0">
															Here's what's happening with your store today.
														</p>
													</div>
													<div className="mt-3 mt-lg-0">
														<form action="javascript:void(0);">
															<div className="row g-3 mb-0 align-items-center">
																<div className="col-sm-auto">
																	<div className="input-group">
																		<input
																			type="text"
																			className="form-control border-0 dash-filter-picker shadow"
																			data-provider="flatpickr"
																			data-range-date="true"
																			data-date-format="d M, Y"
																			data-deafult-date="01 Jan 2022 to 31 Jan 2022"
																		/>
																		<div className="input-group-text bg-primary border-primary text-white">
																			<i className="ri-calendar-2-line"></i>
																		</div>
																	</div>
																</div>
																{/* <!--end col--> */}
																<div className="col-auto">
																	<button type="button" className="btn btn-soft-success">
																		<i className="ri-add-circle-line align-middle me-1"></i> Add
																		Product
																	</button>
																</div>
																{/* <!--end col--> */}
																<div className="col-auto">
																	<button
																		type="button"
																		className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn">
																		<i className="ri-pulse-line"></i>
																	</button>
																</div>
																{/* <!--end col--> */}
															</div>
															{/* <!--end row--> */}
														</form>
													</div>
												</div>
												{/* <!-- end card header --> */}
											</div>
											{/* <!--end col--> */}
										</div>
										{/* <!--end row--> */}

										<div className="row">
											<div className="col-xl-3 col-md-6">
												{/* <!-- card --> */}
												<div className="card card-animate">
													<div className="card-body">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1 overflow-hidden">
																<p className="text-uppercase fw-medium text-muted text-truncate mb-0">
																	Total Earnings
																</p>
															</div>
															<div className="flex-shrink-0">
																<h5 className="text-success fs-14 mb-0">
																	<i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
																	+16.24 %
																</h5>
															</div>
														</div>
														<div className="d-flex align-items-end justify-content-between mt-4">
															<div>
																<h4 className="fs-22 fw-semibold ff-secondary mb-4">
																	$
																	<span className="counter-value" data-target="559.25">
																		0
																	</span>
																	k
																</h4>
																<a href="#" className="text-decoration-underline">
																	View net earnings
																</a>
															</div>
															<div className="avatar-sm flex-shrink-0">
																<span className="avatar-title bg-soft-success rounded fs-3">
																	<i className="bx bx-dollar-circle text-success"></i>
																</span>
															</div>
														</div>
													</div>
													{/* <!-- end card body --> */}
												</div>
												{/* <!-- end card --> */}
											</div>
											{/* <!-- end col --> */}

											<div className="col-xl-3 col-md-6">
												{/* <!-- card --> */}
												<div className="card card-animate">
													<div className="card-body">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1 overflow-hidden">
																<p className="text-uppercase fw-medium text-muted text-truncate mb-0">
																	Orders
																</p>
															</div>
															<div className="flex-shrink-0">
																<h5 className="text-danger fs-14 mb-0">
																	<i className="ri-arrow-right-down-line fs-13 align-middle"></i>{" "}
																	-3.57 %
																</h5>
															</div>
														</div>
														<div className="d-flex align-items-end justify-content-between mt-4">
															<div>
																<h4 className="fs-22 fw-semibold ff-secondary mb-4">
																	<span className="counter-value" data-target="36894">
																		0
																	</span>
																</h4>
																<a href="#" className="text-decoration-underline">
																	View all orders
																</a>
															</div>
															<div className="avatar-sm flex-shrink-0">
																<span className="avatar-title bg-soft-info rounded fs-3">
																	<i className="bx bx-shopping-bag text-info"></i>
																</span>
															</div>
														</div>
													</div>
													{/* <!-- end card body --> */}
												</div>
												{/* <!-- end card --> */}
											</div>
											{/* <!-- end col --> */}

											<div className="col-xl-3 col-md-6">
												{/* <!-- card --> */}
												<div className="card card-animate">
													<div className="card-body">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1 overflow-hidden">
																<p className="text-uppercase fw-medium text-muted text-truncate mb-0">
																	Customers
																</p>
															</div>
															<div className="flex-shrink-0">
																<h5 className="text-success fs-14 mb-0">
																	<i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
																	+29.08 %
																</h5>
															</div>
														</div>
														<div className="d-flex align-items-end justify-content-between mt-4">
															<div>
																<h4 className="fs-22 fw-semibold ff-secondary mb-4">
																	<span className="counter-value" data-target="183.35">
																		0
																	</span>
																	M
																</h4>
																<a href="#" className="text-decoration-underline">
																	See details
																</a>
															</div>
															<div className="avatar-sm flex-shrink-0">
																<span className="avatar-title bg-soft-warning rounded fs-3">
																	<i className="bx bx-user-circle text-warning"></i>
																</span>
															</div>
														</div>
													</div>
													{/* <!-- end card body --> */}
												</div>
												{/* <!-- end card --> */}
											</div>
											{/* <!-- end col --> */}

											<div className="col-xl-3 col-md-6">
												{/* <!-- card --> */}
												<div className="card card-animate">
													<div className="card-body">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1 overflow-hidden">
																<p className="text-uppercase fw-medium text-muted text-truncate mb-0">
																	My Balance
																</p>
															</div>
															<div className="flex-shrink-0">
																<h5 className="text-muted fs-14 mb-0">+0.00 %</h5>
															</div>
														</div>
														<div className="d-flex align-items-end justify-content-between mt-4">
															<div>
																<h4 className="fs-22 fw-semibold ff-secondary mb-4">
																	$
																	<span className="counter-value" data-target="165.89">
																		0
																	</span>
																	k
																</h4>
																<a href="#" className="text-decoration-underline">
																	Withdraw money
																</a>
															</div>
															<div className="avatar-sm flex-shrink-0">
																<span className="avatar-title bg-soft-primary rounded fs-3">
																	<i className="bx bx-wallet text-primary"></i>
																</span>
															</div>
														</div>
													</div>
													{/* <!-- end card body --> */}
												</div>
												{/* <!-- end card --> */}
											</div>
											{/* <!-- end col --> */}
										</div>
										{/* <!-- end row--> */}

										<div className="row">
											<div className="col-xl-8">
												<div className="card">
													<div className="card-header border-0 align-items-center d-flex">
														<h4 className="card-title mb-0 flex-grow-1">Revenue</h4>
														<div>
															<button type="button" className="btn btn-soft-secondary btn-sm">
																ALL
															</button>
															<button type="button" className="btn btn-soft-secondary btn-sm">
																1M
															</button>
															<button type="button" className="btn btn-soft-secondary btn-sm">
																6M
															</button>
															<button type="button" className="btn btn-soft-primary btn-sm">
																1Y
															</button>
														</div>
													</div>
													{/* <!-- end card header --> */}

													<div className="card-header p-0 border-0 bg-soft-light">
														<div className="row g-0 text-center">
															<div className="col-6 col-sm-3">
																<div className="p-3 border border-dashed border-start-0">
																	<h5 className="mb-1">
																		<span className="counter-value" data-target="7585">
																			0
																		</span>
																	</h5>
																	<p className="text-muted mb-0">Orders</p>
																</div>
															</div>
															{/* <!--end col--> */}
															<div className="col-6 col-sm-3">
																<div className="p-3 border border-dashed border-start-0">
																	<h5 className="mb-1">
																		$
																		<span className="counter-value" data-target="22.89">
																			0
																		</span>
																		k
																	</h5>
																	<p className="text-muted mb-0">Earnings</p>
																</div>
															</div>
															{/* <!--end col--> */}
															<div className="col-6 col-sm-3">
																<div className="p-3 border border-dashed border-start-0">
																	<h5 className="mb-1">
																		<span className="counter-value" data-target="367">
																			0
																		</span>
																	</h5>
																	<p className="text-muted mb-0">Refunds</p>
																</div>
															</div>
															{/* <!--end col--> */}
															<div className="col-6 col-sm-3">
																<div className="p-3 border border-dashed border-start-0 border-end-0">
																	<h5 className="mb-1 text-success">
																		<span className="counter-value" data-target="18.92">
																			0
																		</span>
																		%
																	</h5>
																	<p className="text-muted mb-0">Conversation Ratio</p>
																</div>
															</div>
															{/* <!--end col--> */}
														</div>
													</div>
													{/* <!-- end card header --> */}

													<div className="card-body p-0 pb-2">
														<div className="w-100">
															<div
																id="customer_impression_charts"
																data-colors='["--vz-primary", "--vz-success", "--vz-danger"]'
																className="apex-charts"
																dir="ltr"></div>
														</div>
													</div>
													{/* <!-- end card body --> */}
												</div>
												{/* <!-- end card --> */}
											</div>
											{/* <!-- end col --> */}

											<div className="col-xl-4">
												{/* <!-- card --> */}
												<div className="card card-height-100">
													<div className="card-header align-items-center d-flex">
														<h4 className="card-title mb-0 flex-grow-1">Sales by Locations</h4>
														<div className="flex-shrink-0">
															<button type="button" className="btn btn-soft-primary btn-sm">
																Export Report
															</button>
														</div>
													</div>
													{/* <!-- end card header --> */}

													{/* <!-- card body --> */}
													<div className="card-body">
														<div
															id="sales-by-locations"
															data-colors='["--vz-light", "--vz-success", "--vz-primary"]'
															style={{height: '269px'}}
															dir="ltr"></div>

														<div className="px-2 py-2 mt-1">
															<p className="mb-1">
																Canada <span className="float-end">75%</span>
															</p>
															<div className="progress mt-2" style={{height: '6px'}}>
																<div
																	className="progress-bar progress-bar-striped bg-primary"
																	role="progressbar"
																	style={{width: '75%'}}
																	aria-valuenow="75"
																	aria-valuemin="0"
																	aria-valuemax="75"></div>
															</div>

															<p className="mt-3 mb-1">
																Greenland <span className="float-end">47%</span>
															</p>
															<div className="progress mt-2" style={{height: '6px'}}>
																<div
																	className="progress-bar progress-bar-striped bg-primary"
																	role="progressbar"
																	style={{width: '47%'}}
																	aria-valuenow="47"
																	aria-valuemin="0"
																	aria-valuemax="47"></div>
															</div>

															<p className="mt-3 mb-1">
																Russia <span className="float-end">82%</span>
															</p>
															<div className="progress mt-2" style={{height: '6px'}}>
																<div
																	className="progress-bar progress-bar-striped bg-primary"
																	role="progressbar"
																	style={{width: '82%'}}
																	aria-valuenow="82"
																	aria-valuemin="0"
																	aria-valuemax="82"></div>
															</div>
														</div>
													</div>
													{/* <!-- end card body --> */}
												</div>
												{/* <!-- end card --> */}
											</div>
											{/* <!-- end col --> */}
										</div>

										<div className="row">
											<div className="col-xl-6">
												<div className="card">
													<div className="card-header align-items-center d-flex">
														<h4 className="card-title mb-0 flex-grow-1">Best Selling Products</h4>
														<div className="flex-shrink-0">
															<div className="dropdown card-header-dropdown">
																<a
																	className="text-reset dropdown-btn"
																	href="#"
																	data-bs-toggle="dropdown"
																	aria-haspopup="true"
																	aria-expanded="false">
																	<span className="fw-semibold text-uppercase fs-12">
																		Sort by:{" "}
																	</span>
																	<span className="text-muted">
																		Today<i className="mdi mdi-chevron-down ms-1"></i>
																	</span>
																</a>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="#">
																		Today
																	</a>
																	<a className="dropdown-item" href="#">
																		Yesterday
																	</a>
																	<a className="dropdown-item" href="#">
																		Last 7 Days
																	</a>
																	<a className="dropdown-item" href="#">
																		Last 30 Days
																	</a>
																	<a className="dropdown-item" href="#">
																		This Month
																	</a>
																	<a className="dropdown-item" href="#">
																		Last Month
																	</a>
																</div>
															</div>
														</div>
													</div>
													{/* <!-- end card header --> */}

													<div className="card-body">
														<div className="table-responsive table-card">
															<table className="table table-hover table-centered align-middle table-nowrap mb-0">
																<tbody>
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="avatar-sm bg-light rounded p-1 me-2">
																					<img
																						src="assets/images/products/img-1.png"
																						alt=""
																						className="img-fluid d-block"
																					/>
																				</div>
																				<div>
																					<h5 className="fs-14 my-1">
																						<a
																							href="apps-ecommerce-product-details.html"
																							className="text-reset">
																							Branded T-Shirts
																						</a>
																					</h5>
																					<span className="text-muted">24 Apr 2021</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$29.00</h5>
																			<span className="text-muted">Price</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">62</h5>
																			<span className="text-muted">Orders</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">510</h5>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$1,798</h5>
																			<span className="text-muted">Amount</span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="avatar-sm bg-light rounded p-1 me-2">
																					<img
																						src="assets/images/products/img-2.png"
																						alt=""
																						className="img-fluid d-block"
																					/>
																				</div>
																				<div>
																					<h5 className="fs-14 my-1">
																						<a
																							href="apps-ecommerce-product-details.html"
																							className="text-reset">
																							Bentwood Chair
																						</a>
																					</h5>
																					<span className="text-muted">19 Mar 2021</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$85.20</h5>
																			<span className="text-muted">Price</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">35</h5>
																			<span className="text-muted">Orders</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">
																				<span className="badge badge-soft-danger">
																					Out of stock
																				</span>
																			</h5>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$2982</h5>
																			<span className="text-muted">Amount</span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="avatar-sm bg-light rounded p-1 me-2">
																					<img
																						src="assets/images/products/img-3.png"
																						alt=""
																						className="img-fluid d-block"
																					/>
																				</div>
																				<div>
																					<h5 className="fs-14 my-1">
																						<a
																							href="apps-ecommerce-product-details.html"
																							className="text-reset">
																							Borosil Paper Cup
																						</a>
																					</h5>
																					<span className="text-muted">01 Mar 2021</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$14.00</h5>
																			<span className="text-muted">Price</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">80</h5>
																			<span className="text-muted">Orders</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">749</h5>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$1120</h5>
																			<span className="text-muted">Amount</span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="avatar-sm bg-light rounded p-1 me-2">
																					<img
																						src="assets/images/products/img-4.png"
																						alt=""
																						className="img-fluid d-block"
																					/>
																				</div>
																				<div>
																					<h5 className="fs-14 my-1">
																						<a
																							href="apps-ecommerce-product-details.html"
																							className="text-reset">
																							One Seater Sofa
																						</a>
																					</h5>
																					<span className="text-muted">11 Feb 2021</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$127.50</h5>
																			<span className="text-muted">Price</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">56</h5>
																			<span className="text-muted">Orders</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">
																				<span className="badge badge-soft-danger">
																					Out of stock
																				</span>
																			</h5>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$7140</h5>
																			<span className="text-muted">Amount</span>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="avatar-sm bg-light rounded p-1 me-2">
																					<img
																						src="assets/images/products/img-5.png"
																						alt=""
																						className="img-fluid d-block"
																					/>
																				</div>
																				<div>
																					<h5 className="fs-14 my-1">
																						<a
																							href="apps-ecommerce-product-details.html"
																							className="text-reset">
																							Stillbird Helmet
																						</a>
																					</h5>
																					<span className="text-muted">17 Jan 2021</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$54</h5>
																			<span className="text-muted">Price</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">74</h5>
																			<span className="text-muted">Orders</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">805</h5>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<h5 className="fs-14 my-1 fw-normal">$3996</h5>
																			<span className="text-muted">Amount</span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>

														<div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
															<div className="flex-shrink-0">
																<div className="text-muted">
																	Showing <span className="fw-semibold">5</span> of
																	<span className="fw-semibold">25</span> Results
																</div>
															</div>
															<ul className="pagination pagination-separated pagination-sm mb-0">
																<li className="page-item disabled">
																	<a href="#" className="page-link">
																		←
																	</a>
																</li>
																<li className="page-item">
																	<a href="#" className="page-link">
																		1
																	</a>
																</li>
																<li className="page-item active">
																	<a href="#" className="page-link">
																		2
																	</a>
																</li>
																<li className="page-item">
																	<a href="#" className="page-link">
																		3
																	</a>
																</li>
																<li className="page-item">
																	<a href="#" className="page-link">
																		→
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div className="col-xl-6">
												<div className="card card-height-100">
													<div className="card-header align-items-center d-flex">
														<h4 className="card-title mb-0 flex-grow-1">Top Sellers</h4>
														<div className="flex-shrink-0">
															<div className="dropdown card-header-dropdown">
																<a
																	className="text-reset dropdown-btn"
																	href="#"
																	data-bs-toggle="dropdown"
																	aria-haspopup="true"
																	aria-expanded="false">
																	<span className="text-muted">
																		Report<i className="mdi mdi-chevron-down ms-1"></i>
																	</span>
																</a>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="#">
																		Download Report
																	</a>
																	<a className="dropdown-item" href="#">
																		Export
																	</a>
																	<a className="dropdown-item" href="#">
																		Import
																	</a>
																</div>
															</div>
														</div>
													</div>
													{/* <!-- end card header --> */}

													<div className="card-body">
														<div className="table-responsive table-card">
															<table className="table table-centered table-hover align-middle table-nowrap mb-0">
																<tbody>
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/companies/img-1.png"
																						alt=""
																						className="avatar-sm p-2"
																					/>
																				</div>
																				<div>
																					<h5 className="fs-14 my-1 fw-medium">
																						<a
																							href="apps-ecommerce-seller-details.html"
																							className="text-reset">
																							iTest Factory
																						</a>
																					</h5>
																					<span className="text-muted">Oliver Tyler</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<span className="text-muted">Bags and Wallets</span>
																		</td>
																		<td>
																			<p className="mb-0">8547</p>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<span className="text-muted">$541200</span>
																		</td>
																		<td>
																			<h5 className="fs-14 mb-0">
																				32%
																				<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end --> */}
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/companies/img-2.png"
																						alt=""
																						className="avatar-sm p-2"
																					/>
																				</div>
																				<div className="flex-grow-1">
																					<h5 className="fs-14 my-1 fw-medium">
																						<a
																							href="apps-ecommerce-seller-details.html"
																							className="text-reset">
																							Digitech Galaxy
																						</a>
																					</h5>
																					<span className="text-muted">John Roberts</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<span className="text-muted">Watches</span>
																		</td>
																		<td>
																			<p className="mb-0">895</p>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<span className="text-muted">$75030</span>
																		</td>
																		<td>
																			<h5 className="fs-14 mb-0">
																				79%
																				<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end --> */}
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/companies/img-3.png"
																						alt=""
																						className="avatar-sm p-2"
																					/>
																				</div>
																				<div className="flex-gow-1">
																					<h5 className="fs-14 my-1 fw-medium">
																						<a
																							href="apps-ecommerce-seller-details.html"
																							className="text-reset">
																							Nesta Technologies
																						</a>
																					</h5>
																					<span className="text-muted">Harley Fuller</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<span className="text-muted">Bike Accessories</span>
																		</td>
																		<td>
																			<p className="mb-0">3470</p>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<span className="text-muted">$45600</span>
																		</td>
																		<td>
																			<h5 className="fs-14 mb-0">
																				90%
																				<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end --> */}
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/companies/img-8.png"
																						alt=""
																						className="avatar-sm p-2"
																					/>
																				</div>
																				<div className="flex-grow-1">
																					<h5 className="fs-14 my-1 fw-medium">
																						<a
																							href="apps-ecommerce-seller-details.html"
																							className="text-reset">
																							Zoetic Fashion
																						</a>
																					</h5>
																					<span className="text-muted">James Bowen</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<span className="text-muted">Clothes</span>
																		</td>
																		<td>
																			<p className="mb-0">5488</p>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<span className="text-muted">$29456</span>
																		</td>
																		<td>
																			<h5 className="fs-14 mb-0">
																				40%
																				<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end --> */}
																	<tr>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/companies/img-5.png"
																						alt=""
																						className="avatar-sm p-2"
																					/>
																				</div>
																				<div className="flex-grow-1">
																					<h5 className="fs-14 my-1 fw-medium">
																						<a
																							href="apps-ecommerce-seller-details.html"
																							className="text-reset">
																							Meta4Systems
																						</a>
																					</h5>
																					<span className="text-muted">Zoe Dennis</span>
																				</div>
																			</div>
																		</td>
																		<td>
																			<span className="text-muted">Furniture</span>
																		</td>
																		<td>
																			<p className="mb-0">4100</p>
																			<span className="text-muted">Stock</span>
																		</td>
																		<td>
																			<span className="text-muted">$11260</span>
																		</td>
																		<td>
																			<h5 className="fs-14 mb-0">
																				57%
																				<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end --> */}
																</tbody>
															</table>
															{/* <!-- end table --> */}
														</div>

														<div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
															<div className="flex-shrink-0">
																<div className="text-muted">
																	Showing <span className="fw-semibold">5</span> of
																	<span className="fw-semibold">25</span> Results
																</div>
															</div>
															<ul className="pagination pagination-separated pagination-sm mb-0">
																<li className="page-item disabled">
																	<a href="#" className="page-link">
																		←
																	</a>
																</li>
																<li className="page-item">
																	<a href="#" className="page-link">
																		1
																	</a>
																</li>
																<li className="page-item active">
																	<a href="#" className="page-link">
																		2
																	</a>
																</li>
																<li className="page-item">
																	<a href="#" className="page-link">
																		3
																	</a>
																</li>
																<li className="page-item">
																	<a href="#" className="page-link">
																		→
																	</a>
																</li>
															</ul>
														</div>
													</div>
													{/* <!-- .card-body--> */}
												</div>
												{/* <!-- .card--> */}
											</div>
											{/* <!-- .col--> */}
										</div>
										{/* <!-- end row--> */}

										<div className="row">
											<div className="col-xl-4">
												<div className="card card-height-100">
													<div className="card-header align-items-center d-flex">
														<h4 className="card-title mb-0 flex-grow-1">Store Visits by Source</h4>
														<div className="flex-shrink-0">
															<div className="dropdown card-header-dropdown">
																<a
																	className="text-reset dropdown-btn"
																	href="#"
																	data-bs-toggle="dropdown"
																	aria-haspopup="true"
																	aria-expanded="false">
																	<span className="text-muted">
																		Report<i className="mdi mdi-chevron-down ms-1"></i>
																	</span>
																</a>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="#">
																		Download Report
																	</a>
																	<a className="dropdown-item" href="#">
																		Export
																	</a>
																	<a className="dropdown-item" href="#">
																		Import
																	</a>
																</div>
															</div>
														</div>
													</div>
													{/* <!-- end card header --> */}

													<div className="card-body">
														<div
															id="store-visits-source"
															data-colors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
															className="apex-charts"
															dir="ltr"></div>
													</div>
												</div>
												{/* <!-- .card--> */}
											</div>
											{/* <!-- .col--> */}

											<div className="col-xl-8">
												<div className="card">
													<div className="card-header align-items-center d-flex">
														<h4 className="card-title mb-0 flex-grow-1">Recent Orders</h4>
														<div className="flex-shrink-0">
															<button type="button" className="btn btn-soft-info btn-sm">
																<i className="ri-file-list-3-line align-middle"></i> Generate Report
															</button>
														</div>
													</div>
													{/* <!-- end card header --> */}

													<div className="card-body">
														<div className="table-responsive table-card">
															<table className="table table-borderless table-centered align-middle table-nowrap mb-0">
																<thead className="text-muted table-light">
																	<tr>
																		<th scope="col">Order ID</th>
																		<th scope="col">Customer</th>
																		<th scope="col">Product</th>
																		<th scope="col">Amount</th>
																		<th scope="col">Vendor</th>
																		<th scope="col">Status</th>
																		<th scope="col">Rating</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<a
																				href="apps-ecommerce-order-details.html"
																				className="fw-medium link-primary">
																				#VZ2112
																			</a>
																		</td>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/users/avatar-1.jpg"
																						alt=""
																						className="avatar-xs rounded-circle"
																					/>
																				</div>
																				<div className="flex-grow-1">Alex Smith</div>
																			</div>
																		</td>
																		<td>Clothes</td>
																		<td>
																			<span className="text-success">$109.00</span>
																		</td>
																		<td>Zoetic Fashion</td>
																		<td>
																			<span className="badge badge-soft-success">Paid</span>
																		</td>
																		<td>
																			<h5 className="fs-14 fw-medium mb-0">
																				5.0<span className="text-muted fs-11 ms-1">(61 votes)</span>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end tr --> */}
																	<tr>
																		<td>
																			<a
																				href="apps-ecommerce-order-details.html"
																				className="fw-medium link-primary">
																				#VZ2111
																			</a>
																		</td>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/users/avatar-2.jpg"
																						alt=""
																						className="avatar-xs rounded-circle"
																					/>
																				</div>
																				<div className="flex-grow-1">Jansh Brown</div>
																			</div>
																		</td>
																		<td>Kitchen Storage</td>
																		<td>
																			<span className="text-success">$149.00</span>
																		</td>
																		<td>Micro Design</td>
																		<td>
																			<span className="badge badge-soft-warning">Pending</span>
																		</td>
																		<td>
																			<h5 className="fs-14 fw-medium mb-0">
																				4.5<span className="text-muted fs-11 ms-1">(61 votes)</span>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end tr --> */}
																	<tr>
																		<td>
																			<a
																				href="apps-ecommerce-order-details.html"
																				className="fw-medium link-primary">
																				#VZ2109
																			</a>
																		</td>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/users/avatar-3.jpg"
																						alt=""
																						className="avatar-xs rounded-circle"
																					/>
																				</div>
																				<div className="flex-grow-1">Ayaan Bowen</div>
																			</div>
																		</td>
																		<td>Bike Accessories</td>
																		<td>
																			<span className="text-success">$215.00</span>
																		</td>
																		<td>Nesta Technologies</td>
																		<td>
																			<span className="badge badge-soft-success">Paid</span>
																		</td>
																		<td>
																			<h5 className="fs-14 fw-medium mb-0">
																				4.9<span className="text-muted fs-11 ms-1">(89 votes)</span>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end tr --> */}
																	<tr>
																		<td>
																			<a
																				href="apps-ecommerce-order-details.html"
																				className="fw-medium link-primary">
																				#VZ2108
																			</a>
																		</td>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/users/avatar-4.jpg"
																						alt=""
																						className="avatar-xs rounded-circle"
																					/>
																				</div>
																				<div className="flex-grow-1">Prezy Mark</div>
																			</div>
																		</td>
																		<td>Furniture</td>
																		<td>
																			<span className="text-success">$199.00</span>
																		</td>
																		<td>Syntyce Solutions</td>
																		<td>
																			<span className="badge badge-soft-danger">Unpaid</span>
																		</td>
																		<td>
																			<h5 className="fs-14 fw-medium mb-0">
																				4.3<span className="text-muted fs-11 ms-1">(47 votes)</span>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end tr --> */}
																	<tr>
																		<td>
																			<a
																				href="apps-ecommerce-order-details.html"
																				className="fw-medium link-primary">
																				#VZ2107
																			</a>
																		</td>
																		<td>
																			<div className="d-flex align-items-center">
																				<div className="flex-shrink-0 me-2">
																					<img
																						src="assets/images/users/avatar-6.jpg"
																						alt=""
																						className="avatar-xs rounded-circle"
																					/>
																				</div>
																				<div className="flex-grow-1">Vihan Hudda</div>
																			</div>
																		</td>
																		<td>Bags and Wallets</td>
																		<td>
																			<span className="text-success">$330.00</span>
																		</td>
																		<td>iTest Factory</td>
																		<td>
																			<span className="badge badge-soft-success">Paid</span>
																		</td>
																		<td>
																			<h5 className="fs-14 fw-medium mb-0">
																				4.7
																				<span className="text-muted fs-11 ms-1">(161 votes)</span>
																			</h5>
																		</td>
																	</tr>
																	{/* <!-- end tr --> */}
																</tbody>
																{/* <!-- end tbody --> */}
															</table>
															{/* <!-- end table --> */}
														</div>
													</div>
												</div>
												{/* <!-- .card--> */}
											</div>
											{/* <!-- .col--> */}
										</div>
										{/* <!-- end row--> */}
									</div>
									{/* <!-- end .h-100--> */}
								</div>
								{/* <!-- end col --> */}

								<div className="col-auto layout-rightside-col">
									<div className="overlay"></div>
									<div className="layout-rightside">
										<div className="card h-100 rounded-0">
											<div className="card-body p-0">
												<div className="p-3">
													<h6 className="text-muted mb-0 text-uppercase fw-semibold">
														Recent Activity
													</h6>
												</div>
												<div data-simplebar style={{maxHeight: '410px'}} className="p-3 pt-0">
													<div className="acitivity-timeline acitivity-main">
														<div className="acitivity-item d-flex">
															<div className="flex-shrink-0 avatar-xs acitivity-avatar">
																<div className="avatar-title bg-soft-success text-success rounded-circle">
																	<i className="ri-shopping-cart-2-line"></i>
																</div>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">Purchase by James Price</h6>
																<p className="text-muted mb-1">Product noise evolve smartwatch</p>
																<small className="mb-0 text-muted">02:14 PM Today</small>
															</div>
														</div>
														<div className="acitivity-item py-3 d-flex">
															<div className="flex-shrink-0 avatar-xs acitivity-avatar">
																<div className="avatar-title bg-soft-danger text-danger rounded-circle">
																	<i className="ri-stack-fill"></i>
																</div>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">
																	Added new <span className="fw-semibold">style collection</span>
																</h6>
																<p className="text-muted mb-1">By Nesta Technologies</p>
																<div className="d-inline-flex gap-2 border border-dashed p-2 mb-2">
																	<a
																		href="apps-ecommerce-product-details.html"
																		className="bg-light rounded p-1">
																		<img
																			src="assets/images/products/img-8.png"
																			alt=""
																			className="img-fluid d-block"
																		/>
																	</a>
																	<a
																		href="apps-ecommerce-product-details.html"
																		className="bg-light rounded p-1">
																		<img
																			src="assets/images/products/img-2.png"
																			alt=""
																			className="img-fluid d-block"
																		/>
																	</a>
																	<a
																		href="apps-ecommerce-product-details.html"
																		className="bg-light rounded p-1">
																		<img
																			src="assets/images/products/img-10.png"
																			alt=""
																			className="img-fluid d-block"
																		/>
																	</a>
																</div>
																<p className="mb-0 text-muted">
																	<small>9:47 PM Yesterday</small>
																</p>
															</div>
														</div>
														<div className="acitivity-item py-3 d-flex">
															<div className="flex-shrink-0">
																<img
																	src="assets/images/users/avatar-2.jpg"
																	alt=""
																	className="avatar-xs rounded-circle acitivity-avatar"
																/>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">
																	Natasha Carey have liked the products
																</h6>
																<p className="text-muted mb-1">
																	Allow users to like products in your WooCommerce store.
																</p>
																<small className="mb-0 text-muted">25 Dec, 2021</small>
															</div>
														</div>
														<div className="acitivity-item py-3 d-flex">
															<div className="flex-shrink-0">
																<div className="avatar-xs acitivity-avatar">
																	<div className="avatar-title rounded-circle bg-secondary">
																		<i className="mdi mdi-sale fs-14"></i>
																	</div>
																</div>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">
																	Today offers by
																	<a
																		href="apps-ecommerce-seller-details.html"
																		className="link-secondary">
																		Digitech Galaxy
																	</a>
																</h6>
																<p className="text-muted mb-2">
																	Offer is valid on orders of Rs.500 Or above for selected products
																	only.
																</p>
																<small className="mb-0 text-muted">12 Dec, 2021</small>
															</div>
														</div>
														<div className="acitivity-item py-3 d-flex">
															<div className="flex-shrink-0">
																<div className="avatar-xs acitivity-avatar">
																	<div className="avatar-title rounded-circle bg-soft-danger text-danger">
																		<i className="ri-bookmark-fill"></i>
																	</div>
																</div>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">Favoried Product</h6>
																<p className="text-muted mb-2">
																	Esther James have favorited product.
																</p>
																<small className="mb-0 text-muted">25 Nov, 2021</small>
															</div>
														</div>
														<div className="acitivity-item py-3 d-flex">
															<div className="flex-shrink-0">
																<div className="avatar-xs acitivity-avatar">
																	<div className="avatar-title rounded-circle bg-secondary">
																		<i className="mdi mdi-sale fs-14"></i>
																	</div>
																</div>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">
																	Flash sale starting{" "}
																	<span className="text-primary">Tomorrow.</span>
																</h6>
																<p className="text-muted mb-0">
																	Flash sale by
																	<a
																		href="javascript:void(0);"
																		className="link-secondary fw-medium">
																		Zoetic Fashion
																	</a>
																</p>
																<small className="mb-0 text-muted">22 Oct, 2021</small>
															</div>
														</div>
														<div className="acitivity-item py-3 d-flex">
															<div className="flex-shrink-0">
																<div className="avatar-xs acitivity-avatar">
																	<div className="avatar-title rounded-circle bg-soft-info text-info">
																		<i className="ri-line-chart-line"></i>
																	</div>
																</div>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">Monthly sales report</h6>
																<p className="text-muted mb-2">
																	<span className="text-danger">2 days left</span> notification to
																	submit the monthly sales report.
																	<a
																		href="javascript:void(0);"
																		className="link-warning text-decoration-underline">
																		Reports Builder
																	</a>
																</p>
																<small className="mb-0 text-muted">15 Oct</small>
															</div>
														</div>
														<div className="acitivity-item d-flex">
															<div className="flex-shrink-0">
																<img
																	src="assets/images/users/avatar-3.jpg"
																	alt=""
																	className="avatar-xs rounded-circle acitivity-avatar"
																/>
															</div>
															<div className="flex-grow-1 ms-3">
																<h6 className="mb-1 lh-base">Frank Hook Commented</h6>
																<p className="text-muted mb-2 fst-italic">
																	" A product that has reviews is more likable to be sold than a
																	product. "
																</p>
																<small className="mb-0 text-muted">26 Aug, 2021</small>
															</div>
														</div>
													</div>
												</div>

												<div className="p-3 mt-2">
													<h6 className="text-muted mb-3 text-uppercase fw-semibold">
														Top 10 Categories
													</h6>

													<ol className="ps-3 text-muted">
														<li className="py-1">
															<a href="#" className="text-muted">
																Mobile & Accessories <span className="float-end">(10,294)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Desktop <span className="float-end">(6,256)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Electronics <span className="float-end">(3,479)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Home & Furniture <span className="float-end">(2,275)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Grocery <span className="float-end">(1,950)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Fashion <span className="float-end">(1,582)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Appliances <span className="float-end">(1,037)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Beauty, Toys & More <span className="float-end">(924)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Food & Drinks <span className="float-end">(701)</span>
															</a>
														</li>
														<li className="py-1">
															<a href="#" className="text-muted">
																Toys & Games <span className="float-end">(239)</span>
															</a>
														</li>
													</ol>
													<div className="mt-3 text-center">
														<a
															href="javascript:void(0);"
															className="text-muted text-decoration-underline">
															View all Categories
														</a>
													</div>
												</div>
												<div className="p-3">
													<h6 className="text-muted mb-3 text-uppercase fw-semibold">
														Products Reviews
													</h6>
													{/* <!-- Swiper --> */}
													<div className="swiper vertical-swiper" style={{height: '250px'}}>
														<div className="swiper-wrapper">
															<div className="swiper-slide">
																<div className="card border border-dashed shadow-none">
																	<div className="card-body">
																		<div className="d-flex">
																			<div className="flex-shrink-0 avatar-sm">
																				<div className="avatar-title bg-light rounded">
																					<img
																						src="assets/images/companies/img-1.png"
																						alt=""
																						height="30"
																					/>
																				</div>
																			</div>
																			<div className="flex-grow-1 ms-3">
																				<div>
																					<p className="text-muted mb-1 fst-italic text-truncate-two-lines">
																						" Great product and looks great, lots of features. "
																					</p>
																					<div className="fs-11 align-middle text-warning">
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																					</div>
																				</div>
																				<div className="text-end mb-0 text-muted">
																					- by <cite title="Source Title">Force Medicines</cite>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="swiper-slide">
																<div className="card border border-dashed shadow-none">
																	<div className="card-body">
																		<div className="d-flex">
																			<div className="flex-shrink-0">
																				<img
																					src="assets/images/users/avatar-3.jpg"
																					alt=""
																					className="avatar-sm rounded"
																				/>
																			</div>
																			<div className="flex-grow-1 ms-3">
																				<div>
																					<p className="text-muted mb-1 fst-italic text-truncate-two-lines">
																						" Amazing template, very easy to understand and
																						manipulate. "
																					</p>
																					<div className="fs-11 align-middle text-warning">
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-half-fill"></i>
																					</div>
																				</div>
																				<div className="text-end mb-0 text-muted">
																					- by <cite title="Source Title">Henry Baird</cite>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="swiper-slide">
																<div className="card border border-dashed shadow-none">
																	<div className="card-body">
																		<div className="d-flex">
																			<div className="flex-shrink-0 avatar-sm">
																				<div className="avatar-title bg-light rounded">
																					<img
																						src="assets/images/companies/img-8.png"
																						alt=""
																						height="30"
																					/>
																				</div>
																			</div>
																			<div className="flex-grow-1 ms-3">
																				<div>
																					<p className="text-muted mb-1 fst-italic text-truncate-two-lines">
																						"Very beautiful product and Very helpful customer
																						service."
																					</p>
																					<div className="fs-11 align-middle text-warning">
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-line"></i>
																						<i className="ri-star-line"></i>
																					</div>
																				</div>
																				<div className="text-end mb-0 text-muted">
																					- by <cite title="Source Title">Zoetic Fashion</cite>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="swiper-slide">
																<div className="card border border-dashed shadow-none">
																	<div className="card-body">
																		<div className="d-flex">
																			<div className="flex-shrink-0">
																				<img
																					src="assets/images/users/avatar-2.jpg"
																					alt=""
																					className="avatar-sm rounded"
																				/>
																			</div>
																			<div className="flex-grow-1 ms-3">
																				<div>
																					<p className="text-muted mb-1 fst-italic text-truncate-two-lines">
																						" The product is very beautiful. I like it. "
																					</p>
																					<div className="fs-11 align-middle text-warning">
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-fill"></i>
																						<i className="ri-star-half-fill"></i>
																						<i className="ri-star-line"></i>
																					</div>
																				</div>
																				<div className="text-end mb-0 text-muted">
																					- by <cite title="Source Title">Nancy Martino</cite>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="p-3">
													<h6 className="text-muted mb-3 text-uppercase fw-semibold">
														Customer Reviews
													</h6>
													<div className="bg-light px-3 py-2 rounded-2 mb-2">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<div className="fs-16 align-middle text-warning">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-half-fill"></i>
																</div>
															</div>
															<div className="flex-shrink-0">
																<h6 className="mb-0">4.5 out of 5</h6>
															</div>
														</div>
													</div>
													<div className="text-center">
														<div className="text-muted">
															Total <span className="fw-medium">5.50k</span> reviews
														</div>
													</div>

													<div className="mt-3">
														<div className="row align-items-center g-2">
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0">5 star</h6>
																</div>
															</div>
															<div className="col">
																<div className="p-1">
																	<div className="progress animated-progress progress-sm">
																		<div
																			className="progress-bar bg-success"
																			role="progressbar"
																			style={{width: '50.16%'}}
																			aria-valuenow="50.16"
																			aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
															</div>
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0 text-muted">2758</h6>
																</div>
															</div>
														</div>
														{/* <!-- end row --> */}

														<div className="row align-items-center g-2">
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0">4 star</h6>
																</div>
															</div>
															<div className="col">
																<div className="p-1">
																	<div className="progress animated-progress progress-sm">
																		<div
																			className="progress-bar bg-success"
																			role="progressbar"
																			style={{width: '29.32%'}}
																			aria-valuenow="29.32"
																			aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
															</div>
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0 text-muted">1063</h6>
																</div>
															</div>
														</div>
														{/* <!-- end row --> */}

														<div className="row align-items-center g-2">
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0">3 star</h6>
																</div>
															</div>
															<div className="col">
																<div className="p-1">
																	<div className="progress animated-progress progress-sm">
																		<div
																			className="progress-bar bg-warning"
																			role="progressbar"
																			style={{width: '18.12%'}}
																			aria-valuenow="18.12"
																			aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
															</div>
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0 text-muted">997</h6>
																</div>
															</div>
														</div>
														{/* <!-- end row --> */}

														<div className="row align-items-center g-2">
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0">2 star</h6>
																</div>
															</div>
															<div className="col">
																<div className="p-1">
																	<div className="progress animated-progress progress-sm">
																		<div
																			className="progress-bar bg-success"
																			role="progressbar"
																			style={{width: '4.98%'}}
																			aria-valuenow="4.98"
																			aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
															</div>

															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0 text-muted">227</h6>
																</div>
															</div>
														</div>
														{/* <!-- end row --> */}

														<div className="row align-items-center g-2">
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0">1 star</h6>
																</div>
															</div>
															<div className="col">
																<div className="p-1">
																	<div className="progress animated-progress progress-sm">
																		<div
																			className="progress-bar bg-danger"
																			role="progressbar"
																			style={{width: '7.42%'}}
																			aria-valuenow="7.42"
																			aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
															</div>
															<div className="col-auto">
																<div className="p-1">
																	<h6 className="mb-0 text-muted">408</h6>
																</div>
															</div>
														</div>
														{/* <!-- end row --> */}
													</div>
												</div>

												<div className="card sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3">
													<div className="card-body">
														<img src="assets/images/giftbox.png" alt="" />
														<div className="mt-4">
															<h5>Invite New Seller</h5>
															<p className="text-muted lh-base">
																Refer a new seller to us and earn $100 per refer.
															</p>
															<button
																type="button"
																className="btn btn-primary btn-label rounded-pill">
																<i className="ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2"></i>
																Invite Now
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- end card--> */}
									</div>
									{/* <!-- end .rightbar--> */}
								</div>
								{/* <!-- end col --> */}
							</div>
						</div>
						{/* <!-- container-fluid --> */}
					</div>
					{/* <!-- End Page-content --> */}

					<footer className="footer">
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-6">
									<script>document.write(new Date().getFullYear());</script>© Velzon.
								</div>
								<div className="col-sm-6">
									<div className="text-sm-end d-none d-sm-block">
										Design & Develop by Themesbrand
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div>
				{/* <!-- end main content--> */}
			</div>
			{/* <!-- END layout-wrapper --> */}

			{/* <!--start back-to-top--> */}
			<button onClick="topFunction()" className="btn btn-danger btn-icon" id="back-to-top">
				<i className="ri-arrow-up-line"></i>
			</button>
			{/* <!--end back-to-top--> */}

			<div className="customizer-setting d-none d-md-block">
				<div
					className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2"
					data-bs-toggle="offcanvas"
					data-bs-target="#theme-settings-offcanvas"
					aria-controls="theme-settings-offcanvas">
					<i className="mdi mdi-spin mdi-cog-outline fs-22"></i>
				</div>
			</div>

			{/* <!-- Theme Settings --> */}
			<div className="offcanvas offcanvas-end border-0" tabIndex="-1" id="theme-settings-offcanvas">
				<div className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
					<h5 className="m-0 me-2 text-white">Theme Customizer</h5>

					<button
						type="button"
						className="btn-close btn-close-white ms-auto"
						data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<div className="offcanvas-body p-0">
					<div data-simplebar className="h-100">
						<div className="p-4">
							<h6 className="mb-0 fw-semibold text-uppercase">Layout</h6>
							<p className="text-muted">Choose your layout</p>

							<div className="row">
								<div className="col-4">
									<div className="form-check card-radio">
										<input
											id="customizer-layout01"
											name="data-layout"
											type="radio"
											value="vertical"
											className="form-check-input"
										/>
										<label
											className="form-check-label p-0 avatar-md w-100"
											htmlFor="customizer-layout01">
											<span className="d-flex gap-1 h-100">
												<span className="flex-shrink-0">
													<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
														<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
													</span>
												</span>
												<span className="flex-grow-1">
													<span className="d-flex h-100 flex-column">
														<span className="bg-light d-block p-1"></span>
														<span className="bg-light d-block p-1 mt-auto"></span>
													</span>
												</span>
											</span>
										</label>
									</div>
									<h5 className="fs-13 text-center mt-2">Vertical</h5>
								</div>
								<div className="col-4">
									<div className="form-check card-radio">
										<input
											id="customizer-layout02"
											name="data-layout"
											type="radio"
											value="horizontal"
											className="form-check-input"
										/>
										<label
											className="form-check-label p-0 avatar-md w-100"
											htmlFor="customizer-layout02">
											<span className="d-flex h-100 flex-column gap-1">
												<span className="bg-light d-flex p-1 gap-1 align-items-center">
													<span className="d-block p-1 bg-soft-primary rounded me-1"></span>
													<span className="d-block p-1 pb-0 px-2 bg-soft-primary ms-auto"></span>
													<span className="d-block p-1 pb-0 px-2 bg-soft-primary"></span>
												</span>
												<span className="bg-light d-block p-1"></span>
												<span className="bg-light d-block p-1 mt-auto"></span>
											</span>
										</label>
									</div>
									<h5 className="fs-13 text-center mt-2">Horizontal</h5>
								</div>
								<div className="col-4">
									<div className="form-check card-radio">
										<input
											id="customizer-layout03"
											name="data-layout"
											type="radio"
											value="twocolumn"
											className="form-check-input"
										/>
										<label
											className="form-check-label p-0 avatar-md w-100"
											htmlFor="customizer-layout03">
											<span className="d-flex gap-1 h-100">
												<span className="flex-shrink-0">
													<span className="bg-light d-flex h-100 flex-column gap-1">
														<span className="d-block p-1 bg-soft-primary mb-2"></span>
														<span className="d-block p-1 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 pb-0 bg-soft-primary"></span>
													</span>
												</span>
												<span className="flex-shrink-0">
													<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
													</span>
												</span>
												<span className="flex-grow-1">
													<span className="d-flex h-100 flex-column">
														<span className="bg-light d-block p-1"></span>
														<span className="bg-light d-block p-1 mt-auto"></span>
													</span>
												</span>
											</span>
										</label>
									</div>
									<h5 className="fs-13 text-center mt-2">Two Column</h5>
								</div>
								{/* <!-- end col --> */}
							</div>

							<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Color Scheme</h6>
							<p className="text-muted">Choose Light or Dark Scheme.</p>

							<div className="colorscheme-cardradio">
								<div className="row">
									<div className="col-4">
										<div className="form-check card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-layout-mode"
												id="layout-mode-light"
												value="light"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="layout-mode-light">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Light</h5>
									</div>

									<div className="col-4">
										<div className="form-check card-radio dark">
											<input
												className="form-check-input"
												type="radio"
												name="data-layout-mode"
												id="layout-mode-dark"
												value="dark"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100 bg-dark"
												htmlFor="layout-mode-dark">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-soft-light d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-soft-light d-block p-1"></span>
															<span className="bg-soft-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Dark</h5>
									</div>
								</div>
							</div>

							<div id="layout-width">
								<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Layout Width</h6>
								<p className="text-muted">Choose Fluid or Boxed layout.</p>

								<div className="row">
									<div className="col-4">
										<div className="form-check card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-layout-width"
												id="layout-width-fluid"
												value="fluid"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="layout-width-fluid">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Fluid</h5>
									</div>
									<div className="col-4">
										<div className="form-check card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-layout-width"
												id="layout-width-boxed"
												value="boxed"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100 px-2"
												htmlFor="layout-width-boxed">
												<span className="d-flex gap-1 h-100 border-start border-end">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Boxed</h5>
									</div>
								</div>
							</div>

							<div id="layout-position">
								<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Layout Position</h6>
								<p className="text-muted">Choose Fixed or Scrollable Layout Position.</p>

								<div className="btn-group radio" role="group">
									<input
										type="radio"
										className="btn-check"
										name="data-layout-position"
										id="layout-position-fixed"
										value="fixed"
									/>
									<label className="btn btn-light w-sm" htmlFor="layout-position-fixed">
										Fixed
									</label>

									<input
										type="radio"
										className="btn-check"
										name="data-layout-position"
										id="layout-position-scrollable"
										value="scrollable"
									/>
									<label className="btn btn-light w-sm ms-0" htmlFor="layout-position-scrollable">
										Scrollable
									</label>
								</div>
							</div>
							<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Topbar Color</h6>
							<p className="text-muted">Choose Light or Dark Topbar Color.</p>

							<div className="row">
								<div className="col-4">
									<div className="form-check card-radio">
										<input
											className="form-check-input"
											type="radio"
											name="data-topbar"
											id="topbar-color-light"
											value="light"
										/>
										<label
											className="form-check-label p-0 avatar-md w-100"
											htmlFor="topbar-color-light">
											<span className="d-flex gap-1 h-100">
												<span className="flex-shrink-0">
													<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
														<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
													</span>
												</span>
												<span className="flex-grow-1">
													<span className="d-flex h-100 flex-column">
														<span className="bg-light d-block p-1"></span>
														<span className="bg-light d-block p-1 mt-auto"></span>
													</span>
												</span>
											</span>
										</label>
									</div>
									<h5 className="fs-13 text-center mt-2">Light</h5>
								</div>
								<div className="col-4">
									<div className="form-check card-radio">
										<input
											className="form-check-input"
											type="radio"
											name="data-topbar"
											id="topbar-color-dark"
											value="dark"
										/>
										<label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-dark">
											<span className="d-flex gap-1 h-100">
												<span className="flex-shrink-0">
													<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
														<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
													</span>
												</span>
												<span className="flex-grow-1">
													<span className="d-flex h-100 flex-column">
														<span className="bg-primary d-block p-1"></span>
														<span className="bg-light d-block p-1 mt-auto"></span>
													</span>
												</span>
											</span>
										</label>
									</div>
									<h5 className="fs-13 text-center mt-2">Dark</h5>
								</div>
							</div>

							<div id="sidebar-size">
								<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Size</h6>
								<p className="text-muted">Choose a size of Sidebar.</p>

								<div className="row">
									<div className="col-4">
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar-size"
												id="sidebar-size-default"
												value="lg"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-size-default">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Default</h5>
									</div>

									<div className="col-4">
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar-size"
												id="sidebar-size-compact"
												value="md"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-size-compact">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 bg-soft-primary rounded mb-2"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Compact</h5>
									</div>

									<div className="col-4">
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar-size"
												id="sidebar-size-small"
												value="sm"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-size-small">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1">
															<span className="d-block p-1 bg-soft-primary mb-2"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Small (Icon View)</h5>
									</div>

									<div className="col-4">
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar-size"
												id="sidebar-size-small-hover"
												value="sm-hover"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-size-small-hover">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1">
															<span className="d-block p-1 bg-soft-primary mb-2"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Small Hover View</h5>
									</div>
								</div>
							</div>

							<div id="sidebar-view">
								<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar View</h6>
								<p className="text-muted">Choose Default or Detached Sidebar view.</p>

								<div className="row">
									<div className="col-4">
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-layout-style"
												id="sidebar-view-default"
												value="default"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-view-default">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Default</h5>
									</div>
									<div className="col-4">
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-layout-style"
												id="sidebar-view-detached"
												value="detached"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-view-detached">
												<span className="d-flex h-100 flex-column">
													<span className="bg-light d-flex p-1 gap-1 align-items-center px-2">
														<span className="d-block p-1 bg-soft-primary rounded me-1"></span>
														<span className="d-block p-1 pb-0 px-2 bg-soft-primary ms-auto"></span>
														<span className="d-block p-1 pb-0 px-2 bg-soft-primary"></span>
													</span>
													<span className="d-flex gap-1 h-100 p-1 px-2">
														<span className="flex-shrink-0">
															<span className="bg-light d-flex h-100 flex-column gap-1 p-1">
																<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
																<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
																<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															</span>
														</span>
													</span>
													<span className="bg-light d-block p-1 mt-auto px-2"></span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Detached</h5>
									</div>
								</div>
							</div>
							<div id="sidebar-color">
								<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Color</h6>
								<p className="text-muted">Choose a color of Sidebar.</p>

								<div className="row">
									<div className="col-4">
										<div
											className="form-check sidebar-setting card-radio"
											data-bs-toggle="collapse"
											data-bs-target="#collapseBgGradient.show">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar"
												id="sidebar-color-light"
												value="light"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-color-light">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Light</h5>
									</div>
									<div className="col-4">
										<div
											className="form-check sidebar-setting card-radio"
											data-bs-toggle="collapse"
											data-bs-target="#collapseBgGradient.show">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar"
												id="sidebar-color-dark"
												value="dark"
											/>
											<label
												className="form-check-label p-0 avatar-md w-100"
												htmlFor="sidebar-color-dark">
												<span className="d-flex gap-1 h-100">
													<span className="flex-shrink-0">
														<span className="bg-primary d-flex h-100 flex-column gap-1 p-1">
															<span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
															<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
														</span>
													</span>
													<span className="flex-grow-1">
														<span className="d-flex h-100 flex-column">
															<span className="bg-light d-block p-1"></span>
															<span className="bg-light d-block p-1 mt-auto"></span>
														</span>
													</span>
												</span>
											</label>
										</div>
										<h5 className="fs-13 text-center mt-2">Dark</h5>
									</div>
									<div className="col-4">
										<button
											className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseBgGradient"
											aria-expanded="false"
											aria-controls="collapseBgGradient">
											<span className="d-flex gap-1 h-100">
												<span className="flex-shrink-0">
													<span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
														<span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
														<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
													</span>
												</span>
												<span className="flex-grow-1">
													<span className="d-flex h-100 flex-column">
														<span className="bg-light d-block p-1"></span>
														<span className="bg-light d-block p-1 mt-auto"></span>
													</span>
												</span>
											</span>
										</button>
										<h5 className="fs-13 text-center mt-2">Gradient</h5>
									</div>
								</div>
								{/* <!-- end row --> */}

								<div className="collapse" id="collapseBgGradient">
									<div className="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar"
												id="sidebar-color-gradient"
												value="gradient"
											/>
											<label
												className="form-check-label p-0 avatar-xs rounded-circle"
												htmlFor="sidebar-color-gradient">
												<span className="avatar-title rounded-circle bg-vertical-gradient"></span>
											</label>
										</div>
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar"
												id="sidebar-color-gradient-2"
												value="gradient-2"
											/>
											<label
												className="form-check-label p-0 avatar-xs rounded-circle"
												htmlFor="sidebar-color-gradient-2">
												<span className="avatar-title rounded-circle bg-vertical-gradient-2"></span>
											</label>
										</div>
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar"
												id="sidebar-color-gradient-3"
												value="gradient-3"
											/>
											<label
												className="form-check-label p-0 avatar-xs rounded-circle"
												htmlFor="sidebar-color-gradient-3">
												<span className="avatar-title rounded-circle bg-vertical-gradient-3"></span>
											</label>
										</div>
										<div className="form-check sidebar-setting card-radio">
											<input
												className="form-check-input"
												type="radio"
												name="data-sidebar"
												id="sidebar-color-gradient-4"
												value="gradient-4"
											/>
											<label
												className="form-check-label p-0 avatar-xs rounded-circle"
												htmlFor="sidebar-color-gradient-4">
												<span className="avatar-title rounded-circle bg-vertical-gradient-4"></span>
											</label>
										</div>
									</div>
								</div>
							</div>

							<div id="sidebar-img">
								<h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Images</h6>
								<p className="text-muted">Choose a image of Sidebar.</p>

								<div className="d-flex gap-2 flex-wrap img-switch">
									<div className="form-check sidebar-setting card-radio">
										<input
											className="form-check-input"
											type="radio"
											name="data-sidebar-image"
											id="sidebarimg-none"
											value="none"
										/>
										<label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-none">
											<span className="avatar-md w-auto bg-light d-flex align-items-center justify-content-center">
												<i className="ri-close-fill fs-20"></i>
											</span>
										</label>
									</div>

									<div className="form-check sidebar-setting card-radio">
										<input
											className="form-check-input"
											type="radio"
											name="data-sidebar-image"
											id="sidebarimg-01"
											value="img-1"
										/>
										<label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-01">
											<img
												src="assets/images/sidebar/img-1.jpg"
												alt=""
												className="avatar-md w-auto object-cover"
											/>
										</label>
									</div>

									<div className="form-check sidebar-setting card-radio">
										<input
											className="form-check-input"
											type="radio"
											name="data-sidebar-image"
											id="sidebarimg-02"
											value="img-2"
										/>
										<label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-02">
											<img
												src="assets/images/sidebar/img-2.jpg"
												alt=""
												className="avatar-md w-auto object-cover"
											/>
										</label>
									</div>
									<div className="form-check sidebar-setting card-radio">
										<input
											className="form-check-input"
											type="radio"
											name="data-sidebar-image"
											id="sidebarimg-03"
											value="img-3"
										/>
										<label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-03">
											<img
												src="assets/images/sidebar/img-3.jpg"
												alt=""
												className="avatar-md w-auto object-cover"
											/>
										</label>
									</div>
									<div className="form-check sidebar-setting card-radio">
										<input
											className="form-check-input"
											type="radio"
											name="data-sidebar-image"
											id="sidebarimg-04"
											value="img-4"
										/>
										<label className="form-check-label p-0 avatar-sm h-auto" htmlFor="sidebarimg-04">
											<img
												src="assets/images/sidebar/img-4.jpg"
												alt=""
												className="avatar-md w-auto object-cover"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="offcanvas-footer border-top p-3 text-center">
					<div className="row">
						<div className="col-6">
							<button type="button" className="btn btn-light w-100" id="reset-layout">
								Reset
							</button>
						</div>
						<div className="col-6">
							<a
								href="https://1.envato.market/velzon-admin"
								target="_blank"
								className="btn btn-primary w-100">
								Buy Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
