<script setup lang="ts">
import { definePageMeta } from '#imports'

import { useAuth } from '#imports'

const { signIn, token, data, status, signOut } = useAuth()

definePageMeta({
  auth: false
})
</script>


<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content animate-fade-in-down">
    <header class="mb-8 text-center">
      <h2 class="text-5xl font-bold animate-fade-in">Bienvenido Cracks</h2>
      <p v-if="!data" class="mt-3 text-xl animate-fade-in-delay">Tu punto de partida para una experiencia increíble</p>
      <p v-else class="mt-3 text-xl animate-fade-in-delay">¡No te pierdas nuestro stream en vivo!</p>
    </header>
    <div v-if="!data" class="flex flex-col items-center">
      <p class="text-lg animate-fade-in-delay">¿Ya tienes cuenta?</p>
      <nuxt-link to="/auth/login" class="btn btn-primary mt-4 animate-scale-up">
        Ingresar
      </nuxt-link>
      <p class="mt-6 text-lg animate-fade-in-delay">¿No tienes cuenta? <nuxt-link to="/auth/register" class="link link-hover">Regístrate aquí</nuxt-link></p>
    </div>
    <div v-else class="flex flex-col items-center">
      <nuxt-link to="/stream" class="btn btn-primary mt-4 animate-scale-up">
        Ver Stream
      </nuxt-link>
    </div>
  </div>
</template>


<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
.animate-fade-in-delay {
  animation: fade-in 0.7s ease-out 0.3s;
  animation-fill-mode: backwards;
}
@keyframes scale-up {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
.animate-scale-up {
  animation: scale-up 0.3s ease-out;
}
</style>
