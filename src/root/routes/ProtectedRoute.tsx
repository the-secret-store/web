import { useAuthApi } from '@root/AuthEngine';
import { useEffect, useState } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

export function ProtectedRoute({
  path,
  element: Component,
  ...rest
}: {
  path: string;
  element: any;
}) {
  const { session } = useAuthApi();
  const [{ authenticated, verified }, setAuthData] = useState({
    authenticated: session.isAuthenticated(),
    verified: session.isVerified()
  });

  useEffect(() => {
    setAuthData({
      authenticated: session.isAuthenticated(),
      verified: session.isVerified()
    });
  }, [session]);

  const redirect = useLocation().pathname;
  return (
    <Route
      path={path}
      element={
        authenticated ? (
          verified ? (
            // authenticated & verified
            <Component />
          ) : (
            // authenticated but not verified
            <Navigate to={`/auth/verify?redirect=${redirect}`} />
          )
        ) : (
          // not authenticated
          <Navigate to={`/auth/login?redirect=${redirect}`} />
        )
      }
      {...rest}
    />
  );
}
