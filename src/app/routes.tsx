import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { EventDetail } from './pages/EventDetail';
import { Favorites } from './pages/Favorites';
import { MyTickets } from './pages/MyTickets';
import { TicketDetail } from './pages/TicketDetail';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { BottomNav } from './components/BottomNav';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/event/:id',
    element: <EventDetail />,
  },
  {
    path: '/favorites',
    element: <Layout><Favorites /></Layout>,
  },
  {
    path: '/my-tickets',
    element: <Layout><MyTickets /></Layout>,
  },
  {
    path: '/ticket/:id',
    element: <TicketDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);