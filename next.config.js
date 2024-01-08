/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**'
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dra6cw2ff/**'
          }
        ],
      },
}//all exports go in here

module.exports = nextConfig

// module.exports = withImages({
//     fileExtensions: ["jpg", "jpeg", "png", "gif", 'svg'],
//     webpack(config, options) {
//         return nextConfig
//       }
// }); 
