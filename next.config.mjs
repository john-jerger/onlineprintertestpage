/** Static export: works on Cloudflare Pages / Netlify (output folder: out) */
const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
