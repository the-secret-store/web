import { Navigate, Route, useLocation } from 'react-router-dom';

export function ProtectedRoute({
  path,
  element: Component,
  ...rest
}: {
  path: string;
  element: any;
}) {
  const redirect = useLocation().pathname;
  return (
    <Route
      path={path}
      element={
        true ? <Component /> : <Navigate to={`/login?redirect=${redirect}`} />
      }
      {...rest}
    />
  );
}
