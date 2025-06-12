import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProtectedRoute from './protectedroute';
import { msalInstance } from './msalconfig';
import { Redirect } from '@docusaurus/router';

jest.mock('./msalconfig', () => ({
  msalInstance: {
    initialize: jest.fn(),
    getAllAccounts: jest.fn()
  }
}));

jest.mock('@docusaurus/router', () => ({
  Redirect: jest.fn(() => <div>Redirect</div>)
}));

describe('ProtectedRoute', () => {
  test('renders children when authenticated', async () => {
    msalInstance.initialize.mockResolvedValueOnce();
    msalInstance.getAllAccounts.mockReturnValueOnce([{}]);
    await act(async () => {
      render(<ProtectedRoute><div>Protected Content</div></ProtectedRoute>);
    });
    await act(async () => {
      await waitFor(() => expect(screen.getByText('Protected Content')).toBeInTheDocument());
    });
  });

  test('redirects when not authenticated', async () => {
    msalInstance.initialize.mockResolvedValueOnce();
    msalInstance.getAllAccounts.mockReturnValueOnce([]);
    await act(async () => {
      render(<ProtectedRoute><div>Protected Content</div></ProtectedRoute>);
    });
    await act(async () => {
      await waitFor(() => expect(screen.getByText('Redirect')).toBeInTheDocument());
    });
  });
});