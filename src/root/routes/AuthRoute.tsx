import { useQueryParams } from '@hooks';
import { useAuthApi } from '@root/AuthEngine';
import { useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';

export function AuthRoute({
  element: Component,
  path,
  ...rest
}: {
  element: any;
  path: string;
}) {
  const { session } = useAuthApi();
  const query = useQueryParams();
  const [authenticated, setAuthenticated] = useState(session.isAuthenticated());

  useEffect(() => {
    setAuthenticated(session.isAuthenticated());
  }, [session]);

  return (
    <Route
      path={path}
      element={
        !authenticated ? (
          <Component />
        ) : (
          <Navigate to={query.get('redirect') ?? '/home'} />
        )
      }
      {...rest}
    />
  );
}
