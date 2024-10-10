<script setup lang="ts">
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
  <section class="container mx-auto flex items-center">
    <picture v-if="imagePosition === 'left'" class="w-1/2">
      <img :src="image" :alt="title" class="w-full" />
    </picture>

    <div class="w-1/2">
      <strong class="mb-3 block font-oswald text-2xl uppercase">
        {{ title }}
      </strong>

      <p class="text-secondary-200">
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
