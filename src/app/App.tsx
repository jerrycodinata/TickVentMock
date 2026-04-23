import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TicketsProvider } from './context/TicketsContext';
import { router } from './routes';

function AppContent() {
  const { isAuthenticated, continueAsGuest } = useAuth();

  useEffect(() => {
    // Auto-login as guest on first visit
    if (!isAuthenticated) {
      continueAsGuest();
    }
  }, [isAuthenticated, continueAsGuest]);

  return <RouterProvider router={router} />;
}

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <TicketsProvider>
          <AppContent />
        </TicketsProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}