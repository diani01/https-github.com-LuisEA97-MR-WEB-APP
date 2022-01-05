<template>
  <div class="mx-0 sm:px-4 my-2">
    <div id="casas">
      <div v-if="mostrarFracc">
        <div v-for="f in fraccionamientos" :key="f">
          <CasasFrc v-show="filtro.type === 0" :idCiudad="idCiudad" :idEstado="idEstado" :idFrc="f.id" />
          <LotesFrc v-show="filtro.type === 1" :idCiudad="idCiudad" :idEstado="idEstado" :idFrc="f.id" />
        </div>
      </div>
      <div v-show="filtro.type === 0" v-if="mostrarVenta" class="my-8 pt-4 pb-12 rounded-lg bg-white shadow-md">
        <div class="mx-4 sm:mx-6 md:mx-8 px-2 border-b-2 inline-flex border-yellow-700">
          <h4 class="lato text-gray-800 text-2xl">Casas en <span class="texto-destacado-azul px-2">venta</span></h4>
        </div>
        <div class="flex flex-wrap px-0 sm:px-4 justify-center md:justify-start">
          <div v-for="v in enVenta" :key="v">
            <div class="mx-0 sm:mx-4">
              <miniaturaCasaV :idCiudad="idCiudad" :idEstado="idEstado" :idCasa="v.id" />
            </div>
          </div>
        </div>
      </div>
      <div v-show="filtro.type === 0" v-if="mostrarRenta" class="my-4 pt-4 pb-12 rounded-lg bg-white shadow-md">
        <div class="mx-4 sm:mx-6 md:mx-8 px-2 border-b-2 inline-flex border-yellow-700">
          <h4 class="lato text-gray-800 text-2xl">Casas en <span class="texto-destacado-azul px-2">renta</span></h4>
        </div>
        <div class="flex flex-wrap px-0 sm:px-4 justify-center md:justify-start">
          <div v-for="r in enRenta" :key="r">
            <div class="mx-0 sm:mx-4">
              <miniaturaCasaR :idCiudad="idCiudad" :idEstado="idEstado" :idCasa="r.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="lotes" v-show="filtro.type === 1">
      <div class="my-4 pt-4 pb-12 rounded-lg bg-white shadow-md">
        <div class="mx-4 sm:mx-6 md:mx-8 px-2 border-b-2 inline-flex border-yellow-700">
          <h4 class="lato text-gray-800 text-2xl">Terrenos <span class="texto-destacado-azul px-2">disponibles</span></h4>
        </div>
        <div class="flex flex-wrap px-0 sm:px-4 justify-center md:justify-start">
          <div class="table h-24 w-full">
            <div class="table-cell text-center align-middle">
              <span class="lato text-gray-600">En cuanto estén disponibles terrenos para venta en ésta ubicación <br></span>
              <span class="text-gray-600 font-semibold">¡Serás el primero en enterarte!</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import CasasFrc from '@/components/GetData/catalogo/casasEnFrc.vue'
import LotesFrc from '@/components/GetData/catalogo/lotesEnFrc.vue'
import miniaturaCasaV from '@/components/GetData/catalogo/miniaturaCasaV.vue'
import miniaturaCasaR from '@/components/GetData/catalogo/miniaturaCasaR.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'Ciudades',
  components: {
    miniaturaCasaV,
    miniaturaCasaR,
    CasasFrc,
    LotesFrc
  },
  data () {
    return {
      mostrarFracc: false,
      mostrarVenta: false,
      mostrarRenta: false,
      fraccionamientos: [],
      fracc: {},
      enVenta: [],
      casaVenta: {},
      enRenta: [],
      casaRenta: {}
    }
  },
  props: {
    idEstado: {
      type: String
    },
    idCiudad: {
      type: String
    }
  },
  mounted () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').onSnapshot(snapshotChange => {
      if (snapshotChange.size > 0) {
        this.mostrarFracc = true
      }
      this.fraccionamientos = []
      snapshotChange.forEach(f => {
        this.fracc = f.data()
        this.fracc.id = f.ref.id
        this.fraccionamientos.push(this.fracc)
      })
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Renta').onSnapshot(rentaChange => {
      if (rentaChange.size > 0) {
        this.mostrarRenta = true
      }
      this.enRenta = []
      rentaChange.forEach(casaR => {
        this.casaRenta = casaR.data()
        this.casaRenta.id = casaR.ref.id
        this.enRenta.push(this.casaRenta)
      })
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Venta').onSnapshot(ventaChange => {
      if (ventaChange.size > 0) {
        this.mostrarVenta = true
      }
      this.enVenta = []
      ventaChange.forEach(casaR => {
        this.casaVenta = casaR.data()
        this.casaVenta.id = casaR.ref.id
        this.enVenta.push(this.casaVenta)
      })
    })
  },
  computed: {
    filtro () {
      return this.$store.getters.sortBy
    }
  }
}
</script>

<style>
.texto-destacado-azul {
    background-color: rgba(245, 158, 11, 1);
    color:rgb(15, 35, 53);
    text-transform: uppercase;
}
.texto-destacado-wh {
    background-color: rgba(245, 158, 11, 1);
    color:#f8f8f8;
}
.brand-text {
    color:rgb(15, 35, 53);
}
</style>
