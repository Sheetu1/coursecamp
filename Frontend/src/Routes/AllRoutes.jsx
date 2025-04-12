import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import InstituteDashboardLayout from "../components/dashboard/Institute/InstituteDashboardLayout";
import InstituteDashboard from "../Pages/Dashboard/Institute/InstituteDashboard";
import AddInstructor from "../Pages/Dashboard/Institute/AddInstructor";
import AddCourse from "../Pages/Dashboard/Institute/AddCourse";
import AddModule from "../Pages/Dashboard/Institute/AddModule";
import AddLecture from "../Pages/Dashboard/Institute/AddLecture";
import AddQuiz from "../Pages/Dashboard/Institute/AddQuiz";
import AddTest from "../Pages/Dashboard/Institute/AddTest";
import AddExam from "../Pages/Dashboard/Institute/AddExam";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard/institute" element={<InstituteDashboardLayout />}>
        <Route index element={<InstituteDashboard />} />
        <Route path="add-instructor" element={<AddInstructor />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="add-module" element={<AddModule />} />
        <Route path="add-lecture" element={<AddLecture />} />
        <Route path="add-quiz" element={<AddQuiz />} />
        <Route path="add-test" element={<AddTest />} />
        <Route path="add-exam" element={<AddExam />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
