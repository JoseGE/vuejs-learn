<script setup>
import { onMounted } from 'vue'
import FacturaCard from './FacturaCard.vue'
import api from '@/utils/axiosConfig'

defineProps({
  facturas: {
    type: Array,
    default: () => [],
  },
})

onMounted(() => {
  api
    .get('/posts')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <div class="factura-card-container">
    <FacturaCard v-for="factura in facturas" :key="factura.cod" :factura="factura" />
  </div>
</template>

<style scoped>
.factura-card-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}
</style>
