<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useCtaLink } from '../composables/useCtaLink'
import MegaBot from './mega-bot/MegaBot.vue'
import {
  AkWhatsappFill,
  CaBuildTool,
  CaCicsSystemGroup,
  CoBrandDependabot,
  GlIssueTypeMaintenance
} from '@kalimahapps/vue-icons'
import ButtonCta from './shared/ButtonCta.vue'

const isLoading = ref(true)

const linkBot = useCtaLink('Bot de automação')
const linkSystem = useCtaLink('Desenvolvimento de sistema')
const linkWebsite = useCtaLink('Desenvolvimento de site')
const linkMaintenance = useCtaLink('Manutenção de um site ou sistema')

onMounted(async () => {
  isLoading.value = false
})
</script>

<template>
  <section id="services" class="relative flex w-full flex-row justify-between">
    <div class="background-services-type">
      <span v-for="item in Array(50)" :key="item">Serviços</span>
    </div>

    <div class="section-sticks">
      <h3>Serviços</h3>

      <MegaBot />
    </div>

    <div class="services-content-wrapper">
      <div v-if="!isLoading" class="service-list">
        <div class="item-service">
          <div class="item-title">
            <CaBuildTool class="item-icon" />

            <strong>Desenvolvimento de sites</strong>
          </div>

          <p class="item-description">
            Leve seu negócio para o próximo nível com um site moderno, rápido e personalizado.
            Desenvolvemos sites que são mais do que apenas bonitos: são projetados para converter
            visitantes em clientes, com uma experiência intuitiva e compatível com todos os
            dispositivos.
          </p>

          <ButtonCta :link-cta="linkWebsite" secondary>
            <AkWhatsappFill />

            <span>Saiba mais</span>
          </ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <CaCicsSystemGroup class="item-icon" />

            <strong>Desenvolvimento de Sistemas</strong>
          </div>

          <p class="item-description">
            Transforme suas operações com um sistema desenvolvido sob medida para atender às
            necessidades do seu negócio. Criamos soluções eficientes, escaláveis e seguras para
            otimizar processos, automatizar tarefas e melhorar a gestão, reduzindo custos e
            aumentando a produtividade.
          </p>

          <ButtonCta :link-cta="linkSystem" secondary>
            <AkWhatsappFill />

            <span>Saiba mais</span>
          </ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <GlIssueTypeMaintenance class="item-icon" />

            <strong>Manutenção de Projeto</strong>
          </div>

          <p class="item-description">
            Seu projeto precisa de atenção para continuar funcionando da melhor forma? Oferecemos
            serviços de manutenção para sites e sistemas já existentes, garantindo que tudo esteja
            sempre atualizado, seguro e funcionando sem falhas. Sejam ajustes pontuais, atualizações
            de tecnologia ou melhorias de desempenho.
          </p>

          <ButtonCta :link-cta="linkMaintenance" secondary>
            <AkWhatsappFill />

            <span>Saiba mais</span>
          </ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <CoBrandDependabot class="item-icon" />

            <strong>Bot de automação</strong>
          </div>

          <p class="item-description">
            Automatize tarefas repetitivas e aumente a eficiência do seu negócio com nossos bots de
            automação inteligentes. Desenvolvemos bots personalizados que ajudam a simplificar
            processos, desde atendimento ao cliente até integração com sistemas e coleta de dados,
            liberando sua equipe para focar no que realmente importa.
          </p>

          <ButtonCta :link-cta="linkBot" secondary>
            <AkWhatsappFill />

            <span>Saiba mais</span>
          </ButtonCta>
        </div>
      </div>
    </div>

    <div class="background-services"></div>
  </section>
</template>

<style scoped>
.section-sticks {
  @apply sticky top-1/4 z-[3] -mb-64 mt-52 h-screen w-full;

  h3 {
    @apply text-[10rem] font-semibold leading-tight tracking-wide text-secondary-200;
    @apply absolute -top-[50%] left-20 [writing-mode:vertical-lr];
    text-orientation: mixed;
    transform: rotate(180deg) translateY(-50%);
  }
}

.services-content-wrapper {
  @apply relative z-[2] m-auto mt-32 flex w-full flex-row items-start justify-between lg:px-0 xl:px-32;
}

.service-list {
  @apply mt-28 flex w-full flex-col gap-y-40 pb-64;
}

.item-service {
  @apply w-full rounded-md border-[1px] border-solid border-primary-100/30 px-8 py-8 xl:w-3/4;
  background-image: linear-gradient(120deg, rgba(180, 180, 180, 0.3), rgba(2, 2, 2, 0.2));
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(200px) scale(0.3);
  animation: fadeContent both;
  animation-timeline: view(70% 30%);

  .item-icon {
    @apply text-3xl text-primary-200;
  }

  .item-title {
    @apply flex flex-wrap items-start gap-x-4;

    strong {
      @apply mb-6 block font-oswald text-2xl uppercase text-primary-200;
    }
  }

  .item-description {
    @apply mb-10 block text-lg font-normal text-primary-100;
  }
}

.background-services-type {
  @apply absolute z-[1] flex h-full w-screen flex-row flex-wrap items-center justify-center overflow-hidden;

  span {
    @apply mr-8 block font-oswald text-9xl font-bold uppercase leading-snug tracking-wide text-zinc-400/5;
  }

  &::after {
    @apply absolute right-0 top-0 h-full w-1/3 bg-secondary-200 content-[''];
  }
}

.background-services {
  @apply absolute left-0 top-0 z-[1] h-full w-full overflow-y-hidden;

  &:after {
    @apply absolute -top-[50%] right-[10%] block h-[200%] w-1/2 bg-secondary-100 shadow-2xl content-[''];
    transform: rotate(10deg);
  }
}

@keyframes fadeContent {
  form {
    opacity: 0;
    transform: translateY(200px) scale(0.3);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
