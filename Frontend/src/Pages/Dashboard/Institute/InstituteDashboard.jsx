import React from "react";
import { Link } from "react-router-dom"; // ✅ Link import

const InstituteDashboard = () => {
  return (
    <div className="p-6 space-y-10 text-gray-800 dark:text-white">
      {/* Welcome Text */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome Back, Admin 👋</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Here's a quick snapshot of your institute’s activity.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition transform hover:scale-105 hover:shadow-blue-400/30 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
            Total Courses
          </h2>
          <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 transition-all duration-300">
            12
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition transform hover:scale-105 hover:shadow-green-400/30 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition">
            Total Instructors
          </h2>
          <p className="text-4xl font-extrabold text-green-600 dark:text-green-400 transition-all duration-300">
            5
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition transform hover:scale-105 hover:shadow-purple-400/30 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition">
            Total Students
          </h2>
          <p className="text-4xl font-extrabold text-purple-600 dark:text-purple-400 transition-all duration-300">
            240
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Add Instructor", path: "add-instructor" },
            { label: "Add Course", path: "add-course" },
            { label: "Add Module", path: "add-module" },
            { label: "Add Lecture", path: "add-lecture" },
            { label: "Add Test", path: "add-test" },
            { label: "Add Exam", path: "add-exam" },
          ].map(({ label, path }, index) => (
            <Link
              to={path}
              key={index}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow">
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li>✅ Instructor <strong>Sheetal Sharma</strong> was added.</li>
            <li>📚 Course <strong>React Basics</strong> published.</li>
            <li>🧑‍🎓 Student <strong>Divyansh Chaudhary</strong> enrolled in <strong>DSA</strong>.</li>
            <li>📝 New test created for <strong>Java Fundamentals</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
