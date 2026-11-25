<script setup>
import { computed } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import CustomScrollbar from './components/CustomScrollbar.vue'
import NavbarGuest from './components/Navbar-home.vue'

const route = useRoute()
const router = useRouter()
const role = computed(() => { route.fullPath; return localStorage.getItem('qualit-role') })
const isGuest = computed(() => !role.value || route.meta.guest)
function logout() {
  localStorage.removeItem('qualit-role')
  localStorage.removeItem('qualit-email')
  router.push('/business/login')
}
</script>

<template>
  <div class="backoffice">
    <Navbar v-if="!isGuest" :role="role" @logout="logout" />
    <main class="app-content"><RouterView /></main>
    <footer v-if="!isGuest" class="backoffice-footer"></footer>
    <CustomScrollbar />
  </div>
</template>
