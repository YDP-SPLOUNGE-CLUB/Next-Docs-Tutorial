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
    ]
  }
};

export default nextConfig;
