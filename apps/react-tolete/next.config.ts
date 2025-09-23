import type { NextConfig } from 'next'

// retrigger
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
  /* config options here */
}

export default nextConfig
