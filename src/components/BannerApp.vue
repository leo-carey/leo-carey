<script setup lang="ts"></script>

<template>
  <div class="h-[350px]">
    <h1 class="title-banner w-full">Leo Carey</h1>

    <div class="container m-auto flex justify-between px-32">
      <div class="w-1/4">
        <div>
          <div class="w-10 rounded-full bg-secondary-100"></div>
        </div>

        <div>100+ reviews<span>(4.96 of 5)</span></div>
        <div>Avaliações cinco estrelas de meus estimados clientes.</div>
      </div>

      <div class="w-1/4">
        <p class="block">
          Oi, eu sou o Leo, um programador<br />
          apaixonado e dedicado a criar<br />
          experiências digitais fáceis de usar.
        </p>

        <a href="#" class="btn-cta"> Transforme Seu Projeto em Realidade </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-banner {
  @apply text-center font-oswald text-[240px] font-semibold uppercase tracking-wide text-secondary-400;
}

.btn-cta {
  @apply mt-5 block w-fit rounded-sm bg-secondary-500 p-6 text-primary-100 transition-colors hover:bg-secondary-300;
}
</style>
