
<script lang="ts" setup>
import { ref } from 'vue'
import { definePageMeta, useAuth } from '#imports'


const { signIn, token, data, status, lastRefreshedAt } = useAuth()

const showToast = ref(false)

const email = ref('')
const password = ref('')

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  }
})
const login = async () => {
  try {
    await signIn({ email: email.value, password: password.value }, {
      remember: true,
      redirect: false
    })
    return await navigateTo('/stream')
  } catch (error) {
    console.error('Error en el inicio de sesión:', error)
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 5000)

  }
}
</script>
  

<template>
    <div class="flex items-center justify-center min-h-screen bg-base-200">
      <div class="py-6 mt-4 text-left bg-base-100 shadow-lg px-10 rounded-lg">
        <h3 class="text-2xl font-bold text-center text-base-content">Login</h3>
        <form @submit.prevent="login">
          <div class="mt-4">
            <div>
              <label class="block text-base-content" for="email">Email</label>
              <input type="text" placeholder="Email" id="email" v-model="email" class="input input-bordered w-full max-w-xs">
            </div>
            <div class="mt-4">
              <label class="block text-base-content">Contraseña</label>
              <input type="password" placeholder="Contraseña" id="password" v-model="password" class="input input-bordered w-full max-w-xs">
            </div>
            <div class="flex flex-col items-center justify-between m-5">
              <button class="btn btn-primary w-full max-w-xs mt-4">Ingresar</button>
              <a href="#" class="link link-hover text-sm mt-4">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-if="showToast" class="toast toast-top toast-end">
      <div class="alert alert-error">
        <span>Correo o contraseña incorrecta.</span>
      </div>
    </div>
  </template>

  