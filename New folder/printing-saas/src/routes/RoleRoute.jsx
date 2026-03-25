import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function RoleRoute({ role }) {
  const userRole = useSelector((state) => state.auth.role);

  return userRole === role ? <Outlet /> : <Navigate to="/" />;
}