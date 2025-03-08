import { useState } from "react";
// import { Menu, X, Home, BarChart3, Settings } from "lucide-react";

export default function DashboardLayout() {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<div
				className={`${
					isSidebarOpen ? "w-64" : "w-20"
				} bg-blue-900 text-white transition-all duration-300 p-4 flex flex-col`}>
				<button className="mb-6 focus:outline-none" onClick={() => setSidebarOpen(!isSidebarOpen)}>
					{isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
				<nav className="flex flex-col gap-4">
					<NavItem icon={Home} label="Home" isOpen={isSidebarOpen} />
					<NavItem icon={BarChart3} label="Analytics" isOpen={isSidebarOpen} />
					<NavItem icon={Settings} label="Settings" isOpen={isSidebarOpen} />
				</nav>
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Header Navbar */}
				<header className="bg-white shadow-md p-4 flex justify-between items-center">
					<h1 className="text-xl font-bold">Dashboard</h1>
					<div className="w-10 h-10 bg-gray-300 rounded-full"></div>
				</header>

				{/* Dashboard Content */}
				<main className="p-6 flex-1 overflow-y-auto">
					<h2 className="text-lg font-semibold mb-4">Welcome to the Dashboard!</h2>
					<p className="text-gray-600">This is where your content goes.</p>
				</main>
			</div>
		</div>
	);
}

function NavItem({ icon: Icon, label, isOpen }) {
	return (
		<div className="flex items-center gap-3 cursor-pointer p-2 hover:bg-blue-700 rounded-lg">
			<Icon size={24} />
			{isOpen && <span>{label}</span>}
		</div>
	);
}
