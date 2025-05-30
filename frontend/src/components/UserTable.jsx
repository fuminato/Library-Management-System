import { useState } from 'react';
import ViewUsers from './ViewUsers';
import UpdateUsers from './UpdateUsers';
import DeleteUsers from './DeleteUsers';

export default function UserTable() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [UserToUpdate, setUserToUpdate] = useState(null);
  const [UserToDelete, setUserToDelete] = useState(null);

  const users = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: 'Parapath Jahangir',
    email: '123@gmail.com',
    username: 'prath',
    
  }));
   const handleDelete = () => {
    // Add delete logic here (e.g., API call)
    setUserToDelete(null);
  };
  return (
    <>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="border-b">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">User Name</th>
              
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.username}</td>
               
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                  <button  onClick={() => setUserToUpdate(user)}
                  className="text-yellow-600 hover:underline">Update</button>
                  <button onClick={() => setUserToDelete(user)}
                  className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <ViewUsers user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      {UserToUpdate && (
        <UpdateUsers
          user={UserToUpdate}
          onClose={() => setUserToUpdate(null)}
          // add onUpdate handler here if needed
        />
      )}
      {UserToDelete && (
        <DeleteUsers
          onClose={() => setUserToDelete(null)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}