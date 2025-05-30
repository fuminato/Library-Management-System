import { useNavigate } from "react-router-dom";

const selectedBooks = [
  { id: 1, name: "Hibernate - Core", type: "Educational", language: "English" },
  { id: 2, name: "Hibernate - Core", type: "Educational", language: "English" },
  { id: 3, name: "Hibernate - Core", type: "Educational", language: "English" },
  { id: 4, name: "Hibernate - Core", type: "Educational", language: "English" },
];

export default function Acquire() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-screen bg-gray-200 flex items-center justify-center py-8 fixed top-0 left-0 w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-xl font-semibold mb-4 text-center text-gray-700">
          User Borrow Book Confirm PopUp
        </div>
        <div className="bg-white rounded shadow p-6 w-full max-w-4xl">
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Book ID</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Language</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedBooks.map((b) => (
                  <tr key={b.id} className="border-b">
                    <td className="px-4 py-2">{b.id}</td>
                    <td className="px-4 py-2">{b.name}</td>
                    <td className="px-4 py-2">{b.type}</td>
                    <td className="px-4 py-2">{b.language}</td>
                    <td className="px-4 py-2">
                      <button className="text-gray-600 hover:text-red-600 border rounded px-3 py-1">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                          <path d="M3 6h18M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Summary and Actions */}
          <div className="flex flex-wrap items-center justify-between mt-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="font-semibold">ID</div>
                <div>4</div>
              </div>
              <div className="flex gap-4">
                <div className="font-semibold">Total Books :</div>
                <div>04 Books</div>
              </div>
              <div className="flex gap-4">
                <div className="font-semibold">Due Date :</div>
                <div>13 - 12 - 2024</div>
              </div>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded font-semibold"
                onClick={() => navigate(-1)}
              >
                CANCEL
              </button>
              <button className="bg-teal-600 text-black px-6 py-2 rounded font-semibold">
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}