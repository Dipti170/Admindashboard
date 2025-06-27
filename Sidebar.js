import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/calendar", label: "Calendar" },
  { to: "/kanban", label: "Kanban" },
  { to: "/table", label: "Table" },
];

function Sidebar() {
  return (
    <div className="w-64 h-full bg-pink-400 dark:bg-gray-800 text-black dark:text-white p-6 flex flex-col justify-start">

      <h1 className="text-2xl font-bold">Dipti's Panel</h1>
      {links.map(({ to, label }) => (
        <Link
  key={to}
  to={to}
  className="block py-2 px-3 rounded hover:bg-pink-800 hover:text-white dark:hover:bg-pink-200"
>
          {label}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
