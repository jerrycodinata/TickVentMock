import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { Home, Bookmark, Ticket } from 'lucide-react';
import { useTickets } from '../context/TicketsContext';

export function BottomNav() {
  const location = useLocation();
  const { tickets } = useTickets();
  
  // Count active tickets
  const activeTicketsCount = tickets.filter(t => t.status === 'active').length;
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e5e5] z-50">
      <div className="max-w-md mx-auto flex items-center justify-around h-20 px-6">
        <Link to="/" className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            className="relative"
            whileTap={{ scale: 0.9 }}
          >
            <Home
              className={`w-6 h-6 transition-colors ${
                isActive('/') ? 'text-[#1a1a1a]' : 'text-[#a0a0a0]'
              }`}
            />
            {isActive('/') && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1a]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
          <span
            className={`text-xs lowercase tracking-wide ${
              isActive('/') ? 'text-[#1a1a1a]' : 'text-[#a0a0a0]'
            }`}
          >
            discover
          </span>
        </Link>

        <Link to="/my-tickets" className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            className="relative"
            whileTap={{ scale: 0.9 }}
          >
            <Ticket
              className={`w-6 h-6 transition-colors ${
                isActive('/my-tickets') || isActive('/ticket/')
                  ? 'text-[#1a1a1a]'
                  : 'text-[#a0a0a0]'
              }`}
            />
            {/* Badge for active tickets */}
            {activeTicketsCount > 0 && (
              <motion.div
                className="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 bg-[#1a1a1a] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-[10px] text-white font-medium">
                  {activeTicketsCount > 9 ? '9+' : activeTicketsCount}
                </span>
              </motion.div>
            )}
            {(isActive('/my-tickets') || isActive('/ticket/')) && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1a]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
          <span
            className={`text-xs lowercase tracking-wide ${
              isActive('/my-tickets') || isActive('/ticket/')
                ? 'text-[#1a1a1a]'
                : 'text-[#a0a0a0]'
            }`}
          >
            tickets
          </span>
        </Link>

        <Link to="/favorites" className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            className="relative"
            whileTap={{ scale: 0.9 }}
          >
            <Bookmark
              className={`w-6 h-6 transition-colors ${
                isActive('/favorites')
                  ? 'text-[#1a1a1a] fill-[#1a1a1a]'
                  : 'text-[#a0a0a0]'
              }`}
            />
            {isActive('/favorites') && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1a]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
          <span
            className={`text-xs lowercase tracking-wide ${
              isActive('/favorites') ? 'text-[#1a1a1a]' : 'text-[#a0a0a0]'
            }`}
          >
            saved
          </span>
        </Link>
      </div>
    </nav>
  );
}