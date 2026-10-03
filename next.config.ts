import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/tutoring", destination: "/programs", permanent: true },
      { source: "/daycare", destination: "/early-years", permanent: true },
    ];
  },
};

export default nextConfig;
