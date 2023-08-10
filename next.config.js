const path = require('path')

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features

module.exports = {
	trailingSlash: true,
	// jika mode production, maka reactStrictMode harus false agar peringatan seperti pada mode dev tidak muncul
  reactStrictMode: true,
	// webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
	// 		// ignored: /node_modules/,
  //   };
  //   return config;
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000, // Atur polling interval (misalnya, 1000ms)
        aggregateTimeout: 300, // Tunggu 300ms setelah perubahan terakhir sebelum membangun ulang
				ignored: /node_modules/,
      };
    }

    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    // };

		return config
	},
	// experimental: {
  //   appDir: true
  // }
	async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*', // Ganti sesuai dengan URL API Anda
      },
    ];
  },
}
