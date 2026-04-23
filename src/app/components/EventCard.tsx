import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Bookmark } from 'lucide-react';
import { Event } from '../data/events';
import { useFavorites } from '../context/FavoritesContext';

interface EventCardProps {
  event: Event;
  layoutId?: string;
}

export function EventCard({ event, layoutId }: EventCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isBookmarked = isFavorite(event.id);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(event.id);
  };

  return (
    <Link to={`/event/${event.id}`} className="block">
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Image container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e5e5e5]">
          <motion.img
            layoutId={layoutId ? `event-image-${event.id}` : undefined}
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Bookmark button */}
          <motion.button
            onClick={handleBookmarkClick}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                scale: isBookmarked ? [1, 1.3, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Bookmark
                className={`w-5 h-5 transition-all ${
                  isBookmarked ? 'fill-[#1a1a1a] text-[#1a1a1a]' : 'text-[#6b6b6b]'
                }`}
              />
            </motion.div>
          </motion.button>

          {/* Category badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1.5 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-xs lowercase tracking-wider rounded-full">
              {event.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-serif text-lg mb-2 text-[#1a1a1a] line-clamp-1">
            {event.title}
          </h3>
          <p className="text-sm text-[#6b6b6b] mb-1">
            {formatDate(event.date)} • {event.time}
          </p>
          <p className="text-sm text-[#6b6b6b] line-clamp-1">
            {event.location}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
