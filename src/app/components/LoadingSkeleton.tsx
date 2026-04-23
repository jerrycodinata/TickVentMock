import { motion } from 'motion/react';

export function EventCardSkeleton() {
  return (
    <div className="bg-[#fafafa] rounded-2xl overflow-hidden">
      {/* Image skeleton */}
      <motion.div
        className="w-full aspect-[4/5] bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5]"
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <motion.div
          className="h-5 bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] rounded w-3/4"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
        <motion.div
          className="h-4 bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] rounded w-1/2"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.1,
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      </div>
    </div>
  );
}

export function EventDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header skeleton */}
      <motion.div
        className="w-full h-[60vh] bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5]"
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
      
      <div className="p-6 space-y-6">
        <motion.div
          className="h-8 bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] rounded w-2/3"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
        <motion.div
          className="h-4 bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] rounded w-1/2"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.1,
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      </div>
    </div>
  );
}
