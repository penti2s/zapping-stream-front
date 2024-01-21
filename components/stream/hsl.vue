<template>
  <div class="stream-container w-full">
    <video id="video" controls autoplay class="video-js vjs-default-skin w-full "></video>
  </div>
</template>

<script setup>
import Hls from 'hls.js';
import { onMounted } from 'vue';

const streamUrl = 'http://localhost:8080/hls/playlist.m3u8';

onMounted(() => {
  const video = document.getElementById('video');
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(streamUrl);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamUrl;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  }
});
</script>

<style scoped>
.stream-container {
  width: 100%;
}
</style>
