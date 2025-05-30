import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DocsWrapper from './docsWrapper';

jest.mock('../src/protectedroute', () => ({ children }) => <div data-testid="protected-route">{children}</div>);
jest.mock('@theme/DocItem', () => (props) => <div data-testid="doc-item" {...props} />);

test('renders DocsWrapper with DocItem', () => {
  render(<DocsWrapper />);
  expect(screen.getByTestId('protected-route')).toBeInTheDocument();
  expect(screen.getByTestId('doc-item')).toBeInTheDocument();
});