import { Navigate, Outlet } from "react-router-dom";

const ProtectRole = ({role}) => {
  const userInfo = {
    name: "badhon",
    role: "admin",
  };

  if (userInfo && userInfo.role === role) {
    return <Outlet />;
  }

  return <Navigate to="/unable-access"  />;
};

export default ProtectRole;