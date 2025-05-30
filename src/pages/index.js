import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React, { useEffect, useState } from 'react';
import { loginRequest } from '../config';
import { msalInstance } from '../msalconfig'

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [interactionInProgress, setInteractionInProgress] = useState(false);
  const enableAuth = siteConfig.customFields.env === "pdn";

  useEffect(() => {
    msalInstance.initialize().then(() => {
      const accounts = msalInstance.getAllAccounts();
      setIsAuthenticated(accounts.length > 0);
    });
  }, []);

  const handleLogin = () => {
    if (!interactionInProgress) {
      setInteractionInProgress(true);
      msalInstance
        .loginPopup(loginRequest)
        .then(() => {
          setIsAuthenticated(true);
        })
        .finally(() => {
          setInteractionInProgress(false);
        });
    }
  };

  const handleLogout = () => {
    if (!interactionInProgress) {
      setInteractionInProgress(true);
      msalInstance
        .logoutPopup()
        .then(() => {
          setIsAuthenticated(false);
        })
        .finally(() => {
          setInteractionInProgress(false);
        });
    }
  };

  return (
    <Layout>
      <div className="background-img con bc-h-100">
        <img
          className="stroke"
          role="img"
          src="https://library-sdb.apps.bancolombia.com/assets/1.2.0/strokes/06.svg"
        />
      </div>

      <div className="bg-dark">
        <div className="bc-container-16 bc-py-5">
          <div className="bc-row bc-align-items-center ">
            <div className="bc-mx-3">
              <h1 className="bc-text-brand-primary-01 bc-cibsans-font-style-12-bold ">
                Open Source Grupo Bancolombia
              </h1>
              <h2 className="bc-text-brand-primary-01 bc-cibsans-font-style-8-bold ">
                Somos parte de la revolución del código abierto
              </h2>
              <p className="bc-cibsans-font-style-7-extralight bc-text-brand-primary-01">
                Tu tambien tienes algo para contribuir.
              </p>
            </div>
            <div className="bc-me-5"></div>
            <div className="bc-mx-3 row-col">
              {(isAuthenticated || !enableAuth) && (
                <>
                  <Link
                    className="bc-button bc-button-primary bc-text-center bc-me-3 bc-mb-3 min-width-fit"
                    to="/docs/guide-for-contributors"
                  >
                    Guía para Contribuidores
                  </Link>
                </>
              )}
              {!isAuthenticated && enableAuth ? (
                <button
                  className="bc-button bc-button-primary bc-text-center bc-me-3 bc-mb-3 min-width-fit"
                  onClick={handleLogin}
                >
                  Iniciar Sesión
                </button>
              ) : (
                enableAuth && (
                  <button
                    className="bc-button bc-button-primary bc-text-center bc-me-3 bc-mb-3 min-width-fit"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <main></main>
    </Layout>
  );
}
