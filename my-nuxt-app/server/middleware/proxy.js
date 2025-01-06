import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
  target: 'http://34.64.157.30:4000', // API 서버 URL
  changeOrigin: true, // CORS 회피
  pathRewrite: { '^/api': '' }, // `/api`로 시작하는 경로를 제거
});

export default defineEventHandler((event) => {
  // Nuxt 3의 이벤트 핸들러에서 요청/응답 흐름 연결
  const { req, res } = event.node;

  return new Promise((resolve, reject) => {
    proxy(req, res, (err) => {
      if (err) {
        console.error('Proxy Error:', err);
        reject(err); // 에러가 발생하면 Promise를 reject
      } else {
        resolve(); // 성공적으로 처리된 경우 Promise를 resolve
      }
    });
  });
});
