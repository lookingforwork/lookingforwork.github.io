'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export const SignOutButton = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.refresh();
      router.push('/login'); // Redirect to login page after signing out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-transparent text-blueside-dark hover:text-gray-500 transition-colors duration-300 text-sm laptop:text-sm mt-5 mb-4 py-2 px-4"
      >
      Sign Out
    </button>
  );
};
