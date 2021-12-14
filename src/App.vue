<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Storage } from "aws-amplify";

const images = ref([]) as any;
onMounted(async () => {
  const files = await Storage.list("");
  console.log("files: ", files);
  images.value = files;
});
</script>

<template>
  <h3>Picker Demo</h3>
  <div v-for="(image, idx) in images">
    <div :style="{ width: 400, margin: '0 auto' }" key="idx">
      <amplify-s3-image :imgKey="image.key" />
    </div>
  </div>
  <amplify-s3-image-picker preview />
  <amplify-s3-album picker="false"> </amplify-s3-album>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
