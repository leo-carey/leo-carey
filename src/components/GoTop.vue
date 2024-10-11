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
  @apply fixed bottom-5 right-5 rounded-full p-4 transition-colors hover:bg-secondary-100;
  @apply cursor-pointer text-2xl text-secondary-100 hover:text-primary-100;
  @apply border-[1px] border-solid border-secondary-100;
}
</style>
