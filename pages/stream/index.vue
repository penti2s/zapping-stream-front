<template>
  <div class="flex flex-col items-center justify-start bg-base-200 flex-shrink flex-grow py-5">
    <header class="text-center mb-8 mt-5">
      <h1 class="text-4xl font-bold text-base-content">Stream - 1</h1>
    </header>
    <main class="flex w-full px-4 max-h-[90vh] overflow-hidden">
      <div class="flex w-full max-w-6xl mx-auto  shadow-lg rounded-lg p-4 items-stretch">
        <div class="flex-1 mr-4">
          <stream-hsl />
        </div>
        <div class="w-1/3 flex flex-col">
          <stream-chat />
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