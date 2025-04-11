import { Routes, Route, Navigate } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";

import SignIn from "./features/authetication/signin";
import SignUp from "./features/authetication/signup";
import Dashboard from "./components/DashboardLayout";
import BrowseBooks from "./components/books/Browsebooks";
import CreateBook from "./components/books/CreateBook";
import ForgottenPassword from "./features/authetication/forgottenPassword";
import CreateNewPassword from "./features/authetication/createNewPassword";
import ManageBooks from "./components/books/ManageBooks";
import BookDetails from "./components/books/BookDetails";
import AllBorrowedBooks from "./components/books/BorrowedBooks";
import MyBorrowedBooks from "./components/books/MyBorrowedBooks";
import RenewBooks from "./components/books/RenewBooks";
import ReturnBooks from "./components/books/ReturnBooks";
import BorrowingHistory from "./components/books/BorrowingHistory";
import FinesPayments from "./components/books/FinesPayments";
import ManageUsers from "./components/books/ManageUsers";
import Notifications from "./components/books/Notifications";
import Settings from "./components/books/Settings";
import UserProfile from "./components/books/UserProfile";
import EditBook from "./components/books/EditBook";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(error.message);
    },
  }),
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000
      staleTime: 0,
    },
  },
});

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    // Initialize Waves if it exists
    if (typeof window.Waves !== "undefined") {
      window.Waves.init();

      // Add waves effect to buttons
      document.querySelectorAll(".btn").forEach((button) => {
        button.classList.add("waves-effect");
      });
    }

    // Check authentication status
    const user = JSON.parse(localStorage.getItem("user"));
    setUserDetails(user);
    
    setTimeout(() => {
      if (user && !window.location.pathname.includes('/auth/signin')) {
        navigate(`${window.location.pathname}`);
      } else if (user && window.location.pathname.includes('/auth/signin')) {
        navigate("/dashboard");
      } else {
        // If not authenticated, navigate to signin
        navigate("/auth/signin");
      }
    }, 1000);
  }, []);


  return (
		<div className="app">
			{/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} /> */}
			{/* <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} /> */}
			<main className={`main-content ${!isSidebarOpen ? "sidebar-closed" : ""}`}>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<Routes>
						<Route path="auth/signin" element={<SignIn />} />
						<Route path="auth/signup" element={<SignUp />} />
						<Route path="auth/reset/password" element={<ForgottenPassword />} />
						<Route path="auth/reset/newpassword" element={<CreateNewPassword />} />
						{/* <Route path="/sidebar" element={<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />} /> */}
						<Route index element={<Dashboard />} />
						<Route path="/dashboard" element={<Dashboard />} />
						{/* <Route path="component/browsebooks" element={<BrowseBooks />}/> */}
						<Route path="/books" element={<BrowseBooks />} />
						<Route path="/books/create" element={<CreateBook />} />
						<Route path="/books/edit/:id" element={<EditBook />} />
						<Route path="/manage-books" element={<ManageBooks />} />
						<Route path="/all-borrowed" element={<AllBorrowedBooks />} />
						<Route path="/my-borrowed" element={<MyBorrowedBooks />} />
						<Route path="/renew-books" element={<RenewBooks />} />
						<Route path="/return-books" element={<ReturnBooks />} />
						<Route path="/borrowing-history" element={<BorrowingHistory />} />
						<Route path="/fines" element={<FinesPayments />} />
						<Route path="/manage-users" element={<ManageUsers />} />
						<Route path="/notifications" element={<Notifications />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/user-profile" element={<UserProfile />} />
						<Route path="/books/:id" element={<BookDetails />} />
            <Route path="/" element={<Navigate to={userDetails ? "/dashboard" : "/auth/signin"} />} />
					</Routes>
				</QueryClientProvider>
				<Toaster
					position="top-right"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 5000,
						},
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							// backgroundColor: "bg-orange-500",
							// color: "text-white",
						},
					}}
				/>
			</main>
			{/* Mobile overlay */}
			{/* <div 
				className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
				onClick={() => setSidebarOpen(false)}
			/> */}
		</div>
	);
}

export default App;
