<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  factura: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div :class="['factura-card', factura.status]">
    <div class="factura-card__header">
      <div class="factura-card__header-title">
        <h3>No. {{ factura.cod }}</h3>
        <p>{{ factura.name }}</p>
      </div>
      <div class="factura-card__header-amount">
        <p>RD$ {{ factura.amount }}</p>
      </div>
    </div>
    <div class="factura-card__body">
      <p>{{ factura.description }}</p>
    </div>
    <RouterLink :to="`/factura`">
      <button>Ver Detalle</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.factura-card {
  width: 100%;
  /* height: 100px; */
  background-color: #333;
  border-radius: 8px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.factura-card__header {
  display: flex;
  justify-content: space-between;
}

.factura-card__header-title {
  display: flex;
  flex-direction: column;
}

.factura-card.pending {
  background-color: #bf9c4f;
  color: #333;
}
</style>
