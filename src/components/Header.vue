<script setup lang="ts">
import {
  AkGithubFill,
  AkInstagramFill,
  AkLinkedInFill,
  FlDividerTall
} from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="container m-auto mb-4 flex justify-between py-6 lg:px-0 xl:px-32">
    <h1 class="relative font-oswald text-3xl font-semibold uppercase">
      Leo<small class="absolute top-0 text-xs lowercase">carey</small>
    </h1>

    <nav>
      <ul class="flex flex-row items-center gap-x-8">
        <li class="uppercase">
          <a href="#">home</a>
        </li>

        <li class="uppercase">
          <a href="#">sobre</a>
        </li>

        <li class="uppercase">
          <a href="#">portfolio</a>
        </li>

        <li class="uppercase">
          <a href="#">contato</a>
        </li>

        <li class="mx-0 text-3xl">
          <FlDividerTall />
        </li>

        <li>
          <a href="#" class="text-lg">
            <AkLinkedInFill />
          </a>
        </li>

        <li>
          <a href="#" class="text-lg">
            <AkInstagramFill />
          </a>
        </li>

        <li>
          <a href="#" class="text-lg">
            <AkGithubFill />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="postcss"></style>
