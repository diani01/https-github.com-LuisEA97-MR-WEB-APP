<template>
  <div class="mx-auto my-4 pt-4 pb-12 rounded-lg bg-white shadow-md">
    <div class="mx-4 sm:mx-6 md:mx-8 px-2 border-b-2 inline-flex border-yellow-700">
      <h4 class="lato text-gray-800 text-2xl">Lotes en <span class="texto-destacado-azul px-2">{{nombreFracc}}</span></h4>
    </div>
    <div class="flex flex-wrap px-0 sm:px-4 justify-center md:justify-start">
      <div v-for="lote in lotes" :key="lote">
        <div class="mx-0 sm:mx-4">
          <miniaturaCasaL :idFracc="idFrc" :idCiudad="idCiudad" :idEstado="idEstado" :idLote="lote.id" :idManzana="lote.manzanaOrigen" />
        </div>
      </div>
      <div v-if="lotes.length===0" class="table h-24 w-full">
        <div class="table-cell text-center align-middle">
          <span class="lato text-gray-600">En cuanto estén disponibles lotes para venta en ésta ubicación <br></span>
          <span class="text-gray-600 font-semibold">¡Serás el primero en enterarte!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import miniaturaCasaL from '@/components/GetData/catalogo/miniaturaCasaL.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'LotesFrc',
  components: {
    miniaturaCasaL
  },
  data () {
    return {
      lotes: [],
      lote: {
        manzanaOrigen: null
      },
      nombreFracc: ''
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
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFrc).collection('manzanas').onSnapshot(snapshotChange => {
      snapshotChange.forEach(manzana => {
        var id = manzana.ref.id
        firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFrc).collection('manzanas').doc(id).collection('lotes').onSnapshot(snapshot => {
          snapshot.forEach(lote => {
            this.lote = lote.data()
            this.lote.manzanaOrigen = id
            if (!this.lote.Vendido) {
              this.lotes.push(this.lote)
            }
          })
        })
      })
    })
  }

}
</script>

<style>

</style>
