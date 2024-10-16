<script setup lang="ts">
import {
  AkGithubFill,
  AkInstagramFill,
  AkLinkedInFill,
  FlDividerTall
} from '@kalimahapps/vue-icons'

import { useCtaLink } from '../composables/useCtaLink'

const linkCTA = useCtaLink()
</script>

<template>
  <header id="home" class="header">
    <h1 class="relative font-oswald text-3xl font-semibold uppercase">
      <a href="/">Leo<small class="absolute top-0 text-xs lowercase">carey</small></a>
    </h1>

    <nav>
      <ul class="flex flex-row items-center gap-x-8">
        <li class="hidden uppercase md:block">
          <a href="/" class="menu-item">home</a>
        </li>

        <li class="hidden uppercase md:block">
          <a href="#about" class="menu-item">sobre</a>
        </li>

        <li class="hidden uppercase md:block">
          <a href="#services" class="menu-item">serviços</a>
        </li>

        <li class="hidden uppercase md:block">
          <a :href="linkCTA" target="_blank" class="menu-item">contato</a>
        </li>

        <li class="mx-0 hidden text-3xl md:block">
          <FlDividerTall />
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/leonardo-carey"
            target="_blank"
            class="menu-item-icon"
          >
            <AkLinkedInFill />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/leonardo_carey" target="_blank" class="menu-item-icon">
            <AkInstagramFill />
          </a>
        </li>

        <li>
          <a href="https://github.com/leo-carey" target="_blank" class="menu-item-icon">
            <AkGithubFill />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply container flex items-center justify-between;
  @apply m-auto mb-4 px-6 py-3 lg:px-12 lg:py-6 xl:px-32;
}

.menu-item {
  @apply relative;
  @apply after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full;
  @apply after:origin-left after:scale-x-0 after:transform after:bg-secondary-100;
  @apply after:transition-transform after:duration-300 hover:after:scale-x-100;
}

.menu-item-icon {
  @apply text-lg transition-colors hover:text-secondary-100;
}
</style>
