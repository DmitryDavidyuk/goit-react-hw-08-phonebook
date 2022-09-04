import { authSelectors } from '../../Redux/auth';
import { useSelector } from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div>
      <h1>Привіт</h1>

      {!isLoggedIn && (
        <h2>
          Увійдіть або зареєструйтеся, щоб користуватися телефонуню книгою
        </h2>
      )}
    </div>
  );
};

export default Home;
