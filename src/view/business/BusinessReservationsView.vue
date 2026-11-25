<script setup>
import '../../assets/css/business/reservations.css'
import { ref } from 'vue'
const requests=ref([{code:'QT-2026-0182',customer:'Mario R.',date:'22/11/2026 · 10:00',status:'In attesa'},{code:'QT-2026-0180',customer:'Giulia P.',date:'22/11/2026 · 09:30',status:'Confermata'}])
function markDone(r){r.status='Ritiro completato'}
function noShow(r){r.status='Mancato ritiro'}

</script>

<template>
<main class="page-shell"><header class="page-heading"><div><span class="eyebrow">Area negoziante</span><h1>Richieste di prenotazione</h1><p>Monitora le richieste e registra l'esito del ritiro.</p></div></header><section class="panel"><div class="data-list"><article v-for="r in requests" :key="r.code" class="data-row"><div><strong>{{ r.customer }} · {{ r.code }}</strong><p>{{ r.date }}</p><span class="status" :class="{warning:r.status==='In attesa'}">{{ r.status }}</span></div><div class="actions"><button class="button-small" @click="markDone(r)">Conferma ritiro</button><button class="button-small button-secondary" @click="noShow(r)">Mancato ritiro</button></div></article></div></section></main>
</template>
