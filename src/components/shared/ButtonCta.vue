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
  @apply mt-5 w-fit rounded-sm bg-secondary-100 px-8 py-4 text-primary-100 transition-colors hover:bg-secondary-300;
  @apply flex flex-row items-center gap-x-2;

  &.secondary {
    @apply bg-orange-300 text-secondary-200 hover:bg-orange-200;
  }
}
</style>
