import { motion } from 'motion/react';
import { EventCategory } from '../data/events';

interface FilterChipsProps {
  selected: EventCategory | 'all';
  onSelect: (category: EventCategory | 'all') => void;
}

const categories: Array<{ id: EventCategory | 'all'; label: string }> = [
  { id: 'all', label: 'all events' },
  { id: 'music', label: 'music' },
  { id: 'sports', label: 'sports' },
  { id: 'festival', label: 'festival' },
  { id: 'theater', label: 'theater' },
];

export function FilterChips({ selected, onSelect }: FilterChipsProps) {
  return (
    <div className="sticky top-0 z-10 bg-[#fafafa] border-b border-[#e5e5e5]">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-6 py-4 min-w-max">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={`
                px-5 py-2.5 rounded-full transition-all
                ${
                  selected === category.id
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-white text-[#6b6b6b] border border-[#e5e5e5]'
                }
              `}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-sm lowercase tracking-wide">{category.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
