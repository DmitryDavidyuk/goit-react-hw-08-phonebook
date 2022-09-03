import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Почта{' '}
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Увійти</button>
    </form>
  );
}
