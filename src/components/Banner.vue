<script setup lang="ts"></script>

<template>
  <div class="relative h-[700px]">
    <h1 class="title-banner w-full">Leo Carey</h1>

    <div class="container m-auto flex justify-between lg:px-0 xl:px-32">
      <div class="lg:w-1/4 xl:w-1/4">
        <div>
          <div class="w-10 rounded-full bg-secondary-100"></div>
        </div>

        <div>100+ reviews<span>(4.96 of 5)</span></div>
        <div>Avaliações cinco estrelas de meus estimados clientes.</div>
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
  @apply text-center font-oswald text-[240px] font-semibold uppercase tracking-wide text-secondary-400;
}

.image-avatar {
  @apply absolute bottom-0 left-[50%] block w-[500px] translate-x-[-50%];
}

.btn-cta {
  @apply mt-5 block w-fit rounded-sm bg-secondary-500 px-5 py-4 text-primary-100 transition-colors hover:bg-secondary-300;
}
</style>
