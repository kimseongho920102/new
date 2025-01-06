import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (req, res, next) { if (req.url.startsWith('/api')) {
     createProxyMiddleware({
         target: 'http://34.64.157.30:4000',
         pathRewrite: { '^/api': '' },
         changeOrigin: true 
        })(req, res, next); 
    } else { next(); }}