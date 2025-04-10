import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import "../assets/css/app.min.css";
import { toast } from "react-hot-toast";
import images from "../assets/images/assets";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserRole(user.role);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
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

  const isBorrower = [
    "underGraduate",
    "postGraduate",
    "faculty",
    "nonTeachingStaff",
    "researcher",
  ].includes(userRole);
  const isAdmin = userRole === "admin";
  const isLibrarian = userRole === "librarian";

  return (
    <>
      <div
        className={`app-menu navbar-menu ${
          isSidebarOpen ? "open" : "navbar-menu-hide"
        }`}
        style={{ backgroundColor: "#405189" }}
      >
        {/* <!-- LOGO --> */}
        <div className="navbar-brand-box">
          {/* <!-- Dark Logo--> */}
          <Link to={"/dashboard"} className="logo logo-dark">
            <span className="logo-sm">
              <img src={images.logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={images.logoLight} alt="" height="17" />
            </span>
          </Link>
          {/* <!-- Light Logo--> */}
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src={images.logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={images.logoLight} alt="" height="17" />
            </span>
          </a>
          <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        {/* <div className="navbar-brand-box">
                <button className="close-sidebar-btn" onClick={() => toggleSidebar(false)}>&times;</button>
                <a className="logo logo-light"><span className="logo-lg">Library System</span></a>
            </div> */}

        <div id="scrollbar" style={{ overflowY: "auto", maxHeight: "90vh" }}>
          <div className="container-fluids">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
              {/* Dashboard - All Users */}
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className={`nav-link menu-link ${
                    currentPath.includes('/dashboard') ? "active" : ""
                  }`}
                >
                  <i className="ri-home-4-line"></i>{" "}
                  <span data-key="t-dashboards">Dashboard</span>
                </Link>
              </li>

              {/* Books Section */}
              {/* <li className="menu-title">
                <i className="ri-book-2-line"></i>
                <span data-key="t-menu">Books</span>
              </li> */}

              {/* <li className="menu-title">
                             <span></span>
                        </li> */}

              {/* Browse Books - All Users */}
              <li className="nav-item">
                <Link to="/books"
                  className={`nav-link menu-link ${
                    currentPath.includes('/books') ? "active" : ""
                  }`}>
                  <i className="ri-search-line"></i> Browse Books
                </Link>
              </li>

              {/* Borrower Menu */}
              {isBorrower && (
                <>
                  <li className="nav-item">
                    <Link to="/my-borrowed"
                  className={`nav-link menu-link ${
                    currentPath.includes('/my-borrowed') ? "active" : ""
                  }`}>
                      <i className="ri-bookmark-line"></i> My Borrowed Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/renew-books"
                  className={`nav-link menu-link ${
                    currentPath.includes('/renew-books') ? "active" : ""
                  }`}>
                      <i className="ri-refresh-line"></i> Renew Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/return-books"
                  className={`nav-link menu-link ${
                    currentPath.includes('/return-books') ? "active" : ""
                  }`}>
                      <i className="ri-arrow-left-right-line"></i> Return Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/borrowing-history"
                     
                  className={`nav-link menu-link ${
                    currentPath.includes('/borrowing-history') ? "active" : ""
                  }`}
                    >
                      <i className="ri-history-line"></i> Borrowing History
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/fines"
                  className={`nav-link menu-link ${
                    currentPath.includes('/fines') ? "active" : ""
                  }`}>
                      <i className="ri-money-dollar-circle-line"></i> Fines &
                      Payments
                    </Link>
                  </li>
                </>
              )}

              {/* Admin & Librarian Menu */}
              {(isAdmin || isLibrarian) && (
                <>
                  <li className="nav-item">
                    <Link to="/manage-books"
                  className={`nav-link menu-link ${
                    currentPath.includes('/manage-books') ? "active" : ""
                  }`}>
                      <i className="ri-settings-3-line"></i> Manage Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/all-borrowed"
                  className={`nav-link menu-link ${
                    currentPath.includes('/all-borrowed') ? "active" : ""
                  }`}>
                      <i className="ri-file-list-3-line"></i> Borrowed Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manage-users"
                  className={`nav-link menu-link ${
                    currentPath.includes('/manage-users') ? "active" : ""
                  }`}>
                      <i className="ri-user-settings-line"></i> Manage Users
                    </Link>
                  </li>
                </>
              )}

              {/* Notifications - All Users */}
              <li className="nav-item">
                <Link to="/notifications"
                  className={`nav-link menu-link ${
                    currentPath.includes('/notifications') ? "active" : ""
                  }`}>
                  <i className="ri-notification-3-line"></i> Notifications
                </Link>
              </li>
                        {/* Admin/Librarian-specific menu items outside Books dropdown */}
                        {(isAdmin || isLibrarian) && (
                            <li className="nav-item">
                                <Link to="/manage-users" className="nav-link">
                                    <i className="ri-user-settings-line me-2"></i>
                                    <span>Manage Users</span>
                                </Link>
                            </li>
                        )}

                        {/* TODO Setting for all users */}

              {/* Settings - All Users */}
              <li className="nav-item">
                <Link to="/settings"
                  className={`nav-link menu-link ${
                    currentPath.includes('/settings') ? "active" : ""
                  }`}>
                  <i className="ri-settings-4-line"></i> Settings
                </Link>
              </li>

              {/* Logout - All Users */}
              <li className="nav-item">
                <a
                  // onClick={handleLogout}
                  className="nav-link menu-link"
                  style={{ cursor: "pointer" }}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target=".bs-example-modal-center01"
                >
                  <i className="ri-logout-box-line"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-background"></div>
      </div>

      <div
        className="modal fade bs-example-modal-center01"
        tabIndex="-1"
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
