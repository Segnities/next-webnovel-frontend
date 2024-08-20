/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cover.imgslib.link"
         }
      ]
   }
};

export default nextConfig;
