import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';
import { toast } from "react-hot-toast";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [isFaculty, setIsFaculty] = useState(false);
    const [isResearcher, setIsResearcher] = useState(false);
    const [isLibrarian, setIsLibrarian] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserRole(user.role);
            setIsAdmin(user.role === 'admin');
            setIsLibrarian(user.role === 'librarian');
            setIsStudent(['underGraduate', 'postGraduate'].includes(user.role));
            setIsFaculty(user.role === 'faculty');
            setIsResearcher(user.role === 'researcher');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.success("Logout successful!");
        navigate('/auth/sign-in');
    };

   
    const isBorrower = isStudent || isFaculty || isResearcher;

    return (
        <div className={`app-menu navbar-menu ${isSidebarOpen ? 'open' : ''}`} 
             style={{ backgroundColor: '#405189' }}>
            <div className="navbar-brand-box">
                <button className="close-sidebar-btn" onClick={() => toggleSidebar(false)}>
                    &times;
                </button>
                <a className="logo logo-dark">
                    <span className="logo-sm">
                        {/* <img src={LogoSm} alt="" height="22" /> */}
                    </span>
                    <span className="logo-lg">
                        {/* <img src={LogoDark} alt="" height="17" /> */}
                    </span>
                </a>
                <a className="logo logo-light">
                    <span className="logo-sm">
                        {/* <img src={LogoSm} alt="" height="22" /> */}
                    </span>
                    <span className="logo-lg">
                        {/* <img src={LogoLight} alt="" height="17" /> */}
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div className="container-fluid">
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title">
                            <i className="ri-dashboard-2-line me-2"></i>
                            <span data-key="t-library-system">Library System</span>
                        </li>

                        {/* Dashboard - All Users */}
                        <li className="nav-item">
                            <Link to="/component/dashboard" className="nav-link">
                                <i className="ri-home-4-line me-2"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="menu-title">
                            <i className="ri-menu-2-line me-2"></i>
                            <span data-key="t-library-system">Menu</span>
                        </li>

                        {/* Books Dropdown Menu */}
                        <li className="nav-item">
                            <a className="nav-link menu-link active"
                                href="#sidebarDashboards"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebarDashboards">
                                <i className="ri-book-2-line me-2"></i>
                                <span data-key="t-dashboards">Books</span>
                            </a>
                            <div className="menu-dropdown collapse" id="sidebarDashboards">
                                <ul className="nav nav-sm flex-column">
                                    {/* Browse Books - All Users */}
                                    <li className="nav-item">
                                        <Link to="/component/browsebooks" className="nav-link">
                                            <i className="ri-search-line me-2"></i>
                                            Browse Books
                                        </Link>
                                    </li>

                                    {/* Borrower-specific menu items */}
                                    {isBorrower && (
                                        <>
                                            <li className="nav-item">
                                                <Link to="/my-borrowed" className="nav-link">
                                                    <i className="ri-bookmark-line me-2"></i>
                                                    My Borrowed Books
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/renew-books" className="nav-link">
                                                    <i className="ri-refresh-line me-2"></i>
                                                    Renew Books
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/return-books" className="nav-link">
                                                    <i className="ri-arrow-left-right-line me-2"></i>
                                                    Return Books
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/borrowing-history" className="nav-link">
                                                    <i className="ri-history-line me-2"></i>
                                                    Borrowing History
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/fines" className="nav-link">
                                                    <i className="ri-money-dollar-circle-line me-2"></i>
                                                    Fines & Payments
                                                </Link>
                                            </li>
                                        </>
                                    )}

                                    {/* Admin/Librarian-specific menu items */}
                                    {(isAdmin || isLibrarian) && (
                                        <>
                                            <li className="nav-item">
                                                <Link to="/manage-books" className="nav-link">
                                                    <i className="ri-settings-3-line me-2"></i>
                                                    Manage Books
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/all-borrowed" className="nav-link">
                                                    <i className="ri-file-list-3-line me-2"></i>
                                                    All Borrowed Books
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
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

                        {/* Notifications - All Users */}
                        <li className="nav-item">
                            <Link to="/notifications" className="nav-link">
                                <i className="ri-notification-3-line me-2"></i>
                                <span>Notifications</span>
                            </Link>
                        </li>

                        {/* Logout */}
                        <li className="nav-item">
                            <a onClick={handleLogout} 
                               className="nav-link menu-link" 
                               style={{ cursor: 'pointer' }}>
                                <i className="ri-logout-box-line me-2"></i>
                                <span>Log Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-background"></div>
        </div>
    );
}
