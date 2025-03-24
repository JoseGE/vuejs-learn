<script setup>
import { defineProps } from 'vue'
import MiniCard from './MiniCard.vue'

defineProps({
  cards: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="card-container">
    <MiniCard v-for="card in cards" :key="card.title" :title="card.title" :count="card.count" />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
  justify-content: space-around;
}
</style>
