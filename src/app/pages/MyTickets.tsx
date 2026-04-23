import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Calendar, MapPin, Ticket, ChevronRight } from 'lucide-react';
import { useTickets } from '../context/TicketsContext';
import { EmptyState } from '../components/EmptyState';
import { Header } from '../components/Header';

export function MyTickets() {
  const { tickets } = useTickets();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-700';
      case 'used':
        return 'bg-[#a0a0a0]/10 text-[#6b6b6b]';
      case 'expired':
        return 'bg-red-500/10 text-red-700';
      default:
        return 'bg-[#a0a0a0]/10 text-[#6b6b6b]';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'active';
      case 'used':
        return 'used';
      case 'expired':
        return 'expired';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pb-24">
      <Header title="my tickets" />

      <div className="max-w-md mx-auto px-6 py-8">
        {tickets.length === 0 ? (
          <EmptyState
            icon={Ticket}
            title="No tickets yet"
            description="Your purchased tickets will appear here"
            actionLabel="discover events"
            actionPath="/"
          />
        ) : (
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <Link key={ticket.id} to={`/ticket/${ticket.id}`}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e5e5] hover:border-[#1a1a1a] transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Ticket Card Layout */}
                  <div className="flex">
                    {/* Event Image */}
                    <div className="w-32 h-40 flex-shrink-0 relative">
                      <img
                        src={ticket.eventImage}
                        alt={ticket.eventTitle}
                        className="w-full h-full object-cover"
                      />
                      {/* Perforation effect */}
                      <div className="absolute right-0 top-0 bottom-0 w-4 bg-white">
                        <div className="absolute right-0 top-0 bottom-0 w-full flex flex-col justify-around items-center py-2">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 rounded-full bg-[#fafafa]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Ticket Details */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs lowercase tracking-wide ${getStatusColor(
                              ticket.status
                            )}`}
                          >
                            {getStatusLabel(ticket.status)}
                          </span>
                          <ChevronRight className="w-4 h-4 text-[#a0a0a0]" />
                        </div>

                        {/* Event Title */}
                        <h3 className="font-serif text-lg text-[#1a1a1a] mb-3 line-clamp-2">
                          {ticket.eventTitle}
                        </h3>

                        {/* Event Details */}
                        <div className="space-y-1.5 text-sm">
                          <div className="flex items-center gap-2 text-[#6b6b6b]">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">
                              {formatDate(ticket.date)} • {ticket.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[#6b6b6b]">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{ticket.venue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Ticket Type & Price */}
                      <div className="mt-3 pt-3 border-t border-[#e5e5e5] flex items-center justify-between">
                        <span className="text-xs text-[#6b6b6b] uppercase tracking-wider">
                          {ticket.ticketType}
                        </span>
                        <span className="font-serif text-lg text-[#1a1a1a]">
                          ${ticket.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
