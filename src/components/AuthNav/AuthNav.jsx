import { NavLink } from 'react-router-dom';
import CSS from './AuthNav.module.css';

const AuthNav = () => {
  let activeStyle = {
    color: 'red',
  };
  return (
    <div>
      <NavLink
        to="/register"
        className={CSS.link}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Реєстрація
      </NavLink>
      <NavLink
        to="/login"
        className={CSS.link}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Вхід
      </NavLink>
    </div>
  );
};

export default AuthNav;
