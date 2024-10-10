<script setup lang="ts">
defineProps({
  linkCta: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="linkCta" target="_blank" class="button-cta">
    <slot />
  </a>
</template>

<style scoped>
.button-cta {
  @apply mt-5 w-fit rounded-sm bg-secondary-100 px-8 py-4 text-primary-100 transition-colors hover:bg-secondary-300;
  @apply flex flex-row items-center gap-x-2;
}
</style>
