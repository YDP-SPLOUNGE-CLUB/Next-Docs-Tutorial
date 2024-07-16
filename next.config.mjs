/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nextjs.org'],
  },
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: '/lhs/routing/redirecting/old',
        destination: '/lhs/routing/redirecting/new',
        permanent: true,
      },
      {
        source: '/jks/redirect/old-path',
        destination: '/jks/redirect/new-path',
        permanent: false, // permanentRedirect
      },
    ]
  }
};

export default nextConfig;
