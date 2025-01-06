import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler((event) => {
  const proxy = createProxyMiddleware({
    target: 'http://34.64.157.30:4000', // API 서버 URL
    changeOrigin: true, // CORS 회피
    pathRewrite: { '^/api': '' }, // `/api`로 시작하는 경로를 제거
  });

  return proxy(event.req, event.res, (err) => {
    if (err) {
      console.error('Proxy Error:', err);
    }
  });
});
