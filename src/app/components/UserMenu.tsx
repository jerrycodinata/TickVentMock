import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import { User, LogOut, Ticket, Bookmark } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div className="relative" ref={menuRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-[#f0f0f0] rounded-full hover:bg-[#e5e5e5] transition-colors"
        whileTap={{ scale: 0.95 }}
      >
        <User className="w-4 h-4 text-[#6b6b6b]" />
        <span className="text-xs text-[#6b6b6b]">{user?.name}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#e5e5e5] overflow-hidden z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-3 border-b border-[#e5e5e5]">
              <p className="text-xs text-[#a0a0a0] uppercase tracking-wider mb-1">
                signed in as
              </p>
              <p className="text-sm text-[#1a1a1a] truncate">{user?.email}</p>
            </div>

            <div className="py-2">
              <Link
                to="/my-tickets"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#fafafa] transition-colors"
              >
                <Ticket className="w-4 h-4 text-[#6b6b6b]" />
                <span>My Tickets</span>
              </Link>

              <Link
                to="/favorites"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#fafafa] transition-colors"
              >
                <Bookmark className="w-4 h-4 text-[#6b6b6b]" />
                <span>Saved Events</span>
              </Link>
            </div>

            <div className="border-t border-[#e5e5e5] py-2">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
