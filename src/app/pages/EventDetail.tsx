import { useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Bookmark, MapPin, Calendar, Clock, X, Check } from 'lucide-react';
import { mockEvents, TicketTier } from '../data/events';
import { useFavorites } from '../context/FavoritesContext';
import { useTickets } from '../context/TicketsContext';

export function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addTicket } = useTickets();
  const [selectedTicket, setSelectedTicket] = useState<TicketTier | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6b6b6b] mb-4">Event not found</p>
          <Link to="/" className="text-[#1a1a1a] underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const isBookmarked = isFavorite(event.id);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handlePurchase = () => {
    if (event && selectedTicket) {
      // Add ticket to user's tickets
      addTicket({
        eventId: event.id,
        eventTitle: event.title,
        eventImage: event.imageUrl,
        venue: event.venue,
        location: event.location,
        date: event.date,
        time: event.time,
        ticketType: selectedTicket.name,
        ticketDescription: selectedTicket.description,
        price: selectedTicket.price,
      });
    }

    setShowTicketModal(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/my-tickets');
    }, 2500);
  };

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        {/* Hero Image */}
        <motion.div
          className="relative w-full h-[60vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            layoutId={`event-image-${event.id}`}
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fafafa]" />

          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 z-10">
            <Link to="/">
              <motion.button
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <ArrowLeft className="w-5 h-5 text-[#1a1a1a]" />
              </motion.button>
            </Link>

            <motion.button
              onClick={() => toggleFavorite(event.id)}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  scale: isBookmarked ? [1, 1.3, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Bookmark
                  className={`w-5 h-5 transition-all ${
                    isBookmarked ? 'fill-[#1a1a1a] text-[#1a1a1a]' : 'text-[#1a1a1a]'
                  }`}
                />
              </motion.div>
            </motion.button>
          </div>

          {/* Category badge */}
          <div className="absolute bottom-6 left-6">
            <span className="px-4 py-2 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-xs lowercase tracking-widest rounded-full">
              {event.category}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-md mx-auto px-6 py-8 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Title */}
          <div>
            <h1 className="font-serif text-3xl text-[#1a1a1a] mb-4">
              {event.title}
            </h1>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#6b6b6b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a1a1a]">{formatDate(event.date)}</p>
                <p className="text-sm text-[#6b6b6b]">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#6b6b6b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a1a1a]">{event.venue}</p>
                <p className="text-sm text-[#6b6b6b]">{event.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#6b6b6b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a1a1a]">Tickets from ${event.priceRange.min}</p>
                <p className="text-sm text-[#6b6b6b]">
                  Multiple tiers available
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {event.images && event.images.length > 1 && (
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#6b6b6b] mb-4">Gallery</h3>
              <div
                ref={scrollContainerRef}
                className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6"
              >
                {event.images.map((img, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-48 h-64 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <img
                      src={img}
                      alt={`${event.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#6b6b6b] mb-4">About</h3>
            <p className="text-[#1a1a1a] leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Ticket Tiers */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#6b6b6b] mb-4">
              Select Tickets
            </h3>
            <div className="space-y-3">
              {event.ticketTiers.map((tier) => (
                <motion.button
                  key={tier.id}
                  onClick={() => {
                    setSelectedTicket(tier);
                    setShowTicketModal(true);
                  }}
                  className="w-full bg-white border border-[#e5e5e5] rounded-xl p-4 text-left hover:border-[#1a1a1a] transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[#1a1a1a]">{tier.name}</h4>
                    <span className="font-serif text-xl text-[#1a1a1a]">
                      ${tier.price}
                    </span>
                  </div>
                  {tier.description && (
                    <p className="text-sm text-[#6b6b6b] mb-2">{tier.description}</p>
                  )}
                  <p className="text-xs text-[#a0a0a0]">
                    {tier.available} tickets available
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Spacer for bottom padding */}
          <div className="h-8" />
        </motion.div>
      </div>

      {/* Ticket Purchase Modal */}
      <AnimatePresence>
        {showTicketModal && selectedTicket && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTicketModal(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-2xl max-w-md mx-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-6">
                {/* Handle bar */}
                <div className="w-12 h-1 bg-[#e5e5e5] rounded-full mx-auto mb-6" />

                {/* Close button */}
                <button
                  onClick={() => setShowTicketModal(false)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-[#6b6b6b]" />
                </button>

                <h2 className="font-serif text-2xl text-[#1a1a1a] mb-2">
                  Confirm Purchase
                </h2>
                <p className="text-sm text-[#6b6b6b] mb-6">
                  Review your ticket selection
                </p>

                {/* Ticket details */}
                <div className="bg-[#fafafa] rounded-xl p-4 mb-6 space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-1">
                      Event
                    </p>
                    <p className="text-[#1a1a1a]">{event.title}</p>
                  </div>
                  <div className="border-t border-[#e5e5e5] pt-3">
                    <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-1">
                      Ticket Type
                    </p>
                    <p className="text-[#1a1a1a]">{selectedTicket.name}</p>
                    {selectedTicket.description && (
                      <p className="text-sm text-[#6b6b6b] mt-1">
                        {selectedTicket.description}
                      </p>
                    )}
                  </div>
                  <div className="border-t border-[#e5e5e5] pt-3">
                    <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-1">
                      Price
                    </p>
                    <p className="font-serif text-2xl text-[#1a1a1a]">
                      ${selectedTicket.price}
                    </p>
                  </div>
                </div>

                {/* Purchase button */}
                <motion.button
                  onClick={handlePurchase}
                  className="w-full bg-[#1a1a1a] text-white py-4 rounded-xl text-center"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="lowercase tracking-wide">
                    confirm purchase
                  </span>
                </motion.button>

                <p className="text-xs text-center text-[#a0a0a0] mt-4">
                  This is a demo. No actual purchase will be made.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 mx-6 max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>
              
              <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
                Purchase Complete
              </h3>
              <p className="text-sm text-[#6b6b6b]">
                Your tickets have been confirmed. Check your email for details.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}