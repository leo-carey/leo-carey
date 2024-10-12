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
  }
})

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
    <div ref="botWrapper"></div>

    <div class="bot-controls">
      <button class="btn-bot-control" @click="botPunch" v-tooltip="'Dar soco'">
        <SiFacepunch />
      </button>

      <button class="btn-bot-control" @click="botJump" v-tooltip="'Pular'">
        <MdOutlinedOutbound />
      </button>

      <button class="btn-bot-control" @click="botWave" v-tooltip="'Acenar'">
        <FlFilledHandWave />
      </button>

      <button class="btn-bot-control" @click="botThumbsUp" v-tooltip="'Like'">
        <AnFilledLike />
      </button>

      <button class="btn-bot-control" @click="botYes" v-tooltip="'Positivo'">
        <GlFalsePositive />
      </button>

      <button class="btn-bot-control" @click="botNo" v-tooltip="'Negativo'">
        <CaCharacterNegativeNumber />
      </button>
    </div>
  </section>
</template>

<style scoped>
.mega-bot-component {
  @apply sticky top-[350px] mt-28 w-fit;
  perspective: 1000px;
}

.bot-controls {
  @apply absolute left-3 top-0 z-[999] grid grid-cols-4 gap-2;
  transform: rotateZ(-2deg) rotateY(20deg) rotateX(-25deg);

  button {
    @apply cursor-pointer bg-cyan-600 p-4 text-xl text-primary-100 transition-colors hover:bg-cyan-400;
  }
}

.btn-bot-control {
  @apply block;
}
</style>
