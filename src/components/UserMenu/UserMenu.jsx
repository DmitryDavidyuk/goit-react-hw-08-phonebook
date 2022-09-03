import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../Redux/auth';
import CSS from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={CSS.container}>
      <span className={CSS.name}>Вітаю, {name}</span>
      <button onClick={() => dispatch(authOperations.logOut())} type="button">
        Вихід
      </button>
    </div>
  );
}
