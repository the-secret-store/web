import { useAuthApi } from '@root/AuthEngine';
import { useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useQueryParams } from '@hooks';

export function VerificationRoute({
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

  const query = useQueryParams();

  return (
    <Route
      path={path}
      element={
        authenticated && !verified ? (
          <Component />
        ) : (
          <Navigate to={query.get('redirect') ?? '/home'} />
        )
      }
      {...rest}
    />
  );
}
