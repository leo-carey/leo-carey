<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useCtaLink } from '../composables/useCtaLink'
import ServiceSection from './shared/ServiceSection.vue'
import MegaBot from './mega-bot/MegaBot.vue'

const isLoading = ref(true)

const linkBot = useCtaLink('Bot de automação')
const linkSystem = useCtaLink('Desenvolvimento de sistema')
const linkWebsite = useCtaLink('Desenvolvimento de site')
const linkMaintenance = useCtaLink('Manutenção de um site ou sistema')

onMounted(async () => {
  isLoading.value = false
})
</script>

<template>
  <section id="services" class="container relative mx-auto py-20 lg:px-0 xl:px-32">
    <h3 class="title-services">Serviços</h3>

    <div v-if="!isLoading" class="service-list">
      <ServiceSection
        :link-cta="linkWebsite"
        title="Desenvolvimento de sites"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />

      <ServiceSection
        text-position="left"
        :link-cta="linkSystem"
        title="Desenvolvimento de Sistemas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />

      <ServiceSection
        :link-cta="linkMaintenance"
        title="Manutenção de um Site ou Sistemas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />

      <ServiceSection
        text-position="left"
        :link-cta="linkBot"
        title="Bot de automação"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />
    </div>

    <MegaBot />
  </section>
</template>

<style scoped>
.title-services {
  @apply mb-8 text-center text-6xl font-semibold leading-tight tracking-wide text-secondary-300;
}

.service-list {
  @apply mt-28 flex flex-col gap-y-16;

  &:after {
    @apply bg-secondary-100 content-[''];
  }
}
</style>
