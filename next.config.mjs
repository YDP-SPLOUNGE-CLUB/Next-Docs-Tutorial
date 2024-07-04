/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nextjs.org'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/jks/redirect/old-path',
        destination: '/jks/redirect/new-path',
        permanent: true, // permanentRedirect
      },
    ]
  },
};

export default nextConfig;
