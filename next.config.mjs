/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cover.imgslib.link"
         },
         {
            protocol: "https",
            hostname: "cover.imgslib.com"
         },
         {
            protocol: "https",
            hostname: "cover.imglib.info"
         }
      ]
   }
};

export default nextConfig;
