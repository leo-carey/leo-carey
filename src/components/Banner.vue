<script setup lang="ts">
const techs = [
  {
    name: 'vue',
    img: ''
  }
]
</script>

<template>
  <div class="relative h-[700px]">
    <h1 class="title-banner w-full">Leo Carey</h1>

    <div class="container m-auto flex justify-between lg:px-0 xl:px-32">
      <div class="lg:w-1/4 xl:w-1/4">
        <span class="block uppercase text-secondary-100">12+ anos de experiência</span>
        <span>Com tecnologias atuais de mercado.</span>

        <div class="mt-4 flex items-center space-x-2">
          <div
            v-for="(tech, techIndex) in techs"
            :key="techIndex"
            class="flex h-10 w-10 items-center justify-center rounded-md bg-secondary-100/50 text-center"
          >
            {{ tech.name }}
          </div>
        </div>
      </div>

      <div class="w-1/4">
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
  @apply text-center font-oswald text-[240px] font-semibold uppercase leading-tight tracking-wide text-secondary-400;
}

.image-avatar {
  @apply absolute bottom-0 left-[50%] block w-[500px] translate-x-[-50%];
}

.btn-cta {
  @apply mt-5 block w-fit rounded-sm bg-secondary-500 px-5 py-4 text-primary-100 transition-colors hover:bg-secondary-300;
}
</style>
