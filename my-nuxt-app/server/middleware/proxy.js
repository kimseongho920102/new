export default defineEventHandler(async (event) => {
    const { req, res } = event.node;
  
    // 요청을 백엔드로 전달
    const targetUrl = `http://34.64.157.30:3000/${req.url}`;
    const proxyRequest = await fetch(targetUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method === 'POST' ? await readBody(event) : undefined,
    });
  
    // 응답 전송
    const responseBody = await proxyRequest.text();
    res.statusCode = proxyRequest.status;
    res.setHeader('Content-Type', proxyRequest.headers.get('content-type') || 'text/plain');
    res.end(responseBody);
  });
  