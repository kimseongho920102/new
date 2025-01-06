<template>
  <div>
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">My Nuxt App</h1>
        <nav>
          <nuxt-link to="/" class="mr-4 hover:underline">Home</nuxt-link>
          <nuxt-link to="/login" class="hover:underline">Login</nuxt-link>
        </nav>
      </div>
    </header>

    <main class="container mx-auto py-8">
      <NuxtPage />
    </main>

    <footer class="bg-gray-800 text-white text-center py-4">
      <p>© 2025 My Nuxt App. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
}
</style>
