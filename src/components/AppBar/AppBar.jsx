import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../Redux/auth/';
import CSS from './AppBar.module.css';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <>
      <header className={CSS.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <div className={CSS.content}>
        <Outlet />
      </div>
    </>
  );
}
