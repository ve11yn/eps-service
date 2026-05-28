/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Allow the site to be accessed via IP addresses (for testing)
  experimental: {
    // Remove this if not needed
  },
};

module.exports = nextConfig;