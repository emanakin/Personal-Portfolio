/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
          remotePatterns: [
              {
                  hostname: "**",
              },
          ],
      },
  
      // DON'T LEAVE THIS IF BUILDING FOR PRODUCTION
      eslint: {
          ignoreDuringBuilds: true,
      },
  };
  
  export default nextConfig;
