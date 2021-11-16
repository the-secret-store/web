import { createContext, useContext } from 'react';
import { SessionManager } from './SessionManager';

const AuthContext = createContext([
  new SessionManager(),
  (newSession: SessionManager) => newSession
]);

export const AuthProvider = AuthContext.Provider;
export const useAuthApi = () => useContext(AuthContext);

export function AuthEngine({ children, authValue }: AuthEngineProps) {
  return <AuthProvider value={[authValue]}>{children}</AuthProvider>;
}

interface AuthEngineProps {
  authValue: SessionManager;
  children: React.ReactNode;
}
