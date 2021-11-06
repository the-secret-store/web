import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

export function ProtectedRoute({
  element: Component,
  ...rest
}: {
  element: React.ComponentType;
}) {
  const redirect = useLocation().pathname;
  return (
    <Route {...rest} element={true ? <Component /> : <Navigate to='/home' />} />
  );
}
