<template>
  <div>
    <div v-for="ciudad in ciudadesArray" :key="ciudad" class="my-4">
      <div class="flex px-4 sm:px-6 md:px-12">
        <div class="inline-flex mt-4">
          <i class="fas fa-map-marker-alt text-2xl text-red-700 self-center mr-1"></i>
          <h4 class="text-2xl">{{ciudad.Nombre}}</h4>
          <i class="fas fa-arrow-right ml-4 self-center text-xl"></i>
        </div>
      </div>
      <Ciudades :idEstado="idEstado" :idCiudad="ciudad.id" />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import Ciudades from '@/components/GetData/catalogo/catalogoCiudades.vue'
import 'firebase/firestore'
export default {
  name: 'Estados',
  components: {
    Ciudades
  },
  data () {
    return {
      ciudadesArray: [],
      ciudad: {
        Nombre: '',
        id: ''
      }
    }
  },
  props: {
    idEstado: {
      type: String
    }
  },
  mounted () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').onSnapshot(snapshotChange => {
      this.ciudades = []
      snapshotChange.forEach(ciudad => {
        this.ciudad = ciudad.data()
        this.ciudad.id = ciudad.ref.id
        this.ciudadesArray.push(this.ciudad)
      })
    })
  }
}
</script>

<style>

</style>
