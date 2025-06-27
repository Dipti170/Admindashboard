import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
  className="mb-4 px-4 py-2 bg-pink-400 text-white dark:bg-pink-300 rounded hover:bg-pink-300 dark:hover:bg-pink-200"
  onClick={() => setDark(!dark)}
>

     Switch to {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
export default ThemeSwitcher;
