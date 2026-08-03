import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import Adminindex from "./dashboard/pages/Adminindex";
import Login from "./dashboard/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard/admin" replace />} />
          <Route path="admin" element={<Adminindex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;