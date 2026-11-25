<script setup>
import '../../assets/css/operator/dashboard.css'
const metrics=[{label:'Cittadini registrati',value:'2.480'},{label:'Negozi attivi',value:'146'},{label:'Segnalazioni aperte',value:'12'},{label:'Recensioni da verificare',value:'7'}]

</script>

<template>
<main class="page-shell">
    <header class="page-heading">
        <div>
            <h3>Area operatore · Comune</h3>
            <h1>Dashboard amministrazione</h1>
            <p>Monitora la piattaforma e consulta le segnalazioni aperte.</p>
        </div>
        <span class="status">Operatore</span>
    </header>
    <div class="data-grid">
        <article v-for="m in metrics" :key="m.label" class="data-card">
            <p>{{ m.label }}</p>
            <div class="metric">{{ m.value }}</div>
            </article>
    </div>
    <section class="panel">
        <h2>Da verificare</h2>
        <div class="data-row">
            <div>
                <strong>Segnalazioni utenti</strong>
                <p>Comportamenti e account da esaminare</p>
            </div>
            <RouterLink class="inline-link" to="/operatori/utenti">Apri →</RouterLink>
        </div>
        <div class="data-row">
            <div>
                <strong>Segnalazioni negozi</strong>
                <p>Recensioni critiche e attività segnalate</p>
            </div>
            <RouterLink class="inline-link" to="/operatori/negozi">Apri →</RouterLink>
        </div>
    </section>
</main>
</template>
