<template>
  <section class="min-h-screen bg-grid-pattern py-20 px-6 md:px-12 relative overflow-hidden">
    <!-- Background Overlays -->
    <div class="noise-overlay"></div>
    <div class="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
    <div class="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl animate-float z-0"></div>
    <div class="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
    <div class="absolute top-[20%] left-[15%] w-[200px] h-[200px] bg-black opacity-5 rounded-full blur-2xl animate-float-delay z-0"></div>
    <div class="absolute top-[15%] right-[25%] w-[100px] h-[100px] border-2 border-primary/30 opacity-20 rotate-45 animate-rotate z-0"></div>
    <div class="absolute bottom-[25%] left-[10%] w-[150px] h-[150px] border-2 border-secondary/25 opacity-15 rounded-full animate-pulse-slow z-0"></div>

    <!-- Main Container -->
    <div class="relative z-10 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-6 md:p-12 animate-fade-in overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-[100px] -z-10"></div>
      <div class="absolute bottom-0 right-0 w-40 h-40 bg-secondary/5 rounded-tl-[120px] -z-10"></div>
      
      <!-- Post Category Badge -->
      <div class="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
        Blog Post
      </div>

      <!-- Post Image -->
      <div class="overflow-hidden rounded-xl mb-8 shadow-lg border border-gray-100 group">
        <div class="relative transform transition-all duration-700 ease-out group-hover:scale-[1.02]">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
          <img
            :src="post.singlePost.image || 'https://via.placeholder.com/600x300?text=No+Image'"
            alt="Post Cover"
            class="w-full h-64 md:h-[400px] object-cover rounded-xl relative"
          />
          <div class="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
        </div>
      </div>

      <!-- Post Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {{ post.singlePost.title }}
      </h1>

      <!-- Meta -->
      <div class="flex items-center space-x-4 mb-8">
        <div class="flex items-center space-x-2 text-gray-600">
          <span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </span>
          <span>By <span class="text-black font-semibold">Ayush Singh</span></span>
        </div>
        <div class="flex items-center space-x-2 text-gray-600">
          <span class="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
          </span>
          <span>April 13, 2025</span>
        </div>
      </div>

      <!-- Post Content -->
      <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
        <p class="text-gray-800 text-base md:text-lg leading-relaxed">
          {{ post.singlePost.content }}
        </p>
      </div>

      <!-- Share Section -->
      <div class="space-y-3">
        <h2 class="text-xl font-semibold text-gray-800 flex items-center">
          <span class="w-8 h-8 bg-accent/10 rounded-lg mr-3 flex items-center justify-center text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </span>
          Share This Post
        </h2>
        <div class="flex gap-4 pl-11">
          <a href="#" class="social-link">
            <span class="sr-only">Twitter</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" class="social-link">
            <span class="sr-only">Facebook</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" class="social-link">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePostStore } from '@/stores/postStore';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const post = usePostStore();
const { id } = useRoute().params;

onMounted(() => {
  post.fetchSinglePost(id);
});
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

.bg-accent\/10 {
  background-color: rgba(14, 165, 233, 0.1);
}

.bg-accent\/20 {
  background-color: rgba(14, 165, 233, 0.2);
}

.bg-accent\/30 {
  background-color: rgba(14, 165, 233, 0.3);
}

.border-primary\/30 {
  border-color: rgba(124, 58, 237, 0.3);
}

.border-secondary\/25 {
  border-color: rgba(236, 72, 153, 0.25);
}

.from-primary\/10 {
  --tw-gradient-from: rgba(124, 58, 237, 0.1);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-primary\/30 {
  --tw-gradient-from: rgba(124, 58, 237, 0.3);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-secondary\/30 {
  --tw-gradient-stops: var(--tw-gradient-from), rgba(236, 72, 153, 0.3), var(--tw-gradient-to);
}

.to-accent\/30 {
  --tw-gradient-to: rgba(14, 165, 233, 0.3);
}

.bg-gradient-radial {
  background-image: radial-gradient(var(--tw-gradient-stops));
}

/* Background Style - matches homepage */
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

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out both;
}

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

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: #6b7280;
  border-radius: 9999px;
  transition: all 0.2s ease;
  background-color: #f3f4f6;
}

.social-link:hover {
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.social-link:nth-child(1):hover {
  background-color: #1DA1F2;
}

.social-link:nth-child(2):hover {
  background-color: #4267B2;
}

.social-link:nth-child(3):hover {
  background-color: #0077b5;
}
</style>