import { Navigate , Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoute = () => {
  const { user, loading } = useAuth();

  if(loading) return <h1>Loading....</h1>

  if (!user || user.role !== "admin"){
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
