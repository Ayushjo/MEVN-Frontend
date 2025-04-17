<template>
  <nav class="glass-navbar dark-mode f-1">
    <div class="container">
      <div class="nav-left">
        <ul class="nav-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink v-if="auth.token" :to="`/createpost/${auth.user}`">Posts</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </div>
      <div class="logo-wrapper">
        <div class="logo">MEVN Blog</div>
      </div>
      <div class="auth-buttons">
        <RouterLink v-if="!auth.token" class="auth-btn" to="/login">Login</RouterLink>
        <RouterLink v-if="!auth.token" class="auth-btn" to="/signup">Signup</RouterLink>
        <RouterLink v-if="auth.token" class="auth-btn" :to="`/dashboard/${auth.user}`"
          >Dashboard</RouterLink
        >

        <button @click="logout" v-if="auth.token" class="auth-btn">Logout</button>
      </div>
      <!-- Hamburger Icon for Mobile -->
      <div class="hamburger" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <ul>
        <li><RouterLink class="auth-btn" to="/">Home</RouterLink></li>
        <li><RouterLink v-if="!auth.token" class="auth-btn" to="/login">Login</RouterLink></li>
        <li>
          <RouterLink v-if="!auth.token" class="auth-btn" to="/signup">Signup</RouterLink>
        </li>
        <li><RouterLink  class="auth-btn" :to="`/createpost/${auth.user}`">Posts</RouterLink></li>
        <li><RouterLink class="auth-btn" to="/about">About</RouterLink></li>

        <li><button @click="logout"  class="auth-btn">Logout</button></li>
        <li>
          <RouterLink v-if="auth.token" class="auth-btn" :to="`/dashboard/${auth.user}`"
            >Dashboard</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const auth = useAuthStore()

const logout = () => {
  auth.logout()
  const user = auth.user
  if (!user) {
    toast.success('Successfully Logout.')
  }
  window.location.reload()
}
</script>

<style scoped>
.glass-navbar {
  background: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 16px;
  margin: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.dark-mode {
  background-color: #0f0f0f;
  color: #e0e0e0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
}

.logo-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1px;
  text-align: center;
}

.nav-left {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #c0c0c0;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #7f5af0;
}

.auth-buttons {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
  justify-content: flex-end;
  margin-left: auto;
}

.auth-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-weight: 500;
  transition:
    background 0.3s,
    transform 0.2s;
  cursor: pointer;
}

.auth-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 5px;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 80px;
  right: 0;
  background-color: rgba(18, 18, 18, 0.9);
  width: 100%;
  padding: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-menu li {
  margin: 1rem 0;
}

.mobile-menu a {
  text-decoration: none;
  color: #c0c0c0;
  font-weight: 500;
  transition: color 0.3s;
}

.mobile-menu a:hover {
  color: #7f5af0;
}

/* Media Query for Mobile */
@media (max-width: 768px) {
  .nav-left,
  .auth-buttons {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .logo-wrapper {
    position: relative;
    left: auto;
    transform: translateX(0);
  }
}
</style>
