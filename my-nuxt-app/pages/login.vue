<template>
  <div class="login-page">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" />

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin: 10px 0 5px;
}
input {
  padding: 10px;
  margin-bottom: 15px;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
