import { Link } from 'react-router-dom';
import { FaBook, FaUsers, FaBars, FaSignOutAlt, FaBookOpen, FaSearch } from 'react-icons/fa';

export default function UserSideBar() {
  return (
    <div className="w-72 bg-blue-900 text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FaBook className="text-green-400 text-4xl" />
          User
        </div>

        <nav className="space-y-4">
          <Link to="/user-dashboard" className="w-full block bg-white text-blue-900 rounded px-4 py-2 flex items-center gap-3">
            <FaBars />
            Dashboard
          </Link>
          <Link to="/user-catalog" className="w-full block bg-white text-blue-900 rounded px-4 py-2 flex items-center gap-3">
            <FaBookOpen />
            Catalog
          </Link>
          <Link to="/UserBook" className="w-full block bg-white text-blue-900 rounded px-4 py-2 flex items-center gap-3">
            <FaSearch />
            Books
          </Link>
          
        </nav>
      </div>

      <div className="pt-6">
        <Link
    to="/logout"
    className="w-full bg-white text-blue-900 rounded px-4 py-2 flex items-center justify-center gap-3"
  >
    <FaSignOutAlt />
    Log Out
  </Link>
      </div>
    </div>
  );
}