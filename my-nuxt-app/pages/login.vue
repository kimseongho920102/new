<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded shadow-md">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Email</label>
        <input type="email" class="w-full px-3 py-2 border rounded" placeholder="Enter your email" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Password</label>
        <input type="password" class="w-full px-3 py-2 border rounded" placeholder="Enter your password" />
      </div>
      <button class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
    </form>
    <div>
      아이디가 없으신가요? <br>
    <nuxt-link to="/register" class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        회원가입
    </nuxt-link>
    </div>
  </div>
  

</template>
