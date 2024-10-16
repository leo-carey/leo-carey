<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// ** Reference icons https://vue-icons.kalimah-apps.com/
import {
  AnFilledLike,
  BsPersonWalking,
  CaDownToBottom,
  FaPersonWalkingArrowRight,
  FaPersonWalkingWithCane,
  FlFilledHandWave,
  GlCheckCircleFilled,
  GlFalsePositive,
  HeFilledDeath,
  MdOutlinedOutbound,
  SiFacepunch
} from '@kalimahapps/vue-icons'

import MegaBotScene from './MegaBotScene'
import MegaBotActions, { Emotes, States } from './MegaBotActions'

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
      '/leo-carey/models/RobotExpressive.glb',
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

// ** Actions states
const botIdle = () => {
  megaBotActions.runState(States.Idle)
}
const botWalk = () => {
  megaBotActions.runState(States.Walk)
}
const botRun = () => {
  megaBotActions.runState(States.Run)
}
const botDance = () => {
  megaBotActions.runState(States.Dance)
}
const botDeath = () => {
  megaBotActions.runState(States.Death)
}
// const botSit = () => {
//   megaBotActions.runState(States.Sit)
// }
// const botStand = () => {
//   megaBotActions.runState(States.Stand)
// }
</script>

<template>
  <section class="mega-bot-component">
    <div ref="botWrapper"></div>

    <div class="bot-controls">
      <span>Interaja com o MegaBot</span>

      <div class="emote-list">
        <button @click="botPunch" v-tooltip="'SOCAR'">
          <SiFacepunch />
        </button>

        <button @click="botJump" v-tooltip="'PULAR'">
          <MdOutlinedOutbound />
        </button>

        <button @click="botWave" v-tooltip="'ACENAR'">
          <FlFilledHandWave />
        </button>

        <button @click="botThumbsUp" v-tooltip="'LIKE'">
          <AnFilledLike />
        </button>

        <button @click="botYes" v-tooltip="'POSITIVO'">
          <GlCheckCircleFilled />
        </button>

        <button @click="botNo" v-tooltip="'NEGATIVO'">
          <GlFalsePositive />
        </button>
      </div>

      <div class="state-list">
        <button @click="botIdle" v-tooltip="'OCIOSO'">
          <CaDownToBottom />
        </button>

        <button @click="botWalk" v-tooltip="'CAMINHAR'">
          <BsPersonWalking />
        </button>

        <button @click="botRun" v-tooltip="'CORRER'">
          <FaPersonWalkingArrowRight />
        </button>

        <button @click="botDance" v-tooltip="'DANÇAR'">
          <FaPersonWalkingWithCane />
        </button>

        <button @click="botDeath" v-tooltip="'DESMONTAR'">
          <HeFilledDeath />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mega-bot-component {
  @apply relative w-[380px] lg:absolute;
  @apply left-[50%] top-[8rem] -translate-x-[50%] lg:mt-28 lg:-translate-x-[10%] xl:translate-x-0;
}

.bot-controls {
  @apply absolute -top-32 left-14 z-[999] lg:-top-32 lg:left-14;
  perspective: 1000px;
  animation: moveControls 10s infinite;

  > span {
    @apply mb-4 ml-1 block font-oswald text-sm uppercase;
  }

  button {
    @apply w-fit cursor-pointer p-4 text-xl transition-colors;
  }

  .emote-list {
    @apply relative grid grid-cols-4 gap-2;
    transform: rotateZ(-1deg) rotateY(15deg) rotateX(-20deg);

    button {
      @apply bg-cyan-600 text-primary-100 hover:bg-cyan-200;
    }
  }

  .state-list {
    @apply relative -ml-2 mt-6 grid w-fit grid-cols-2 gap-2;
    transform: rotateZ(-1deg) rotateY(15deg) rotateX(-20deg);

    button {
      @apply bg-orange-500 text-primary-100 hover:bg-orange-200;
    }
  }
}

@keyframes moveControls {
  0% {
    transform: translate(-15px, -15px) rotateX(-10deg);
  }
  25% {
    transform: translate(15px, 15px) rotateX(20deg);
  }
  50% {
    transform: translate(0, 0) rotateX(0);
  }
  100% {
    transform: translate(-15px, -15px) rotateX(-10deg);
  }
}
</style>
