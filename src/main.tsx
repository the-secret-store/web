import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';
import './root/styles/root.scss';

ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  document.getElementById('root')
);
