import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../Redux/auth/';
import CSS from './Navigation.module.css';
export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <>
      <nav className={CSS.nav}>
        <NavLink
          to="/"
          className={CSS.link}
          style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
        >
          Головна
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={CSS.link}
            style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
          >
            Контакти
          </NavLink>
        )}
      </nav>
    </>
  );
}
