import React, { useState, useMemo, useEffect, useRef } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);
  const [BookID, setBookID] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
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

  const filteredBooks = useMemo(() => {
    return books.filter((item) => {
      const matchesSearchTerm = Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;
      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, selectedCategory, books]);

  const sortedData = useMemo(() => {
    return filteredBooks.sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [filteredBooks, sortOrder]);

  const totalEntries = sortedData.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, sortedData, itemsPerPage, sortOrder]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleClick = (event, page) => {
    event.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    
    await axiosInstance.delete(`/books/${id}`);
    setBooks(books.filter((book) => book._id !== id));
    toast.success("Book deleted successfully!");

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
    
    // if (window.confirm("Are you sure you want to delete this book?")) {
    //   try {
    //   } catch (error) {
    //     console.error("Error deleting book:", error);
    //     toast.error("Failed to delete book.");
    //   }
    // }
  };

  const handleGoToCreate = () => {
    navigate(`/books/create`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isBorrower = [
    "underGraduate",
    "postGraduate",
    "faculty",
    "nonTeachingStaff",
    "researcher",
  ].includes(userRole);
  const isAdmin = userRole === "admin";
  const isLibrarian = userRole === "librarian";

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
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Book List</li>
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
              <div className="d-flex">
                <select
                  className="ml-0 sign__select form-control"
                  value={selectedCategory}
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
                <div
                  className="main__filter-dropdowns d-flex"
                  style={{ gap: "10px", marginLeft: "10px" }}
                >
                  <select
                    className="ml-0 sign__select form-control"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    style={{ minWidth: "80px" }}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>

                  <select
                    className="sign__select form-control me-2"
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                    style={{ minWidth: "130px" }}
                  >
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>  

                {(isAdmin || isLibrarian) && (
                  <button
                    type="button"
                    className="btn btn-primary w-full me-3"
                    onClick={handleGoToCreate}
                    style={{whiteSpace: 'nowrap'}}
                  >
                    Add New Book
                  </button>
                )}
              </div>
            </div>

            {loading ? (
              <div className="text-center py-5 my-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-nowrap table-striped-columns mb-0">
                  <thead className="table-light">
                    <tr>
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
                    {currentData.length > 0 ? (
                      currentData.map((book, index) => (
                        <tr key={book._id} className="transition-colors">
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
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                style={{ minHeight: `${(isAdmin || isLibrarian) ? '123px' : 'auto'}` }}
                              >
                                <Link
                                  className="dropdown-item"
                                  to={`/books/${book._id}`}
                                >
                                  <i className="mdi mdi-eye text-muted fs-16 align-middle me-1"></i>
                                  <span className="align-middle">View</span>
                                </Link>
                                
                                {(isAdmin || isLibrarian) && (
                                  <>
                                <Link
                                  className="dropdown-item"
                                  to={`/books/edit/${book._id}`}
                                >
                                  <i className="mdi mdi-pen text-muted fs-16 align-middle me-1"></i>
                                  <span className="align-middle">Edit</span>
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to={``}
                                  onClick={() => setBookID(book._id)}
                                  data-bs-toggle="modal"
                                  data-bs-target=".bs-example-modal-deletebook"
                                >
                                  <i className="mdi mdi-delete text-danger fs-16 align-middle me-1"></i>
                                  <span className="align-middle  text-danger ">
                                    Delete
                                  </span>
                                </Link>
                                  </>
                                )}
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

            {currentData?.length > 0 && (
              <nav className="w-100 d-sm-flex justify-content-between align-items-center pl-3">
                <p className="mb-0 text-center text-sm-left">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, totalEntries)} of{" "}
                  {totalEntries} entries
                </p>
                <ul
                  className="pagination mx-auto mx-sm-0 ml-sm-auto pt-3"
                  style={{ width: "fit-content" }}
                >
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link px-3"
                      onClick={(event) => handleClick(event, currentPage - 1)}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={(event) => handleClick(event, i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={(event) => handleClick(event, currentPage + 1)}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>

      <div
        className="modal fade bs-example-modal-deletebook"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center p-5">
              <lord-icon
                src="https://cdn.lordicon.com/hrqwmuhr.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <div className="mt-4">
                <h4 className="mb-3">Confirm!</h4>
                <p className="text-muted mb-4">
                  {" "}
                  Are you sure you want to delete this book?
                </p>
                <div className="hstack gap-2 justify-content-center">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={(e) => handleDelete(e, BookID)}
                  >
                    Confirm
                  </a>
                </div>
              </div>
            </div>
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
