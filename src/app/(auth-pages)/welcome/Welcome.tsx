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
    <div className="flex items-center justify-center pt-16 px-4 sm:px-0">
      <div className="w-full max-w-[450px] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blueside-dark mb-6 sm:mb-8 text-center">
          Welcome! 🎉
        </h2>

        <div className="space-y-4 sm:space-y-6">
          <p className="text-sm text-center">
            Thank you for verifying your email
          </p>
          <div className="bg-green-50 border border-green-200 rounded-full px-4 py-2 text-center">
            <p className="text-sm text-green-700">
              ✓ {user.email}
            </p>
          </div>

          <p className="text-sm text-center">
            Your account is now fully set up and ready to use.
          </p>

          <button
            onClick={() => router.push('/account')}
            className="bg-blueside text-sm rounded-full hover:bg-blueside/90 text-white flex justify-center py-2.5 sm:py-3 w-full shadow-lg"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}