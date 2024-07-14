import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**',
    }],
  },
};

export default withTM(['jodit'])(nextConfig);
