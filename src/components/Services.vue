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
    @apply text-[10rem] font-semibold leading-tight tracking-wide text-primary-200;
    @apply absolute -top-[50%] left-20 [writing-mode:vertical-lr];
    text-orientation: mixed;
    transform: rotate(180deg) translateY(-50%);
    text-shadow:
      -1px -1px 0 #2b2e23,
      1px -1px 0 #2b2e23,
      -1px 1px 0 #2b2e23,
      1px 1px 0 #2b2e23;
    -webkit-text-stroke: 2px black;
  }
}

.services-content-wrapper {
  @apply relative z-[2] m-auto mt-32 flex w-full flex-row items-start justify-between lg:px-0 xl:px-32;
}

.service-list {
  @apply mt-28 flex w-full flex-col gap-y-64 pb-64;
}

.item-service {
  @apply w-full rounded-md border-[1px] border-solid border-primary-100/30 px-8 py-8 xl:w-3/4;
  background-image: linear-gradient(120deg, rgba(255, 255, 255, 0.3), #2b2e23ed);
  backdrop-filter: blur(20px);

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

.background-services {
  @apply absolute left-0 top-0 z-[1] h-full w-full overflow-y-hidden;

  &:after {
    @apply absolute -top-[50%] right-[10%] block h-[200%] w-1/2 bg-secondary-100 content-[''];
    transform: rotate(10deg);
  }
}
</style>
