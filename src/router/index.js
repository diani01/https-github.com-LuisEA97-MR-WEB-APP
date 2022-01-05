import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'MR Inmobiliaria | Bienvenido' }
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue'),
    meta: { title: 'Sobre nosotros' }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Contacto.vue'),
    meta: { title: 'Contáctanos' }
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "catalogo" */ '../views/Catalogo.vue'),
    meta: { title: 'Catálogo' }
  },
  {
    path: '/:idEst/:idCd/:idFrc/:idCasa',
    name: 'infoCasa',
    component: () => import(/* webpackChunkName: "Casa-Info" */ '@/components/CasaInfo.vue')
  },
  {
    path: '/:idEst/:idCd/:idFrc/Lotes/:idM/:idL',
    name: 'infoLote',
    component: () => import(/* webpackChunkName: "Casa-Info" */ '@/components/LoteInfo.vue')
  },
  {
    path: '/casas/:idEst/:idCd/:tipo/:idCasa',
    name: 'infoCasaCd',
    component: () => import(/* webpackChunkName: "Casa-Info" */ '@/components/CasaInfo.vue')
  },
  {
    path: '/axer-mr-imb/admin/login',
    name: 'Admin-login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Admin-login" */ '../views/Admin-login.vue'),
    meta: { title: 'Admin-login' }
  },
  {
    path: '/axer-mr-imb/admin',
    name: 'Admin',
    redirect: '/axer-mr-imb/admin/inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* meta: { requiresAuth: true }, */
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'),
    children: [
      {
        path: ':idEst/:idCd/:idFrc/:idCasa/editar',
        name: 'DetallesCasa',
        component: () => import(/* webpackChunkName: "Casa-Info" */ '@/components/GetData/CasaInfo.vue')
      },
      {
        path: ':idEstado/:ciudad/:id/detalles',
        name: 'DetallesFrc',
        component: () => import(/* webpackChunkName: "Casa-Info" */ '@/components/GetData/InfoFracc.vue')
      },
      {
        path: 'casas/:idEst/:idCd/:tipo/:idCasa/editar',
        name: 'DetallesCasaCd',
        component: () => import(/* webpackChunkName: "Casa-Info" */ '@/components/GetData/CasaInfo.vue')
      },
      {
        path: 'inicio',
        name: 'Inicio',
        component: () => import(/* webpackChunkName: "Info-fracc" */ '../views/Admin-home.vue')
      }
    ]
  },
  {
    path: '/axer-mr-imb/admin/signup',
    name: 'Admin-signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Admin-signup" */ '../views/Admin-signup.vue'),
    meta: { title: 'Admin-signup' }
  },
  {
    path: '/aviso-de-privacidad',
    name: 'Privacidad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Privacidad" */ '../views/Privacidad.vue'),
    meta: { title: 'Aviso de privacidad' }
  },
  {
    // path: "*",
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "Privacidad" */ '../views/NotFound.vue'),
    meta: { title: 'Aviso de privacidad' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
