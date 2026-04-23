import { motion } from 'motion/react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="bg-white border-b border-[#e5e5e5]">
      <div className="max-w-md mx-auto px-6 pt-8 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-3xl text-[#1a1a1a] mb-1">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-[#6b6b6b] lowercase tracking-wide">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
