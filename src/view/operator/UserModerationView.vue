<script setup>
import '../../assets/css/operator/user-moderation.css'
import { ref } from 'vue'
const reports=ref([
{id:'SEG-102',user:'account_•••42',reason:'Comportamento scorretto',date:'20/11/2026',status:'Da esaminare',detail:'Segnalazione relativa a una possibile condotta inappropriata durante un ritiro.'},
{id:'SEG-099',user:'account_•••18',reason:'Possibile account duplicato',date:'18/11/2026',status:'Da esaminare',detail:'Richiesta di verifica su un profilo potenzialmente duplicato.'}
])
const feedback=ref('')
function act(r,action){r.status=action;feedback.value=`${r.id}: ${action.toLowerCase()}. Azione dimostrativa; l'esecuzione reale richiede il backend.`}
</script>
<template>
<main class="page-shell"><header class="page-heading"><div><h1>Segnalazioni fatte agli utenti.</h1><p>Esamina i report relativi a comportamenti scorretti o frodi. I riferimenti mostrati sono anonimizzati.</p></div></header>
<section class="data-grid"><article class="data-card"><p>Segnalazioni aperte</p><div class="metric">{{ reports.filter(r=>r.status==='Da esaminare').length }}</div></article><article class="data-card"><p>Account da verificare</p><div class="metric">{{ reports.length }}</div></article><article class="data-card"><p>Privacy</p><div class="metric">OK</div><p>Identificativi mascherati</p></article></section>
<section class="panel" style="margin-top:22px"><h2>Report ricevuti</h2><div v-for="r in reports" :key="r.id" class="report-card"><div class="report-head"><strong>{{ r.id }} · {{ r.user }}</strong><span class="status" :class="{warning:r.status==='Da esaminare'}">{{ r.status }}</span></div><p><strong>{{ r.reason }}</strong> · {{ r.date }}</p><p>{{ r.detail }}</p><div class="actions"><button class="button-small" @click="act(r,'Esaminata')">Segna esaminata</button><button class="button-small button-secondary" @click="act(r,'Sollecito inviato')">Invia sollecito</button><button class="button-small danger-button" @click="act(r,'Account sospeso')">Sospendi account</button></div></div></section>
<p v-if="feedback" class="feedback" role="status">{{ feedback }}</p></main>
</template>
