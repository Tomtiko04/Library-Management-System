import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

const ReturnBooks = () => {
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
                    <h4 className="mb-sm-0">Return Books</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="">Books</a>
                        </li>
                        <li className="breadcrumb-item active">Return Books</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <h1>Return Books Page</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnBooks;
