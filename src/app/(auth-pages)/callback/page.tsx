'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthCallback() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const handleCallback = async () => {
      const { error } = await supabase.auth.getSession()
      
      if (!error) {
        // Successful verification - redirect to account page
        router.push('/account')
      }
    }

    handleCallback()
  }, [router, supabase])

  return null
}