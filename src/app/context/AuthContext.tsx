import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  continueAsGuest: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem('tickvent-user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    // Persist to localStorage
    if (user) {
      localStorage.setItem('tickvent-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('tickvent-user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Mock login - in production this would call an API
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
    
    // Create mock user based on email
    const mockUser: User = {
      email,
      name: email.split('@')[0],
    };
    
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const continueAsGuest = () => {
    const guestUser: User = {
      email: 'guest@tickvent.com',
      name: 'Guest',
    };
    setUser(guestUser);
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
