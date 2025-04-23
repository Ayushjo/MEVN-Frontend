<template>
  <section class="min-h-screen bg-grid-pattern py-20 px-6 md:px-12 relative overflow-hidden">
    <!-- Background Overlays -->
    <div class="noise-overlay"></div>
    <div
      class="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow z-0"
    ></div>
    <div
      class="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-gray-600 opacity-10 rounded-full blur-3xl animate-float z-0"
    ></div>
    <div
      class="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-gray-500 opacity-15 rounded-full blur-3xl animate-pulse-slow z-0"
    ></div>
    <div
      class="absolute top-[20%] left-[15%] w-[200px] h-[200px] bg-black opacity-5 rounded-full blur-2xl animate-float-delay z-0"
    ></div>
    <div
      class="absolute top-[15%] right-[25%] w-[100px] h-[100px] border-2 border-gray-300 opacity-20 rotate-45 animate-rotate z-0"
    ></div>
    <div
      class="absolute bottom-[25%] left-[10%] w-[150px] h-[150px] border-2 border-gray-400 opacity-15 rounded-full animate-pulse-slow z-0"
    ></div>

    <!-- Dashboard Section -->
    <div
      class="shadow-2xl rounded-3xl p-8 md:p-12 max-w-6xl w-full relative z-10 mx-auto backdrop-blur-sm bg-white/95"
    >
      <h1 class="text-4xl font-bold text-gray-900 text-center mb-8">Your Dashboard</h1>

      <!-- Posts Rendering -->
      <div v-if="posts.length" class="space-y-8">
        <div
          v-for="(post, index) in posts"
          :key="post._id"
          class="bg-gray-50 p-6 rounded-2xl shadow-md transition-all hover:shadow-lg"
        >
          <div class="flex flex-col md:flex-row justify-between md:items-start gap-4">
            <div class="w-full">
              <h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ post.title }}</h2>
              <img
                v-if="post.image"
                :src="post.image"
                alt="Post Image"
                class="w-full max-w-sm mt-4 rounded-lg shadow-md object-cover h-48"
              />
              <p class="text-gray-600 mt-4 leading-relaxed">{{ post.content }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
              <button
                @click="toggleEdit(index)"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all"
              >
                <span class="mr-1">✏️</span> Edit
              </button>
              <button
                @click="deletePost(post._id)"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all"
              >
                <span class="mr-1">🗑️</span> Delete
              </button>
            </div>
          </div>

          <!-- Edit Form -->
          <div
            v-if="post.isEditing"
            class="mt-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4"
          >
            <h3 class="text-lg font-medium text-gray-700 mb-2">Edit Post</h3>
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                id="title"
                v-model="title"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Title"
              />
            </div>
            <div>
              <label for="content" class="block text-sm font-medium text-gray-700 mb-1"
                >Content</label
              >
              <textarea
                id="content"
                v-model="content"
                rows="4"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Content"
              ></textarea>
            </div>

            <!-- Image Change Option -->
            <div>
              <label for="image" class="block text-sm font-medium text-gray-700 mb-1">Image</label>
              <input
                id="image"
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
              />
            </div>

            <div class="flex gap-4 pt-2">
              <button
                @click="handleSubmit(post._id)"
                class="bg-green-500 text-white px-5 py-2.5 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center"
              >
                <span class="mr-1">💾</span> Save Changes
              </button>
              <button
                @click="cancelEdit(index)"
                class="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center justify-center"
              >
                <span class="mr-1">❌</span> Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 bg-gray-50 rounded-2xl">
        <div
          class="inline-flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full mb-4"
        >
          <span class="text-3xl">📝</span>
        </div>
        <h3 class="text-xl font-medium text-gray-700 mb-2">No Posts Found</h3>
        <p class="text-gray-500 max-w-md mx-auto">
          No posts found for this user. Create your first post to get started.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { usePostStore } from '@/stores/postStore'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
const postStore = usePostStore()
const route = useRoute()
const posts = ref([])
const title = ref('')
const content = ref('')
const image = ref(null)
function handleImageUpload(e) {
  const file = e.target.files[0]
  if (file) {
    image.value = file
  }
}
async function handleSubmit(postid) {
  const formData = new FormData()
  formData.append('title', title.value)
  formData.append('content', content.value)
  if (image.value) {
    formData.append('image', image.value)
  }

  const res = await postStore.updatePost(formData, postid) // ✅ This calls your Pinia function
  // Optional: Reset form
  title.value = ''
  content.value = ''
  image.value = null
  if(res){

    toast.success('Successfully updated the Post')
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }
  else{
    toast.error("Sorry, couldn't upload your post!")
  }
}

onMounted(async () => {
  const fetched = await postStore.fetchUserPost(route.params.userid)
  posts.value = fetched.map((p) => ({
    ...p,
    isEditing: false,
    editTitle: p.title,
    editContent: p.content,
    newImageFile: null,
  }))
})

const toggleEdit = (index) => {
  posts.value[index].isEditing = true
}

const cancelEdit = (index) => {
  const post = posts.value[index]
  post.isEditing = false
  post.editTitle = post.title
  post.editContent = post.content
  post.newImageFile = null
}

const deletePost = async (id) => {
  try {
    await postStore.deleteSinglePost(id)
    posts.value = posts.value.filter((p) => p._id !== id)
  } catch (error) {
    console.error('Failed to delete post', error)
  }
}
</script>

<style scoped>
:root {
  --primary: #4f46e5;
  --primary-light: #6366f1;
}

.bg-primary {
  background-color: var(--primary);
}

.bg-primary\/10 {
  background-color: rgba(79, 70, 229, 0.1);
}

.bg-primary\/20 {
  background-color: rgba(79, 70, 229, 0.2);
}

.bg-primary\/90 {
  background-color: rgba(79, 70, 229, 0.9);
}

.text-primary {
  color: var(--primary);
}

.focus\:ring-primary\/50:focus {
  --tw-ring-color: rgba(79, 70, 229, 0.5);
}

.focus\:border-primary:focus {
  border-color: var(--primary);
}

.file\:text-primary {
  color: var(--primary);
}

.hover\:file\:bg-primary\/20:hover ::-webkit-file-upload-button {
  background-color: rgba(79, 70, 229, 0.2);
}

.bg-grid-pattern {
  background-color: #f8f8f8;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px);
  background-size: 20px 20px;
  position: relative;
}

.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
  z-index: 1;
  pointer-events: none;
}

.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% {
    opacity: 0.15;
  }
  100% {
    opacity: 0.25;
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 10s ease-in-out 1s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-rotate {
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
