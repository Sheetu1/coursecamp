import React from "react";

const AddTest = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      {/* Text Section */}
      <div className="w-full max-w-lg space-y-4 text-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          Create a New Test
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Use the form below to add a new test. Ensure you provide all the
          necessary details, including the test title, description, and upload
          the test questions.
        </p>
      </div>

      {/* Form Section */}
      <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg space-y-6 mt-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Add New Test
        </h1>

        {/* Test Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Test Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="JavaScript Fundamentals Test"
          />
        </div>

        {/* Test Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Test Description
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="This test will cover the basics of JavaScript, including variables, functions, and loops."
          />
        </div>

        {/* Number of Questions */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Number of Questions
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="10"
          />
        </div>

        {/* Test File upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Upload Test Questions (CSV/PDF)
          </label>
          <input
            type="file"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Add Test
        </button>
      </form>
    </div>
  );
};

export default AddTest;
