import { useAuthApi } from '@root';
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
  const [authenticated, setAuthenticated] = useState(session.isAuthenticated());

  useEffect(() => {
    setAuthenticated(session.isAuthenticated());
  }, [session]);

  const redirect = useLocation().pathname;
  return (
    <Route
      path={path}
      element={
        authenticated ? (
          <Component />
        ) : (
          <Navigate to={`/login?redirect=${redirect}`} />
        )
      }
      {...rest}
    />
  );
}
