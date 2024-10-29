'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

export default function Welcome() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        // Not authenticated, redirect to sign in
        router.push('/signin')
        return
      }
      
      setUser(user)
    }

    getUser()
  }, [router, supabase])

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome! 🎉</h1>
      <p className="mb-4">
        Thank you for verifying your email, {user.email}!
      </p>
      <p className="mb-4">
        Your account is now fully set up and ready to use.
      </p>
      <button 
        onClick={() => router.push('/dashboard')}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Dashboard
      </button>
    </div>
  )
}