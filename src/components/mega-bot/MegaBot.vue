<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import MegaBotScene from './MegaBotScene'
import MegaBotActions from './MegaBotActions'

const botWrapper = ref<HTMLElement | null>(null)
const megaBotReady = ref(false)

let megaBotScene: MegaBotScene
let megaBotActions: MegaBotActions

onMounted(() => {
  if (botWrapper.value) {
    // ** Scene configure
    megaBotScene = new MegaBotScene()

    // ** Loader
    const loader = new GLTFLoader()

    loader.load(
      './src/assets/mega-bot/RobotExpressive.glb',
      function (gltf: GLTF) {
        megaBotActions = new MegaBotActions(gltf.scene, gltf.animations)
        megaBotScene.addModel(megaBotActions.model)

        const mixer = megaBotScene.loadMixer(megaBotActions.model)
        megaBotActions.startAnimation(mixer)
      },
      undefined,
      function (e) {
        console.error(e)
      }
    )

    const renderer = megaBotScene.loadRender()
    botWrapper.value?.appendChild(renderer.domElement)

    window.addEventListener('scroll', whenBotArriving)
  }
})

const whenBotArriving = () => {
  const scrollPosition = window.scrollY
  const sectionParentOffsetTop = botWrapper.value?.parentElement?.parentElement?.offsetTop

  if (sectionParentOffsetTop && !megaBotReady.value && scrollPosition >= sectionParentOffsetTop) {
    megaBotReady.value = true
  }
}
</script>

<template>
  <section class="mega-bot-component">
    <div ref="botWrapper" class="mega-bot" :class="{ ready: megaBotReady }"></div>

    <div class="bot-controls">
      <button class="btn-bot-control"></button>
    </div>
  </section>
</template>

<style scoped>
.mega-bot-component {
  @apply absolute left-32 top-[200px] h-full w-fit;
  perspective: 1000px;
}

.mega-bot {
  overflow: hidden;
  width: 500px;
  height: 500px;
  transform-style: preserve-3d;
  transform: translateZ(-1000px) translate(-150px, -40px);
  transition: transform 2s ease;

  &.ready {
    transform: translateZ(0px) translate(0, 0);
  }
}

.bot-controls {
  @apply absolute;
}

.btn-bot-control {
  @apply block;
}
</style>
