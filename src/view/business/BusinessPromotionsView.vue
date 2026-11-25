<script setup>
import '../../assets/css/business/promotions.css'
import { reactive, ref } from 'vue'
const form=reactive({title:'',type:'percentuale',value:'',start:'',end:''}); const offers=ref([{title:'Sconto prodotti stagionali',type:'-15%',end:'30/11/2026'}]); const message=ref('')
function create(){offers.value.push({title:form.title,type:form.type==='percentuale'?`-${form.value}%`:form.type==='2x1'?'2x1':`€ ${form.value}`,end:form.end});message.value='Promozione aggiunta alla demo.'}

</script>

<template>
<main class="page-shell"><header class="page-heading"><div><span class="eyebrow">Area negoziante</span><h1>Promozioni e sconti</h1><p>Crea offerte a tempo, sconti percentuali o promozioni speciali.</p></div></header><section class="panel"><h2>Nuova promozione</h2><form @submit.prevent="create" class="form-grid"><div class="field full"><label for="title">Titolo</label><input id="title" v-model="form.title" required></div><div class="field"><label for="type">Tipo promozione</label><select id="type" v-model="form.type"><option value="percentuale">Sconto percentuale</option><option value="2x1">2x1</option><option value="fisso">Sconto fisso</option></select></div><div class="field"><label for="value">Valore</label><input id="value" v-model="form.value" :disabled="form.type==='2x1'"></div><div class="field"><label for="start">Inizio</label><input id="start" type="date" v-model="form.start"></div><div class="field"><label for="end">Scadenza</label><input id="end" type="date" v-model="form.end" required></div><div class="field full"><button>Crea promozione</button></div></form><p v-if="message" role="status">{{ message }}</p></section><section class="panel"><h2>Offerte attive</h2><div class="data-grid"><article v-for="o in offers" :key="o.title" class="data-card"><span class="eyebrow">{{ o.type }}</span><h2>{{ o.title }}</h2><p>Scadenza: {{ o.end }}</p></article></div></section></main>
</template>
