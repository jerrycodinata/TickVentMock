import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, continueAsGuest } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    continueAsGuest();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
      <motion.div
        className="w-full max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo / Title */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-[#1a1a1a] mb-2">
            TickVent HB
          </h1>
          <p className="text-sm text-[#6b6b6b] lowercase tracking-wide">
            discover unforgettable events
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider text-[#6b6b6b] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-white border border-[#e5e5e5] rounded-xl text-[#1a1a1a] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#1a1a1a] transition-colors"
              disabled={isLoading}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs uppercase tracking-wider text-[#6b6b6b] mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white border border-[#e5e5e5] rounded-xl text-[#1a1a1a] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#1a1a1a] transition-colors"
              disabled={isLoading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-600 text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Login Button */}
          <motion.button
            type="submit"
            className="w-full bg-[#1a1a1a] text-white py-4 rounded-xl lowercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            disabled={isLoading}
          >
            {isLoading ? 'logging in...' : 'login'}
          </motion.button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e5e5e5]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider">
              <span className="bg-[#fafafa] px-4 text-[#a0a0a0]">or</span>
            </div>
          </div>

          {/* Guest Login */}
          <motion.button
            type="button"
            onClick={handleGuestLogin}
            className="w-full bg-white border border-[#e5e5e5] text-[#1a1a1a] py-4 rounded-xl lowercase tracking-wide hover:border-[#1a1a1a] transition-colors"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
          >
            continue as guest
          </motion.button>

          {/* Create Account Link */}
          <p className="text-center text-sm text-[#6b6b6b]">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-[#1a1a1a] underline hover:no-underline"
              onClick={() => {
                // In a real app, this would navigate to signup
                alert('Sign up functionality would go here. For now, use guest login.');
              }}
            >
              create one
            </button>
          </p>
        </form>

        {/* Demo Notice */}
        <motion.div
          className="mt-8 p-4 bg-white border border-[#e5e5e5] rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-[#6b6b6b] text-center">
            This is a demo app. Enter any email and password to login, or continue as a guest.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
