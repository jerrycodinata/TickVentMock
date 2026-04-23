import { motion } from 'motion/react';
import { Link } from 'react-router';
import { BookmarkX, LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  actionLabel?: string;
  actionPath?: string;
}

export function EmptyState({ title, description, icon: Icon, actionLabel, actionPath }: EmptyStateProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-[#f0f0f0] flex items-center justify-center mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        {Icon ? <Icon className="w-10 h-10 text-[#a0a0a0]" /> : <BookmarkX className="w-10 h-10 text-[#a0a0a0]" />}
      </motion.div>
      
      <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#6b6b6b] max-w-xs mb-6">
        {description}
      </p>

      {actionLabel && actionPath && (
        <Link to={actionPath}>
          <motion.button
            className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl text-sm lowercase tracking-wide"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {actionLabel}
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
}