/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['frost0807.s3.ap-northeast-2.amazonaws.com'], // 외부 이미지 가져오는 config 설정
  },
};

module.exports = nextConfig;
