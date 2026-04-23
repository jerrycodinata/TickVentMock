import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Search, X } from 'lucide-react';
import { FilterChips } from '../components/FilterChips';
import { EventCard } from '../components/EventCard';
import { EventCardSkeleton } from '../components/LoadingSkeleton';
import { UserMenu } from '../components/UserMenu';
import { mockEvents, EventCategory } from '../data/events';
import { useAuth } from '../context/AuthContext';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const filteredEvents = mockEvents.filter((event) => {
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pb-28">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-md mx-auto px-6 pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex-1">
                <h1 className="font-serif text-3xl text-[#1a1a1a] mb-1">
                  TickVent HB
                </h1>
                <p className="text-sm text-[#6b6b6b] lowercase tracking-wide">
                  discover live experiences
                </p>
              </div>
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <Link to="/login">
                  <motion.button
                    className="px-4 py-2 bg-[#1a1a1a] text-white rounded-full text-xs lowercase tracking-wide"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    login
                  </motion.button>
                </Link>
              )}
            </div>

            {/* Search Bar */}
            <motion.div
              className="mt-6 relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a0a0a0]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="search events, venues, or locations"
                  className="w-full pl-12 pr-12 py-3 bg-[#f0f0f0] border border-transparent rounded-xl text-[#1a1a1a] placeholder:text-[#a0a0a0] focus:outline-none focus:bg-white focus:border-[#1a1a1a] transition-all text-sm"
                />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#e5e5e5] hover:bg-[#d0d0d0] flex items-center justify-center transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-4 h-4 text-[#6b6b6b]" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <FilterChips selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* Event Grid */}
      <div className="max-w-md mx-auto px-6 pt-6">
        {isLoading ? (
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <EventCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <EventCard event={event} layoutId={`home-${event.id}`} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isLoading && filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-[#a0a0a0] mb-2">
              {searchQuery ? 'No events found matching your search' : 'No events found in this category'}
            </p>
            {searchQuery && (
              <motion.button
                onClick={clearSearch}
                className="text-[#1a1a1a] underline hover:no-underline text-sm"
                whileTap={{ scale: 0.95 }}
              >
                Clear search
              </motion.button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}