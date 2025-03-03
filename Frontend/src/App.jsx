import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import NotFound from "./pages/NotFound";

function App() {
  
  const {isAuthenticated} = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Home />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
