import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images/assets";
import "../assets/css/app.min.css";

export default function Header({ isSidebarOpen, toggleSidebar }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserDetails(user);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successful!");

    setTimeout(() => {
      navigate("/auth/signin");
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              {/* <!-- LOGO --> */}
              {/* <div className="navbar-brand-box horizontal-logo">
							<a href="index.html" className="logo logo-dark">
								<span className="logo-sm">
									<img src="../assets/images/logo-sm.png" alt="" height="22" />
								</span>
								<span className="logo-lg">
									<img src="../assets/images/logo-dark.png" alt="" height="17" />
								</span>
							</a>

							<a href="index.html" className="logo logo-light">
								<span className="logo-sm">
									<img src="../assets/images/logo-sm.png" alt="" height="22" />
								</span>
								<span className="logo-lg">
									<img src="../assets/images/logo-light.png" alt="" height="17" />
								</span>
							</a>
						</div> */}

              <button
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
                onClick={() => toggleSidebar(!isSidebarOpen)}
              >
                <span className={`hamburger-icon ${isSidebarOpen ? "" : ""}`}>
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
                  />
                  <span className="mdi mdi-magnify search-widget-icon"></span>
                  <span
                    className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                    id="search-close-options"
                  ></span>
                </div>
              </form>
            </div>

            <div className="d-flex align-items-center">
              <div className="dropdown topbar-head-dropdown ms-1 header-item">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell fs-22"></i>
                  <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                    3<span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown"
                >
                  <div className="dropdown-head bg-primary bg-pattern rounded-top">
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 fs-16 fw-semibold text-white">
                            {" "}
                            Notifications{" "}
                          </h6>
                        </div>
                        <div className="col-auto dropdown-tabs">
                          <span className="badge badge-soft-light fs-13">
                            {" "}
                            4 New
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="px-2 pt-2">
                      <ul
                        className="nav nav-tabs dropdown-tabs nav-tabs-custom"
                        data-dropdown-tabs="true"
                        id="notificationItemsTab"
                        role="tablist"
                      >
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#all-noti-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            All (4)
                          </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#messages-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Messages
                          </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#alerts-tab"
                            role="tab"
                            aria-selected="false"
                          >
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
                      role="tabpanel"
                    >
                      <div
                        data-simplebar
                        style={{ maxHeight: "300px" }}
                        className="pe-2"
                      >
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
                                  Your <b>Elite</b> author Graphic Optimization{" "}
                                  <span className="text-secondary">reward</span>{" "}
                                  is ready!
                                </h6>
                              </a>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> Just
                                  30 sec ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="all-notification-check01"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check01"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item position-relative active">
                          <div className="d-flex">
                            <img
                              src={images.userLogo}
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Angela Bernier
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  Answered to your comment on the cash flow
                                  forecast's graph 🔔.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> 48
                                  min ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="all-notification-check02"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check02"
                                ></label>
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
                                  You have received{" "}
                                  <b className="text-success">20</b> new
                                  messages in the conversation
                                </h6>
                              </a>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> 2
                                  hrs ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="all-notification-check03"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check03"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                          <div className="d-flex">
                            <img
                              src={images.userLogo}
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Maureen Gibson
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  We talked about a project on linkedin.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> 4
                                  hrs ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="all-notification-check04"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check04"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="my-3 text-center">
                          <button
                            type="button"
                            className="btn btn-soft-success waves-effect waves-light"
                          >
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
                      aria-labelledby="messages-tab"
                    >
                      <div
                        data-simplebar
                        style={{ maxHeight: "300px" }}
                        className="pe-2"
                      >
                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src={images.userLogo}
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  James Lemire
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  We talked about a project on linkedin.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> 30
                                  min ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="messages-notification-check01"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check01"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src={images.userLogo}
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Angela Bernier
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  Answered to your comment on the cash flow
                                  forecast's graph 🔔.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> 2
                                  hrs ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="messages-notification-check02"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check02"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src={images.userLogo}
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Kenneth Brown
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  Mentionned you in his comment on 📃 invoice
                                  #12501.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> 10
                                  hrs ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="messages-notification-check03"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check03"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src={images.userLogo}
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Maureen Gibson
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  We talked about a project on linkedin.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline"></i> 3
                                  days ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="messages-notification-check04"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check04"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="my-3 text-center">
                          <button
                            type="button"
                            className="btn btn-soft-success waves-effect waves-light"
                          >
                            View All Messages{" "}
                            <i className="ri-arrow-right-line align-middle"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade p-4"
                      id="alerts-tab"
                      role="tabpanel"
                      aria-labelledby="alerts-tab"
                    >
                      <div className="w-25 w-sm-50 pt-3 mx-auto">
                        <img
                          src={images.Bell}
                          className="img-fluid"
                          alt="user-pic"
                        />
                      </div>
                      <div className="text-center pb-5 mt-2">
                        <h6 className="fs-18 fw-semibold lh-base">
                          Hey! You have no any notifications{" "}
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
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      src={images.userLogo}
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        {userDetails.name}
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                        {userDetails.libraryId}
                      </span>
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <h6 className="dropdown-header">
                    Welcome {userDetails.name}!
                  </h6>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/user-profile">
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                    <span className="align-middle">Profile</span>
                  </Link>
                  <Link className="dropdown-item" to="/settings">
                    <span className="badge bg-soft-success text-success mt-1 float-end">
                      New
                    </span>
                    <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>
                    <span className="align-middle">Settings</span>
                  </Link>
                  <div className="dropdown-divider"></div>

                  {/* <a className="dropdown-item" href="pages-profile.html">
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
								</a> */}
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target=".bs-example-modal-center01"
                  >
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

      <div
        className="modal fade bs-example-modal-center01"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center p-5">
              <lord-icon
                src="https://cdn.lordicon.com/hrqwmuhr.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <div className="mt-4">
                <h4 className="mb-3">Confirm!</h4>
                <p className="text-muted mb-4">
                  {" "}
                  Are you sure you want to logout?
                </p>
                <div className="hstack gap-2 justify-content-center">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <a
                    href="javascript:void(0);"
                    onClick={handleLogout}
                    className="btn btn-danger"
                  >
                    Confirm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
