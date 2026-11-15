<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true
  },
  destinationSlug: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink
    class="card"
    :to="{
      name: 'experience',
      params: { slug: destinationSlug, experienceSlug: experience.slug }
    }"
  >
    <img :src="'/images/' + experience.image" :alt="experience.name" />
    <span class="card__text">{{ experience.name }}</span>
  </RouterLink>
</template>