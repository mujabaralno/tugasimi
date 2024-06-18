/** @type {import('next').NextConfig} */
const nextConfig = {
    async exportPathMap(defaultPathMap) {
        return {
          '/mobile-legend/pembayaran': { page: '/mobile-legend/pembayaran' },
        };
      },
};

export default nextConfig;
