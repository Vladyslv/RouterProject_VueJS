<script setup>
const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="destination-details">
    <h1>Destination: {{ slug }}</h1>
  </div>
</template>