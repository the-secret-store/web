import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router, ThemeEngine } from '@root';

ReactDOM.render(
  <StrictMode>
    <ThemeEngine>
      <Router />
    </ThemeEngine>
  </StrictMode>,
  document.getElementById('root')
);
