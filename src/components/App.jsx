import Contacts from 'Pages/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from 'Pages/Home/Home';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Container>
  );
}
