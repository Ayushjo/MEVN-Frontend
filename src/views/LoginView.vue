<template>
  <section class="bg-black min-h-screen flex items-center justify-center py-20 px-6 md:px-16">
    <div
      class="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0"
    ></div>
    <div
      class="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-gray-200 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0"
    ></div>
    <div
      class="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row animate-fade-in"
    >
      <!-- Left Form Section -->
      <div class="w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to start your success story?
        </h2>
        <p class="text-gray-600 mb-8">
          Signup to our website and start leafing through your favorite literature today!
        </p>

        <Form
          @submit="onSubmitHandler"
          :validation-schema="loginSchema"
          :initial-values="initialValues"
          class="w-full"
        >
          <div class="mb-4">
            <label for="username" class="block text-gray-700 font-medium mb-2">Full name</label>
            <div class="relative">
              <Field
                type="text"
                id="username"
                name="username"
                class="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7f5af0]"
                placeholder="Jane Doe"
              />
              <p class="text-sm text-red-500 mt-1">
                <ErrorMessage name="username" />
              </p>
            </div>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
            <div class="relative">
              <Field
                type="password"
                id="password"
                name="password"
                class="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7f5af0]"
                placeholder="••••••••"
              />
              <p class="text-sm text-red-500 mt-1">
                <ErrorMessage name="password" />
              </p>
            </div>
          </div>

          <div class="flex items-center mb-4">
            <input type="checkbox" id="terms" name="terms" class="mr-2" />
            <label for="terms" class="text-sm text-gray-700">
              I agree to the <a href="#" class="text-[#7f5af0] underline">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-[#007bff] text-white font-semibold rounded-md hover:bg-[#0056b3] transition-colors"
          >
            Login
          </button>
        </Form>

        <p class="mt-4 text-sm text-gray-600">
          Don't have an account?
          <RouterLink to="/signup" class="text-[#7f5af0]">Signup</RouterLink>
        </p>
      </div>

      <!-- Right Image Section -->
      <div class="hidden md:block md:w-1/2">
        <img
          src="../assets/signup-illustration2.png"
          alt="Signup illustration"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
const router = useRouter()

const auth = useAuthStore()

const loginSchema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Username must contain only letters and numbers'),

  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(128, 'Password must be less than 128 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@#$%!^&*()_+]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    ),

  terms: yup.boolean().oneOf([true], 'You must agree to the terms'),
})

const initialValues = {
  username: '',
  password: '',
}

const onSubmitHandler = async (values, { resetForm }) => {
  try {
    const message = await auth.login(values)
    toast.success("Login Successful:>")
    resetForm()
    router.push('/')

  } catch (err) {
    if (Array.isArray(err)) {
      alert(err.map((e) => e.message).join('\n'))
    } else {
      toast.error(err.message)
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #7f5af0;
  border-radius: 10px;
}
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
</style>
