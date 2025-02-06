// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 5000, // Generates robots.txt
  exclude: ['/admin/*', '/admin',"/server-sitemap"], // (Optional) Exclude specific routes
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'BadBot', disallow: ['/'] },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/server-sitemap.xml`,
    ]
  },
  
};