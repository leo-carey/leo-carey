<script setup lang="ts">
import { CdChevronUp } from '@kalimahapps/vue-icons'
</script>

<template>
  <a href="#home" class="btn-go-top">
    <CdChevronUp />
  </a>
</template>

<style scoped>
.btn-go-top {
  @apply fixed bottom-5 right-5 z-[9999] rounded-full p-4 transition-colors hover:bg-secondary-500;
  @apply cursor-pointer text-2xl text-secondary-500 hover:text-primary-100;
  @apply border-[1px] border-solid border-secondary-500 hover:border-primary-100;
}
</style>
