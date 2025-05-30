import React from 'react';
import ProtectedRoute from './protectedroute';
import DocItem from '@theme/DocItem';
 
export default function DocsWrapper(props) {
  return (
    <ProtectedRoute>
      <DocItem {...props} />
    </ProtectedRoute>
  );
}