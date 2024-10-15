<script setup lang="ts">
import About from './components/About.vue'
import Banner from './components/Banner.vue'
import CTAFloat from './components/CTAFloat.vue'
import Footer from './components/Footer.vue'
import GoTop from './components/GoTop.vue'
import Header from './components/Header.vue'
import Services from './components/Services.vue'
// import Testimonies from './components/Testimonies.vue'
</script>

<template>
  <main>
    <div class="secret">
      <span>secret code:</span> soco, soco, pulo, soco, acena, soco, like, pula
    </div>

    <Header />
    <Banner />
    <About />
    <Services />
    <!-- <Testimonies /> -->
    <Footer />

    <CTAFloat />
    <GoTop />
  </main>
</template>

<style scoped>
.secret {
  @apply px-2 text-primary-200 selection:bg-cyan-400;

  span {
    @apply font-semibold;
  }
}
</style>
