import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";

import SignIn from "./features/authetication/sigin";
import { useEffect } from "react";
import SignUp from "./features/authetication/signup";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/DashboardLayout";
import BrowseBooks from "./components/books/Browsebooks";
import ForgottenPassword from "./features/authetication/forgottenPassword";
import CreateNewPassword from "./features/authetication/createNewPassword";

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
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<BrowserRouter>
					<Routes>
						<Route path="auth/signin" element={<SignIn />} />
						<Route path="auth/signup" element={<SignUp />}/>
						<Route path="auth/reset/password" element={<ForgottenPassword />}/>
						<Route path="auth/reset/newpassword" element={<CreateNewPassword />}/>
						<Route path="component/sidebar" element={<Sidebar />}/>
						<Route path="component/dashboard" element={<Dashboard />}/>
						<Route path="component/browsebooks" element={<BrowseBooks />}/>
					</Routes>
				</BrowserRouter>
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
			</QueryClientProvider>
		</>
	);
}

export default App;
