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
    domains: ['https://frost0807.s3.ap-northeast-2.amazonaws.com/'], // 외부 이미지 가져오는 config 설정
  },
};

const removeImports = require('next-remove-imports')();
module.exports = removeImports({
  ...nextConfig,
});

module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: '/:path*',
        destination: 'http://13.124.27.209:8080/:path*',
      },
    ];
  };

  return { rewrites };
};
