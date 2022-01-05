<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <svg
          class="h-10 w-10"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
            fill="#4C51BF"
            stroke="#4C51BF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
            fill="white"
          />
        </svg>
        <span class="text-gray-700 font-semibold text-2xl">Panel de administración</span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-gray-700 text-sm font-semibold">Correo electronico</span>
          <input
            type="email"
            class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="email"
            placeholder="Correo electrónico"
            autocomplete="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm font-semibold">Contraseña</span>
          <input
            type="password"
            class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="password"
            placeholder="Contraseña"
            autocomplete="password"
          />
        </label>

        <div class="flex justify-between items-center mt-4">
          <div>
            <router-link to="/axer-mr-imb/admin/signup" class="text-blue-500 text-left hover:text-blue-600 font-bold">Registrar usuario &rarr;</router-link>
            <!-- <button v-if="!$auth.isAuthenticated.value" @click="login" class="rounded-md border px-2 bg-green-500 font-semibold text-white">test Auth0</button> -->
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 inline-flex text-center justify-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-800 active:bg-indigo-500 transition-all ease-in-out duration-300 focus-within:outline-none"
          >
            <span v-if="!loading" class="font-semibold">Iniciar sesión</span>
            <i v-if="loading" class="fas fa-spinner self-center animate-spin mr-2"></i>
            <span v-if="loading" class="font-semibold">Un momento...</span>

          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  setup () {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          router.replace('/axer-mr-imb/admin/login')
        } else if (route.path === '/axer-mr-imb/admin/login' || route.path === '/axer-mr-imb/admin/signup') {
          router.replace('/axer-mr-imb/admin')
        }
      })
    })
  },
  created () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
  },
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.loading = false
        })
        .catch(err => {
          this.$message({
            message: err.message,
            type: 'error',
            offset: 35
          })
          this.loading = false
        })
    }
  }
}
</script>
