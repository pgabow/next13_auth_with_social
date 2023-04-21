/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: 'mongodb://localhost:27017/next13-auth',
    NEXTAUTH_SECRET: 'testpaul',

    GOOGLE_CLIENT_ID: '1058744309903-dm739sh3tr683poqfqk2p2bun371b10o.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',

    GITHUB_ID: 'a22786a3823f0550bf3d',
    GITHUB_SECRET: '20167767657ebcf1e10f607d9316e5149031c9b5',
  },
}

module.exports = nextConfig;
