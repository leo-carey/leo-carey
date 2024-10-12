<script setup lang="ts">
import { AkWhatsappFill } from '@kalimahapps/vue-icons'
import TechListBanner from './TechListBanner.vue'
import { useCtaLink } from '../composables/useCtaLink'
import ButtonCta from './shared/ButtonCta.vue'

const linkCTA = useCtaLink()
</script>

<template>
  <section class="relative h-[700px]">
    <h2 class="title-banner w-full">Leo Carey</h2>

    <div class="content-banner">
      <aside class="mt-20 lg:w-1/4 xl:w-1/4">
        <TechListBanner />
      </aside>

      <aside class="mt-16 w-1/4">
        <p class="block w-[90%]">
          Oi, eu sou o Leo, um programador FULL-STACK apaixonado e dedicado a criar experiências
          digitais fáceis de usar.
        </p>

        <ButtonCta :link-cta="linkCTA">
          <AkWhatsappFill />

          <span>Seu Projeto em Realidade</span>
        </ButtonCta>
      </aside>
    </div>

    <figure class="image-avatar">
      <img src="@/assets/me/avatar1.png" alt="Leo Carey Avatar" />
    </figure>
  </section>
</template>

<style scoped>
.title-banner {
  @apply text-center text-[240px] font-semibold leading-tight tracking-wide text-secondary-300;
  @apply sticky top-0 z-10;
}

.content-banner {
  @apply container m-auto flex h-[50%] items-start justify-between lg:px-0 xl:px-32;
  @apply relative z-40;

  animation: fadeContent both;
  animation-timeline: view(0% 55%);
}

.image-avatar {
  @apply absolute bottom-0 left-[50%] z-20 block w-[500px] translate-x-[-50%];
}

.btn-cta {
  @apply mt-5 w-fit rounded-sm bg-secondary-100 px-8 py-4 text-primary-100 transition-colors hover:bg-secondary-300;
  @apply flex flex-row items-center gap-x-2;
}

@keyframes fadeContent {
  to {
    opacity: 0;
  }
  form {
    opacity: 1;
  }
}
</style>
