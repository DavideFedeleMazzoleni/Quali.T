<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const thumbTop = ref(0)
const visible = ref(false)
let hideTimer
function update() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0
  thumbTop.value = Math.max(0, Math.min(1, progress)) * Math.max(0, window.innerHeight - 34)
  visible.value = scrollable > 30
}
onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  window.addEventListener('load', update)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
  window.removeEventListener('load', update)
  clearTimeout(hideTimer)
})
</script>

<template>
  <div v-if="visible" class="qualit-scroll-track" aria-hidden="true">
    <div class="qualit-scroll-thumb" :style="{ height: '34px', top: `${thumbTop}px` }"></div>
  </div>
</template>

<style scoped>
.qualit-scroll-track{position:fixed;z-index:80;top:0;right:3px;width:5px;height:100vh;pointer-events:none;background:transparent}
.qualit-scroll-thumb{position:absolute;right:0;width:5px;min-height:28px;border-radius:99px;background:var(--orange,#d57853);opacity:.85;box-shadow:0 0 0 2px #fff5;transition:top .08s linear}
</style>
