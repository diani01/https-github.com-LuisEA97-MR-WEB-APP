<template>
  <div class="antialiased text-gray-900 font-sans py-6 mt-12 mb-16 bg-gray-50">
    <div class="container mx-auto">
      <Busqueda class="hidden" />
      <div class="pt-14 pb-8">
          <h3 class="inline-block uppercase sm:mt-10 md:my-4 brand-text">Explora nuestro <span class="texto-destacado-azul px-2 font-semibold">catálogo</span></h3>
      </div>
      <h4 class="block mb-6 text-3xl">¿Qué estás buscando hoy?</h4>
      <div class="flex items-center justify-center w-full mb-12">
        <label for="toggleB" class="flex items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input @click="sortBy" type="checkbox" id="toggleB" class="sr-only">
            <!-- line -->
            <div class="block brand-color w-44 h-8 rounded-full"></div>
            <span class="select-none text-gray-200 absolute left-5 top-1 font-semibold">Casas</span>
            <span class="select-none text-gray-200 absolute left-24 top-1 font-semibold">Terrenos</span>
            <!-- dot -->
            <div class="dot select-none absolute left-1 top-1 bg-white mx-2 px-2 h-6 rounded-full transition">
              <span class="font-semibold text-yellow-600">{{filtro.value}}</span>
            </div>
          </div>
          <!-- label -->
          <!-- <div class="ml-3 text-gray-700 font-medium">
            Toggle Me!
          </div> -->
        </label>

      </div>
      <div id="ciudades" class="my-4 text-left">
        <div v-for="estado in estados" :key="estado" class="my-4">
          <div class="flex mb-4 px-4 sm:px-6 md:px-8 border-b border-gray-300">
            <h4 class="monserrat text-2xl">Desarrollos en el estado de {{estado.Nombre}}</h4>
          </div>
          <Estados :idEstado="estado.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import Estados from '@/components/GetData/catalogo/catalogoEstados.vue'
import Busqueda from '@/components/GetData/SearchBar.vue'
export default {
  name: 'Catalogo',
  components: {
    Busqueda,
    Estados
  },
  data () {
    return {
      estados: [],
      estado: {}
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    document.getElementById('toggleB').checked = false
    this.$store.commit('setDefaultToggle')
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    firebase.firestore().collection('Ubicaciones').onSnapshot(snapshotChange => {
      snapshotChange.forEach(estado => {
        this.estado = estado.data()
        this.estado.id = estado.ref.id
        this.estados.push(this.estado)
      })
    })
  },
  computed: {
    filtro () {
      return this.$store.getters.sortBy
    }
  },

  methods: {
    sortBy () {
      this.$store.commit('toogleFilteringBy')
    }
  }
}
</script>

<style>
  .texto-destacado-azul {
    background-color: rgba(245, 158, 11, 1);
    color:rgb(15, 35, 53);
  }
  .brand-text {
      color:rgb(15, 35, 53);
  }
  .texto-destacado-blanco {
      background-color: rgba(245, 158, 11, 1);
      color: #f0f0f0;;
  }
  /* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
    background-color: #D97706;
}
input:checked ~ .dot > span {
  color: white;
}
</style>
