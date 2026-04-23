import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface PurchasedTicket {
  id: string;
  eventId: string;
  eventTitle: string;
  eventImage: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  ticketType: string;
  ticketDescription?: string;
  price: number;
  purchaseDate: string;
  status: 'active' | 'used' | 'expired';
  qrCode: string; // Unique identifier for QR
}

interface TicketsContextType {
  tickets: PurchasedTicket[];
  addTicket: (ticket: Omit<PurchasedTicket, 'id' | 'purchaseDate' | 'status' | 'qrCode'>) => void;
  getTicket: (id: string) => PurchasedTicket | undefined;
  markTicketAsUsed: (id: string) => void;
}

const TicketsContext = createContext<TicketsContextType | undefined>(undefined);

export function TicketsProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<PurchasedTicket[]>(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem('tickvent-tickets');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Persist to localStorage
    localStorage.setItem('tickvent-tickets', JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = (ticket: Omit<PurchasedTicket, 'id' | 'purchaseDate' | 'status' | 'qrCode'>) => {
    const newTicket: PurchasedTicket = {
      ...ticket,
      id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      purchaseDate: new Date().toISOString(),
      status: 'active',
      qrCode: `TICKVENT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    };

    setTickets((prev) => [newTicket, ...prev]);
  };

  const getTicket = (id: string) => {
    return tickets.find((ticket) => ticket.id === id);
  };

  const markTicketAsUsed = (id: string) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: 'used' as const } : ticket
      )
    );
  };

  return (
    <TicketsContext.Provider value={{ tickets, addTicket, getTicket, markTicketAsUsed }}>
      {children}
    </TicketsContext.Provider>
  );
}

export function useTickets() {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error('useTickets must be used within TicketsProvider');
  }
  return context;
}
