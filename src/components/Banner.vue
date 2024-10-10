<script setup lang="ts">
import { AkWhatsappFill } from '@kalimahapps/vue-icons'
import TechListBanner from './TechListBanner.vue'
</script>

<template>
  <div class="relative h-[700px]">
    <h1 class="title-banner w-full">Leo Carey</h1>

    <div class="content-banner">
      <div class="mt-20 lg:w-1/4 xl:w-1/4">
        <TechListBanner />
      </div>

      <div class="mt-16 w-1/4">
        <p class="block">
          Oi, eu sou o Leo, um programador apaixonado e dedicado a criar experiências digitais
          fáceis de usar.
        </p>

        <a href="#" class="btn-cta">
          Seu Projeto em Realidade

          <AkWhatsappFill />
        </a>
      </div>
    </div>

    <img src="@/assets/avatar1.png" alt="Leo Carey Avatar" class="image-avatar" />
  </div>
</template>

<style scoped>
.title-banner {
  @apply text-center font-oswald text-[240px] font-semibold uppercase leading-tight tracking-wide text-secondary-300;
}

.content-banner {
  @apply container m-auto flex h-[50%] items-start justify-between lg:px-0 xl:px-32;
}

.image-avatar {
  @apply absolute bottom-0 left-[50%] block w-[500px] translate-x-[-50%];
}

.btn-cta {
  @apply mt-5 rounded-sm bg-secondary-500 px-5 py-4 text-primary-100 transition-colors hover:bg-secondary-100;
  @apply flex items-center justify-between;
}
</style>
