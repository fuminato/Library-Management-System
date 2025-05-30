import { FaUsers } from "react-icons/fa";

export default function ViewUsers({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md relative">
        <div className="flex items-center mb-4">
          <FaUsers className="text-2xl text-gray-700 mr-2" />
          <h2 className="text-lg font-semibold flex-1">View User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl absolute right-6 top-6"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <hr className="mb-6" />
        <div className="bg-[#f7f9f7] rounded-lg p-6 flex gap-6 mb-8 border border-gray-200">
          <div className="flex-1 space-y-2 text-sm">
            <div>
              <span className="font-semibold">User ID :</span> {user?.id}
            </div>
            <div>
              <span className="font-semibold">Name :</span> {user?.name}
            </div>
            <div>
              <span className="font-semibold">Email :</span> {user?.email}
            </div>
            <div>
              <span className="font-semibold">Username :</span> {user?.username}
            </div>
          </div>
          <div className="w-px bg-gray-300 mx-2"></div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-2">Saved by :</div>
            <div>Nisal Gunasekara</div>
            <div className="text-xs text-gray-500">(Admin)</div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-teal-600 text-white px-16 py-2 rounded font-semibold"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}