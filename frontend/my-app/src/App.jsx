import { Routes, Route } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import SignIn from "./features/authetication/sigin";
import { useEffect } from "react";
import SignUp from "./features/authetication/signup";
import Dashboard from "./components/DashboardLayout";
import BrowseBooks from "./components/books/Browsebooks";
import BookDetails from "./components/books/BookDetails";

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

  useEffect(() => {
    // Initialize Waves if it exists
    if (typeof window.Waves !== "undefined") {
      window.Waves.init();

      // Add waves effect to buttons
      document.querySelectorAll(".btn").forEach((button) => {
        button.classList.add("waves-effect");
      });
    }
  }, []);

  return (
    <div className="app">
      {/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} /> */}
      {/* <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} /> */}
      <main
        className={`main-content ${!isSidebarOpen ? "sidebar-closed" : ""}`}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Routes>
            <Route path="auth/sign-in" element={<SignIn />} />
            <Route path="auth/sign-up" element={<SignUp />} />
            {/* <Route path="/sidebar" element={<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="component/browsebooks" element={<BrowseBooks />}/> */}
            <Route path="/books" element={<BrowseBooks />} />
            <Route path="/books/:id" element={<BookDetails />} />
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
