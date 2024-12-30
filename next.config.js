/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  // Disable telemetry if desired
  telemetry: false,
  // Configure image domains if you're using next/image
  images: {
    domains: [],
  },
  experimental: {
    esmExternals: true
  },
  // Add configuration to handle browser-only code
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
