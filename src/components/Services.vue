<script setup lang="ts">
import { useCtaLink } from '../composables/useCtaLink'
import ServiceSection from './shared/ServiceSection.vue'

const linkBot = useCtaLink('bot de automação')
</script>

<template>
  <section id="services" class="container mx-auto py-20 lg:px-0 xl:px-32">
    <h3 class="title-services">Serviços</h3>

    <div class="service-list">
      <ServiceSection
        :link-cta="linkBot"
        image="@/assets/services/bot-automacao.png"
        title="Bot de automação"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />
    </div>
  </section>
</template>

<style scoped>
.title-services {
  @apply text-center text-6xl font-semibold leading-tight tracking-wide text-secondary-300;
}

.service-list {
  @apply mt-16 flex flex-row gap-x-4;
}
</style>
