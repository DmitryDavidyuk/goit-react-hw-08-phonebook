import { authSelectors } from '../../Redux/auth';
import { useSelector } from 'react-redux';
import CSS from './Home.module.css';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div className={CSS.home}>
      <h1>Привіт</h1>

      {!isLoggedIn && (
        <h2>
          Увійдіть або зареєструйтеся, щоб користуватися телефоннуню книгою
        </h2>
      )}
    </div>
  );
};

export default Home;
