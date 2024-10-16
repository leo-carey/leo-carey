<script setup lang="ts">
defineProps({
  linkCta: {
    type: String,
    required: true
  },
  secondary: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <a :href="linkCta" target="_blank" class="button-cta" :class="{ secondary: secondary }">
    <slot />
  </a>
</template>

<style scoped>
.button-cta {
  @apply rounded-sm bg-cyan-600 text-primary-100 transition-colors hover:bg-cyan-500;
  @apply mt-5 w-fit px-8 py-4;
  @apply flex flex-row items-center gap-x-2;

  &.secondary {
    @apply bg-orange-500 text-primary-100 hover:bg-orange-200 hover:text-secondary-100;
  }
}
</style>
