"use client";

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setMessage('Check your email for the password reset link');
    } catch (error) {
      setMessage('Error sending reset password email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center pt-16 px-4 sm:px-0">
      <div className="w-full max-w-[400px] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blueside-dark mb-6 sm:mb-8 text-center">
          Reset Password
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Enter your email address and we&apos;ll send you a link to reset your password
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block text-xs px-4 sm:px-6 py-2.5 sm:py-3 w-full text-gray-900 bg-transparent rounded-full border border-blueside-dark focus:outline-none focus:ring-0 focus:border-blueside-dark peer"
                placeholder=" "
                required
                disabled={loading}
              />
              <label
                htmlFor="email"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Email
              </label>
            </div>
          </div>

          {message && (
            <div
              className={`px-2 sm:px-3 py-2 sm:py-3 rounded-full text-xs break-words text-center ${message.includes('Error')
                  ? 'bg-red-100 border border-red-400 text-red-600'
                  : 'bg-green-100 border border-green-400 text-green-600'
                }`}
              role="alert"
            >
              <span className="block sm:inline">{message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blueside text-xs rounded-full hover:bg-blueside/90 text-white flex justify-center py-2.5 sm:py-3 w-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>

          <div className="text-center">
            <Link
              href="/login"
              className="text-xs text-blue-600 hover:underline"
            >
              Return to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
