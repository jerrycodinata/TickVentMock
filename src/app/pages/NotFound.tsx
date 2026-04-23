import { Link } from 'react-router';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-[#f0f0f0] flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <AlertCircle className="w-10 h-10 text-[#a0a0a0]" />
        </motion.div>

        <h1 className="font-serif text-3xl text-[#1a1a1a] mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-[#6b6b6b] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <motion.button
            className="px-8 py-3 bg-[#1a1a1a] text-white rounded-xl lowercase tracking-wide"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            back to home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
