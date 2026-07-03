/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  env: {
    NODE_TLS_REJECT_UNAUTHORIZED: "0",
  },
};

export default nextConfig;
