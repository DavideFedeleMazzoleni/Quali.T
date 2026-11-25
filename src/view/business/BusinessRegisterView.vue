<script setup>
import '../../assets/css/business/register.css'
import { reactive, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
const router = useRouter()
const form = reactive({businessName:'',owner:'',email:'',street:'',number:'',city:'Trento',hours:'',phone:'',vat:'',password:''})
const message = ref('')
function submit() {
  if (!form.businessName || !form.street || !form.number || !form.email || !form.password) return
  message.value = 'Dati inseriti.'
  localStorage.setItem('qualit-registration-draft', JSON.stringify(form))
  setTimeout(() => router.push('/business/login'), 1100)
}
</script>
<template>

    <header class="page-heading">

    </header>


<main class="wide-auth">
  <a href="/home.html" class="back-home">← Torna alla home</a>
  <h1>Crea la tua <span>vetrina</span> online.</h1><p>Completa i dati del tuo negozio e conferma l'abbonamento mensile.</p>
  <form @submit.prevent="submit" class="form-grid">
    <div class="field"><label for="business">Denominazione attività</label><input id="business" v-model="form.businessName" required></div>
    <div class="field"><label for="owner">Referente</label><input id="owner" v-model="form.owner" required></div>
    <div class="field"><label for="vat">Partita IVA</label><input id="vat" v-model="form.vat"></div>
    <div class="field"><label for="phone">Telefono</label><input id="phone" v-model="form.phone" type="tel"></div>
    <div class="field"><label for="street">Via</label><input id="street" v-model="form.street" required></div>
    <div class="field"><label for="number">Numero civico</label><input id="number" v-model="form.number" required></div>
    <div class="field"><label for="city">Comune</label><input id="city" v-model="form.city" required></div>
    <div class="field"><label for="hours">Orari di apertura</label><input id="hours" v-model="form.hours" placeholder="Es. Lun–Sab 8:00–19:00"></div>
    <div class="field full"><label for="email">E-mail account</label><input id="email" v-model="form.email" type="email" required></div>
    <div class="field full"><label for="password">Password</label><input id="password" v-model="form.password" type="password" minlength="8" required></div>
    <div class="field full"><button class="main-button">Invia registrazione</button></div>
  </form>
  <p v-if="message" role="status">{{ message }}</p>
  <p>Hai già un account? Accedi</p>
  </main>
</template>
