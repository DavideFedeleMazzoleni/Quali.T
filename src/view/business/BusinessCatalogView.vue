<script setup>
import '../../assets/css/business/catalog.css'
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
const stored=ref([])
try{stored.value=JSON.parse(localStorage.getItem('qualit-products')||'[]')}catch{}
const demo=[{id:'demo1',name:'Pomodori locali',price:2.5,quantity:18,category:'Ortofrutta',published:true,tags:['Ortofrutta','locali']},{id:'demo2',name:'Mele di stagione',price:2.2,quantity:0,category:'Ortofrutta',published:true,tags:['Ortofrutta']},{id:'demo3',name:'Pane integrale',price:4.8,quantity:12,category:'Panetteria',published:false,tags:['Panetteria']}]
const products=computed(()=>[...demo,...stored.value])
function remove(id){if(String(id).startsWith('demo'))return;stored.value=stored.value.filter(p=>p.id!==id);localStorage.setItem('qualit-products',JSON.stringify(stored.value))}
function toggle(p){if(String(p.id).startsWith('demo')){p.published=!p.published;return};const item=stored.value.find(x=>x.id===p.id);if(item)item.published=!item.published;localStorage.setItem('qualit-products',JSON.stringify(stored.value))}
</script>
<template>
<main class="page-shell"><header class="page-heading"><div><h1>I tuoi prodotti, uno per uno.</h1><p>Prezzi, disponibilità, scorte esaurite, categorie e stato di pubblicazione in vetrina.</p></div><RouterLink to="/business/prodotti"><button>+ Aggiungi prodotti</button></RouterLink></header>
<section class="panel table-wrap"><table class="data-table"><thead><tr><th>Prodotto</th><th>Categoria / tag</th><th>Prezzo</th><th>Scorte</th><th>Vetrina</th><th>Azioni</th></tr></thead><tbody><tr v-for="p in products" :key="p.id"><td><strong>{{ p.name }}</strong></td><td>{{ p.tags?.join(', ') || p.category }}</td><td>€ {{ Number(p.price).toFixed(2) }}</td><td><span class="status" :class="{warning:Number(p.quantity)===0}">{{ Number(p.quantity)===0?'Esaurito':p.quantity }}</span></td><td>{{ p.published?'Pubblicato':'Nascosto' }}</td><td><div class="actions compact"><button class="button-small button-secondary" @click="toggle(p)">Mostra / nascondi</button><button class="button-small danger-button" @click="remove(p.id)" :disabled="String(p.id).startsWith('demo')">Rimuovi</button></div></td></tr></tbody></table></section>
</main></template>
