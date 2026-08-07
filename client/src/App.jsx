import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import Adminindex from "./dashboard/pages/Adminindex";
import Login from "./dashboard/pages/Login";
import ProtectDashboard from "./middleware/ProtectDashboard";
import ProtectRole from "./middleware/ProtectRole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root */}
        <Route path="/" element={<Navigate to="/dashboard/admin" replace />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route element={<ProtectDashboard />}>
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Navigate to="/dashbord/admin" />} />

             <Route index element={<Navigate to="/dashbord/unable-access" />} />

            {/* Admin Only */}
            <Route element={<ProtectRole role='admin' />}>
              <Route path="admin" element={<Adminindex />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;