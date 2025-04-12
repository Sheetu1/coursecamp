import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const links = [
  { name: "Dashboard", path: "/dashboard/institute" },
  { name: "Add Instructor", path: "/dashboard/institute/add-instructor" },
  { name: "Add Course", path: "/dashboard/institute/add-course" },
  { name: "Add Module", path: "/dashboard/institute/add-module" },
  { name: "Add Lecture", path: "/dashboard/institute/add-lecture" },
  { name: "Add Quiz", path: "/dashboard/institute/add-quiz" },
  { name: "Add Test", path: "/dashboard/institute/add-test" },
  { name: "Add Exam", path: "/dashboard/institute/add-exam" },
];

const InstituteSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Track sidebar state
  const location = useLocation();

  return (
    <div className={`lg:w-64 min-h-screen bg-blue-900 text-white p-4 space-y-4 transition-all duration-300 ${isOpen ? 'block' : 'lg:block hidden'}`}>
      {/* Toggle button for small screens */}
      <button
        className="lg:hidden text-white mb-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>

      <h2 className="text-2xl font-bold mb-6">Institute Panel</h2>

      {/* Sidebar Links */}
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`block px-4 py-2 rounded hover:bg-blue-700 transition ${
            location.pathname === link.path ? "bg-blue-700" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default InstituteSidebar;
