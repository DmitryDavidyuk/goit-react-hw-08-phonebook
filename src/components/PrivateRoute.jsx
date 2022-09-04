import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'Redux/auth';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
