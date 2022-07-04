import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path : '/',
        component : () => import('../views/IndexView.vue')
      },
      {
        path : '/data_barang',
        name : 'data_barang',
        component : () => import('../views/DataBarangView.vue')
      },
      {
        path : '/barang_masuk',
        name : 'barang_masuk',
        component : () => import('../views/BarangMasukView.vue')
      },
      {
        path : '/barang_keluar',
        name : 'barang_keluar',
        component : () => import('../views/BarangKeluarView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/IndexView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const login = localStorage.getItem('token')

  if(to.name !== 'home' && !login) next({ name: 'home' })
  else next()
})

export default router
