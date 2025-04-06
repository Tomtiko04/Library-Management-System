import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { FiCalendar, FiShare2, FiBookmark } from "react-icons/fi";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        console.log("Book ID:", id); // Log the book ID
        const response = await axiosInstance.get(`/books/${id}`);
        setBook(response.data.book);
        console.log("Book Details:", response.data.book); // Log the book details
      } catch (error) {
        console.error("Error fetching book details:", error);
        toast.error("Failed to fetch book details");
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  // if (loading) return <div>Loading...</div>;
  // if (!book) return <div>Book not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />

      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setSidebarOpen} />
      <main className="main-content pt-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {!book ? (
              <div>Book not found</div>
            ) : (
              <div className="container mx-auto mt-5">
                {/* Header Section */}
                <div className="p-4 card mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center"></div>
                      <div className="">
                        <h1 className="text-xl font-semibold text-gray-900">
                          <span className="text-2xl">📚</span> {book.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span>{book.category}</span> <span>•</span>{" "}
                          <span>
                            {new Date(book.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn btn-secondary me-3">
                        <FiShare2 className="w-5 h-5" />
                      </button>
                      <button className="btn btn-secondary">
                        <FiBookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="card p-4">
                      <h2 className="mb-4">Book Details</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <p className="d-flex justify-content-between text-sm">
                            <span className="d-block w-50 text-gray-500">
                              Author
                            </span>
                            <span className="d-block w-100 font-medium">
                              {book.author}
                            </span>
                          </p>
                          <p className="d-flex justify-content-between text-sm">
                            <span className="d-block w-50 text-gray-500">
                              Published Year
                            </span>
                            <span className="d-block w-100 font-medium">
                              {book.publishedYear}
                            </span>
                          </p>
                          <p className="d-flex justify-content-between text-sm">
                            <span className="d-block w-50 text-gray-500">
                              Category
                            </span>
                            <span className="d-block w-100 font-medium">
                              {book.category}
                            </span>
                          </p>
                        </div>
                        <div className="space-y-3">
                          <p className="d-flex justify-content-between text-sm">
                            <span className="d-block w-50 text-gray-500">
                              Total Copies
                            </span>
                            <span className="d-block w-100 font-medium">
                              {book.totalCopies}
                            </span>
                          </p>
                          <p className="d-flex justify-content-between text-sm">
                            <span className="d-block w-50 text-gray-500">
                              Available Copies
                            </span>
                            <span className="d-block w-100 font-medium">
                              {book.availableCopies}
                            </span>
                          </p>
                          <p className="d-flex justify-content-between text-sm">
                            <span className="d-block w-50 text-gray-500">
                              Status
                            </span>
                            <span
                              className={`d-block w-100 font-medium ${
                                book.availability
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {book.availability
                                ? "Available"
                                : "Not Available"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="card p-4">
                      <h2 className="mb-4">Quick Actions</h2>
                      <div className="space-y-3">
                        <button className="btn btn-primary w-full me-3">
                          Borrow Book
                        </button>
                        <button className="btn btn-secondary w-full">
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default BookDetails;
