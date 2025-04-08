import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import axiosInstance from "../../utils/axiosInstance";

const BorrowingHistory = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);
	const [userId, setUserId] = useState(null);
	const [userRole, setUserRole] = useState(null);
  const [borrowHistory, setBorrowHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			setUserId(user.id);
			setUserRole(user.role);
		}
	}, [userId]);

  useEffect(()=>{
    const fectchBorrowingHistory = async () => {  
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("borrow/history");
        console.log(response.data);
        setBorrowHistory(response.data.borrowHistory)
        
      } catch (error) {
         console.error("Error fetching books:", error);
					toast.error("Failed to fetch books.");
      } finally{
        setIsLoading(false)
      }
    };

    fectchBorrowingHistory();
  }, []);

  function handleSearchChange(e){
    setSearchTerm(e.target.value);
  }

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
										<h4 className="mb-sm-0">Borrowing History</h4>
										<div className="page-title-right">
											<ol className="breadcrumb m-0">
												<li className="breadcrumb-item">
													<a href="">Books</a>
												</li>
												<li className="breadcrumb-item active">Borrowing History</li>
											</ol>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-3 d-flex justify-content-between">
								<input
									type="text"
									style={{ width: "320px" }}
									className="form-control"
									placeholder="Search by title or author"
									value={searchTerm}
									onChange={handleSearchChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BorrowingHistory;
