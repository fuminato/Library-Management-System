import { FaTrashAlt } from "react-icons/fa";

export default function DeleteUsers({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md relative">
        <div className="flex items-center mb-4">
          <FaTrashAlt className="text-2xl text-gray-700 mr-2" />
          <h2 className="text-lg font-semibold flex-1">Delete Confirmation</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl absolute right-6 top-6"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <hr className="mb-6" />
        <div className="mb-8 text-center text-gray-700">
          <p>
            "Are you certain you wish to proceed<br />
            with the deletion of the selected entry?"
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-teal-600 text-black px-16 py-2 rounded font-semibold"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}