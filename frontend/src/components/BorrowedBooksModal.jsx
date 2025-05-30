export default function BorrowedBooksModal({ userId, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-3xl">
        <h2 className="text-xl font-bold mb-4">Books for User ID: {userId}</h2>

        {/* Book Table Placeholder */}
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b">
              <th className="p-2">Book ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Type</th>
              <th className="p-2">Language</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">1</td>
                <td className="p-2">Hibernate - Core</td>
                <td className="p-2">Educational</td>
                <td className="p-2">English</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer with Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-black rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}