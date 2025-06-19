import React, { Suspense } from 'react';
import './App.css';

// Usar React.lazy para cargar el componente de manera perezosa
const CapitalPage = React.lazy(() => import('./pages/CapitalPage'));

// Componente de carga
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
  </div>
);

// Componente de error
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error('Error en la aplicación:', error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">¡Ups! Algo salió mal</h1>
          <p>Por favor, recarga la página o inténtalo de nuevo más tarde.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen bg-black text-white">
          <CapitalPage />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
