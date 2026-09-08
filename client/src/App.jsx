
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
import Profile from "./dashboard/pages/profile";
import CreateNews from "./dashboard/pages/CreateNews";
import WriterIndex from "./dashboard/pages/WriterIndex";

function App() {
  // বর্তমানে Writer দিয়ে test করা হচ্ছে
  const userInfo = {
    role: "writer",
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* ================= LOGIN ================= */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* ================= PROTECTED DASHBOARD ================= */}
        <Route element={<ProtectDashboard />}>

          <Route
            path="/dashboard"
            element={<MainLayout />}
          >

            {/* ================= DEFAULT DASHBOARD ================= */}
            <Route
              index
              element={
                userInfo.role === "admin" ? (
                  <Navigate
                    to="/dashboard/admin"
                  
                  />
                ) : (
                  <Navigate
                    to="/dashboard/writer"
                  />
                )
              }
            />

            {/* ================= PROFILE ================= */}
            <Route
              path="profile"
              element={<Profile />}
            />

            {/* ================= NEWS ================= */}
            <Route
              path="news"
              element={<News />}
            />

            {/* ================= UNABLE ACCESS ================= */}
            <Route
              path="unable-access"
              element={<Unable />}
            />

            {/* ================================================= */}
            {/* ================= ADMIN ROUTES ================== */}
            {/* ================================================= */}

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

              {/* Writers List */}
              <Route
                path="writers"
                element={<Writers />}
              />

            </Route>

            {/* ================================================= */}
            {/* ================= WRITER ROUTES ================= */}
            {/* ================================================= */}

            <Route element={<ProtectRole role="writer" />}>

              {/* Writer Dashboard */}
              <Route
                path="writer"
                element={<WriterIndex />}
              />

              {/* Create News */}
              <Route
                path="news/create"
                element={<CreateNews />}
              />

            </Route>

          </Route>
        </Route>

        {/* ================= ROOT ================= */}
        <Route
          path="/"
          element={
            <Navigate
              to={
                userInfo.role === "admin"
                  ? "/dashboard/admin"
                  : "/dashboard/writer"
              }
              replace
            />
          }
        />

        {/* ================= WRONG URL ================= */}
        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

