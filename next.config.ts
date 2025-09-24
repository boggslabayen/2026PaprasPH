import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'lh3.googleusercontent.com'},
      {protocol: 'https', hostname: 'utfs.io'},
       {protocol: "https", hostname: "cvwo80giag.ufs.sh" }, 
    ]
  },
  /* config options here */
   eslint: {
    // Ignore ESLint checks during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
