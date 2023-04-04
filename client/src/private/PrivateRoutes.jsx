import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoutes = () => {
  const { user } = useSelector((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/auth" />;
};
