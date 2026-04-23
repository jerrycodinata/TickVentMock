# TickVent HB - Event Ticketing Mobile App

A high-fidelity, minimal, and ultra-refined mobile event ticketing application focused on seamless event discovery and ticket purchasing.

## Design Philosophy

**Content-First, Experience-Led**
- Events as the hero with immersive imagery
- Minimal functionalism with restrained palette (deep charcoal #1a1a1a, off-white #fafafa)
- Spatial hierarchy with consistent spacing
- Smooth, physics-based transitions

## Key Features

### 1. Event Discovery Feed (Home)
- Vertically scrolling card-based layout
- Event cards with 4:5 aspect ratio images
- Category filtering (all, music, sports, festival, theater)
- Bookmark functionality with instant feedback
- Loading skeleton states

### 2. Immersive Event Detail View
- Full-bleed hero images (60vh)
- Overlay metadata (title, bookmark, category badge)
- Image gallery with horizontal scroll
- Ticket tier selection interface
- Purchase flow with modal confirmation

### 3. Favorites / Bookmarks
- Persistent saved events (localStorage)
- Same card-based layout as feed
- Empty state with friendly messaging
- Real-time updates when bookmarking

### 4. Navigation
- Bottom tab navigation (mobile-optimized)
- Smooth page transitions
- Active state indicators

## Technical Stack

- **React** with TypeScript
- **React Router** (data mode) for navigation
- **Motion** (Framer Motion) for animations
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Context API** for state management

## Color Palette

```
Deep Charcoal: #1a1a1a (primary text, CTAs)
Off White: #fafafa (background)
Light Gray: #e5e5e5 (borders, dividers)
Medium Gray: #6b6b6b (secondary text)
Light Gray Text: #a0a0a0 (tertiary text)
White: #ffffff (cards, surfaces)
```

## Typography

- **Serif (Titles)**: Playfair Display - for event titles and headers
- **Sans-serif (Body)**: Inter - for metadata, descriptions, UI elements

## Component Architecture

```
/src/app/
  ├── components/
  │   ├── EventCard.tsx          # Reusable event card
  │   ├── FilterChips.tsx        # Category filter
  │   ├── LoadingSkeleton.tsx    # Shimmer loading states
  │   ├── EmptyState.tsx         # Empty state messaging
  │   ├── BottomNav.tsx          # Bottom navigation bar
  │   └── Header.tsx             # Reusable page header
  ├── pages/
  │   ├── Home.tsx               # Event feed
  │   ├── EventDetail.tsx        # Immersive detail view
  │   ├── Favorites.tsx          # Bookmarked events
  │   └── NotFound.tsx           # 404 page
  ├── context/
  │   └── FavoritesContext.tsx   # Global favorites state
  ├── data/
  │   └── events.ts              # Mock event data
  ├── routes.tsx                 # Route configuration
  └── App.tsx                    # Root component
```

## State Management

### Favorites Context
- Manages bookmarked events using React Context
- Persists to localStorage for session continuity
- Provides `toggleFavorite` and `isFavorite` methods

### Mock Data
- 10 diverse events across 4 categories
- Rich event information (images, tiers, descriptions)
- Realistic pricing and availability

## UI/UX Highlights

### Micro-interactions
- Bookmark button scale animation
- Card hover lift effect
- Modal slide-up animation
- Success confirmation feedback
- Filter chip selection states

### Loading States
- Shimmer skeleton for event cards
- Shimmer skeleton for detail view
- Smooth transitions between states

### Empty States
- Friendly messaging when no favorites
- Clear call-to-action
- Iconography for visual interest

### Responsive Design
- Mobile-first approach (max-width: 28rem / 448px)
- Optimized for portrait orientation
- Touch-friendly tap targets
- Horizontal scrolling where appropriate

## Interactions

1. **Browsing Events**
   - Scroll through feed
   - Filter by category
   - Bookmark events instantly

2. **Viewing Details**
   - Tap event card for immersive detail
   - Swipe through image gallery
   - View ticket tiers and pricing

3. **Purchasing Tickets**
   - Select ticket tier
   - Review in modal
   - Confirm purchase
   - Success feedback

4. **Managing Favorites**
   - Bookmark from feed or detail
   - View all saved events
   - Persistent across sessions

## Future Enhancements

- Search functionality
- Date range filtering
- Map view of venues
- User authentication
- Real backend integration
- Payment processing
- Calendar sync
- Social sharing
- Event recommendations
- User reviews and ratings
