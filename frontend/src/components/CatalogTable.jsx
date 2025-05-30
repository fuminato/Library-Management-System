export default function CatalogTable({ activeTab, onView }) {
  const rows = Array.from({ length: 10 }, () => ({
    id: '001',
    userId: '001',
    amount: '002 Books',
    dueDate: '13 - 03 - 2024',
    dateTime: '25-02-2024 10:39:43',
  }));

  return (
    <div className="bg-white rounded shadow p-4 overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th>ID</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b">
              <td>{row.id}</td>
              <td>{row.userId}</td>
              <td>{row.amount}</td>
              <td>{row.dueDate}</td>
              <td>{row.dateTime}</td>
              <td>
                {activeTab === 'borrowed' && (
                  <button onClick={() => onView(row.userId)}>
                    📄
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}