<script setup lang="ts">
import { AkWhatsappFill } from '@kalimahapps/vue-icons'
import { useCtaLink } from '../composables/useCtaLink'

const linkCTA = useCtaLink()
</script>

<template>
  <footer class="container m-auto pt-28 lg:pt-40">
    <div class="text-center">
      <h3 class="text-2xl">Tem algum projeto em mente?</h3>

      <h2 class="contact-title">
        Bora conversar

        <a :href="linkCTA" target="_blank" class="cta-footer">
          <AkWhatsappFill />
        </a>
      </h2>
    </div>

    <div class="flex w-full flex-col items-center justify-between py-6 text-xs lg:flex-row">
      <div>
        <span class="block">
          Desenvolvido por
          <a :href="linkCTA" target="_blank" class="font-semibold underline hover:no-underline">
            Leo Carey
          </a>
        </span>
      </div>

      <span>© Copyright 2024</span>
    </div>
  </footer>
</template>

<style scoped>
.contact-title {
  @apply mx-auto mb-40 mt-8 flex w-fit flex-col items-center lg:flex-row;
  @apply text-right text-6xl leading-tight text-secondary-300 lg:text-[8rem] lg:tracking-wide;
}

.cta-footer {
  @apply ml-8 mt-6 flex items-center justify-center bg-secondary-100 lg:mt-3;
  @apply text-[70px] text-primary-100 transition-colors hover:bg-secondary-300;
  @apply h-[120px] w-[120px];
}
</style>
