<script setup lang="ts">
import { onMounted, ref } from 'vue'

import techList from '../data/techs.json'
import ImagePreview from '../interfaces/ImagePreview'
import { useImagePreview } from '../composables/useImagePreview'
import { useRandomItems } from '../composables/useRandomItems'
import { useExperienceTime } from '../composables/useExperienceTime'

const techs = ref<ImagePreview[]>([])
const resolvedImages = ref<Record<string, string>>({})
const isLoading = ref(true)

const currentExperienceTime = useExperienceTime()

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
  <div>
    <span class="block uppercase text-secondary-100">
      {{ currentExperienceTime }}+ anos de experiência
    </span>
    <span>Com tecnologias atuais de mercado:</span>

    <ul v-if="!isLoading" class="m-0 mt-4 flex flex-row flex-wrap items-center gap-x-2 p-0">
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
</template>

<style scoped>
.tech-item {
  @apply relative flex h-14 w-14 items-center justify-center rounded-md bg-secondary-300/20 p-3 text-center text-xl font-semibold text-primary-100;

  &.item-plus {
    @apply cursor-pointer transition-colors hover:bg-secondary-100;
  }

  img {
    @apply w-full;
  }
}
</style>
