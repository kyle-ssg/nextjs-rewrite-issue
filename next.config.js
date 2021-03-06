/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async ()=>{
    return {
      beforeFiles: [
          // uncommenting will prevent the issue
          // { source: '/nfl', destination: '/_sport/nfl' },
          // { source: '/nfl/test', destination: '/_sport/nfl/test' },
          { source: '/nfl/:path*', destination: '/_sport/nfl/:path*' },
      ]
    }
  }
}

module.exports = nextConfig
