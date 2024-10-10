<script setup lang="ts">
import { AkWhatsappFill } from '@kalimahapps/vue-icons'
import { useCtaLink } from '../composables/useCtaLink'

const linkCTA = useCtaLink()
</script>

<template>
  <a :href="linkCTA" target="_blank" class="btn-cta-float">
    <AkWhatsappFill />
  </a>
</template>

<style scoped>
.btn-cta-float {
  @apply fixed bottom-5 left-5 rounded-full bg-secondary-100 p-4 transition-colors hover:bg-secondary-300;
  @apply text-2xl text-primary-100;
}
</style>
