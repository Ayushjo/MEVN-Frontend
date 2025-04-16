<template>
  <section class="min-h-screen bg-grid-pattern relative overflow-hidden">
    <!-- Noise Overlay -->
    <div class="noise-overlay z-0"></div>

    <!-- Background Floating Blurs -->
    <div class="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl animate-pulse-slow z-0"></div>
    <div class="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl animate-float z-0"></div>
    <div class="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
    <div class="absolute top-[20%] left-[15%] w-[200px] h-[200px] bg-black opacity-10 rounded-full blur-2xl animate-float-delay z-0"></div>
    <div class="absolute top-[15%] right-[25%] w-[100px] h-[100px] border-2 border-primary/30 opacity-30 rotate-45 animate-rotate z-0"></div>
    <div class="absolute bottom-[25%] left-[10%] w-[150px] h-[150px] border-2 border-secondary/25 opacity-25 rounded-full animate-pulse-slow z-0"></div>

    <div class="grid md:grid-cols-2 min-h-screen relative z-10">
      <!-- Form Side -->
      <div class="flex items-center justify-center px-6 md:px-12 py-16 bg-white/90 backdrop-blur-xl fade-in">
        <div class="w-full max-w-xl space-y-8">
          <div class="space-y-3">
            <div class="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">
              Express yourself
            </div>
            <h2 class="text-4xl font-bold text-gray-900 tracking-tight">
              <span class="typing-effect">{{ displayedText }}</span>
            </h2>
            <p class="text-gray-600">Share your thoughts, ideas, and creativity with the world.</p>
          </div>

          <form class="space-y-6">
            <div class="space-y-1">
              <label class="block font-medium text-gray-700 mb-1">Title</label>
              <div class="relative">
                <input 
                  v-model="title" 
                  type="text" 
                  placeholder="Enter post title"
                  class="w-full p-4 pl-5 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm" 
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <span class="text-lg">✏️</span>
                </div>
              </div>
            </div>

            <div class="space-y-1">
              <label class="block font-medium text-gray-700 mb-1">Content</label>
              <div class="relative">
                <textarea 
                  v-model="content" 
                  rows="6" 
                  placeholder="Write your content here..."
                  class="w-full p-4 pl-5 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm resize-none"
                ></textarea>
                <div class="absolute top-4 right-0 flex items-center pr-4 pointer-events-none">
                  <span class="text-lg">📝</span>
                </div>
              </div>
            </div>

            <div class="space-y-1">
              <label class="block font-medium text-gray-700 mb-1">Upload Image</label>
              <div class="relative">
                <input 
                  @change="handleImageUpload" 
                  type="file" 
                  accept="image/*"
                  class="w-full p-4 rounded-xl border border-dashed border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" 
                />
              </div>
            </div>

            <button 
              @click="handleSubmit" 
              type="submit"
              class="w-full bg-primary text-black px-6 py-4 rounded-xl font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Publish Post</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Image Side -->
      <div class="relative hidden md:flex items-center justify-center h-full w-full fade-in delay-500 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div class="absolute inset-0 bg-pattern opacity-10"></div>
        <div class="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <img 
            src="@/assets/signup-illustration2.png" 
            alt="Create Post Illustration"
            class="h-full w-full object-cover" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <div class="text-sm font-medium opacity-75">Your creativity</div>
            <div class="text-2xl font-bold">Share your story</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePostStore } from '@/stores/postStore'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'

const route = useRoute()
const userid = route.params.userid
const title = ref('')
const content = ref('')
const image = ref(null)
const post = usePostStore()
//to upload image 
function handleImageUpload(e) {
  const file = e.target.files[0]
  if (file) {
    image.value = file
  }
}
//to send image to backend we used formdata as we cant send it through json.
async function handleSubmit() {
  const formData = new FormData()
  formData.append('title', title.value)
  formData.append('content', content.value)
  if (image.value) {
    formData.append('image', image.value)
  }

  await post.createPost(formData,userid) // ✅ This calls your Pinia function
  toast.success("Post created successfully.!")
  // Optional: Reset form
  title.value = ''
  content.value = ''
  image.value = null
}

// Typing animation
const fullText = "Create a New Post"
const displayedText = ref("")
const typingSpeed = 60

onMounted(() => {
  let index = 0
  const typingInterval = setInterval(() => {
    if (index < fullText.length) {
      displayedText.value += fullText[index]
      index++
    } else {
      clearInterval(typingInterval)
    }
  }, typingSpeed)
})
</script>

<style scoped>
:root {
  --primary: #7c3aed;
  --primary-dark: #6d28d9;
  --secondary: #ec4899;
  --accent: #0ea5e9;
}

.text-primary {
  color: var(--primary);
}

.bg-primary {
  background-color: var(--primary);
}

.bg-primary\/10 {
  background-color: rgba(124, 58, 237, 0.1);
}

.bg-primary\/30 {
  background-color: rgba(124, 58, 237, 0.3);
}

.bg-secondary\/20 {
  background-color: rgba(236, 72, 153, 0.2);
}

.bg-accent\/20 {
  background-color: rgba(14, 165, 233, 0.2);
}

.border-primary\/30 {
  border-color: rgba(124, 58, 237, 0.3);
}

.border-secondary\/25 {
  border-color: rgba(236, 72, 153, 0.25);
}

.hover\:bg-primary-dark:hover {
  background-color: var(--primary-dark);
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--primary);
}

.focus\:border-primary:focus {
  border-color: var(--primary);
}

.file\:bg-primary\/10 {
  background-color: rgba(124, 58, 237, 0.1);
}

.file\:text-primary {
  color: var(--primary);
}

.hover\:file\:bg-primary\/20:hover ::-webkit-file-upload-button {
  background-color: rgba(124, 58, 237, 0.2);
}

/* Grid and Noise Background */
.bg-grid-pattern {
  background-color: #f3f4f6;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.7) 1px, transparent 1px);
  background-size: 20px 20px;
  position: relative;
}

.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.1;
  pointer-events: none;
}

/* Animations */
@keyframes pulse {
  0% { opacity: 0.15; }
  100% { opacity: 0.25; }
}
.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite alternate;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}
.animate-float {
  animation: float 8s ease-in-out infinite;
}
.animate-float-delay {
  animation: float 10s ease-in-out 1s infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-rotate {
  animation: rotate 30s linear infinite;
}

.typing-effect {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid var(--primary);
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

/* Fade In */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease forwards;
}
.fade-in.delay-500 {
  animation-delay: 0.5s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>