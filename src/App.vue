<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const msg = 'Hello Vue!'
const isGestorLoged = 1
const facturas = ['Factura 1', 'Factura 2', 'Factura 3']
const url = 'https://ayuntamiento.tech'
const amount = ref(0)

const input = ref('Gestor')
</script>

<template>
  <HelloWorld msg="Bienvenido a Gritrim" />
  <!-- <h1>{{ msg }}</h1> -->
  <!-- <h1 v-text="msg"></h1> -->
  <h1 v-if="isGestorLoged == 1">Gestor Activo</h1>
  <h1 v-else-if="isGestorLoged == -1">Gestor pendiente</h1>
  <h1 v-else>Gestor inactivo</h1>

  <h2>Facturas</h2>
  <ul>
    <li v-for="factura in facturas" :key="factura" :id="factura">{{ factura }}</li>
  </ul>
  <h1>{{ amount }}</h1>

  <h2>Gestor: {{ input }}</h2>
  <input type="text" v-model="input" />

  <button @click="amount++">Cobrar</button>
  <!-- <a :href="url" >Municipia</a> -->
</template>

<style scoped>
h1 {
  color: red;
}
</style>
