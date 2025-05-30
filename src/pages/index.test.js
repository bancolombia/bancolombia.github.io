import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './index';

jest.mock('@theme/Heading', () => ({ children }) => <h3>{children}</h3>);
jest.mock('@docusaurus/useDocusaurusContext', () => () => ({
  siteConfig: { title: 'Test Site', customFields: { env: 'pdn' } },
}));
jest.mock('../msalconfig', () => ({
  msalInstance: {
    initialize: jest.fn(),
    getAllAccounts: jest.fn(),
    loginPopup: jest.fn(),
    logoutPopup: jest.fn(),
  },
}));
jest.mock('../config', () => ({
  loginRequest: {},
}));

describe('HomepageHeader', () => {
  const { msalInstance } = require('../msalconfig');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', async () => {
    msalInstance.initialize.mockResolvedValue();
    msalInstance.getAllAccounts.mockReturnValue([]);

    const { container } = render(<Home />);
    await waitFor(() => {
      expect(container).toBeInTheDocument();
    });
  });

  test('shows "Iniciar Sesión" when not authenticated', async () => {
    msalInstance.initialize.mockResolvedValue();
    msalInstance.getAllAccounts.mockReturnValue([]);

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Iniciar Sesión')).toBeInTheDocument();
    });
  });

  test('shows "Cerrar Sesión" when authenticated', async () => {
    msalInstance.initialize.mockResolvedValue();
    msalInstance.getAllAccounts.mockReturnValue([{}]);

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Cerrar Sesión')).toBeInTheDocument();
    });
  });

  test('handles login', async () => {
    msalInstance.initialize.mockResolvedValue();
    msalInstance.getAllAccounts
      .mockReturnValueOnce([])
      .mockReturnValueOnce([{}]);
    msalInstance.loginPopup.mockResolvedValue();

    const { getByText } = render(<Home />);
    const loginButton = await waitFor(() => getByText('Iniciar Sesión'));

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(msalInstance.loginPopup).toHaveBeenCalledWith({});
      expect(getByText('Cerrar Sesión')).toBeInTheDocument();
    });
  });

  test('handles logout', async () => {
    msalInstance.initialize.mockResolvedValue();
    msalInstance.getAllAccounts
      .mockReturnValueOnce([{}])
      .mockReturnValueOnce([]);
    msalInstance.logoutPopup.mockResolvedValue();

    const { getByText } = render(<Home />);
    const logoutButton = await waitFor(() => getByText('Cerrar Sesión'));

    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(msalInstance.logoutPopup).toHaveBeenCalled();
      expect(getByText('Iniciar Sesión')).toBeInTheDocument();
    });
  });
});