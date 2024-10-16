<script setup lang="ts">
import { useExperienceTime } from '../composables/useExperienceTime'
import Brands from './Brands.vue'

const currentExperienceTime = useExperienceTime()
</script>

<template>
  <section id="about" class="bg-secondary-500 py-28 text-primary-100">
    <Brands />

    <div class="about-content">
      <div class="our-pic">
        <img src="@/assets/me/family.jpg" alt="Leo Carey Avatar" />
      </div>

      <div class="about-me">
        <h3 class="mb-4 font-sans text-2xl font-semibold normal-case">Sobre mim</h3>

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
          diferença na vida dos meus clientes.
        </p>

        <p>
          Gosto de desafios e de usar a tecnologia para facilitar o dia a dia das pessoas e
          empresas.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  @apply container mx-auto mt-20 flex flex-col items-start justify-center px-10 md:flex-row;
}

.our-pic {
  @apply w-full md:w-1/2 md:opacity-0 lg:w-1/3;

  img {
    @apply mx-auto w-[300px] lg:w-full lg:max-w-[80%];
  }

  @screen md {
    transform: translateY(200px) scale(0.3);
    animation: fadeContent both;
    animation-timeline: view(70% 30%);
  }
}

.about-me {
  @apply mt-20 text-center md:mt-0 md:text-left md:opacity-0;
  @apply w-full md:w-1/2 lg:w-1/3;

  @screen md {
    transform: translateY(200px) scale(0.3);
    animation: fadeContent both;
    animation-timeline: view(70% 30%);
  }

  p {
    @apply mb-4 block text-lg font-normal leading-normal;
  }
}
</style>
