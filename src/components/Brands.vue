<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Brand from '../interfaces/brand'
import brandList from '../data/brands.json'

const brands: Brand[] = brandList

const images = import.meta.glob('@/assets/brands/*.png') as Record<
  string,
  () => Promise<{ default: string }>
>

const resolvedImages = ref<Record<string, string>>({})

onMounted(async () => {
  for (const path in images) {
    const moduleImage = await images[path]()

    resolvedImages.value[path.split('/').pop() as string] = moduleImage.default
  }
})
</script>

<template>
  <div class="container m-auto py-12 text-center lg:px-0 xl:px-32">
    <h3 class="mb-4 text-4xl">Algumas das marcas que já trabalharam comigo</h3>

    <div class="brands-carousel" :style="`--quantity: ${brands.length}`">
      <ul class="carousel-list">
        <li
          v-for="(brand, brandIndex) in brands"
          :key="brandIndex"
          :style="`--position: ${brandIndex + 1}`"
        >
          <img v-if="resolvedImages[brand.img]" :src="resolvedImages[brand.img]" :alt="brand.img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.brands-carousel {
  --width: 140px;
  --paddingX: 28px;
  --height: 160px;
  --timeMove: 18s;

  @apply container m-auto overflow-hidden;
  height: var(--height);
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);

  .carousel-list {
    @apply relative flex h-full w-full;
  }

  li {
    @apply absolute left-[100%] top-0 flex items-center;
    width: var(--width);
    height: var(--height);
    padding-left: var(--paddingX);
    padding-right: var(--paddingX);
    animation: autoRun var(--timeMove) linear infinite;
    animation-delay: calc((var(--timeMove) / var(--quantity)) * (var(--position) - 1));

    img {
      @apply w-full;
    }
  }
}

@keyframes autoRun {
  from {
    left: 100%;
  }
  to {
    left: calc((var(--width) + var(--paddingX)) * -1);
  }
}
</style>
