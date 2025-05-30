import Sidebar from '../components/SideBar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-[#f7f9d7] p-6 flex flex-col">

        {/* Top Admin Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">N</div>
            <div>
              <p className="font-semibold">Nisal Gunasekara</p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
          </div>
          <div className="text-right text-sm">
            <p className="font-semibold">12:29 PM</p>
            <p className="text-gray-600">Sep 02, 2023</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow rounded p-6 text-center">
            <div className="text-2xl mb-2">👤</div>
            <p className="text-3xl font-bold">0150</p>
            <p className="text-sm text-gray-600">Total User Base</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <div className="text-2xl mb-2">📚</div>
            <p className="text-3xl font-bold">1500</p>
            <p className="text-sm text-gray-600">Total Book Count</p>
          </div>
        </div>

        {/* Borrowers and Admins */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          
          {/* Overdue Borrowers */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Overdue Borrowers</h3>
            <div className="bg-white rounded shadow p-4 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-800">👤</span>
                    <div>
                      <p className="font-medium">Sasmith Gunasekara</p>
                      <p className="text-sm text-gray-500">Borrowed ID: 10</p>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-black text-lg">⟳</button>
                </div>
              ))}
            </div>
          </div>

          {/* Admins */}
          <div>
            <h3 className="text-lg font-semibold mb-2">BookWorm Admins</h3>
            <div className="bg-white rounded shadow p-4 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🛠️</span>
                    <div>
                      <p className="font-medium">Nisal Gunasekara</p>
                      <p className="text-sm text-gray-500">Admin ID: 1</p>
                    </div>
                  </div>
                  <span className="text-green-600 text-sm">● Active</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Legend */}
        <footer className="mt-8 bg-white shadow rounded p-4 flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-black rounded-full" />
            <span>Total Borrowed Books</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-700 rounded-full" />
            <span>Total Returned Books</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
