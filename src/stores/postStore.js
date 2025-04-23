// stores/postStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    singlePost: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(`https://mevn-backend-4.onrender.com/users/getPost`)
        this.posts = res.data
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to fetch posts'
      } finally {
        this.loading = false
      }
    },
    async fetchSinglePost(id) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(`https://mevn-backend-4.onrender.com/users/getPost/${id}`)
        this.singlePost = res.data
      } catch (error) {
        this.error = err.response?.data?.message || 'Failed to fetch posts'
      } finally {
        this.loading = false
      }
    },
    async fetchUserPost(userid) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(
          `https://mevn-backend-4.onrender.com/users/getUserPost/${userid}`,
        )
        return res.data
      } catch (error) {
        this.error = err.response?.data?.message || 'Failed to fetch posts'
      } finally {
        this.loading = false
      }
    },
    async deleteSinglePost(userid) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(
          `https://mevn-backend-4.onrender.com/users/deletePost/${userid}`,
        )
      } catch (error) {
        this.error = err.response?.data?.message || 'Failed to fetch posts'
      } finally {
        this.loading = false
      }
    },
    async createPost(formdata, userid) {
      try {
        const post = await axios.post(
          `https://mevn-backend-4.onrender.com/users/post/${userid}`,
          formdata,
        )
        return { success: true, data: post.data }
      } catch (error) {
        // Changed 'err' to 'error' here
        this.error = error.response?.data?.message || 'Failed to create post'
        return { success: false, message: this.error }
      } finally {
        this.loading = false
      }
    },
    async updatePost(formdata, postid) {
      try {
        const response = await axios.put(
          `https://mevn-backend-4.onrender.com/users/post/${postid}`,
          formdata,
        )
        return { success: true, data: response.data.message }
      } catch (error) {
        // Changed 'err' to 'error' here
        this.error = error.response?.data?.message || 'Failed to update post'
        return { success: false, message: this.error }
      } finally {
        this.loading = false
      }
    },
  },
})
