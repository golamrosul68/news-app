
import { Navigate, Outlet } from "react-router-dom";

const ProtectDashboard = () => {
  const userInfo = {
    name: "badhon",
    role: "writer",
  };

  // User login করা আছে কিনা check করবে
  if (userInfo) {
    return <Outlet />;
  }

  return <Navigate to="/login"/>;
};

export default ProtectDashboard;

