import React from "react";

const AddLecture = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Add New Lecture
        </h1>

        {/* Lecture Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Lecture Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Introduction to JavaScript"
          />
        </div>

        {/* Lecture Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Lecture Description
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="In this lecture, we will cover the fundamentals of JavaScript."
          />
        </div>

        {/* Video Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Upload Video
          </label>
          <input
            type="file"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-all"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Duration (in minutes)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="60"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Add Lecture
        </button>
      </form>
    </div>
  );
};

export default AddLecture;
