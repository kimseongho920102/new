<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold mb-4">Welcome to My Nuxt App</h2>
    <p class="text-gray-700">Explore our services and get started today.</p>
    <nuxt-link to="/login" class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Get Started
    </nuxt-link>
  </div>
</template>

<script setup>
// 레이아웃을 명시적으로 설정하지 않으면 default.vue를 사용함
definePageMeta({
  layout: 'default',
});
</script>