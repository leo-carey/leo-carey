<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useCtaLink } from '../composables/useCtaLink'
import { useImagePreview } from '../composables/useImagePreview'
import ServiceSection from './shared/ServiceSection.vue'

const isLoading = ref(true)
const resolvedImages = ref<Record<string, string>>({})

const linkBot = useCtaLink('Bot de automação')
const linkSystem = useCtaLink('Desenvolvimento de sistema')
const linkWebsite = useCtaLink('Desenvolvimento de site')
const linkMaintenance = useCtaLink('Manutenção de um site ou sistema')

onMounted(async () => {
  useImagePreview('services', resolvedImages)
  isLoading.value = false
})
</script>

<template>
  <section id="services" class="container mx-auto py-20 lg:px-0 xl:px-32">
    <h3 class="title-services">Serviços</h3>

    <div v-if="!isLoading" class="service-list">
      <ServiceSection
        image-position="right"
        :link-cta="linkWebsite"
        :image="resolvedImages['website.png']"
        title="Desenvolvimento de sites"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />

      <ServiceSection
        :link-cta="linkSystem"
        :image="resolvedImages['manutencao-sistemas.png']"
        title="Desenvolvimento de Sistemas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />

      <ServiceSection
        image-position="right"
        :link-cta="linkMaintenance"
        :image="resolvedImages['manutencao.png']"
        title="Manutenção de um Site ou Sistemas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
        deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
        Incidunt, commodi? In eum illo optio doloribus officia!"
      />

      <ServiceSection
        :link-cta="linkBot"
        :image="resolvedImages['bot-automacao.png']"
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
  @apply mt-3;

  .section-item:not(:last-child) {
    @apply -mb-[20px];
  }
}
</style>
