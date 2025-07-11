import { Navigate } from "react-router-dom";
import { useAuth } from "../context/FirebaseAuthContext";

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
