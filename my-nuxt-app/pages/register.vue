<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
     
      <label for="userId">userId</label>
      <input type="text" id="userId" v-model="userId" placeholder="Enter your userId" />

      <label for="userName">userName</label>
      <input type="text" id="userName" v-model="userName" placeholder="Enter your name" />

      <label for="userEmail">userEmail</label>
      <input type="email" id="userEmail" v-model="userEmail" placeholder="Enter your email" />

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
      userId:"",
      userName: "",
      userEmail: "",
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
          "http://34.64.157.30:4000/api/register",
          {
            userId: this.userId,
            userName: this.userName,
            userEmail: this.userEmail,
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
