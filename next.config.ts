import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    remotePatterns: [
      new URL("https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=TechSpark2026Ticket")
    ],
  },
};

export default nextConfig;
