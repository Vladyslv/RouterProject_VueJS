<script setup>
import dataDestinations from '../data.json'
const destinations = dataDestinations.destinations
</script>

<template>
  <nav id="nav">
    <RouterLink to="/" active-class="no-active">Home</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination', params: { slug: destination.slug } }"
    >
      {{ destination.name }}
    </RouterLink>
  </nav>
</template>