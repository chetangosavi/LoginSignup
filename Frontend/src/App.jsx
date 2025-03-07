import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  
  const {isAuthenticated} = useAuth();
 const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
    <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Home />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
        <Route path="/projects"element={
            isAuthenticated ? <Projects/> : <Navigate to="/" replace />
          }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
