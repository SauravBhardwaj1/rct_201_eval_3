/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized:true,
    domains:["avatars.githubusercontent.com"]
  }
}

module.exports = nextConfig
