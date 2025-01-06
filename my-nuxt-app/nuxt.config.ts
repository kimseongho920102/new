export default defineNuxtConfig({
  // 전역 설정
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'description', content: 'A Nuxt 3 application with Axios integration' },
      ],
    },
    layoutTransition: {
      name: 'layout', // 전환 애니메이션 이름
      mode: 'out-in', // 전환 모드 (out-in 또는 in-out)
    },
  },

  // 서버 핸들러 설정
  serverHandlers: [
    {
      route: '/api/**', // '/api' 경로로 오는 요청을 미들웨어로 전달
      handler: '~/server/middleware/proxy.js',
    },
  ],

  // 개발 서버 설정
  devServer: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능하도록 설정
    port: 3000,      // 기본 포트
  },

  // 환경 변수 로드 (백엔드 URL 관리)
  runtimeConfig: {
    public: {
      apiBase: '/api', // 백엔드 API URL
    },
  },

  // CSS 파일 로드
  css: ['@/assets/css/tailwind.css'],

  // PostCSS 플러그인 설정
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // 타입스크립트 설정
  typescript: {
    strict: true,
  },

  // 호환성 날짜 설정
  compatibilityDate: '2025-01-06',
});
