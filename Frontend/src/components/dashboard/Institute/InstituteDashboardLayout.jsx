import { Outlet } from "react-router-dom";
import InstituteSidebar from "./InstituteSidebar";

const InstituteDashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <InstituteSidebar />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default InstituteDashboardLayout;

