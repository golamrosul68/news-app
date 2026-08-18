import { Navigate, Outlet } from "react-router-dom";

const ProtectRole = ({role}) => {
  const userInfo = {
    name: "badhon",
    role: "admin",
  };

  if (userInfo.role === role) {
    return <Outlet />;
  }

  return <Navigate to="/dashboard/unable-access" />;
};

export default ProtectRole;