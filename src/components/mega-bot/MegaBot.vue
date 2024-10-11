<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import MegaBotScene from './MegaBotScene'
import MegaBotActions, { Emotes } from './MegaBotActions'
import {
  AnFilledLike,
  CaCharacterNegativeNumber,
  FlFilledHandWave,
  GlFalsePositive,
  MdOutlinedOutbound,
  SiFacepunch
} from '@kalimahapps/vue-icons'

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

// ** Actions emotes
const botPunch = () => {
  megaBotActions.runEmote(Emotes.Punch)
}
const botJump = () => {
  megaBotActions.runEmote(Emotes.Jump)
}
const botWave = () => {
  megaBotActions.runEmote(Emotes.Wave)
}
const botThumbsUp = () => {
  megaBotActions.runEmote(Emotes.ThumbsUp)
}
const botYes = () => {
  megaBotActions.runEmote(Emotes.Yes)
}
const botNo = () => {
  megaBotActions.runEmote(Emotes.No)
}
</script>

<template>
  <section class="mega-bot-component">
    <div ref="botWrapper" :class="{ ready: megaBotReady }"></div>

    <div class="bot-controls">
      <button class="btn-bot-control" @click="botPunch">
        <SiFacepunch />
      </button>

      <button class="btn-bot-control" @click="botJump">
        <MdOutlinedOutbound />
      </button>

      <button class="btn-bot-control" @click="botWave">
        <FlFilledHandWave />
      </button>

      <button class="btn-bot-control" @click="botThumbsUp">
        <AnFilledLike />
      </button>

      <button class="btn-bot-control" @click="botYes">
        <GlFalsePositive />
      </button>

      <button class="btn-bot-control" @click="botNo">
        <CaCharacterNegativeNumber />
      </button>
    </div>
  </section>
</template>

<style scoped>
.mega-bot-component {
  @apply absolute left-[50%] top-[350px] h-full w-fit -translate-x-[50%];
  perspective: 1000px;
}

.mega-bot {
  &.ready {
    @apply block;
  }
}

.bot-controls {
  @apply absolute -left-14 -top-14 z-[999] grid grid-cols-4 gap-2;

  button {
    @apply cursor-pointer bg-cyan-600 p-4 text-xl text-primary-100 transition-colors hover:bg-cyan-400;
  }
}

.btn-bot-control {
  @apply block;
}
</style>
