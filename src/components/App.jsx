import Contacts from 'Pages/Contacts/Contacts';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from 'Pages/Home/Home';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { authOperations } from 'Redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(authOperations.fetchCurrentUser());
  }, [dispath]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer position="top-left" autoClose={2000} />
    </Container>
  );
}
