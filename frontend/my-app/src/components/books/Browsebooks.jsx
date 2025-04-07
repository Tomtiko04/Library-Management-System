import { useState, useEffect, useRef } from "react";
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
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
          setUserId(user.id);
          setUserRole(user.role);
      }
  }, [userId]);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    publishedYear: "",
    totalCopies: "",
    availableCopies: "",
    createdBy: userId ?? '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert specific fields to numbers
    const formattedData = {
        ...formData,
        publishedYear: Number(formData.publishedYear),
        totalCopies: Number(formData.totalCopies),
        availableCopies: Number(formData.availableCopies),
        createdBy: userId,
    };

    console.log('formData: ', formattedData);

    try {
        const response = await axiosInstance.post("/books", formattedData);
        console.log("Book created:", response.data);
        
        // Close the modal
        if (modalRef.current) {
            const modal = new window.bootstrap.Modal(modalRef.current);
            modal.hide();
        }

        // Reset the form
        // setFormData({
        //     title: "",
        //     author: "",
        //     isbn: "",
        //     category: "",
        //     publishedYear: "",
        //     totalCopies: "",
        //     availableCopies: "",
        //     createdBy: userId,
        // });
        toast.success("Book created successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
    } catch (error) {
        console.error("Error creating book:", error);
        toast.error("Failed to create book.");
    }
  };

  const isBorrower = ['underGraduate', 'postGraduate', 'faculty', 'researcher'].includes(userRole);
  const isAdmin = userRole === 'admin';
  const isLibrarian = userRole === 'librarian';


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
            <div className="mb-3 d-flex justify-content-between">
              <input
                type="text"
                style={{ width: "320px" }}
                className="form-control"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {(isAdmin || isLibrarian) && (
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary w-full me-3"
                  data-bs-toggle="modal"
                  data-bs-target=".bs-example-modal-center"
                >
                  Add New Book
                </button>
                <div
                  className="modal fade bs-example-modal-center"
                  ref={modalRef}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="mySmallModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header mb-0">
                        <h4 className="mb-0">Add New Book</h4>
                      </div>
                      <div className="modal-body text-left p-4 pt-4">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="title" className="form-label d-block text-left w-100">
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
                            <label htmlFor="author" className="form-label d-block text-left w-100">
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
                            <label htmlFor="isbn" className="form-label d-block text-left w-100">
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
                            <label htmlFor="category" className="form-label d-block text-left w-100">
                              Category
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="category"
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              required
                            />
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
                            <label htmlFor="totalCopies" className="form-label d-block text-left w-100">
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
                          <button type="submit" className="btn btn-success">
                            Create Book
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
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
                          //   style={{ cursor: "pointer" }}
                          //   onClick={() => handleRowClick(book._id)}
                          className="transition-colors"
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
                            {/* <button
                              type="button"
                              className="btn btn-sm btn-danger ms-2"
                              onClick={() => handleDelete(book._id)}
                            >
                              <RiDeleteBin6Line />
                            </button> */}
                            <div
                              className="dropdown header-item topbar-user"
                              style={{ height: "30px" }}
                            >
                              <button
                                type="button"
                                className="btn"
                                id="page-header-user-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="d-flex align-items-center">
                                  <i className="mdi mdi-dots-vertical text-muted fs-16 align-middle me-1"></i>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                {/* <h6 className="dropdown-header">
                                  Welcome Anna!
                                </h6>
                                <div className="dropdown-divider"></div> */}
                                <Link
                                  className="dropdown-item"
                                  to={`/books/${book._id}`}
                                >
                                  <i className="mdi mdi-eye text-muted fs-16 align-middle me-1"></i>
                                  <span className="align-middle">View</span>
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to={`/books/${book._id}`}
                                >
                                  <i className="mdi mdi-pen text-muted fs-16 align-middle me-1"></i>
                                  <span className="align-middle">Edit</span>
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to={``}
                                  onClick={() => handleDelete(book._id)}
                                >
                                  <i className="mdi mdi-delete text-muted fs-16 align-middle me-1"></i>
                                  <span className="align-middle">Delete</span>
                                </Link>
                              </div>
                            </div>
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
