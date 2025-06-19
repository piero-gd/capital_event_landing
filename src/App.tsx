import React from 'react';
import './App.css';

const CapitalPage = React.lazy(() => import('./pages/CapitalPage'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <CapitalPage />
      </div>
    </div>
  );
};

export default App;
