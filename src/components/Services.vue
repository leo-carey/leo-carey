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
  <section id="services" class="relative flex w-full flex-col justify-between lg:flex-row">
    <div class="background-services-type">
      <span v-for="item in Array(50)" :key="item">Serviços</span>
    </div>

    <h3 class="title-services">Serviços</h3>

    <div class="section-sticks">
      <h3>Serviços</h3>

      <MegaBot />
    </div>

    <div class="services-content-wrapper">
      <div v-if="!isLoading" class="service-list">
        <div class="item-service">
          <div class="item-title">
            <strong>Desenvolvimento de sites</strong>
          </div>

          <CaBuildTool class="item-icon" />

          <p>Leve seu negócio para o próximo nível com um site moderno, rápido e personalizado.</p>

          <p>
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
            <strong>Desenvolvimento de Sistemas</strong>
          </div>

          <CaCicsSystemGroup class="item-icon" />

          <p>
            Transforme suas operações com um sistema desenvolvido sob medida para atender às
            necessidades do seu negócio.
          </p>

          <p>
            Criamos soluções eficientes, escaláveis e seguras para otimizar processos, automatizar
            tarefas e melhorar a gestão, reduzindo custos e aumentando a produtividade.
          </p>

          <ButtonCta :link-cta="linkSystem" secondary>
            <AkWhatsappFill />

            <span>Saiba mais</span>
          </ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <strong>Manutenção de Projeto</strong>
          </div>

          <GlIssueTypeMaintenance class="item-icon" />

          <p>
            Seu projeto precisa de atenção para continuar funcionando da melhor forma? Oferecemos
            serviços de manutenção para sites e sistemas já existentes, garantindo que tudo esteja
            sempre atualizado, seguro e funcionando sem falhas.
          </p>

          <p>Sejam ajustes pontuais, atualizações de tecnologia ou melhorias de desempenho.</p>

          <ButtonCta :link-cta="linkMaintenance" secondary>
            <AkWhatsappFill />

            <span>Saiba mais</span>
          </ButtonCta>
        </div>

        <div class="item-service">
          <div class="item-title">
            <strong>Bot de automação</strong>
          </div>

          <CoBrandDependabot class="item-icon" />

          <p>
            Automatize tarefas repetitivas e aumente a eficiência do seu negócio com nossos bots de
            automação inteligentes.
          </p>

          <p>
            Desenvolvemos bots personalizados que ajudam a simplificar processos, desde atendimento
            ao cliente até integração com sistemas e coleta de dados, liberando sua equipe para
            focar no que realmente importa.
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
  @apply relative z-[3] order-last mb-28 mt-20 h-auto w-full lg:sticky lg:top-[5rem] lg:order-none lg:mb-0 lg:mt-52 lg:h-screen;

  h3 {
    @apply text-[12rem] font-semibold leading-tight tracking-wide text-secondary-200/80;
    @apply absolute -top-[50%] left-12 [writing-mode:vertical-lr];
    @apply hidden lg:block;
    text-orientation: mixed;
    transform: rotate(180deg) translateY(-50%);
  }
}

.title-services {
  @apply text-[3rem] font-semibold leading-tight tracking-wide text-secondary-200/80;
  @apply ml-4 mt-20 block w-full lg:hidden;
}

.services-content-wrapper {
  @apply relative z-[2] m-auto flex w-full flex-row items-start justify-between;
  @apply px-4 lg:mt-32 lg:px-0 xl:px-32;
}

.service-list {
  @apply mt-24 flex w-full flex-col gap-y-32 pb-20 lg:mt-32 lg:gap-y-40 lg:pb-80;
}

.item-service {
  @apply w-full rounded-2xl bg-secondary-400/65 px-8 py-8 lg:opacity-0 xl:w-3/4;
  backdrop-filter: blur(10px);

  @screen lg {
    transform: translateY(200px) scale(0.3);
    animation: fadeContent both;
    animation-timeline: view(70% 30%);
  }

  .item-icon {
    @apply float-right pb-6 pl-3 text-9xl text-cyan-500;
  }

  .item-title {
    @apply flex flex-wrap items-start gap-x-4;

    strong {
      @apply mb-6 block font-oswald text-3xl uppercase text-primary-200;
    }
  }

  p {
    @apply mb-10 block font-normal text-primary-100;
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
  @apply absolute left-0 top-0 z-[1] hidden h-full w-full overflow-y-hidden lg:block;

  &:after {
    @apply absolute -top-[50%] right-[10%] block h-[200%] w-1/2 bg-secondary-100 shadow-2xl content-[''];
    transform: rotate(10deg);
  }
}
</style>
