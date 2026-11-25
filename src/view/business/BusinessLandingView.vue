<script setup>
import '../../assets/css/business/landing.css'
const benefits=[{title:'Visibilità locale',text:'Fai conoscere la tua attività a nuovi clienti del territorio.'},{title:'Catalogo digitale',text:'Presenta prodotti, disponibilità e prezzi in un unico spazio.'},{title:'Prenotazioni semplici',text:'Organizza le richieste di ritiro e tieni traccia degli ordini.'}]

</script>

<template>
<main><section class="hero"><div class="row"><div class="column"><h3>Quali.T · Area business</h3><h1>La tua attività, <quote>più vicina.</quote></h1><p>Entra nella rete delle attività locali: valorizza i tuoi prodotti, pubblica offerte e gestisci le prenotazioni.</p><div class="actions"><RouterLink to="/business/registrazione"><button class="main-button">Registra il negozio</button></RouterLink><RouterLink to="/business/login"><button class="button-secondary">Accedi</button></RouterLink></div></div><div class="column"><div class="map-placeholder"><div><strong>Una vetrina per il commercio locale</strong><p>La piattaforma per negozianti e produttori.</p></div></div></div></div></section><section class="page-shell"><div class="data-grid"><article v-for="b in benefits" :key="b.title" class="data-card"><h2>{{ b.title }}</h2><p>{{ b.text }}</p></article></div></section></main>
</template>
