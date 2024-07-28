export default {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '**',
    }],
  },
};
