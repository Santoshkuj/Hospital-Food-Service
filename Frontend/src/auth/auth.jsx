import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AuthRoute({ children, allowedRoles }) {
  const { role, isAuthenticated } = useSelector((state) => state.auth);

   if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default AuthRoute;
