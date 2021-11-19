import { Landing, Login, Register, Verify } from '@pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute } from './routes';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/auth'>
          <AuthRoute path='login' element={<Login />} />
          <AuthRoute path='register' element={<Register />} />
          <AuthRoute path='verify' element={<Verify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
