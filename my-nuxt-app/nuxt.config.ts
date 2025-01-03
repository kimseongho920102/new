export default defineNuxtConfig({
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://localhost:4000/api', // 백엔드 API URL
  },
});
