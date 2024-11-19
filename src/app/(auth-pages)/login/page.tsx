'use client';
import { useState, FormEvent } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data?.user) {
        router.refresh();
        router.push('/account');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center pt-16 px-4 sm:px-0">
      <div className="w-full max-w-[400px] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blueside-dark mb-6 sm:mb-8 text-center">
          Login
        </h2>

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
                disabled={isLoading}
              />
              <label
                htmlFor="email"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Email
              </label>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block text-xs px-6 py-3 w-full text-gray-900 bg-transparent rounded-full border border-blueside-dark focus:outline-none focus:ring-0 focus:border-blueside-dark peer"
                placeholder=" "
                required
                disabled={isLoading}
              />
              <label
                htmlFor="password"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Password
              </label>
            </div>
          </div>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-600 px-2 sm:px-3 py-2 sm:py-3 rounded-full text-xs break-words"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blueside text-xs rounded-full hover:bg-blueside/90 text-white flex justify-center py-2.5 sm:py-3 w-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center space-y-4">
            <Link
              href="/forgot-password"
              className="text-xs text-blue-600 hover:underline"
            >
              Forgot your password?
            </Link>

            <p className="text-xs text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
