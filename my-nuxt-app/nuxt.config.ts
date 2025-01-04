export default defineNuxtConfig({
  // 전역 설정
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'description', content: 'A Nuxt 3 application with Axios integration' },
      ],
    },
  },
  
  
  // 환경 변수 로드 (백엔드 URL 관리)
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:4000/api', // 백엔드 API URL
    },
  },

  // 모듈 추가 (필요한 경우)
  css: ['bootstrap/dist/css/bootstrap.css', 'bootstrap-vue/dist/bootstrap-vue.css','@/assets/css/tailwind.css','element-plus/dist/index.css'],
  modules: ['bootstrap-vue/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['element-plus'],
  },

  // 타입스크립트 설정
  typescript: {
    strict: true,
  },

  compatibilityDate: '2025-01-04',
});