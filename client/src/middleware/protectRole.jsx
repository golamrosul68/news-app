
import { Navigate, Outlet } from "react-router-dom";

const ProtectRole = ({ role }) => {
  const userInfo = {
    name: "badhon",
    role: "writer",
  };

  // User-এর role এবং required role একই হলে page দেখাবে
  if (userInfo && userInfo.role === role) {
    return <Outlet />;
  }

  return <Navigate to="/dashboard/unable-access"/>;
};

export default ProtectRole;

