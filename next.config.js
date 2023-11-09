/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {}

module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif", 'svg'],
    webpack(config, options) {
        return nextConfig
      }
}); 
