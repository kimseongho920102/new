import { createProxyMiddleware } from 'http-proxy-middleware';
import { fromNodeMiddleware } from 'h3';

export default fromNodeMiddleware(
  createProxyMiddleware('/api', {
    target: 'http://34.64.157.30:4000',
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  })
);
