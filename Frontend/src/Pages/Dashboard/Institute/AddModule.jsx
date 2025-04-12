import React from "react";

const AddModule = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Add New Module
        </h1>

        {/* Module Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Module Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Module 1: Introduction to JavaScript"
          />
        </div>

        {/* Module Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Module Description
          </label>
          <textarea
            rows="3"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="In this module, we'll cover the basics of JavaScript."
          />
        </div>

        {/* Module Document */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Module Document (PDF, DOCX, etc.)
          </label>
          <input
            type="file"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-all"
          />
        </div>

        {/* Module Price (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Module Price (Optional)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="19.99"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Add Module
        </button>
      </form>
    </div>
  );
};

export default AddModule;
