<template>
  <div class="mx-auto my-4 pt-4 pb-12 rounded-lg bg-white shadow-md">
    <div class="mx-4 sm:mx-6 md:mx-8 px-2 border-b-2 inline-flex border-yellow-700">
      <h4 class="lato text-gray-800 text-2xl">Descubre <span class="texto-destacado-azul px-2">{{nombreFracc}}</span></h4>
    </div>
    <div class="flex flex-wrap px-0 sm:px-4 justify-center md:justify-start">
      <div v-for="casa in casas" :key="casa">
        <div class="mx-0 sm:mx-4">
          <miniaturaCasaF :idFracc="idFrc" :idCiudad="idCiudad" :idEstado="idEstado" :idCasa="casa.id" />
        </div>
      </div>
      <div v-if="casas.length===0" class="table h-24 w-full">
        <div class="table-cell text-center align-middle">
          <span class="lato text-gray-600">En cuanto estén disponibles casas para venta en ésta ubicación <br></span>
          <span class="text-gray-600 font-semibold">¡Serás el primero en enterarte!</span>
          <br><br>
          <span class="text-yellow-600 font-semibold">También puedes explorar los lotes que tenemos en venta</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import miniaturaCasaF from '@/components/GetData/catalogo/miniaturaCasaF.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'CasasFrc',
  components: {
    miniaturaCasaF
  },
  data () {
    return {
      casas: [],
      casa: {},
      nombreFracc: '',
      vacio: false
    }
  },
  props: {
    idCiudad: {
      type: String
    },
    idEstado: {
      type: String
    },
    idFrc: {
      type: String
    }
  },
  mounted () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFrc).get().then(esteFracc => {
      this.nombreFracc = esteFracc.data().Nombre
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFrc).collection('casas').onSnapshot(snapshotChange => {
      if (snapshotChange.size === 0) {
        this.vacio = true
      } else {
        this.vacio = false
      }
      this.casas = []
      snapshotChange.forEach(casa => {
        this.casa = casa.data()
        this.casa.id = casa.ref.id
        if (!this.casa.Vendido) {
          this.casas.push(this.casa)
        }
      })
    })
  }

}
</script>

<style>

</style>
