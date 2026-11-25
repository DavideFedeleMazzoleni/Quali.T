<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import LanguageSelector from './LanguageSelector.vue'

const props = defineProps({ role: { type: String, default: null } })
const emit = defineEmits(['logout'])
const route = useRoute()
const router = useRouter()
const isOperator = computed(() => props.role === 'operatore')
const links = computed(() => isOperator.value
  ? [
      { label: 'Panoramica', to: '/operatori/dashboard' },
      { label: 'Segnalazioni utenti', to: '/operatori/utenti' },
      { label: 'Segnalazioni negozi', to: '/operatori/negozi' },
    ]
  : [
      { label: 'Panoramica', to: '/business/dashboard' },
      { label: 'Catalogo', to: '/business/catalogo' },
      { label: 'Inserisci prodotti', to: '/business/prodotti' },
      { label: 'Promozioni', to: '/business/promozioni' },
      { label: 'Prenotazioni', to: '/business/prenotazioni' },
    ])
function logout() { emit('logout'); }
</script>

<template>
  <header class="qualit-navbar">
    <RouterLink class="qualit-brand" :to="isOperator ? '/operatori/dashboard' : '/business/dashboard'"><img src="../assets/logo.svg" alt="Quali.t"></RouterLink>
    <nav class="qualit-nav" :aria-label="isOperator ? 'Navigazione amministratore' : 'Navigazione negoziante'">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" :class="{ selected: route.path === link.to }">{{ link.label }}</RouterLink>
    </nav>
    <div class="qualit-nav-actions">
      <span class="role-label">{{ isOperator ? 'Operatore comunale' : 'Area negoziante' }}</span>
      <LanguageSelector />
      <button class="logout-button" type="button" @click="logout">Esci</button>
    </div>
  </header>
</template>

<style scoped>
.qualit-navbar{position:sticky;top:0;z-index:1000;display:flex;align-items:center;gap:1.5rem;min-height:72px;padding:.8rem clamp(1rem,4vw,3.5rem);background:var(--green-light);color:#fff;box-shadow:0 5px 18px #26331e18}
.qualit-brand{flex:none;color:#fff;text-decoration:none;font:700 1.65rem var(--font-title,Georgia,serif);letter-spacing:-.04em}.qualit-brand span{color:#e8a17d}
.qualit-nav{display:flex;align-items:center;justify-content:center;gap:clamp(.5rem,1.5vw,1.35rem);flex:1}.qualit-nav a{color:#f8f5ef;text-decoration:none;font-size:.86rem;opacity:.82;white-space:nowrap}.qualit-nav a:hover,.qualit-nav a.selected{opacity:1;color: var(--white); font-weight: bold;}
.qualit-nav-actions{display:flex;align-items:center;gap:.7rem}.role-label{font-size:.75rem;opacity:.8;white-space:nowrap}.logout-button{border:1px solid #ffffff66;border-radius:999px;padding:.55rem .9rem;background:#ffffff12;color:#fff;font-weight:600;cursor:pointer}
.qualit-navbar img {
    width: 115px;
    height: auto;
}
@media(max-width:900px){.qualit-navbar{flex-wrap:wrap;gap:.75rem}.qualit-nav{order:3;flex-basis:100%;justify-content:flex-start;overflow-x:auto;padding:.25rem 0}.role-label{display:none}}
</style>
