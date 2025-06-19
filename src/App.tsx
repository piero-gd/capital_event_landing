import React from 'react';
import './App.css';

const CapitalPage = React.lazy(() => import('./pages/CapitalPage'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <CapitalPage />
    </div>
  );
};

export default App;
