import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export function AuthRoute({
  element: Component,
  ...rest
}: {
  element: React.ComponentType;
}) {
  return (
    <Route {...rest} element={true ? <Component /> : <Navigate to='/home' />} />
  );
}
