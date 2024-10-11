<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useCtaLink } from '../composables/useCtaLink'
// import ServiceSection from './shared/ServiceSection.vue'
import MegaBot from './mega-bot/MegaBot.vue'

const isLoading = ref(true)

// const linkBot = useCtaLink('Bot de automação')
// const linkSystem = useCtaLink('Desenvolvimento de sistema')
const linkWebsite = useCtaLink('Desenvolvimento de site')
// const linkMaintenance = useCtaLink('Manutenção de um site ou sistema')

onMounted(async () => {
  isLoading.value = false
})
</script>

<template>
  <section id="services" class="container relative mx-auto py-20 lg:px-0 xl:px-32">
    <h3 class="title-services">Serviços</h3>

    <div v-if="!isLoading" class="service-list">
      <section class="section-item container mx-auto flex flex-row items-center gap-x-4">
        <div class="w-1/2"></div>

        <div class="mb-8 flex w-1/2 flex-col">
          <strong class="mb-3 block font-oswald text-2xl uppercase">
            Desenvolvimento de sites
          </strong>

          <p class="mb-8 block text-secondary-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkWebsite">Saber mais</ButtonCta>
        </div>
      </section>

      <!-- <ServiceSection
        :link-cta="linkWebsite"
        title="Desenvolvimento de sites"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />

      <ServiceSection
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
        :link-cta="linkBot"
        title="Bot de automação"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      /> -->
    </div>

    <MegaBot />
  </section>
</template>

<style scoped>
.title-services {
  @apply mb-8 text-center text-6xl font-semibold leading-tight tracking-wide text-secondary-300;
}

.service-list {
  @apply mt-12;

  &:after {
    @apply bg-secondary-100 content-[''];
  }
}

.section-item {
}
</style>
