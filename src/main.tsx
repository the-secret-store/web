import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { AuthEngine, Router, ThemeEngine } from '@root';
import { SessionManager } from '@root/AuthEngine/SessionManager';

ReactDOM.render(
  <StrictMode>
    <AuthEngine authValue={new SessionManager()}>
      <ThemeEngine>
        <Router />
      </ThemeEngine>
    </AuthEngine>
  </StrictMode>,
  document.getElementById('root')
);
