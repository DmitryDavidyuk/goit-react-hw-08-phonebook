import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'Redux/auth';

export default function PublicRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
}
