import Sidebar from '../components/SideBar';
import BookTable from '../components/BookTable';
import AddBookModal from "../components/AddBookModal";
import { useState } from "react";
export default function Books() {
    const [showModal, setShowModal] = useState(false);

  const handleAddBook = (bookData) => {
    // Add logic to add the book (e.g., update state or call API)
    // ...
  };
  
  return (
    <div className="flex min-h-screen w-screen">
      <Sidebar />

      <div className="flex-1 p-8 bg-[#f7f9d7]">
        {/* Top section */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
          <h1 className="text-2xl font-bold">Books</h1>
          <button  onClick={() => setShowModal(true)}
          className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700">
            + Add Book
          </button>
        </div>

{/* Render the modal if showModal is true */}
      {showModal && (
        <AddBookModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddBook}
        />
      )}

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Book ID"
            className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* Book Table */}
        <BookTable />
      </div>
    </div>
  );
}