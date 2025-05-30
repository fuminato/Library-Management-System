import Sidebar from '../components/SideBar';
import { useState } from 'react';
import CatalogTable from '../components/CatalogTable';
import BorrowedBooksModal from '../components/BorrowedBooksModal';

export default function Catalog() {
  const [activeTab, setActiveTab] = useState('borrowed');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleView = (userId) => {
    console.log('View clicked for:', userId); // ✅ Confirm in console
    setSelectedUser(userId);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="flex w-screen min-h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 bg-[#f7f9d7] p-6">
        {/* Tabs + Search */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded border ${activeTab === 'borrowed' ? 'bg-white text-black border-black' : 'bg-white text-gray-400 border-gray-300'}`}
              onClick={() => setActiveTab('borrowed')}
            >
              Borrowed Books
            </button>
            <button
              className={`px-4 py-2 rounded border ${activeTab === 'overdue' ? 'bg-white text-black border-black' : 'bg-white text-gray-400 border-gray-300'}`}
              onClick={() => setActiveTab('overdue')}
            >
              Overdue Borrowers
            </button>
          </div>

          <input
            type="text"
            placeholder="Search by ID"
            className="px-4 py-2 rounded border border-gray-300 bg-white"
          />
        </div>

        {/* Table View */}
        <CatalogTable activeTab={activeTab} onView={handleView} />

        {/* Modal */}
        {selectedUser && <BorrowedBooksModal userId={selectedUser} onClose={handleCloseModal} />}
      </div>
    </div>
  );
}