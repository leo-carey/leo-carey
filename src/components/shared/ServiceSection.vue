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
  },
  textPosition: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <section class="section-item">
    <div v-if="textPosition === 'right'" class="w-2/3"></div>

    <div class="item-content" :class="{ 'right-content': textPosition === 'right' }">
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

    <div v-if="textPosition !== 'right'" class="w-2/3"></div>
  </section>
</template>

<style scoped>
.section-item {
  @apply container mx-auto flex flex-row items-center gap-x-4;
  perspective: 800px;
}

.item-content {
  @apply mb-8 flex w-1/3 flex-col;
  transform-style: preserve-3d;
  transform: rotateY(35deg) rotateX(0deg);

  &.right-content {
    transform: rotateY(-25deg) rotateX(0deg);
  }
}
</style>
