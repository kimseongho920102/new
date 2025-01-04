import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Axios 인스턴스 생성
  const instance = axios.create({
    baseURL: config.public.apiBase, // `runtimeConfig`에서 가져온 API URL
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
