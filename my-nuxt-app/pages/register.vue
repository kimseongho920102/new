<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" placeholder="Enter your name" />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" placeholder="Enter your email" />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" placeholder="Enter your password" />

      <label for="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        v-model="confirmPassword"
        placeholder="Confirm your password"
      />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:4000/api/register",
          {
            user_name: this.name,
            user_email: this.email,
            password: this.password,
          }
        );

        if (response.status === 201) {
          alert("Registration successful!");
          this.$router.push("/login"); // 성공 시 로그인 페이지로 이동
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Failed to register. Please try again.");
      }
    },
  },
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
