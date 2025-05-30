import { useState } from "react";

export default function AddBookModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    language: "",
    type: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (formData.name && formData.language && formData.type && formData.quantity) {
      onAdd(formData);
      onClose();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-md relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">📖 Add Book</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">×</button>
        </div>
        <div className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            name="language"
            value={formData.language}
            onChange={handleChange}
            type="text"
            placeholder="Language"
            className="w-full border p-2 rounded"
          />
          <input
            name="type"
            value={formData.type}
            onChange={handleChange}
            type="text"
            placeholder="Type"
            className="w-full border p-2 rounded"
          />
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            type="number"
            placeholder="Quantity"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleAdd} className="bg-teal-600 text-black px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
}
  
