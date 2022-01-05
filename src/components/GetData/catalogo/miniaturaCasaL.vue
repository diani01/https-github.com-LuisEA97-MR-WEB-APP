<template>
  <div class="container mx-auto">
    <router-link :to="{name: 'infoLote', params:{idCd: idCiudad, idEst: idEstado, idM: idManzana, idL: idLote, idFrc: idFracc }}">
     <div class="card-size bg-gray-100 mt-5 rounded-lg shadow-md transform hover:-translate-y-1 hover:scale-105 transition-all ease-in-out duration-300" :style="{backgroundImage: 'url(' + portada + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
      <div class="flex flex-row items-end h-full w-full">
        <div class="rounded-b-lg flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
        <h3 class="text-2xl font-bold leading-5 uppercase">Lote en {{ubicacion}}</h3>
        <div class="inline-flex items-center my-2">
            <i class="fas fa-map-marker-alt text-red-700"></i>
            <span class="capitalize font-base text-xs my-1 ml-1">{{direccion}}</span>
        </div>
        <div class="flex flex-row justify-between">
            <div class="flex flex-row">
            <!-- <div class="w-max inline-flex items-center">
                <i class="fas fa-bed"></i>
                <span class="text-xs ml-1 antialiased">{{rooms}}</span>
            </div>
            <div class="w-max inline-flex ml-4 items-center">
                <i class="fas fa-toilet"></i>
                <span class="text-xs ml-1 antialiased">{{baths}}</span>
            </div> -->
            <div class="w-max inline-flex ml-4 items-center">
                <i class="fas fa-expand"></i>
                <span class="text-xs ml-1 antialiased">{{superficie}} m<sup>2</sup></span>
            </div>
            </div>
            <div class="w-max">
            <div class="inline-flex">
              <i class="fas fa-dollar-sign mr-2 self-center"></i>
              <span class="altialased">{{precio}} MXN</span>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
export default {
  name: 'miniaturaCasaL',
  data () {
    return {
      portada: '',
      ciudad: '',
      estado: '',
      rutaFoto: null,
      ubicacion: '',
      direccion: '',
      superficie: '',
      precio: ''
    }
  },
  props: {
    idLote: {
      type: String
    },
    idManzana: {
      type: String
    },
    idFracc: {
      type: String
    },
    idCiudad: {
      type: String
    },
    idEstado: {
      type: String
    }
  },
  created () {
    const storage = firebase.storage().ref()
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).get().then(ed => {
      this.estado = ed.data().Nombre
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).get().then(cd => {
      this.ciudad = cd.data().Nombre
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFracc).get().then(cd => {
      this.ubicacion = cd.data().Nombre
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana).collection('lotes').doc(this.idLote).get().then(lote => {
      this.direccion = `Fraccionamiento ${this.ubicacion}, ${lote.data().Nombre}; ${this.ciudad}, ${this.estado}`
      this.precio = formatter.format(lote.data().Precio)
      this.superficie = lote.data().Superficie
    })
    this.rutaFoto = `Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/portada/portada.jpg`
    storage.child(this.rutaFoto).getDownloadURL().then(url => {
      this.portada = url
    })
  }
}
</script>

<style scoped>
.card-size {
  width: 24rem;
  height: 24rem;
}
</style>
