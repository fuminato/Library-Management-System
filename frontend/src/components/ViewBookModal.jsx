export default function ViewBookModal({ book, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Book Details</h2>

        <div className="space-y-3 text-sm">
          <p><strong>ID:</strong> {book.id}</p>
          <p><strong>Name:</strong> {book.name}</p>
          <p><strong>Type:</strong> {book.type}</p>
          <p><strong>Language:</strong> {book.language}</p>
          <p>
            <strong>Availability:</strong>{' '}
            <span className={`font-semibold ${book.available ? 'text-green-600' : 'text-red-600'}`}>
              {book.available ? 'Available' : 'Unavailable'}
            </span>
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}