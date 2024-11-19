/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // forces static build (no SSR)
  images: { unoptimized: true }, // dont use img opt API as static only
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://ssejbexipmatcaazttmv.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZWpiZXhpcG1hdGNhYXp0dG12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NTAwNDksImV4cCI6MjA0MzAyNjA0OX0.B-Fwzi8CIETRNxYVnBwoJjnznAEgUWf2qf0nLPLTPYw'
  }
};

export default nextConfig;
