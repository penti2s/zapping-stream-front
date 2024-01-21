<template>
    <div class="chat-container border p-4 rounded bg-base-100 text-base-content shadow">
      <h5 class="font-bold">Chat</h5>
      <div class="messages space-y-2 overflow-y-auto">
        <div v-for="message in messages" :key="message.id" class="message bg-base-200 rounded p-2">
          {{ message.text }}
        </div>
      </div>
      <input class="w-full p-2 mt-4 border rounded bg-base-200 text-base-content" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe un mensaje" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const messages = ref([]);
  const newMessage = ref('');
  let socket = null;
  
  onMounted(() => {
    socket = new WebSocket('ws://localhost:8080/chat');
  
    socket.onmessage = (event) => {
      messages.value.push({ text: event.data, id: Date.now() });
    };
  });
  
  onUnmounted(() => {
    if (socket) socket.close();
  });
  
  const sendMessage = () => {
    if (newMessage.value.trim() !== '') {
      socket.send(newMessage.value);
      newMessage.value = '';
    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px; 
  }
  .messages {
    overflow-y: auto;
    max-height: 400px; 
  }
  </style>