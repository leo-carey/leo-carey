<script setup lang="ts">
import { AkWhatsappFill } from '@kalimahapps/vue-icons'
import TechListBanner from './TechListBanner.vue'
import { useCtaLink } from '../composables/useCtaLink'
import ButtonCta from './shared/ButtonCta.vue'

const linkCTA = useCtaLink()
</script>

<template>
  <section class="relative">
    <h2 class="title-banner">Leo Carey</h2>

    <div class="flex items-end lg:pb-12">
      <figure class="image-avatar">
        <img src="@/assets/me/avatar1.png" alt="Leo Carey Avatar" />
      </figure>

      <div class="content-banner">
        <aside class="mt-4 w-full lg:mt-20 lg:w-2/4 xl:w-2/4">
          <TechListBanner />
        </aside>

        <aside
          class="mt-16 flex w-full flex-col items-center lg:w-2/6 lg:items-start lg:pl-6 xl:w-2/6"
        >
          <p class="block">
            Oi, eu sou o Leo, um programador FULL-STACK apaixonado e dedicado a criar experiências
            digitais fáceis de usar.
          </p>

          <ButtonCta :link-cta="linkCTA">
            <AkWhatsappFill />

            <span>Vamos ver</span>
          </ButtonCta>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title-banner {
  @apply leading-none tracking-normal text-secondary-300 lg:tracking-wide;
  @apply text-center text-[8rem] font-semibold lg:text-[15rem];
  @apply z-10 pl-4;
  @apply sm:sticky sm:left-auto sm:top-0 sm:w-full sm:px-0;
}

.content-banner {
  @apply flex flex-col text-center lg:flex-row lg:items-start lg:justify-between lg:text-left;
  @apply relative z-40 m-auto px-6 pb-16 pt-12 sm:pt-12 lg:px-0 lg:pb-32 xl:px-32;
  @apply container sm:h-[50%];

  @screen md {
    animation: fadeContent both;
    animation-timeline: view(30% 70%);
  }
}

.image-avatar {
  @apply lg:mx-auto;
  @apply hidden w-auto lg:block lg:h-auto;
  @apply lg:w-[500px] lg:translate-x-[-50%];
  @apply z-20 lg:absolute lg:bottom-0 lg:left-[50%];

  img {
    @apply h-full max-w-screen-2xl lg:h-auto lg:max-w-full;
  }
}

@keyframes fadeContent {
  form {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
