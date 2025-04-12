import React from "react";

const AddInstructor = () => {
  return (
    <div className="h-[calc(100vh-64px)] overflow-auto p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Add New Instructor</h1>

      <form className="space-y-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
        {/* Full Name Fields */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
            placeholder="john@example.com"
          />
        </div>

        {/* Profile Image Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Profile Image</label>
          <input
            type="file"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Add Instructor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInstructor;
