import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fdn2.gsmarena.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images.samsung.com" },
      { protocol: "https", hostname: "static.tp-link.com" },
    ],
  },
};

export default nextConfig;
