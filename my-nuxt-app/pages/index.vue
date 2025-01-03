<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const message = ref('');

onMounted(async () => {
  const { data } = await useAxios('/message');
  message.value = data.message;
});
</script>
