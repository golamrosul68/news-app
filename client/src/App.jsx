import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./dashboard/layout/MainLayout";
import Adminindex from "./dashboard/pages/Adminindex";
import Login from "./dashboard/pages/Login";
import ProtectDashboard from "./middleware/ProtectDashboard";
import ProtectRole from "./middleware/ProtectRole";
import Unable from "./dashboard/pages/Unable";
import AddWriter from "./dashboard/pages/AddWriter";
import Writers from "./dashboard/pages/Writers";
import News from "./dashboard/pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route element={<ProtectDashboard />}>
          <Route path="/dashboard" element={<MainLayout />}>

            {/* Default Dashboard */}
            <Route
              index
              element={<Navigate to="/dashboard/admin" replace />}
            />

            {/* News */}
            <Route path="news" element={<News />} />

            {/* Unable Access */}
            <Route
              path="unable-access"
              element={<Unable />}
            />

            {/* Admin Only */}
            <Route element={<ProtectRole role="admin" />}>

              {/* Admin Dashboard */}
              <Route
                path="admin"
                element={<Adminindex />}
              />

              {/* Add Writer */}
              <Route
                path="add-writer"
                element={<AddWriter />}
              />

              {/* Writers */}
              <Route
                path="writer"
                element={<Writers />}
              />

            </Route>

          </Route>
        </Route>

        {/* Root */}
        <Route
          path="/"
          element={<Navigate to="/dashboard/admin" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;