import { FaBook, FaListAlt, FaBookOpen, FaSearch } from "react-icons/fa";
import UserSideBar from "../components/UserSideBar";

export default function UserDashboard() {
  return (
      <div className="flex min-h-screen bg-gray-100 fixed top-0 left-0 w-full h-full">
        {/* Sidebar */}
        <UserSideBar />

        {/* Main Content */}
        <main className="flex-1 p-8 bg-[#f7f9d7] text-black">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="font-semibold text-black">Nisal Gunasekara</div>
              <div className="text-xs text-black">User</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-black">12:29 PM<br />Sep 02, 2023</span>
              <button className="text-black hover:text-black">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <FaBookOpen className="text-3xl mb-2 text-black" />
              <div className="font-semibold text-lg mb-1 text-black">Your Borrowed Book List</div>
            </div>
            <div className="bg-white rounded shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <FaListAlt className="text-3xl mb-2 text-black" />
              <div className="font-semibold text-lg mb-1 text-black">Your Returned Book List</div>
            </div>
            <div className="bg-white rounded shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <FaSearch className="text-3xl mb-2 text-black" />
              <div className="font-semibold text-lg mb-1 text-black">Let's browse available book inventory</div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center mb-8 text-black">
            <FaBook className="text-4xl text-black mb-2" />
            <div className="text-xl font-bold mb-1">BookWorm LIBRARY</div>
          </div>

          {/* Quote */}
          <div className="bg-white rounded shadow p-6 text-center max-w-2xl mx-auto text-black">
            <p className="italic text-lg mb-2">
              "Embarking on the journey of reading fosters personal growth, nurturing a path towards excellence and the refinement of character."
            </p>
            <div className="text-right text-sm text-black">~ BookWorm Team</div>
          </div>
        </main>
      </div>
  );
}