<script lang="ts" setup>
import { ref } from 'vue'
import { definePageMeta, useAuth } from '#imports'
const name = ref('')
const email = ref('')
const password = ref('')
const showToast = ref(false)

const { signIn, token, data, status, lastRefreshedAt } = useAuth()

const register = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, password: password.value })
    });

    const responseData = await response.json();
    if (!response.ok) throw new Error(responseData.message || 'Error en el registro');

    await signIn({ email: email.value, password: password.value }, {
      remember: true,
      redirect: false
    })
    return await navigateTo('/stream');
  } catch (error) {
    console.error('Error en el registro:', error);
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 5000);
  }
}



definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  }
})
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-base-200">
      <div class="py-6 mt-4 text-left bg-base-100 shadow-lg px-10 rounded-lg">
        <h3 class="text-2xl font-bold text-center text-base-content">Registrarte</h3>
        <form @submit.prevent="register">
          <div class="mt-4">
            <div>
                <label class="block text-base-content" for="email">Nombre</label>
                <input type="text" placeholder="Nombre" id="name" v-model="name" class="input input-bordered w-full max-w-xs">
              </div>
            <div>
              <label class="block text-base-content" for="email">Email</label>
              <input type="text" placeholder="Email" id="email" v-model="email" class="input input-bordered w-full max-w-xs">
            </div>
            <div class="mt-4">
              <label class="block text-base-content">Contraseña</label>
              <input type="password" placeholder="Contraseña" id="password" v-model="password" class="input input-bordered w-full max-w-xs">
            </div>
            <div class="flex flex-col items-center justify-between m-5">
              <button class="btn btn-primary w-full max-w-xs mt-4">Registrarte</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-if="showToast" class="toast toast-top toast-end">
      <div class="alert alert-error">
        <span>Error en el registro</span>
      </div>
    </div>
  </template>
  
