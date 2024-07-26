// next.config.js

import withTM from 'next-transpile-modules';

export default withTM(['jodit'])({
  reactStrictMode: true,
  // output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '**',
    }],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  },
});
