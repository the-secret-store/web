import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from '../pages';
import { Login } from '../pages/auth/Login';
import { AuthRoute } from './routes';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <AuthRoute path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
