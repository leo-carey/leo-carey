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
  <section id="services" class="relative flex w-full flex-row justify-between">
    <div class="section-sticks">
      <h3>Serviços</h3>

      <MegaBot />
    </div>

    <div class="services-content-wrapper">
      <div v-if="!isLoading" class="service-list">
        <div class="item-service">
          <div class="item-title">
            <CaBuildTool class="item-icon" />

            <strong>Desenvolvimento de sites</strong>
          </div>

          <p class="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkWebsite" secondary>Saiba mais</ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <CaCicsSystemGroup class="item-icon" />

            <strong>Desenvolvimento de Sistemas</strong>
          </div>

          <p class="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkSystem" secondary>Saiba mais</ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <GlIssueTypeMaintenance class="item-icon" />

            <strong>Manutenção de Projeto</strong>
          </div>

          <p class="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos veniam perspiciatis
            deserunt, architecto ad sapiente nesciunt, necessitatibus quos eius corporis libero!
            Incidunt, commodi? In eum illo optio doloribus officia!
          </p>

          <ButtonCta :link-cta="linkMaintenance" secondary>Saiba mais</ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <CoBrandDependabot class="item-icon" />

            <strong>Bot de automação</strong>
          </div>

          <p class="item-description">
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
.section-sticks {
  @apply sticky top-[25%] z-[3] mt-52 h-screen w-full;

  h3 {
    @apply text-[10rem] font-semibold leading-tight tracking-wide text-primary-200;
    @apply absolute -top-[50%] left-20 [writing-mode:vertical-lr];
    text-orientation: mixed;
    transform: rotate(180deg) translateY(-50%);
    text-shadow:
      -1px -1px 0 #2b2e23,
      1px -1px 0 #2b2e23,
      -1px 1px 0 #2b2e23,
      1px 1px 0 #2b2e23;
    -webkit-text-stroke: 2px black;
  }
}

.services-content-wrapper {
  @apply container relative z-[2] m-auto mt-32 flex flex-row items-start justify-between lg:px-0 xl:px-32;
}

.service-list {
  @apply mt-28 flex w-full flex-col gap-y-48;
}

.item-service {
  @apply mx-auto w-1/2;

  .item-icon {
    @apply text-3xl text-primary-100;
  }

  .item-title {
    @apply flex flex-wrap items-start gap-x-4;

    strong {
      @apply mb-6 block font-oswald text-2xl uppercase text-primary-200;
    }
  }

  .item-description {
    @apply mb-8 block text-lg font-normal text-primary-100;
  }
}

.background-services {
  @apply absolute left-0 top-0 z-[1] h-full w-full overflow-y-hidden;

  &:after {
    @apply absolute -top-[50%] right-[10%] block h-[200%] w-1/2 bg-secondary-100 content-[''];
    transform: rotate(10deg);
  }
}
</style>
