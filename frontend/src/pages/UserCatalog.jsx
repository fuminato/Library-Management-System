import { useState } from "react";
import UserSideBar from "../components/UserSideBar";

const borrowedBooks = [
  { id: 1, userId: 1, amount: "002 Books", dueDate: "13-03-2024", dateTime: "25-02-2024 10:39:43", state: "borrowing" },
  { id: 2, userId: 1, amount: "002 Books", dueDate: "13-03-2024", dateTime: "25-02-2024 10:39:43", state: "returned" },
];

const returnedBooks = [
  { id: 1, userId: 1, amount: "002 Books", dueDate: "13-03-2024", dateTime: "25-02-2024 10:39:43" },
  { id: 2, userId: 1, amount: "002 Books", dueDate: "13-03-2024", dateTime: "25-02-2024 10:39:43" },
];

export default function UserCatalog() {
  const [tab, setTab] = useState("borrowed");
  const [search, setSearch] = useState("");

  const filteredBorrowed = borrowedBooks.filter(
      (b) => b.id.toString().includes(search)
  );
  const filteredReturned = returnedBooks.filter(
      (b) => b.id.toString().includes(search)
  );

  return (
      <div className="flex min-h-screen min-w-screen bg-gray-100 fixed top-0 left-0 w-full h-full">
        <UserSideBar />

        <main className="flex-1 p-8 bg-[#f7f9d7] min-h-screen w-full text-black">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="font-semibold text-black">Nisal Gunasekara</div>
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

          {/* Tabs */}
          <div className="flex items-center mb-4 sticky top-0 z-10 bg-[#f7f9d7] py-2">
            <button
                className={`px-4 py-2 rounded-t ${tab === "borrowed" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setTab("borrowed")}
            >
              Borrowed Books
            </button>
            <button
                className={`px-4 py-2 rounded-t ml-2 ${tab === "returned" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setTab("returned")}
            >
              Returned Books
            </button>
            <div className="ml-auto flex items-center">
              <input
                  type="text"
                  placeholder="Search by ID"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="px-3 py-1 border rounded text-black"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded shadow p-4 overflow-x-auto w-full">
            <table className="min-w-full text-sm text-black">
              <thead>
              <tr className="bg-[#f7f9d7]">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">User ID</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Due Date</th>
                <th className="px-4 py-2 text-left">Date &amp; Time</th>
                <th className="px-4 py-2 text-left">State</th>
              </tr>
              </thead>
              <tbody>
              {tab === "borrowed"
                  ? filteredBorrowed.map((b) => (
                      <tr key={b.id} className="border-b">
                        <td className="px-4 py-2">{b.id}</td>
                        <td className="px-4 py-2">{b.userId}</td>
                        <td className="px-4 py-2">{b.amount}</td>
                        <td className="px-4 py-2">{b.dueDate}</td>
                        <td className="px-4 py-2">{b.dateTime}</td>
                        <td className="px-4 py-2">
                          {b.state === "returned" ? (
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold">
                            Returned
                          </span>
                          ) : (
                              <span className="bg-red-100 text-red-700 px-3 py-1 rounded font-semibold">
                            Borrowing
                          </span>
                          )}
                        </td>
                      </tr>
                  ))
                  : filteredReturned.map((b) => (
                      <tr key={b.id} className="border-b">
                        <td className="px-4 py-2">{b.id}</td>
                        <td className="px-4 py-2">{b.userId}</td>
                        <td className="px-4 py-2">{b.amount}</td>
                        <td className="px-4 py-2">{b.dueDate}</td>
                        <td className="px-4 py-2">{b.dateTime}</td>
                        <td className="px-4 py-2"></td>
                      </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
  );
}