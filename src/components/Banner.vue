<script setup lang="ts">
import { onMounted, ref } from 'vue'

import techList from '../data/techs.json'
import ImagePreview from '../interfaces/ImagePreview'
import { useImagePreview } from '../composables/useImagePreview'
import { useRandomItems } from '../composables/useRandomItems'

const techs = ref<ImagePreview[]>([])
const resolvedImages = ref<Record<string, string>>({})
const isLoading = ref(true)

// ** 2013 was my first year as developer <3
const currentExperienceTime = new Date().getFullYear() - 2013

onMounted(async () => {
  loadTechs()
})

const loadTechs = async () => {
  isLoading.value = true

  techs.value = useRandomItems<ImagePreview>(techList, 4)
  await useImagePreview('techs', resolvedImages)

  isLoading.value = false
}
</script>

<template>
  <div class="relative h-[700px]">
    <h1 class="title-banner w-full">Leo Carey</h1>

    <div class="content-banner">
      <div class="mt-20 lg:w-1/4 xl:w-1/4">
        <span class="block uppercase text-secondary-100">
          {{ currentExperienceTime }}+ anos de experiência
        </span>
        <span>Com tecnologias atuais de mercado:</span>

        <ul v-if="!isLoading" class="m-0 mt-4 flex flex-wrap items-center space-x-2 p-0">
          <li
            v-for="(tech, techIndex) in techs"
            :key="techIndex"
            class="tech-item"
            v-tooltip="tech.name"
          >
            <img v-if="resolvedImages[tech.img]" :src="resolvedImages[tech.img]" :alt="tech.name" />
          </li>

          <li class="tech-item item-plus" @click="loadTechs">+</li>
        </ul>
      </div>

      <div class="mt-16 w-1/4">
        <p class="block">
          Oi, eu sou o Leo, um programador apaixonado e dedicado a criar experiências digitais
          fáceis de usar.
        </p>

        <a href="#" class="btn-cta">Seu Projeto em Realidade</a>
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

.tech-item {
  @apply relative flex h-14 w-14 items-center justify-center rounded-md bg-secondary-300/20 p-3 text-center text-xl font-semibold text-primary-100;

  &.item-plus {
    @apply cursor-pointer transition-colors hover:bg-secondary-100;
  }

  img {
    @apply w-full;
  }
}

.image-avatar {
  @apply absolute bottom-0 left-[50%] block w-[500px] translate-x-[-50%];
}

.btn-cta {
  @apply mt-5 block w-fit rounded-sm bg-secondary-500 px-5 py-4 text-primary-100 transition-colors hover:bg-secondary-100;
}
</style>
