module.exports = {
    siteUrl: "https://freshman-module.vercel.app",
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" },
      ],
      additionalSitemaps: [
        "https://freshman-module.vercel.app/sitemap.xml",
      ],
    },
  };
  