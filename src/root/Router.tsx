import { Landing, Login, Register } from '@pages';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
