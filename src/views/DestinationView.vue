<script setup>
import { computed } from 'vue'
import dataDestinations from '../data.json'
import ExperienceCard from '../components/ExperienceCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const destinations = dataDestinations.destinations

const destination = computed(() => {
  return destinations.find((item) => item.slug === props.slug)
})

function goBack() {
  router.push('/')
}
</script>

<template>
  <div v-if="destination">
    <button class="go-back" @click="goBack">← Back to all destinations</button>

    <div class="destination-details">
      <img :src="'/images/' + destination.image" :alt="destination.name" width="400" />
      <div>
        <h1>{{ destination.name }}</h1>
        <p>{{ destination.description }}</p>
      </div>
    </div>

    <div class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <ExperienceCard
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :experience="experience"
          :destination-slug="destination.slug"
        />
      </div>
      <RouterView />
    </div>
  </div>
  <p v-else>
    Destination not found.<br>
    <RouterLink to="/">Go to home page</RouterLink>
  </p>
</template>