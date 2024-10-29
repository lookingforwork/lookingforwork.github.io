/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // forces static build (no SSR)
  images: { unoptimized: true } // TODO figure this out
};

export default nextConfig;
