<script setup lang="ts">
import { AkWhatsappFill } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="container m-auto pt-40">
    <div class="text-center">
      <h3 class="text-2xl">Tem algum projeto em mente?</h3>

      <h2
        class="mx-auto mb-40 mt-8 flex w-fit items-center text-[140px] leading-tight tracking-wide text-secondary-300"
      >
        Bora conversar

        <a href="#" target="_blank" class="cta-footer">
          <AkWhatsappFill />
        </a>
      </h2>
    </div>

    <div class="flex w-full items-center justify-between py-6 text-xs">
      <span>
        Desenvolvido por
        <a href="#" target="_blank" class="font-semibold underline hover:no-underline">Leo Carey</a>
      </span>

      <span>© Copyright 2024</span>
    </div>
  </div>
</template>

<style scoped>
.cta-footer {
  @apply ml-8 mt-3 flex h-[120px] w-[120px] items-center justify-center bg-secondary-100 text-[70px] text-primary-100 transition-colors hover:bg-secondary-300;
}
</style>
