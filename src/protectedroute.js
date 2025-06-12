import React, { useEffect, useState } from 'react';
import { Redirect } from '@docusaurus/router';
import { msalInstance } from './msalconfig';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    msalInstance.initialize()
      .then(() => {
        const accounts = msalInstance.getAllAccounts();
        if (accounts.length === 0) {
          setIsLoading(false);
        } else {
          setIsAuthenticated(true);
          setIsLoading(false);
        }
      })
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? children : <Redirect to="/" />;
};

export default ProtectedRoute;