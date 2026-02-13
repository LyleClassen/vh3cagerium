import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  return (
    <main>
      <Dashboard />
      <Analytics />
    </main>
  );
}
