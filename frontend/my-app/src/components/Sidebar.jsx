import { Link } from 'react-router-dom';
import './style.css';

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    return (
        <>
            <div>
                <div className={`app-menu navbar-menu ${isSidebarOpen ? 'open' : ''}`} style={{ backgroundColor: '#405189' }}>
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
                        <div className="container-fluid mt-4">
                            <ul className="navbar-nav" id="navbar-nav">
							<li className="menu-title">
    <span data-key="t-library-system">Library System</span>
</li>
                                <li className="nav-item">
                                    <Link to="/dase/dashboard" className="nav-link" data-key="t-dashboards">
                                        <span data-key="t-dashboards">Dashboard</span>
                                    </Link>
                                </li>
								<li className="menu-title">
    <span data-key="t-library-system">Menu</span>
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
																		<span data-key="t-dashboards">Books</span>
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
																					Browse Books
																				</a>
																			</li>
																			<li className="nav-item">
																				<a
																					href="dashboard-crm.html"
																					className="nav-link"
																					data-key="t-crm">
																					Borrowed Books
																				</a>
																			</li>
																			<li className="nav-item">
																				<a
																					href="dashboard-crm.html"
																					className="nav-link"
																					data-key="t-crm">
																					Renew Books
																				</a>
																			</li>
                                                                            <li className="nav-item">
																				<a
																					href="dashboard-crm.html"
																					className="nav-link"
																					data-key="t-crm">
																					Return Books
																				</a>
																			</li>
                                                                            <li className="nav-item">
																				<a
																					href="dashboard-crm.html"
																					className="nav-link"
																					data-key="t-crm">
																					Borrowing History
																				</a>
																			</li>
                                                                             <li className="nav-item">
																				<a
																					href="dashboard-crm.html"
																					className="nav-link"
																					data-key="t-crm">
																					Fines & Payments
																				</a>
																			</li>
																		</ul>
																	</div>
																</li>{" "}
                               
                                
                                
                                <li className="nav-item">
                                    <Link to="/dase/engineer" className="nav-link" data-key="t-engineer">
                                        <span data-key="t-engineer">Manage Users</span>
                                    </Link>
                                </li>
								 
								 <li className="nav-item">
                                    <Link to="/dase/engineer" className="nav-link" data-key="t-engineer">
                                        <span data-key="t-engineer">Notifications</span>
                                    </Link>
                                </li>
								 <li className="nav-item">
                                    <Link to="/dase/engineer" className="nav-link" data-key="t-engineer">
                                        <span data-key="t-engineer">Settings</span>
                                    </Link>
                                </li>
								
                                <li className="nav-item">
                                    <a  className="nav-link menu-link" data-key="t-layouts">
                                        <span data-key="t-layouts">Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-background"></div>
                </div>
            </div>
        </>
    );
}
