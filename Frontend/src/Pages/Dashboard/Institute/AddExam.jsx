import React from "react";

const AddExam = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      {/* Text Section */}
      <div className="w-full max-w-lg space-y-4 text-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          Create a New Exam
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Use the form below to add a new exam. Fill in the exam title,
          description, and upload the exam papers or question set.
        </p>
      </div>

      {/* Form Section */}
      <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg space-y-6 mt-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Add New Exam
        </h1>

        {/* Exam Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Exam Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Final Exam on JavaScript"
          />
        </div>

        {/* Exam Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Exam Description
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="This is the final exam for the JavaScript course, covering all topics."
          />
        </div>

        {/* Exam Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Exam Duration (in minutes)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="120"
          />
        </div>

        {/* Exam Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Exam Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Exam File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Upload Exam Paper (PDF)
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
          Add Exam
        </button>
      </form>
    </div>
  );
};

export default AddExam;
