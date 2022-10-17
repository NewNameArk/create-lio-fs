<template>
  <div>主页</div>
  <ul>
    <li>name:{{name}}</li>
    <li>count:{{count}}</li>
    <li>doubleCount:{{doubleCount}}</li>
  </ul>
  <button @click="()=> increment()">点击</button>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@store/counter'
 
const store = useCounterStore()
const { name, count ,doubleCount } = storeToRefs(store)
const {increment} = store
</script>