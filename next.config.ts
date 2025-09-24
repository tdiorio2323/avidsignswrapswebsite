import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost', '192.168.1.226']
    }
  },
  // Allow development from multiple origins
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'development'
              ? 'http://localhost:3000,http://127.0.0.1:3000,http://192.168.1.226:3000'
              : 'https://avidsigns.tdstudiosny.com'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
