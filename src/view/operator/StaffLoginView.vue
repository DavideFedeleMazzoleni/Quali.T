<script setup>
import '../../assets/css/operator/staff-login.css'
import { reactive, ref, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
const route = useRoute()
const router = useRouter()
const forcedRole = computed(() => route.meta.roleChoice || '')
const form = reactive({ email: '', password: '', role: forcedRole.value || 'negoziante' })
const message = ref('')
function submit() {
  if (!form.email || !form.password) return
  const role = forcedRole.value || form.role
  localStorage.setItem('qualit-role', role)
  localStorage.setItem('qualit-email', form.email)
  router.push(role === 'operatore' ? '/operatori/dashboard' : '/business/dashboard')
}
</script>
<template>
  <main class="auth-wrap">
    <section class="auth-card">
      <a href="/home.html" class="back-home">← Torna alla home</a>
      <span class="eyebrow">Quali.T · Accesso riservato</span>
      <h1>Entra nella tua area.</h1>
      <p>Accedi al pannello dedicato alla gestione del negozio o alla moderazione comunale.</p>
      <form @submit.prevent="submit">
        <div v-if="!forcedRole" class="field">
          <label for="role">Tipo di account</label>
          <select id="role" v-model="form.role"><option value="negoziante">Negoziante</option><option value="operatore">Operatore / amministratore</option></select>
        </div>
        <div v-else class="role-note">{{ forcedRole === 'operatore' ? 'Accesso operatore comunale' : 'Accesso negoziante' }}</div>
        <div class="field"><label for="email">E-mail</label><input id="email" v-model="form.email" type="email" autocomplete="username" required></div>
        <div class="field"><label for="password">Password</label><input id="password" v-model="form.password" type="password" autocomplete="current-password" required></div>
        <button class="main-button">Accedi</button>
      </form>
      <p v-if="message" role="status">{{ message }}</p>
      <p v-if="!forcedRole" class="register-hint">Non hai ancora una vetrina? <RouterLink to="/business/registrazione">Registra il negozio</RouterLink></p>
    </section>
  </main>
</template>
