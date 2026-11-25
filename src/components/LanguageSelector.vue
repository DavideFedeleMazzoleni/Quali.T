<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['change'])
const languages = [
  { code: 'it', label: 'Italiano', short: 'IT' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
]
const selected = ref(localStorage.getItem('qualit-language') || 'it')
const isOpen = ref(false)
const current = () => languages.find(language => language.code === selected.value) || languages[0]

function choose(language) {
  selected.value = language.code
  localStorage.setItem('qualit-language', language.code)
  document.documentElement.lang = language.code
  window.dispatchEvent(new CustomEvent('qualit:language-change', { detail: language.code }))
  emit('change', language.code)
  isOpen.value = false
}
function closeOnEscape(event) {
  if (event.key === 'Escape') isOpen.value = false
}
onMounted(() => {
  document.documentElement.lang = selected.value
  window.addEventListener('keydown', closeOnEscape)
})
onBeforeUnmount(() => window.removeEventListener('keydown', closeOnEscape))
</script>

<template>
  <div class="language-selector">
    <button class="language-trigger" type="button" :aria-expanded="isOpen" aria-label="Seleziona lingua" @click="isOpen = !isOpen">
      <span aria-hidden="true">◎</span> {{ current().short }} <span class="chevron">⌄</span>
    </button>
    <div v-if="isOpen" class="language-menu" role="menu">
      <button v-for="language in languages" :key="language.code" type="button" role="menuitemradio" :aria-checked="selected === language.code" :class="{ active: selected === language.code }" @click="choose(language)">
        {{ language.label }} <span v-if="selected === language.code">✓</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.language-selector{position:relative;display:inline-flex;font-family:var(--font-body,Inter,sans-serif)}
.language-trigger{display:flex;align-items:center;gap:.45rem;border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:.55rem .8rem;background:transparent;color:inherit;font:600 .82rem inherit;cursor:pointer}
.chevron{opacity:.75}.language-menu{position:absolute;z-index:1000;right:0;top:calc(100% + .5rem);min-width:145px;padding:.35rem;background:#fffaf2;border:1px solid rgba(65,81,59,.15);border-radius:12px;box-shadow:0 12px 30px #26331e25;color:#41513b}
.language-menu button{display:flex;justify-content:space-between;width:100%;padding:.65rem .75rem;border:0;border-radius:8px;background:transparent;color:inherit;text-align:left;cursor:pointer}.language-menu button:hover,.language-menu button.active{background:#e9eddf}
</style>
