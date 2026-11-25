<script setup>
import '../../assets/base.css';
import '../../assets/css/business/dashboard.css';

const metrics = [
    { label: 'Visite (7 giorni)', value: '1.248', note: '+18% rispetto alla settimana scorsa', trend: 'up' },
    { label: 'Prenotazioni ricevute', value: '42', note: '12 in attesa di conferma' },
    { label: 'Prodotti in vetrina', value: '128', note: '9 in esaurimento scorte' },
    { label: 'Promozioni attive', value: '3', note: '1 in scadenza' },
];

const weeklyViews = [
    { day: 'Lun', value: 145 },
    { day: 'Mar', value: 171 },
    { day: 'Mer', value: 158 },
    { day: 'Gio', value: 210 },
    { day: 'Ven', value: 186 },
    { day: 'Sab', value: 232 },
    { day: 'Dom', value: 190 },
];

const topProducts = [
    { name: 'Miele di castagno', orders: 38 },
    { name: 'Confettura di pere', orders: 29 },
    { name: 'Latte crudo di mucca', orders: 24 },
    { name: 'Pane di segale', orders: 19 },
    { name: 'Olio extravergine', orders: 11 },
];

const promotions = [
    { name: 'Sconto autunnale', detail: '20% su tutti i prodotti', status: 'Attiva', active: true, to: '/business/promozioni' },
    { name: 'Miele in offerta', detail: '7,90 € al vasetto', status: 'Attiva', active: true, to: '/business/promozioni' },
    { name: 'Mele nuove', detail: '15% su conserve', status: 'In scadenza', active: false, to: '/business/promozioni' },
];
</script>

<template>
    <main class="business-dashboard">
        <header class="dashboard-heading">
            <div>
                <p class="eyebrow">Pannello di gestione</p>
                <h1>Dashboard</h1>
            </div>
        </header>

        <section class="cards" aria-label="Riepilogo attività">
            <article v-for="metric in metrics" :key="metric.label" class="card">
                <h2>{{ metric.label }}</h2>
                <h1>{{ metric.value }}</h1>
                <p class="metric-note" :class="{ 'metric-note--positive': metric.trend === 'up' }">{{ metric.note }}</p>
            </article>
        </section>

        <div class="dashboard-content-grid dashboard-content-grid--top">
            <section class="dashboard-panel visits-panel">
                <div class="panel-heading">
                    <h2>Visualizzazioni degli ultimi 7 giorni</h2>
                    <span class="chart-legend"><i></i> Visite</span>
                </div>
                <div class="chart" role="img" aria-label="Grafico delle visite giornaliere: lunedì 145, martedì 171, mercoledì 158, giovedì 210, venerdì 186, sabato 232, domenica 190">
                    <div class="chart-scale" aria-hidden="true">
                        <span>250</span><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
                    </div>
                    <div class="chart-plot">
                        <div class="chart-gridlines" aria-hidden="true"><i v-for="line in 5" :key="line"></i></div>
                        <div v-for="item in weeklyViews" :key="item.day" class="chart-column">
                            <div class="chart-bar" :style="{ height: `${item.value / 250 * 100}%` }" :title="`${item.day}: ${item.value} visite`"></div>
                            <span>{{ item.day }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="dashboard-panel top-products-panel">
                <h2>Prodotti più richiesti</h2>
                <ol class="top-products-list">
                    <li v-for="(product, index) in topProducts" :key="product.name">
                        <span class="product-rank">{{ index + 1 }}</span>
                        <strong>{{ product.name }}</strong>
                        <span class="product-orders">{{ product.orders }} ordini</span>
                    </li>
                </ol>
            </section>
        </div>

        <div class="dashboard-content-grid dashboard-content-grid--bottom">
            <section class="dashboard-panel promotions-panel">
                <div class="panel-heading">
                    <h2>Promozioni in corso</h2>
                    <RouterLink class="panel-link" to="/business/promozioni">Gestisci tutte</RouterLink>
                </div>
                <div class="promotion-list">
                    <div v-for="promotion in promotions" :key="promotion.name" class="promotion-row">
                        <strong>{{ promotion.name }}</strong>
                        <span>{{ promotion.detail }}</span>
                        <RouterLink :to="promotion.to" class="promotion-status" :class="{ 'promotion-status--ending': !promotion.active }">{{ promotion.status }}</RouterLink>
                    </div>
                </div>
            </section>

            <section class="featured-product">
                <p class="featured-eyebrow">Prodotto più cercato:</p>
                <div class="featured-product-content">
                    <div class="featured-art" aria-hidden="true">
                        <img src="../../assets/Demo-img/pere.svg">
                    </div>
                    <div class="featured-details">
                        <h2>Confettura di pere</h2>
                        <p>Visualizzato da:</p>
                        <div class="featured-count"><strong>70</strong><span>Utenti</span></div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
