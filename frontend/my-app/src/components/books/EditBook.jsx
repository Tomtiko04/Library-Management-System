import React, { useState, useMemo, useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiEyeLine, RiDeleteBin6Line } from "react-icons/ri";
// import { Menu, X, Home, BarChart3, Settings } from "lucide-react";

export default function EditBook() {
    const { id } = useParams();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [books, setBooks] = useState([]);
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
        const fetchBookDetails = async () => {
            try {
                // console.log("Book ID:", id); // Log the book ID
                const response = await axiosInstance.get(`/books/${id}`);
                const data = response.data.book;
                formData.title = data.title;
                formData.author = data.author;
                formData.isbn = data.isbn;
                formData.category = data.category;
                formData.publishedYear = data.publishedYear;
                formData.totalCopies = data.totalCopies;
                formData.availableCopies = data.availableCopies;
                formData.createdBy = data.createdBy;
                // setBook(response.data.book);
                // console.log("Book Details:", response.data.book); // Log the book details
            } catch (error) {
                console.error("Error fetching book details:", error);
                toast.error("Failed to fetch book details");
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

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
            const response = await axiosInstance.patch(`/books/${id}`, formattedData);

            // if (modalRef.current) {
            //     const modal = new window.bootstrap.Modal(modalRef.current);
            //     modal.hide();
            // }

            toast.success("Book updated successfully!");
            navigate('/books');
        } catch (error) {
            console.error("Error updating book:", error);
            toast.error("Failed to update book.");
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
                        <div className="modal-content mx-auto position-relative" style={{
                            width: '40em',
                        }}>
                            {loading &&
                                <div className="text-center" style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    right: '0',
                                    bottom: '0',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: '99',
                                    background: 'rgba(255,255,255,0.9)'
                                }}>
                                    <div className="spinner-border" role="status" style={{

                                    }}>
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            }

                            <div className="modal-header mb-0">
                                <h4 className="mb-0">Edit Book</h4>
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
                                        {isLoading ? "Updating..." : "Update Book"}
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