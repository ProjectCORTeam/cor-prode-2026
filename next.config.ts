import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR when accessing via 127.0.0.1 instead of localhost
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
