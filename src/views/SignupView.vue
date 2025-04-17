<template>
  <section class="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
    <!-- Decorative Backgrounds -->
    <div class="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0"></div>
    <div class="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0"></div>

    <!-- Background Grid (Updated for visibility) -->
    <div class="bg-grid-pattern absolute top-0 left-0 w-full h-full z-[-1]"></div>

    <!-- Main Signup Form Container -->
    <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-xl overflow-hidden bg-white animate-fade-in">
      <!-- Left: Form Section -->
      <div class="p-10 flex flex-col justify-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Ready to start your success story?</h2>
        <p class="text-gray-600 mb-8">Signup to our website and start leafing through your favorite literature today!</p>

        <Form  :initial-values="initialValues" :validation-schema="signupSchema" class="space-y-5">
          <!-- Username -->
          <div>
            <label for="username" class="block text-gray-700 font-medium mb-1">Full name</label>
            <Field
              name="username"
              type="text"
              id="username"
              placeholder="Jane Doe"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p class="text-red-500 text-sm mt-1"><ErrorMessage name="username" /></p>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
            <Field
              name="email"
              type="email"
              id="email"
              placeholder="janedoe@mail.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p class="text-red-500 text-sm mt-1"><ErrorMessage name="email" /></p>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-gray-700 font-medium mb-1">Password</label>
            <Field
              name="password"
              type="password"
              id="password"
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p class="text-red-500 text-sm mt-1"><ErrorMessage name="password" /></p>
          </div>

          <!-- Terms -->
          <div class="flex items-start">
            <Field type="checkbox" name="terms" class="mt-1 mr-2" />
            <label class="text-sm text-gray-600">
              I agree to the <a href="#" class="text-blue-500 underline">Terms & Conditions</a>
            </label>
          </div>
          <p class="text-red-500 text-sm mt-1"><ErrorMessage name="terms" /></p>

          <!-- Button -->
          <button
          @click="onSubmitHandler"
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300 shadow-md"
          >
            Sign up
          </button>
        </Form>

        <!-- Already have an account -->
        <p class="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <RouterLink to="/login" class="text-blue-500 hover:underline">Login</RouterLink>
        </p>
      </div>

      <!-- Right: Image Section -->
      <div class="hidden md:flex items-center justify-center bg-gray-100">
        <img src="@/assets/signup-illustration.png" alt="Signup" class="object-cover w-full h-full max-h-[600px]" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from "../stores/auth.js"
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
const router = useRouter()

const auth = useAuthStore()

const signupSchema = yup.object({
  username: yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Only letters, numbers, and spaces allowed'),
  email: yup.string()
    .required('Email is required')
    .email('Enter a valid email address'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(128, 'Password must be less than 128 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Must contain upper, lower case and number'),
  terms: yup.boolean().oneOf([true], 'You must agree to the terms'),
})

const initialValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const onSubmitHandler = async (values, { resetForm }) => {
  try {
    const message = await auth.register(values)
    toast.success("Registered Successfully")
    resetForm()
    router.push('/')
  } catch (err) {
    if (Array.isArray(err)) {
      alert(err.map(e => e.message).join('\n'))
    } else {
      toast.error(err.message || JSON.stringify(err))

    }
  }
}
</script>

<style scoped>
/* Background grid pattern with more visible lines */
.bg-grid-pattern {
  background-color: #f8f8f8;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px), /* Darker grid lines */
    linear-gradient(90deg, rgba(0, 0, 0, 0.2) 1px, transparent 1px); /* Darker grid lines */
  background-size: 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it's behind the content */
}

/* Animations for the background circles */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

/* Pulse animation for the background circles */
@keyframes pulse {
  0% { opacity: 0.15; }
  100% { opacity: 0.25; }
}
.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite alternate;
}
</style>
