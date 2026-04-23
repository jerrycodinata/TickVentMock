import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, User, Ticket as TicketIcon, CheckCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useTickets } from '../context/TicketsContext';
import { useAuth } from '../context/AuthContext';

export function TicketDetail() {
  const { id } = useParams();
  const { getTicket, markTicketAsUsed } = useTickets();
  const { user } = useAuth();
  const [brightness, setBrightness] = useState(100);

  const ticket = getTicket(id || '');

  if (!ticket) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6b6b6b] mb-4">Ticket not found</p>
          <Link to="/my-tickets" className="text-[#1a1a1a] underline">
            Back to tickets
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleMaxBrightness = () => {
    setBrightness(brightness === 100 ? 150 : 100);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e5e5] sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-6 flex items-center gap-4">
          <Link to="/my-tickets">
            <motion.button
              className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5 text-[#1a1a1a]" />
            </motion.button>
          </Link>
          <h1 className="lowercase tracking-wide text-[#1a1a1a]">
            ticket details
          </h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-8 space-y-8">
        {/* Status Banner */}
        {ticket.status === 'active' && (
          <motion.div
            className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-green-700">
                This ticket is active and ready to use
              </p>
            </div>
          </motion.div>
        )}

        {ticket.status === 'used' && (
          <motion.div
            className="bg-[#a0a0a0]/10 border border-[#a0a0a0]/20 rounded-xl p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-[#6b6b6b]">
              This ticket has been used
            </p>
          </motion.div>
        )}

        {/* QR Code Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e5e5]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          style={{ filter: `brightness(${brightness}%)` }}
        >
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
              scan at entrance
            </p>
            <div className="inline-block p-6 bg-white rounded-2xl border-2 border-[#1a1a1a]">
              <QRCodeSVG
                value={ticket.qrCode}
                size={200}
                level="H"
                includeMargin={false}
              />
            </div>
            <motion.button
              onClick={handleMaxBrightness}
              className="mt-4 text-xs text-[#6b6b6b] underline hover:no-underline"
              whileTap={{ scale: 0.95 }}
            >
              {brightness === 100 ? 'increase brightness' : 'normal brightness'}
            </motion.button>
          </div>

          <div className="text-center pt-4 border-t border-[#e5e5e5]">
            <p className="text-xs text-[#a0a0a0] mb-1">ticket code</p>
            <p className="text-sm font-mono text-[#1a1a1a] tracking-wider">
              {ticket.qrCode}
            </p>
          </div>
        </motion.div>

        {/* Event Details Card */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e5e5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Event Image */}
          <div className="relative w-full h-48">
            <img
              src={ticket.eventImage}
              alt={ticket.eventTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h2 className="absolute bottom-4 left-4 right-4 font-serif text-2xl text-white">
              {ticket.eventTitle}
            </h2>
          </div>

          {/* Details */}
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#6b6b6b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a1a1a]">{formatDate(ticket.date)}</p>
                <p className="text-sm text-[#6b6b6b]">{ticket.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#6b6b6b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a1a1a]">{ticket.venue}</p>
                <p className="text-sm text-[#6b6b6b]">{ticket.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <TicketIcon className="w-5 h-5 text-[#6b6b6b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a1a1a]">{ticket.ticketType}</p>
                {ticket.ticketDescription && (
                  <p className="text-sm text-[#6b6b6b]">{ticket.ticketDescription}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#6b6b6b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a1a1a]">{user?.name || 'Guest'}</p>
                <p className="text-sm text-[#6b6b6b]">{user?.email || ''}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
              <span className="text-sm text-[#6b6b6b]">Total paid</span>
              <span className="font-serif text-2xl text-[#1a1a1a]">
                ${ticket.price}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Purchase Info */}
        <motion.div
          className="bg-white rounded-xl p-4 border border-[#e5e5e5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-[#a0a0a0] mb-1">purchased on</p>
          <p className="text-sm text-[#1a1a1a]">
            {new Date(ticket.purchaseDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </motion.div>

        {/* Demo Actions */}
        {ticket.status === 'active' && (
          <motion.button
            onClick={() => {
              if (confirm('Mark this ticket as used? This action cannot be undone.')) {
                markTicketAsUsed(ticket.id);
              }
            }}
            className="w-full py-3 text-sm text-[#6b6b6b] border border-[#e5e5e5] rounded-xl hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors"
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            mark as used (demo)
          </motion.button>
        )}

        <div className="h-8" />
      </div>
    </div>
  );
}
