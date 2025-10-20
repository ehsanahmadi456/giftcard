/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gift-card.ir",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
