import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';
import '../assets/css/app.min.css';
import { toast } from "react-hot-toast";
import images from '../assets/images/assets';

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserRole(user.role);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.success("Logout successful!");
        navigate('/auth/sign-in');
    };

    const isBorrower = ['underGraduate', 'postGraduate', 'faculty', 'researcher'].includes(userRole);
    const isAdmin = userRole === 'admin';
    const isLibrarian = userRole === 'librarian';

    return (
        <div className={`app-menu navbar-menu ${isSidebarOpen ? 'open' : 'navbar-menu-hide'}`} 
             style={{ backgroundColor: '#405189' }}>
             {/* <!-- LOGO --> */}
            <div className="navbar-brand-box">
                {/* <!-- Dark Logo--> */}
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src={images.logoSm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src={images.logoLight} alt="" height="17" />
                    </span>
                </a>
                {/* <!-- Light Logo--> */}
                <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img src={images.logoSm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src={images.logoLight} alt="" height="17" />
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>
            {/* <div className="navbar-brand-box">
                <button className="close-sidebar-btn" onClick={() => toggleSidebar(false)}>&times;</button>
                <a className="logo logo-light"><span className="logo-lg">Library System</span></a>
            </div> */}

            <div id="scrollbar" style={{overflowY: 'auto', maxHeight: '90vh'}}>
                <div className="container-fluids">
                <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">

                        {/* Dashboard - All Users */}
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link menu-link">
                                <i className="ri-home-4-line"></i> <span data-key="t-dashboards">Dashboard</span>
                            </Link>
                        </li>

                        {/* Books Section */}
                        <li className="menu-title"><i className="ri-book-2-line"></i><span data-key="t-menu">Books</span></li>

                        {/* <li className="menu-title">
                             <span></span>
                        </li> */}

                        {/* Browse Books - All Users */}
                        <li className="nav-item">
                            <Link to="/books" className="nav-link menu-link">
                                <i className="ri-search-line"></i> Browse Books
                            </Link>
                        </li>

                        {/* Borrower Menu */}
                        {isBorrower && (
                            <>
                                <li className="nav-item">
                                    <Link to="/my-borrowed" className="nav-link menu-link">
                                        <i className="ri-bookmark-line"></i> My Borrowed Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/renew-books" className="nav-link menu-link">
                                        <i className="ri-refresh-line"></i> Renew Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/return-books" className="nav-link menu-link">
                                        <i className="ri-arrow-left-right-line"></i> Return Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/borrowing-history" className="nav-link menu-link">
                                        <i className="ri-history-line"></i> Borrowing History
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/fines" className="nav-link menu-link">
                                        <i className="ri-money-dollar-circle-line"></i> Fines & Payments
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Admin & Librarian Menu */}
                        {(isAdmin || isLibrarian) && (
                            <>
                                <li className="nav-item">
                                    <Link to="/manage-books" className="nav-link menu-link">
                                        <i className="ri-settings-3-line"></i> Manage Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/all-borrowed" className="nav-link menu-link">
                                        <i className="ri-file-list-3-line"></i> Borrowed Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/manage-users" className="nav-link menu-link">
                                        <i className="ri-user-settings-line"></i> Manage Users
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Notifications - All Users */}
                        <li className="nav-item">
                            <Link to="/notifications" className="nav-link menu-link">
                                <i className="ri-notification-3-line"></i> Notifications
                            </Link>
                        </li>

                        {/* Settings - All Users */}
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link menu-link">
                                <i className="ri-settings-4-line"></i> Settings
                            </Link>
                        </li>

                        {/* Logout - All Users */}
                        <li className="nav-item">
                            <a onClick={handleLogout} className="nav-link menu-link" style={{ cursor: 'pointer' }}>
                                <i className="ri-logout-box-line"></i> Logout
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="sidebar-background"></div>
        </div>
    );
}
