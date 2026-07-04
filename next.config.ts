import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit plain static files (out/) — page routes become /<route>.html,
  // matching the original static-site URLs (e.g. /about.html).
  output: "export",
  trailingSlash: false,
  images: {
    // Static export cannot use the image optimization endpoint.
    unoptimized: true,
  },
};

export default nextConfig;
