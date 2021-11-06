import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages';
import { ThemeEngine } from './root/ThemeEngine/ThemeEngine';

ReactDOM.render(
  <StrictMode>
    <ThemeEngine>
      <Home />
    </ThemeEngine>
  </StrictMode>,
  document.getElementById('root')
);
