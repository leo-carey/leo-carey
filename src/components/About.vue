<script setup lang="ts">
import { useExperienceTime } from '../composables/useExperienceTime'
import Brands from './Brands.vue'

const currentExperienceTime = useExperienceTime()
</script>

<template>
  <div id="about" class="min-h-[400px] bg-secondary-500 py-28 text-primary-100">
    <Brands />

    <div class="mx-auto mt-20 flex items-start justify-center">
      <div class="w-1/4">
        <img src="@/assets/me/family.jpg" alt="Leo Carey Avatar" class="max-w-[80%]" />
      </div>

      <div class="about-me">
        <h2 class="mb-4 font-sans text-2xl font-semibold normal-case">Sobre mim</h2>

        <p>
          Sou desenvolvedor com mais de {{ currentExperienceTime }} anos de experiência, apaixonado
          por tecnologia e soluções inovadoras.
        </p>

        <p>
          Sou casado com a Gabrieli há 8 anos e temos uma filha incrível, a Rebeca, que completou
          seu primeiro aninho recentemente.
        </p>

        <p>
          Ao longo da minha jornada na programação, já trabalhei em diversos projetos, sempre
          buscando unir minha paixão por código com a criação de soluções que realmente fazem a
          diferença na vida dos meus clientes. Gosto de desafios e de usar a tecnologia para
          facilitar o dia a dia das pessoas e empresas.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-me {
  @apply w-1/4;

  p {
    @apply mb-4 block text-lg font-normal leading-normal;
  }
}
</style>
