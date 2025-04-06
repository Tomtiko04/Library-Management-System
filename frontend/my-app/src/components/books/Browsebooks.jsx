import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeLine, RiDeleteBin6Line } from "react-icons/ri";
// import { Menu, X, Home, BarChart3, Settings } from "lucide-react";

export default function BrowseBooks() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axiosInstance.delete(`/books/${id}`);
        setBooks(books.filter((book) => book._id !== id));
        toast.success("Book deleted successfully!");
      } catch (error) {
        console.error("Error deleting book:", error);
        toast.error("Failed to delete book.");
      }
    }
  };

  const handleRowClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Book List</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="">Books</a>
                      </li>
                      <li className="breadcrumb-item active">Book List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-3">
              <input
                type="text"
                style={{ width: "320px" }}
                className="form-control"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Loader */}
            {loading ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-nowrap table-striped-columns mb-0">
                  <thead className="table-light">
                    <tr>
                      {/* <th scope="col">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="cardtableCheck"/>
													<label className="form-check-label" for="cardtableCheck"></label>
												</div>
											</th> */}
                      <th scope="col">SN</th>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Category</th>
                      <th scope="col">Published Year</th>
                      <th scope="col">Availability</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBooks.length > 0 ? (
                      filteredBooks.map((book, index) => (
                        <tr
                          key={book._id}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleRowClick(book._id)}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          {/* <td>
														<div className="form-check">
															<input className="form-check-input" type="checkbox" value="" id="cardtableCheck01"/>
															<label className="form-check-label" for="cardtableCheck01"></label>
														</div>
													</td> */}
                          <td>{index + 1}</td>
                          <td>
                            <Link
                              to={`/books/${book._id}`}
                              className="fw-semiboldt"
                            >
                              {book.title}
                            </Link>
                          </td>
                          <td>{book.author}</td>
                          <td>{book.category}</td>
                          <td>{book.publishedYear}</td>
                          <td>
                            <span
                              className={`badge ${
                                book.availability ? "bg-success" : "bg-danger"
                              }`}
                            >
                              {book.availability
                                ? "Available"
                                : "Not Available"}
                            </span>
                          </td>
                          <td>
                            {/* <Link 
															to={`/books/${book._id}`} 
															className="btn btn-sm btn-light"
															onClick={(e) => {
																e.stopPropagation();  // Prevent row click when clicking the button
																console.log('Navigating to book:', book._id);
															}}
														>
															<RiEyeLine />
														</Link> */}
                            <button
                              type="button"
                              className="btn btn-sm btn-danger ms-2"
                              onClick={() => handleDelete(book._id)}
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No books found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// function NavItem({ icon: Icon, label, isOpen }) {
// 	return (
// 		<div className="flex items-center gap-3 cursor-pointer p-2 hover:bg-blue-700 rounded-lg">
// 			<Icon size={24} />
// 			{isOpen && <span>{label}</span>}
// 		</div>
// 	);
// }
