import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
