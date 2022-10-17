<template>
  <div>
    <button @click="goHome">主页</button>
    <button @click="goAbout">关于我们</button>
  </div>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => {
  router.push('/')
}
const goAbout = () => {
  router.push('/about')
}
</script>
<style scoped></style>
