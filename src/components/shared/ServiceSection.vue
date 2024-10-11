<script setup lang="ts">
import ButtonCta from './ButtonCta.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  linkCta: {
    type: String,
    required: true
  },
  labelCta: {
    type: String,
    default: 'Saber mais'
  }
})
</script>

<template>
  <section class="section-item container mx-auto flex flex-row items-center gap-x-4">
    <div class="w-1/2"></div>

    <div class="mb-8 flex w-1/2 flex-col">
      <strong class="mb-3 block font-oswald text-2xl uppercase">
        {{ title }}
      </strong>

      <p class="mb-8 block text-secondary-200">
        {{ description }}
      </p>

      <ButtonCta :link-cta="linkCta">
        {{ labelCta }}
      </ButtonCta>
    </div>
  </section>
</template>

<style scoped></style>
