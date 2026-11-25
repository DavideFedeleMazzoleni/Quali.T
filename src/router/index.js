import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/business/login' },
  { path: '/business/login', name: 'business-login', component: () => import('../view/operator/StaffLoginView.vue'), meta: { guest: true } },
  { path: '/business/registrazione', name: 'business-register', component: () => import('../view/business/BusinessRegisterView.vue'), meta: { guest: true } },
  { path: '/business/dashboard', name: 'business-dashboard', component: () => import('../view/business/BusinessDashboardView.vue'), meta: { role: 'negoziante' } },
  { path: '/business/catalogo', name: 'business-catalog', component: () => import('../view/business/BusinessCatalogView.vue'), meta: { role: 'negoziante' } },
  { path: '/business/prodotti', name: 'business-products', component: () => import('../view/business/BusinessProductsView.vue'), meta: { role: 'negoziante' } },
  { path: '/business/promozioni', name: 'business-promotions', component: () => import('../view/business/BusinessPromotionsView.vue'), meta: { role: 'negoziante' } },
  { path: '/business/prenotazioni', name: 'business-reservations', component: () => import('../view/business/BusinessReservationsView.vue'), meta: { role: 'negoziante' } },
  { path: '/operatori/login', name: 'operator-login', component: () => import('../view/operator/StaffLoginView.vue'), meta: { guest: true, roleChoice: 'operatore' } },
  { path: '/operatori/dashboard', name: 'operator-dashboard', component: () => import('../view/operator/OperatorDashboardView.vue'), meta: { role: 'operatore' } },
  { path: '/operatori/utenti', name: 'operator-users', component: () => import('../view/operator/UserModerationView.vue'), meta: { role: 'operatore' } },
  { path: '/operatori/negozi', name: 'operator-shops', component: () => import('../view/operator/ShopModerationView.vue'), meta: { role: 'operatore' } },
  { path: '/:pathMatch(.*)*', redirect: '/business/login' }
]
const router = createRouter({ history: createWebHashHistory(), routes })
router.beforeEach((to) => {
  const role = localStorage.getItem('qualit-role')
  if (to.meta.role && role !== to.meta.role) return to.meta.role === 'operatore' ? '/operatori/login' : '/business/login'
  if (to.meta.guest && role && !to.meta.roleChoice) return role === 'operatore' ? '/operatori/dashboard' : '/business/dashboard'
})
export default router
