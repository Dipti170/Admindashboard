const users = [
  { id: 1, name: "Dipti", email: "dipti@example.com", role: "Admin" },
  { id: 2, name: "Ravi", email: "ravi@example.com", role: "User" },
];

export default function TablePage() {
  return (
    <div>
    <h2 className="text-xl font-semibold mb-4 dark:text-white">Users Table</h2>

      <table className="min-w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-pink-200">
            <th className="p-2 border dark:text-white">ID</th>
            <th className="p-2 border dark:text-white">Name</th>
            <th className="p-2 border dark:text-white">Email</th>
            <th className="p-2 border dark:text-white">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, role }) => (
            <tr key={id} className="hover:bg-pink-200">
              <td className="p-2 border text-center dark:text-white">{id}</td>
              <td className="p-2 border text-center dark:text-white">{name}</td>
              <td className="p-2 border text-center dark:text-white">{email}</td>
              <td className="p-2 border text-center dark:text-white">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

