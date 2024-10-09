<script setup>
import { ref } from 'vue'

const openedMask = ref(false)

function toggleMask() {
  openedMask.value = !openedMask.value
}
</script>

<template>
  <div id="iron-man" class="iron-man-container">
    <div class="container">
      <div class="iron-man-inner">
        <div :class="['iron-man', { opened: openedMask }]" @click="toggleMask">
          <header class="helmet">
            <!-- Red paths -->
            <div class="behind-helmet"></div>
            <div class="top-helmet"></div>
            <div class="ears"></div>
            <div class="jaw"></div>
            <div class="cheeks">
              <aside class="cheek-left"></aside>
              <aside class="cheek-right"></aside>
            </div>
            <div class="chin"></div>

            <div class="inside-helmet">
              <div class="face"></div>
            </div>

            <!-- Yellow mask -->
            <div class="mask">
              <div class="behind-mask">
                <div class="cheek-left-behind"></div>
                <div class="cheek-right-behind"></div>
              </div>
              <div class="topMask">
                <aside class="side-left"></aside>
                <aside class="side-right"></aside>
              </div>
              <div class="cheeks-mask">
                <aside class="cheek-left"></aside>
                <aside class="cheek-right"></aside>
              </div>
              <div class="bottom-mask"></div>
              <div class="eyes">
                <div class="left-eye">
                  <div class="light-eye"></div>
                </div>
                <div class="right-eye">
                  <div class="light-eye"></div>
                </div>
              </div>
              <div class="eyebrows"></div>
            </div>

            <div class="chin-mask">
              <div class="side-left"></div>
              <div class="corner-left"></div>
              <div class="side-right"></div>
              <div class="corner-right"></div>
            </div>
          </header>

          <aside class="talk-balloon">
            <span> Click me! </span>
          </aside>
        </div>

        <div class="side-info">
          <h5 class="title">Front-end <span class="emoji">❤</span></h5>

          <h6 class="sub-title">Iron-man 90% css, 10% joker 💪</h6>

          <p>
            When the mission needs a technological upgrade, Tony Stark gears up in an advanced suit
            that lets him prepare for battle and get ready to take down the bad guys.
          </p>

          <p>
            But that time Tony can't go. So, Mr. Carey will go help us! And the code will be the
            best ever ever.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
