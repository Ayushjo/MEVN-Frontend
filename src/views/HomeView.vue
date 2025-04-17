<template>
  <section class="min-h-screen bg-grid-pattern py-20 px-6 md:px-12 relative overflow-hidden">
    <!-- Background Overlays -->
    <div class="noise-overlay"></div>
    <div
      class="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow z-0"
    ></div>
    <div
      class="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl animate-float z-0"
    ></div>
    <div
      class="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse-slow z-0"
    ></div>
    <div
      class="absolute top-[20%] left-[15%] w-[200px] h-[200px] bg-black opacity-5 rounded-full blur-2xl animate-float-delay z-0"
    ></div>
    <div
      class="absolute top-[15%] right-[25%] w-[100px] h-[100px] border-2 border-primary/30 opacity-20 rotate-45 animate-rotate z-0"
    ></div>
    <div
      class="absolute bottom-[25%] left-[10%] w-[150px] h-[150px] border-2 border-secondary/25 opacity-15 rounded-full animate-pulse-slow z-0"
    ></div>

    <!-- Welcome Header -->
    <div class="max-w-6xl mx-auto text-center relative z-10 space-y-8">
      <div
        class="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4 animate-slide-in-up delay-0"
      >
        Discover & Share
      </div>
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-up delay-0"
      >
        Welcome to
        <span class="text-primary relative inline-block animate-tilt">
          MEVN Blog
          <span class="underline-animation"></span>
        </span>
      </h1>
      <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto animate-slide-in-up delay-150">
        Discover insightful articles, share your thoughts, and dive into a world of technology and
        creativity.
      </p>
      <div class="flex justify-center flex-wrap gap-4 animate-slide-in-up delay-300">
        <button 
          class="bg-primary hover:bg-primary/90 text-black border-2 hover:border-0 hover:text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition shadow-lg hover:shadow-xl"
        >
          Explore Posts
        </button>
        <RouterLink 
          :to="`/createpost/${auth.user}`"
          class="border-2 border-primary px-6 py-3 rounded-xl font-medium text-primary hover:bg-primary hover:text-white transition shadow-lg hover:shadow-xl"
        >
          Create Post
        </RouterLink>
      </div>
    </div>

    <!-- Enhanced Staggered Card Layout -->
    <div class="mt-20 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-8">
        <div
          v-for="(i, index) in post.posts.data"
          :key="index"
          :class="[
            'card-wrapper animate-fade-in opacity-0',
            index % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5',
            index % 2 === 0 ? 'md:translate-y-8' : '',
          ]"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div
            class="group bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden h-full transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]"
            :class="
              index % 4 === 0
                ? 'card-accent-primary'
                : index % 4 === 1
                  ? 'card-accent-secondary'
                  : index % 4 === 2
                    ? 'card-accent-accent'
                    : 'card-accent-neutral'
            "
          >
            <!-- Decorative elements -->
            <div
              class="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-[100px] -z-10"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-40 h-40 bg-secondary/5 rounded-tl-[120px] -z-10"
            ></div>

            <!-- Thumbnail with Overlay -->
            <div class="relative h-[250px] md:h-[280px] overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <img
                :src="i.image || 'https://via.placeholder.com/600x300?text=No+Image'"
                alt="Blog Thumbnail"
                class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div class="absolute top-4 right-4 z-20">
                <span
                  :class="[
                    'text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm',
                    index % 4 === 0
                      ? 'bg-primary/70'
                      : index % 4 === 1
                        ? 'bg-secondary/70'
                        : index % 4 === 2
                          ? 'bg-accent/70'
                          : 'bg-black/70',
                  ]"
                >
                  {{ ['Technology', 'Design', 'Development', 'AI'][index % 4] }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col h-full relative">
              <h2 class="text-2xl font-bold mb-4 text-gray-900 leading-snug relative">
                {{ i.title }}
              </h2>
              <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm mb-6">
                <p class="text-gray-700 text-base leading-relaxed relative">
                  {{ trimContent(i.content, 30) }}
                </p>
              </div>

              <!-- Explore Post Button and Date -->
              <div class="mt-6 flex items-center justify-between">
                <RouterLink
                  :to="`/blog/${i._id}`"
                  :class="[
                    'px-5 py-2 rounded-xl font-medium text-white transition-all duration-300 transform hover:translate-x-1',
                    index % 4 === 0
                      ? 'bg-black'
                      : index % 4 === 1
                        ? 'bg-black'
                        : index % 4 === 2
                          ? 'bg-black'
                          : 'bg-black',
                  ]"
                >
                  Explore Post
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </RouterLink>

                <span class="text-sm text-gray-500">
                  {{ ['Apr 12', 'May 3', 'Jun 18', 'Jul 24'][index % 4] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { usePostStore } from '@/stores/postStore'
import { onMounted } from 'vue'
import { ref } from 'vue'

const auth = useAuthStore()
const post = usePostStore()
let userid = ref(null)
let user = ref(null)

onMounted(() => {
  post.fetchPosts()
  user.value = JSON.stringify(localStorage.getItem('user'))
})

function trimContent(content, wordLimit = 20) {
  const words = content.split(' ')
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : content
}
</script>

<style scoped>
:root {
  --primary: #7c3aed;
  --secondary: #ec4899;
  --accent: #0ea5e9;
}

.text-primary {
  color: var(--primary);
}

.text-secondary {
  color: var(--secondary);
}

.text-accent {
  color: var(--accent);
}

.bg-primary {
  background-color: var(--primary);
}

.bg-secondary {
  background-color: var(--secondary);
}

.bg-accent {
  background-color: var(--accent);
}

.bg-primary\/5 {
  background-color: rgba(124, 58, 237, 0.05);
}

.bg-primary\/10 {
  background-color: rgba(124, 58, 237, 0.1);
}

.bg-primary\/20 {
  background-color: rgba(124, 58, 237, 0.2);
}

.bg-primary\/30 {
  background-color: rgba(124, 58, 237, 0.3);
}

.bg-primary\/70 {
  background-color: rgba(124, 58, 237, 0.7);
}

.bg-primary\/90 {
  background-color: rgba(124, 58, 237, 0.9);
}

.bg-secondary\/5 {
  background-color: rgba(236, 72, 153, 0.05);
}

.bg-secondary\/10 {
  background-color: rgba(236, 72, 153, 0.1);
}

.bg-secondary\/15 {
  background-color: rgba(236, 72, 153, 0.15);
}

.bg-secondary\/30 {
  background-color: rgba(236, 72, 153, 0.3);
}

.bg-secondary\/70 {
  background-color: rgba(236, 72, 153, 0.7);
}

.bg-accent\/10 {
  background-color: rgba(14, 165, 233, 0.1);
}

.bg-accent\/20 {
  background-color: rgba(14, 165, 233, 0.2);
}

.bg-accent\/30 {
  background-color: rgba(14, 165, 233, 0.3);
}

.bg-accent\/70 {
  background-color: rgba(14, 165, 233, 0.7);
}

.border-primary {
  border-color: var(--primary);
}

.border-primary\/30 {
  border-color: rgba(124, 58, 237, 0.3);
}

.border-secondary\/25 {
  border-color: rgba(236, 72, 153, 0.25);
}

.hover\:bg-primary:hover {
  background-color: var(--primary);
}

.hover\:bg-primary\/90:hover {
  background-color: rgba(124, 58, 237, 0.9);
}

/* Background Style */
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

/* Card Accents */
.card-accent-primary {
  border-top: 4px solid var(--primary);
}

.card-accent-secondary {
  border-top: 4px solid var(--secondary);
}

.card-accent-accent {
  border-top: 4px solid var(--accent);
}

.card-accent-neutral {
  border-top: 4px solid #333333;
}

/* Enhanced Underline Animation */
.underline-animation {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
  border-radius: 3px;
  animation:
    expandUnderline 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.5s,
    shimmerUnderline 4s linear infinite 2s;
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.3);
}

@keyframes expandUnderline {
  0% {
    width: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  100% {
    width: 100%;
    left: 0;
    transform: translateX(0);
  }
}

@keyframes shimmerUnderline {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Tilt animation for the MEVN Blog text */
.animate-tilt {
  animation: tiltAppear 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  transform-origin: center;
}

@keyframes tiltAppear {
  0% {
    transform: rotateX(-30deg) rotateY(5deg) rotateZ(-5deg) scale(0.8);
    opacity: 0;
  }
  20% {
    transform: rotateX(20deg) rotateY(-3deg) rotateZ(3deg) scale(1.05);
  }
  40% {
    transform: rotateX(-15deg) rotateY(2deg) rotateZ(-2deg) scale(0.95);
  }
  60% {
    transform: rotateX(10deg) rotateY(-1deg) rotateZ(1deg) scale(1.03);
  }
  80% {
    transform: rotateX(-5deg) rotateY(0.5deg) rotateZ(-0.5deg) scale(0.98);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    opacity: 1;
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-up {
  animation: slideInUp 0.8s ease-out both;
}

.delay-0 {
  animation-delay: 0s;
}

.delay-150 {
  animation-delay: 0.15s;
}

.delay-300 {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1.4s ease-out forwards;
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

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 10s ease-in-out 1s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-rotate {
  animation: rotate 30s linear infinite;
}
</style>
