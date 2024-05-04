/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810101-00b40502.png
    domains: ['raw.githubusercontent.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https:',
    //     hostname: 'raw.githubusercontent.com',
    //     port: '',

    //   }],
      
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
