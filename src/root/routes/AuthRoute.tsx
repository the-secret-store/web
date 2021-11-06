import { Navigate, Route } from 'react-router-dom';

export function AuthRoute({
  element: Component,
  path,
  ...rest
}: {
  element: any;
  path: string;
}) {
  return (
    <Route
      path={path}
      element={true ? <Component /> : <Navigate to='/home' />}
      {...rest}
    />
  );
}
