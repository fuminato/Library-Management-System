import { useState } from "react";
import UserSideBar from "../components/UserSideBar";
import { useNavigate } from "react-router-dom";

const books = [
  { id: 1, name: "Hibernate Core - 11th", type: "Educational", language: "English", availability: "Available" },
  { id: 2, name: "Hibernate Core - 11th", type: "Educational", language: "English", availability: "Borrowed" },
  { id: 3, name: "Hibernate Core - 11th", type: "Educational", language: "English", availability: "Available" },
];

export default function UserBook() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const filteredBooks = books.filter(
      (b) =>
          b.name.toLowerCase().includes(search.toLowerCase()) ||
          b.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleCartChange = (bookId) => {
    setCart((prev) =>
        prev.includes(bookId)
            ? prev.filter((id) => id !== bookId)
            : [...prev, bookId]
    );
  };

  return (
      <div className="flex min-h-screen bg-gray-100 fixed top-0 left-0 w-full h-full text-black">
        {/* Sidebar */}
        <UserSideBar />

        {/* Main Content */}
        <main className="flex-1 p-8 bg-[#f7f9d7] min-h-screen w-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-xs text-black">User</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-black">12:29 PM<br />Sep 02, 2023</span>
              <button className="text-black hover:text-black">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Title and Actions */}
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold flex-1">Library Lane Books</h2>
            <button
                className="bg-blue-600 text-black px-4 py-2 rounded mr-4"
                onClick={() => navigate("/acquire")}
            >
              Acquire
            </button>
            <input
                type="text"
                placeholder="Search by ID or Type"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="px-3 py-1 border rounded text-black"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded shadow p-4 overflow-x-auto w-full">
            <table className="min-w-full text-sm text-black">
              <thead>
              <tr className="bg-[#f7f9d7]">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Language</th>
                <th className="px-4 py-2 text-left">Availability</th>
                <th className="px-4 py-2 text-left">Add to Cart</th>
              </tr>
              </thead>
              <tbody>
              {filteredBooks.map((b) => (
                  <tr key={b.id} className="border-b">
                    <td className="px-4 py-2">{b.id}</td>
                    <td className="px-4 py-2">{b.name}</td>
                    <td className="px-4 py-2">{b.type}</td>
                    <td className="px-4 py-2">{b.language}</td>
                    <td className="px-4 py-2">
                      {b.availability === "Available" ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold">Available</span>
                      ) : (
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded font-semibold">Borrowed</span>
                      )}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                          type="checkbox"
                          checked={cart.includes(b.id)}
                          disabled={b.availability !== "Available"}
                          onChange={() => handleCartChange(b.id)}
                      />
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
  );
}