<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import MegaBotScene from './MegaBotScene'
import MegaBotActions from './MegaBotActions'

const botContainer = ref<HTMLElement | null>(null)
const actionsBot = ref<HTMLElement | null>(null)

let megaBotScene: MegaBotScene
let megaBotActions: MegaBotActions

onMounted(() => {
  if (botContainer.value && actionsBot.value) {
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

        const renderer = megaBotScene.loadRender()
        botContainer.value?.appendChild(renderer.domElement)
      },
      undefined,
      function (e) {
        console.error(e)
      }
    )
  }
})
</script>

<template>
  <section class="mega-bot">
    <div ref="botContainer"></div>
    <div ref="actionsBot"></div>

    <div class="bot-controls"></div>
  </section>
</template>

<style scoped>
.mega-bot {
  @apply absolute;
}

.bot-controls {
  @apply block;
}
</style>
