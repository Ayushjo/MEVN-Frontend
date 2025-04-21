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
      } catch (error) {
        this.error = err.response?.data?.message || 'Failed to create post'
      } finally {
        this.loading = false
      }
    },
    async updatePost(formdata, postid) {
      try {
        const post = await axios.post(
          `https://mevn-backend-4.onrender.com/users/updatePost/${postid}`,
          formdata,
        )
        this.posts = post.data
      } catch (error) {
        this.error = err.response?.data?.message || 'Failed to create post'
      } finally {
        this.loading = false
      }
    },
  },
})
