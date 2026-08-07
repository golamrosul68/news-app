import { Navigate, Outlet } from "react-router-dom";

const ProtectDashboard = () => {
  const userInfo = {
    name: "badhon",
    role: "admin",
  };

  if (userInfo && userInfo.role === "admin") {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectDashboard;