<script setup>
import { computed } from 'vue'
import dataDestinations from '../data.json'

const props = defineProps({
  slug: {
    type: String,
    required: true
  },
  experienceSlug: {
    type: String,
    required: true
  }
})

const destination = computed(() => {
  return dataDestinations.destinations.find((item) => item.slug === props.slug)
})

const experience = computed(() => {
  return destination.value.experiences.find((item) => item.slug === props.experienceSlug)
})
</script>

<template>
  <div v-if="experience" class="experience-details">
    <h2>{{ experience.name }}</h2>
    <img :src="'/images/' + experience.image" :alt="experience.name" width="38" />
    <p>{{ experience.description }}</p>
  </div>
</template>