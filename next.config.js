/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: '/github-pages',
    output: 'export',
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "/",
    },
};

module.exports = nextConfig;
