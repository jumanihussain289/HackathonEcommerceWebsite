/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Match all .svg files
        use: ["@svgr/webpack"], // Use the SVGR Webpack loader
      });
  
      return config; // Return the modified config
    },
  };
  
  export default nextConfig;
  