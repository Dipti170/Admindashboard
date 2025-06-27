import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import KanbanBoard from "./pages/KanbanBoard";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <Router>
      <div className="dark:text-white">
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 p-4 overflow-y-auto">
          <ThemeSwitcher />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/table" element={<TablePage />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
