import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    // Ignore ESLint checks during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
