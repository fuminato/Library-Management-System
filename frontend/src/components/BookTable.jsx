import { useState } from 'react';
import ViewBookModal from './ViewBookModal';
import UpdateBookModal from './UpdateBookModal';
import DeleteBookModal from './DeleteBookModal';

export default function BookTable() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookToUpdate, setBookToUpdate] = useState(null);
  const [bookToDelete, setBookToDelete] = useState(null);

  const books = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: 'Hibernate - Core',
    type: 'Educational',
    language: 'English',
    available: i % 2 === 0,
  }));
   const handleDelete = () => {
    // Add delete logic here (e.g., API call)
    setBookToDelete(null);
  };
  return (
    <>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="border-b">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Book Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Language</th>
              <th className="p-3">Availability</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">{book.id}</td>
                <td className="p-3">{book.name}</td>
                <td className="p-3">{book.type}</td>
                <td className="p-3">{book.language}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {book.available ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                  <button  onClick={() => setBookToUpdate(book)}
                  className="text-yellow-600 hover:underline">Update</button>
                  <button onClick={() => setBookToDelete(book)}
                  className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedBook && (
        <ViewBookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
      {bookToUpdate && (
        <UpdateBookModal
          book={bookToUpdate}
          onClose={() => setBookToUpdate(null)}
          // add onUpdate handler here if needed
        />
      )}
      {bookToDelete && (
        <DeleteBookModal
          onClose={() => setBookToDelete(null)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}