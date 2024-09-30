export default {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '**',
    }],
  },
  webpack(config) {
    // Custom Webpack configuration for splitChunks
    config.optimization.splitChunks = {
      chunks: 'all',  // Apply splitChunks to all types of chunks (async, sync, etc.)
      automaticNameDelimiter: '.',  // Delimiter for naming chunks
      minSize: 30000,  // Minimum size (in bytes) for a chunk to be split
      maxSize: 50000,  // Maximum size (in bytes) for a chunk before it's split further
    };
    return config;
  },
};
