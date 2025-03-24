<script setup>
import ListMinitCards from '@/components/ListMinitCards.vue'
import ListFacturaCards from '@/components/ListFacturaCards.vue'

const cards = [
  {
    title: 'Pendientes',
    count: 3,
  },
  {
    title: 'En Proceso',
    count: 6,
  },
  {
    title: 'Completados',
    count: 10,
  },
]

const facturas = [
  {
    status: 'pending',
    cod: 123456789,
    name: 'Juan Jose',
    amount: 100000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    status: 'in-progress',
    cod: 123456789,
    name: 'Juan Jose',
    amount: 100000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    status: 'completed',
    cod: 123456789,
    name: 'Juan Jose',
    amount: 100000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
]
</script>
<template>
  <ListMinitCards :cards="cards" />
  <ListFacturaCards :facturas="facturas" />
</template>
