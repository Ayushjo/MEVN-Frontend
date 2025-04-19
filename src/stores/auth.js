// stores/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('user')||null, // User object after registration or login
    token: localStorage.getItem("token")||null, // Only gets populated after login
  }),

  actions: {
    async register({ username, email, password }) {
      try {
        const response = await axios.post(`http://127.0.0.1:3080/users/register`, {
          username,
          email,
          password,
        })
        // Assuming success response is like:
        // { data: { ...user }, message: "User created successfully" }
        this.user = response.data.data._id
        this.token = response.data.token
        localStorage.setItem('token',this.token)
        localStorage.setItem('user', this.user._id)
        return response.data.message
      } catch (err) {
        if (err.response?.data?.errors) {
          // Joi error format
          const joiErrors = err.response.data.errors
          throw joiErrors
        } else if (err.response?.data) {
          throw new Error(err.response.data)
        } else {
          throw new Error('Registration failed. Please try again.')
        }
      }
    },

    async login({ username, password }) {
      try {
        const response = await axios.post(`http://127.0.0.1:3080/users/login`, {
          username,
          password,
        })

        // Assuming login returns a token and user data
        this.user = response.data.data._id
        this.token = response.data.token
        

        // Optional: Save token in localStorage for persistence
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', this.user)
        
      } catch (err) {
        throw new Error('Invalid email or password')
      }
    },


    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
})
