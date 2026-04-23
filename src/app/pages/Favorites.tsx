import { motion } from 'motion/react';
import { useFavorites } from '../context/FavoritesContext';
import { mockEvents } from '../data/events';
import { EventCard } from '../components/EventCard';
import { EmptyState } from '../components/EmptyState';

export function Favorites() {
  const { favorites } = useFavorites();
  
  const favoriteEvents = mockEvents.filter((event) => favorites.has(event.id));

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
            <h1 className="font-serif text-3xl text-[#1a1a1a] mb-1">
              Saved Events
            </h1>
            <p className="text-sm text-[#6b6b6b] lowercase tracking-wide">
              {favoriteEvents.length} {favoriteEvents.length === 1 ? 'event' : 'events'} bookmarked
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 pt-6">
        {favoriteEvents.length === 0 ? (
          <EmptyState
            title="No saved events"
            description="Bookmark events you're interested in to see them here. Tap the bookmark icon on any event card."
          />
        ) : (
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {favoriteEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <EventCard event={event} layoutId={`favorites-${event.id}`} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
