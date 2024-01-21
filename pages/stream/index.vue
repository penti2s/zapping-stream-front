<template>
  <div class="flex flex-col items-center justify-center bg-base-200">
    <header class="text-center mb-8 mt-5">
      <h1 class="text-4xl font-bold text-base-content">Stream - 1</h1>
    </header>
    <main class="flex flex-1 w-full px-4">
      <div class="w-full max-w-6xl mx-auto bg-base-100 shadow-lg rounded-lg p-4">
        <div class=" w-full">
          <stream-hsl />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

// Note: This is only for testing, it does not make sense to do this with `globalAppMiddleware` turned on
definePageMeta({
  middleware: 'auth'
})
</script>