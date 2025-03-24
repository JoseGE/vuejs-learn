<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Default Title',
  },
  count: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="mini-card">
    <h3>{{ title }}</h3>
    <p>{{ count }}</p>
  </div>
</template>

<style scoped>
.mini-card {
  width: 100px;
  height: 100px;
  background-color: #333;
  border-radius: 8px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 12px;
  }
}
</style>
