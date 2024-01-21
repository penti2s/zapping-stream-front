<template>
  <header><h2>Bienvenido</h2></header>
    <div>
      <button
      class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
      Button
    </button>
    </div>

</template>


<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  auth: false
})
</script>