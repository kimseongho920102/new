<template>
  <div class="register-page">
    <h1>Register</h1>
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" />

      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" />

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />

      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" placeholder="Confirm your password" />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style scoped>
.register-page {
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style>
