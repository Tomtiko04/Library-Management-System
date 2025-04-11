import React, { useState, useMemo, useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeLine, RiDeleteBin6Line } from "react-icons/ri";
// import { Menu, X, Home, BarChart3, Settings } from "lucide-react";

export default function CreateBook() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        isbn: "",
        category: "",
        publishedYear: "",
        totalCopies: "",
        availableCopies: "",
        createdBy: userId ?? "",
    });

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axiosInstance.get("/books");
                setBooks(response.data.books);
            } catch (error) {
                console.error("Error fetching books:", error);
                toast.error("Failed to fetch books.");
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const uniqueCategories = useMemo(() => {
        const categories = books.map((book) => book.category);
        return [...new Set(categories)];
    }, [books]);

    const handleCategoryChange = (event) => {
        formData.category = event.target.value;
        setSelectedCategory(event.target.value);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserId(user.id);
            setUserRole(user.role);
        }
    }, [userId]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.category === "") {
            toast.error('Kindly select a category to proceed');
            return;
        }

        const formattedData = {
            ...formData,
            publishedYear: Number(formData.publishedYear),
            totalCopies: Number(formData.totalCopies),
            availableCopies: Number(formData.availableCopies),
            createdBy: userId,
        };        

        setIsLoading(true);

        try {
            const response = await axiosInstance.post("/books", formattedData);
            // console.log("Book created:", response.data);

            // if (modalRef.current) {
            //     const modal = new window.bootstrap.Modal(modalRef.current);
            //     modal.hide();
            // }

            toast.success("Book created successfully!");
            navigate('/books');
        } catch (error) {
            console.error("Error creating book:", error);
            toast.error("Failed to create book.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />
            <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="modal-content mx-auto" style={{
                            width: '40em',
                        }}>
                            <div className="modal-header mb-0">
                                <h4 className="mb-0">Add New Book</h4>
                            </div>
                            <div className="modal-body text-left p-4 pt-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="title"
                                            className="form-label d-block text-left w-100"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="author"
                                            className="form-label d-block text-left w-100"
                                        >
                                            Author
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="author"
                                            name="author"
                                            value={formData.author}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="isbn"
                                            className="form-label d-block text-left w-100"
                                        >
                                            ISBN
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="isbn"
                                            name="isbn"
                                            value={formData.isbn}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="category"
                                            className="form-label d-block text-left w-100"
                                        >
                                            Category
                                        </label>
                                        <select
                                            className="ml-0 sign__select form-control"
                                            value={formData.category}
                                            onChange={handleCategoryChange}
                                            style={{ minWidth: "130px" }}
                                        >
                                            <option value="">All Categories</option>
                                            {uniqueCategories.map((category, index) => (
                                                <option key={index} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {/* <input
                                            type="text"
                                            className="form-control"
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                        /> */}
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="publishedYear"
                                            className="form-label d-block text-left w-100"
                                        >
                                            Published Year
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="publishedYear"
                                            name="publishedYear"
                                            value={formData.publishedYear}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="totalCopies"
                                            className="form-label d-block text-left w-100"
                                        >
                                            Total Copies
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="totalCopies"
                                            name="totalCopies"
                                            value={formData.totalCopies}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="availableCopies"
                                            className="form-label d-block text-left w-100"
                                        >
                                            Available Copies
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="availableCopies"
                                            name="availableCopies"
                                            value={formData.availableCopies}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Creating..." : "Create Book"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}