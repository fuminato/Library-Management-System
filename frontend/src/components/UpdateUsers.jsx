import { useState } from "react";
import { FaUsers } from "react-icons/fa";

export default function UpdateUsers({ user, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    username: user?.username || "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    if (formData.name && formData.email && formData.username) {
      onUpdate({ ...user, ...formData });
      onClose();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md relative">
        <div className="flex items-center mb-4">
          <FaUsers className="text-2xl text-gray-700 mr-2" />
          <h2 className="text-lg font-semibold flex-1">Update User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl absolute right-6 top-6"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <hr className="mb-6" />
        <div className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded text-base"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded text-base"
          />
          <div className="flex gap-4">
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              className="w-1/2 border p-2 rounded text-base"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-1/2 border p-2 rounded text-base"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-between gap-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-black px-8 py-2 rounded font-semibold w-1/2"
          >
            CANCEL
          </button>
          <button
            onClick={handleUpdate}
            className="bg-teal-600 text-black px-8 py-2 rounded font-semibold w-1/2"
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}