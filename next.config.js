/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin/app/create-article",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/admin/app/create-article",
        permanent: false,
      },
      {
        source: "/admin/app",
        destination: "/admin/app/create-article",
        permanent: false,
      },
    ];
  },
};
