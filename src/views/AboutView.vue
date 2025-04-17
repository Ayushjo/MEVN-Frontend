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

    <!-- Main About Section -->
    <div class="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-10 md:p-16 max-w-5xl w-full relative z-10 mx-auto overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-[100px] -z-10"></div>
      <div class="absolute bottom-0 right-0 w-40 h-40 bg-secondary/5 rounded-tl-[120px] -z-10"></div>
      
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div>
            <div class="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              Developer Profile
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">About Me</h1>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p class="text-gray-700 text-lg leading-relaxed">
              <span class="typing-effect whitespace-normal">{{ displayedText }}</span>
            </p>
          </div>

          <div class="space-y-3">
            <h2 class="text-2xl font-semibold text-gray-800 flex items-center">
              <span class=" w-8 h-8 bg-primary/10 rounded-lg mr-3 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                </svg>
              </span>
              My Skills
            </h2>
            <div class="flex flex-wrap gap-3">
              <span class="skill">JavaScript</span>
              <span class="skill">Vue.js</span>
              <span class="skill">Node.js</span>
              <span class="skill">MongoDB</span>
              <span class="skill">Express</span>
            </div>
          </div>

          <div class="space-y-3">
            <h2 class="text-2xl font-semibold text-gray-800 flex items-center">
              <span class=" w-8 h-8 bg-secondary/10 rounded-lg mr-3 flex items-center justify-center text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
              </span>
              What I'm Passionate About
            </h2>
            <p class="text-gray-600 text-base leading-relaxed pl-11">
              I am passionate about building efficient, scalable applications that solve real-world problems. My main focus is on full-stack development, and I'm always eager to learn new technologies that can make my coding experience even better.
            </p>
          </div>

          <div class="space-y-3">
            <h2 class="text-2xl font-semibold text-gray-800 flex items-center">
              <span class=" w-8 h-8 bg-accent/10 rounded-lg mr-3 flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </span>
              Let's Connect
            </h2>
            <div class="flex gap-4 pl-11">
              <a href="https://github.com/Ayushjo" target="_blank" class="social-link">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ayush-singh-36539734b/" target="_blank" class="social-link">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a href="mailto:ayushsingh202586@gmail.com" class="social-link">
                <span class="sr-only">Email</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="hidden md:block relative">
          <div class="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent rounded-2xl"></div>
          <div class="relative transform hover:scale-[1.02] hover:rotate-1 transition-all duration-500 group">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative">
              <img 
                src="@/assets/about-image.jpg" 
                alt="About Visual" 
                class="rounded-2xl shadow-md w-full object-cover h-full"
              >
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <div class="text-sm font-medium opacity-75">Developer</div>
                <div class="text-2xl font-bold">Ayush Singh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const fullText = "Hi, I'm Ayush Singh, an 18-year-old developer who is still learning and working with MEVN.";
const displayedText = ref("");
const typingSpeed = 50;

onMounted(() => {
  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < fullText.length) {
      displayedText.value += fullText[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, typingSpeed);
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

/* Typing Effect */
.typing-effect {
  display: inline-block;
  white-space: normal;
  overflow: hidden;
  border-right: 3px solid var(--primary);
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.skill {
  background-color: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  font-weight: 500;
  color: #4b5563;
  border: 1px solid #e5e7eb;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.skill:hover {
  background-color: var(--primary);
  color: black;
  cursor: default;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
  background-color: #333;
}

.social-link:nth-child(2):hover {
  background-color: #0077b5;
}

.social-link:nth-child(3):hover {
  background-color: var(--accent);
}
</style>