// Mock event data for TickVent HB
export type EventCategory = 'music' | 'sports' | 'festival' | 'theater';

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  available: number;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  location: string;
  imageUrl: string;
  images?: string[];
  description: string;
  ticketTiers: TicketTier[];
  priceRange: {
    min: number;
    max: number;
  };
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Summer Waves Festival',
    category: 'festival',
    date: '2026-06-15',
    time: '18:00',
    venue: 'Sunset Park Grounds',
    location: 'Los Angeles, CA',
    imageUrl: 'https://images.unsplash.com/photo-1658843179014-e61b7a3d841e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBmZXN0aXZhbCUyMHN0YWdlfGVufDF8fHx8MTc3NjQzMTU2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1658843179014-e61b7a3d841e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBmZXN0aXZhbCUyMHN0YWdlfGVufDF8fHx8MTc3NjQzMTU2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761926826313-a1787661b7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZmVzdGl2YWwlMjBzdW1tZXIlMjBjcm93ZHxlbnwxfHx8fDE3NzY0MzE1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Experience three days of non-stop music featuring top artists across multiple genres. From electronic to indie rock, Summer Waves brings together the best of contemporary music in an unforgettable outdoor setting.',
    ticketTiers: [
      { id: 't1-1', name: 'General Admission', price: 149, available: 2500, description: '3-day pass, standing area' },
      { id: 't1-2', name: 'VIP Experience', price: 349, available: 500, description: 'Exclusive lounge, premium viewing' },
      { id: 't1-3', name: 'Backstage Pass', price: 599, available: 50, description: 'Meet & greet, all-access' },
    ],
    priceRange: { min: 149, max: 599 },
  },
  {
    id: '2',
    title: 'Jazz Night at Blue Note',
    category: 'music',
    date: '2026-04-22',
    time: '20:30',
    venue: 'Blue Note Jazz Club',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWMlMjBwZXJmb3JtYW5jZSUyMHZlbnVlfGVufDF8fHx8MTc3NjQzMTU2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWMlMjBwZXJmb3JtYW5jZSUyMHZlbnVlfGVufDF8fHx8MTc3NjQzMTU2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'An intimate evening featuring acclaimed jazz quartet performing classic standards and original compositions. Experience the magic of live jazz in one of NYC\'s most iconic venues.',
    ticketTiers: [
      { id: 't2-1', name: 'Standard Seating', price: 55, available: 80, description: 'Reserved table seating' },
      { id: 't2-2', name: 'Premium Table', price: 95, available: 20, description: 'Front row, complimentary drink' },
    ],
    priceRange: { min: 55, max: 95 },
  },
  {
    id: '3',
    title: 'Championship Finals',
    category: 'sports',
    date: '2026-05-08',
    time: '19:00',
    venue: 'MetLife Stadium',
    location: 'East Rutherford, NJ',
    imageUrl: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc3BvcnRzJTIwZXZlbnQlMjBjcm93ZHxlbnwxfHx8fDE3NzY0MzE1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc3BvcnRzJTIwZXZlbnQlMjBjcm93ZHxlbnwxfHx8fDE3NzY0MzE1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Witness history as two powerhouse teams compete for the championship title. The culmination of an incredible season in front of 80,000 roaring fans.',
    ticketTiers: [
      { id: 't3-1', name: 'Upper Deck', price: 89, available: 15000, description: 'Upper level seating' },
      { id: 't3-2', name: 'Lower Bowl', price: 189, available: 8000, description: 'Lower level, great views' },
      { id: 't3-3', name: 'Club Seats', price: 399, available: 2000, description: 'Premium seating, lounge access' },
      { id: 't3-4', name: 'Field Level', price: 799, available: 500, description: 'Closest to the action' },
    ],
    priceRange: { min: 89, max: 799 },
  },
  {
    id: '4',
    title: 'Hamlet: A Modern Retelling',
    category: 'theater',
    date: '2026-05-18',
    time: '19:30',
    venue: 'Broadway Theater',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1764763180662-e4791157a87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZSUyMGRyYW1hdGljfGVufDF8fHx8MTc3NjQzMTU2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1764763180662-e4791157a87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZSUyMGRyYW1hdGljfGVufDF8fHx8MTc3NjQzMTU2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Shakespeare\'s timeless tragedy reimagined for contemporary audiences. A stunning production featuring an all-star cast and innovative staging.',
    ticketTiers: [
      { id: 't4-1', name: 'Balcony', price: 69, available: 200, description: 'Upper balcony seating' },
      { id: 't4-2', name: 'Mezzanine', price: 119, available: 150, description: 'Mid-level seating' },
      { id: 't4-3', name: 'Orchestra', price: 199, available: 100, description: 'Premium ground floor' },
    ],
    priceRange: { min: 69, max: 199 },
  },
  {
    id: '5',
    title: 'Electric Pulse Festival',
    category: 'festival',
    date: '2026-07-20',
    time: '16:00',
    venue: 'Desert Oasis Arena',
    location: 'Las Vegas, NV',
    imageUrl: 'https://images.unsplash.com/photo-1624703307604-744ec383cbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkaiUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NjM1MzQ1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1624703307604-744ec383cbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkaiUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NjM1MzQ1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'The world\'s premier electronic music festival returns with groundbreaking production and the biggest names in EDM. Two stages, 48 hours of non-stop beats.',
    ticketTiers: [
      { id: 't5-1', name: '2-Day Pass', price: 199, available: 5000, description: 'General admission, both days' },
      { id: 't5-2', name: 'VIP Weekend', price: 449, available: 1000, description: 'Fast entry, VIP area, upgraded amenities' },
    ],
    priceRange: { min: 199, max: 449 },
  },
  {
    id: '6',
    title: 'Rock Legends Live',
    category: 'music',
    date: '2026-06-03',
    time: '20:00',
    venue: 'Madison Square Garden',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1718180801089-d99879d14bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGxpdmUlMjBjb25jZXJ0fGVufDF8fHx8MTc3NjM0ODc1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1718180801089-d99879d14bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGxpdmUlMjBjb25jZXJ0fGVufDF8fHx8MTc3NjM0ODc1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Iconic rock band performs their greatest hits in an epic arena show. This legendary performance is destined to be one for the history books.',
    ticketTiers: [
      { id: 't6-1', name: 'Nosebleed', price: 79, available: 3000, description: 'Upper seating' },
      { id: 't6-2', name: 'Floor Seats', price: 199, available: 1500, description: 'Standing room, main floor' },
      { id: 't6-3', name: 'Premium Reserved', price: 299, available: 500, description: 'Best seated views' },
    ],
    priceRange: { min: 79, max: 299 },
  },
  {
    id: '7',
    title: 'World Cup Qualifier',
    category: 'sports',
    date: '2026-05-25',
    time: '15:00',
    venue: 'National Stadium',
    location: 'Miami, FL',
    imageUrl: 'https://images.unsplash.com/photo-1698844013403-b7c4cf0d3b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzY0MzE1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1698844013403-b7c4cf0d3b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzY0MzE1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Be part of history as the national team competes for a spot in the World Cup. The atmosphere will be electric as thousands cheer on their heroes.',
    ticketTiers: [
      { id: 't7-1', name: 'Corner Seats', price: 65, available: 8000, description: 'Corner sections' },
      { id: 't7-2', name: 'Sideline View', price: 129, available: 6000, description: 'Midfield sideline' },
      { id: 't7-3', name: 'Premium Center', price: 249, available: 1000, description: 'Center line, best views' },
    ],
    priceRange: { min: 65, max: 249 },
  },
  {
    id: '8',
    title: 'Urban Groove Festival',
    category: 'festival',
    date: '2026-08-14',
    time: '14:00',
    venue: 'Riverside Park',
    location: 'Chicago, IL',
    imageUrl: 'https://images.unsplash.com/photo-1761926826313-a1787661b7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZmVzdGl2YWwlMjBzdW1tZXIlMjBjcm93ZHxlbnwxfHx8fDE3NzY0MzE1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1761926826313-a1787661b7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZmVzdGl2YWwlMjBzdW1tZXIlMjBjcm93ZHxlbnwxfHx8fDE3NzY0MzE1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'A celebration of urban culture featuring hip-hop, R&B, and street art. Food trucks, local vendors, and surprise performances throughout the day.',
    ticketTiers: [
      { id: 't8-1', name: 'Day Pass', price: 59, available: 10000, description: 'Full day access' },
      { id: 't8-2', name: 'Weekend Pass', price: 99, available: 5000, description: 'Both days, all stages' },
    ],
    priceRange: { min: 59, max: 99 },
  },
  {
    id: '9',
    title: 'Basketball Playoff Game 5',
    category: 'sports',
    date: '2026-04-30',
    time: '20:30',
    venue: 'TD Garden',
    location: 'Boston, MA',
    imageUrl: 'https://images.unsplash.com/photo-1771882856158-c8e083134ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwYXJlbmElMjBnYW1lJTIwbmlnaHR8ZW58MXx8fHwxNzc2NDMxNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1771882856158-c8e083134ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwYXJlbmElMjBnYW1lJTIwbmlnaHR8ZW58MXx8fHwxNzc2NDMxNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'The series is tied 2-2. Game 5 will be a battle for control. Experience playoff intensity in one of the league\'s most electric atmospheres.',
    ticketTiers: [
      { id: 't9-1', name: 'Upper Level', price: 159, available: 4000, description: 'Upper bowl seating' },
      { id: 't9-2', name: 'Lower Bowl', price: 349, available: 2000, description: 'Lower level views' },
      { id: 't9-3', name: 'Courtside', price: 1299, available: 100, description: 'Floor seats, closest to action' },
    ],
    priceRange: { min: 159, max: 1299 },
  },
  {
    id: '10',
    title: 'The Phantom of the Opera',
    category: 'theater',
    date: '2026-06-12',
    time: '20:00',
    venue: 'Royal Theater',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1649080428622-1ad11608f963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc2NDMxNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1649080428622-1ad11608f963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc2NDMxNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Andrew Lloyd Webber\'s timeless masterpiece returns with breathtaking sets and unforgettable performances. A must-see theatrical experience.',
    ticketTiers: [
      { id: 't10-1', name: 'Upper Circle', price: 79, available: 250, description: 'Top tier seating' },
      { id: 't10-2', name: 'Dress Circle', price: 139, available: 180, description: 'Mid-level premium' },
      { id: 't10-3', name: 'Stalls Premium', price: 219, available: 120, description: 'Orchestra level, best seats' },
    ],
    priceRange: { min: 79, max: 219 },
  },
];
