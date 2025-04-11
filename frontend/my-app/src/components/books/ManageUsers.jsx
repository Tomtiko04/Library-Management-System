import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Manage Users</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Manage Users</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <h1>Manage Users Page</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
