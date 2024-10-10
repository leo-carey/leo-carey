<script setup lang="ts">
import ButtonCta from './ButtonCta.vue'

defineProps({
  image: {
    type: String,
    required: true
  },
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
  },
  imagePosition: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <section class="section-item container mx-auto flex flex-row items-center gap-x-4">
    <picture v-if="imagePosition === 'left'" class="w-1/2">
      <img :src="image" :alt="title" class="w-full" />
    </picture>

    <div
      class="mb-8 flex w-1/2 flex-col"
      :class="{
        'text-right': imagePosition !== 'left',
        'items-end': imagePosition !== 'left'
      }"
    >
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

    <picture v-if="imagePosition !== 'left'" class="w-1/2">
      <img :src="image" :alt="title" class="w-full" />
    </picture>
  </section>
</template>

<style scoped></style>
