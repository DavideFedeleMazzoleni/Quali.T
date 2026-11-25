<script setup>
import '../../assets/css/operator/shop-moderation.css'
import { ref } from 'vue'
const reports=ref([
{id:'NEG-041',shop:'Orto di Casa',reason:'Recensione contestata',date:'19/11/2026',status:'Da esaminare',detail:'Segnalazione relativa a una recensione critica e alla gestione di uno sconto.'},
{id:'NEG-038',shop:'Bottega Verde',reason:'Segnalazione attività',date:'17/11/2026',status:'Da esaminare',detail:'Richiesta di verifica di un comportamento segnalato da un utente.'}
])
const feedback=ref('')
function act(r,action){r.status=action;feedback.value=`${r.id}: ${action.toLowerCase()}. Azione dimostrativa; collegare l'endpoint di moderazione.`}
</script>
<template>
<main class="page-shell"><header class="page-heading"><div><h1>Segnalazioni fatte ai negozi.</h1><p>Verifica recensioni critiche, segnalazioni e possibili frodi relative agli esercenti.</p></div></header>
<section class="panel"><div v-for="r in reports" :key="r.id" class="report-card"><div class="report-head"><strong>{{ r.id }} · {{ r.shop }}</strong><span class="status" :class="{warning:r.status==='Da esaminare'}">{{ r.status }}</span></div><p><strong>{{ r.reason }}</strong> · {{ r.date }}</p><p>{{ r.detail }}</p><div class="actions"><button class="button-small" @click="act(r,'Esaminata')">Segna esaminata</button><button class="button-small button-secondary" @click="act(r,'Sollecito inviato')">Invia sollecito</button><button class="button-small danger-button" @click="act(r,'Negozio sospeso')">Limita / sospendi</button></div></div></section>
<p v-if="feedback" class="feedback" role="status">{{ feedback }}</p></main>
</template>
