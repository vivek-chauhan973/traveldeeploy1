export default {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["localhost"], // Allow images from localhost
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**", // Allow images from your uploads directory
      },
      {
        protocol: "https",
        hostname: "**", // Allow all external domains (Optional)
      },
    ],
  },
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // },
  webpack(config) {
    // Custom Webpack configuration for splitChunks
    config.optimization.splitChunks = {
      chunks: "all",
      automaticNameDelimiter: ".",
      minSize: 30000,
      maxSize: 50000,
    };
    return config;
  },
  async rewrites() {
    return [
      { source: "/api/:path*", destination: "/api/:path*" },
      { source: "/admin/:path*", destination: "/admin/:path*" },
      { source: "/uploads/:path*", destination: "/uploads/:path*" }, // Rewrite for serving uploads
    ];
  },
};

