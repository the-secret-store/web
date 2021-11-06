import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router } from './root/Router';
import { ThemeEngine } from './root/ThemeEngine/ThemeEngine';

ReactDOM.render(
  <StrictMode>
    <ThemeEngine>
      <Router />
    </ThemeEngine>
  </StrictMode>,
  document.getElementById('root')
);
