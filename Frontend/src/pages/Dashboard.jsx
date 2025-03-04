import { useState } from "react";
import Information from "../components/Information";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Information />
    </>
  );
};

export default Dashboard;

