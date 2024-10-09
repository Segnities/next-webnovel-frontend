import withPWAInit from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
   dest: 'public',
})

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

export default withPWA(nextConfig);
