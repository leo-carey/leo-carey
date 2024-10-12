<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useCtaLink } from '../composables/useCtaLink'
import MegaBot from './mega-bot/MegaBot.vue'
import {
  CaBuildTool,
  CaCicsSystemGroup,
  CoBrandDependabot,
  GlIssueTypeMaintenance
} from '@kalimahapps/vue-icons'
import ButtonCta from './shared/ButtonCta.vue'

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
  <section id="services" class="relative w-full py-20">
    <div class="flex flex-row items-start justify-end">
      <div class="w-1/2"></div>

      <div class="w-1/2 pl-16">
        <h3 class="title-services">Serviços</h3>
      </div>
    </div>

    <div class="services-content-wrapper">
      <MegaBot />

      <div v-if="!isLoading" class="service-list">
        <div class="item-service">
          <div class="flex flex-wrap items-start gap-x-4">
            <CaBuildTool class="text-3xl text-primary-100" />

            <strong class="mb-6 block font-oswald text-2xl uppercase text-primary-200">
              Desenvolvimento de sites
            </strong>
          </div>

          <p class="mb-8 block text-lg font-normal text-primary-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkWebsite" secondary>Saiba mais</ButtonCta>
        </div>

        <div class="item-service">
          <div class="flex flex-wrap items-start gap-x-4">
            <CaCicsSystemGroup class="text-3xl text-primary-100" />

            <strong class="mb-6 block font-oswald text-2xl uppercase text-primary-200">
              Desenvolvimento de Sistemas
            </strong>
          </div>

          <p class="mb-8 block text-lg font-normal text-primary-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkSystem" secondary>Saiba mais</ButtonCta>
        </div>

        <div class="item-service">
          <div class="flex flex-wrap items-start gap-x-4">
            <GlIssueTypeMaintenance class="text-3xl text-primary-100" />

            <strong class="mb-6 block font-oswald text-2xl uppercase text-primary-200">
              Manutenção de Projeto
            </strong>
          </div>

          <p class="mb-8 block text-lg font-normal text-primary-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkMaintenance" secondary>Saiba mais</ButtonCta>
        </div>

        <div class="item-service">
          <div class="flex flex-wrap items-start gap-x-4">
            <CoBrandDependabot class="text-3xl text-primary-100" />

            <strong class="mb-6 block font-oswald text-2xl uppercase text-primary-200">
              Bot de automação
            </strong>
          </div>

          <p class="mb-8 block text-lg font-normal text-primary-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkBot" secondary>Saiba mais</ButtonCta>
        </div>
      </div>
    </div>

    <div class="background-services"></div>
  </section>
</template>

<style scoped>
.title-services {
  @apply relative z-[3] mb-8 text-6xl font-semibold leading-tight tracking-wide text-primary-200;
}

.services-content-wrapper {
  @apply container relative z-[2] m-auto flex flex-row items-start justify-between lg:px-0 xl:px-32;
}

.service-list {
  @apply mt-28 flex w-full flex-col gap-y-48;
}

.item-service {
  @apply container mx-auto mb-8 w-1/2;
}

.background-services {
  @apply absolute left-0 top-0 z-[1] h-full w-full overflow-y-hidden;

  &:after {
    @apply absolute -top-[50%] right-[10%] block h-[200%] w-1/2 bg-secondary-100 content-[''];
    transform: rotate(10deg);
  }
}
</style>
