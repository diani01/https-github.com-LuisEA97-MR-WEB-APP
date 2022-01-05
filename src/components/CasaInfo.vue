<template>
  <AgendaCita ref="Cita" :idCasa="idCasa" :Ubicacion="casa.DireccionCompleta" :tipo="tipoRuta" />
  <div class="mb-48">
      <div id="portada" :style="{backgroundImage: 'linear-gradient(180deg, rgba(231,231,231,0.09007352941176472) 0%, rgba(11,7,5,0.5942752100840336) 56%, rgba(0,0,0,0.8127626050420168) 98%), url(' + portada + ')', backgroundSize: 'cover', backgroundPosition: 'center', height: '30rem' }" class="relative z-10 shadow-xl">
        <div class="absolute top-2 right-2 px-4 sm:px-8 md:px-16 z-50 flex w-full justify-between text-white">
          <div class="flex justify-between">
            <router-link to="/axer-mr-imb/admin" class="focus:outline-none px-4 rounded-full hover:bg-gray-800 transition-all ease-in-out duration-500">
              <i class="fas fa-long-arrow-alt-left mr-2"></i>
              <span class="google-sans">Volver al menú</span>
            </router-link>
          </div>
          <div class="inline-flex">
            <button class="focus:outline-none px-4 rounded-full hover:bg-gray-800 transition-all ease-in-out duration-500">
              <i class="fas fa-pen mr-2"></i>
              <span class="google-sans">Editar</span>
            </button>
          </div>
        </div>
        <div class="flex w-full justify-between absolute bottom-2 px-4 sm:px-8 md:px-16 z-50 text-white">
          <div class="text-left">
            <h2>Casa en {{descripcion1}} </h2>
            <h3 class="font-thin">{{descripcion2}}</h3>
          </div>
          <div class="hidden sm:block text-right">
              <h3>Desde:</h3>
              <h2 class="text-4xl">{{precioFormat}} MXN</h2>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-11">
        <div class="flex flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-2/3 mx-0 sm:ml-4 p-4">
            <div class="text-left">
                <div class="inline-flex border-b-2 mb-4  border-yellow-600">
                  <span class="monserrat text-2xl font-medium inline-block">Detalles</span>
                </div>
              <div>
                <p class="lato text-left text-lg text-gray-700">{{casa.Descripcion}}</p>
              </div>
            </div>
            <div class="mt-12 text-left">
              <div class="inline-flex mb-4 border-b-2 border-yellow-600">
                  <span class="monserrat text-2xl font-medium inline-block">Galería</span>
                </div>
              <div class="flex overflow-x-auto">
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="portada"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto1"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto2"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto3"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto4"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto5"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
              </div>
            </div>
            <div class="mt-12 text-left">
              <div class="inline-flex mb-4 border-b-2 border-yellow-600">
                  <span class="monserrat text-2xl font-medium inline-block">Caraterísitcas destacadas</span>
                </div>
                <div class="px-4 transition-all ease-in-out duration-300">
                  <div id="f1">
                    <div @click="expandF1=!expandF1"  id="titulo1" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat1.Nombre}}</span>
                      <button @click="expandF1=!expandF1" class="focus:outline-none">
                        <i :class="expandF1 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo1" :class="expandF1 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF1 ? 'block' : 'hidden'" class="lato text-base">{{feat1.Descripcion}}</p>
                    </div>
                  </div>
                  <div id="f2">
                    <div @click="expandF2=!expandF2" id="titulo2" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat2.Nombre}}</span>
                      <button @click="expandF2=!expandF2" class="focus:outline-none">
                        <i :class="expandF2 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo2" :class="expandF2 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF2 ? 'block' : 'hidden'" class="lato text-base">{{feat2.Descripcion}}</p>
                    </div>
                  </div>
                  <div id="f3">
                    <div @click="expandF3=!expandF3"  id="titulo3" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat3.Nombre}}</span>
                      <button @click="expandF3=!expandF3" class="focus:outline-none">
                        <i :class="expandF3 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo3" :class="expandF3 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF3 ? 'block' : 'hidden'" class="lato text-base">{{feat3.Descripcion}}</p>
                    </div>
                  </div>
                  <div id="f4">
                    <div @click="expandF4=!expandF4"  id="titulo4" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat4.Nombre}}</span>
                      <button @click="expandF4=!expandF4" class="focus:outline-none">
                        <i :class="expandF4 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo4" :class="expandF4 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF4 ? 'block' : 'hidden'" class="lato text-base">{{feat4.Descripcion}}</p>
                    </div>
                  </div>
                  <div id="f5">
                    <div @click="expandF5=!expandF5"  id="titulo5" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat5.Nombre}}</span>
                      <button @click="expandF5=!expandF5" class="focus:outline-none">
                        <i :class="expandF5 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo5" :class="expandF5 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF5 ? 'block' : 'hidden'" class="lato text-base">{{feat5.Descripcion}}</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div id="action" class="appearance-none side border-l p-4 sm:pl-4 border-gray-300 whitespace-normal">
            <div class="border-b border-gray-200 text-center sm:text-left text-3xl lato font-bold pb-2">
              <div v-if="tipoRuta != 'Renta'">
                <span >Precio: </span> <span class="text-yellow-700">{{precioFormat}} MXN</span>
              </div>
              <div v-if="tipoRuta === 'Renta'">
                <span >Renta: </span> <span class="text-yellow-700">{{precioFormat}} MXN / mes </span>
              </div>
            </div>
            <div class="flex flex-col px-4 mt-4 mb-6 text-left justify-start">
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-ruler mr-2 self-center"></i>
                <span class="font-semibold mr-2">Superficie: </span>
                <span>{{casa.Superficie}} m<sup>2</sup></span>
              </div>
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-ruler-combined mr-2 self-center"></i>
                <span class="font-semibold mr-2">Dimensiones de terreno: </span>
                <span>{{casa.Terreno}} mts.</span>
              </div>
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-bed mr-2 self-center"></i>
                <span class="font-semibold mr-2">Habitaciones: </span>
                <span>{{casa.Habitaciones}}</span>
              </div>
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-toilet mr-2 self-center"></i>
                <span class="font-semibold mr-2">Baños: </span>
                <span>{{casa.Baths}}</span>
              </div>
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-map-marker-alt mr-2 self-start mt-1"></i>
                <span class="font-semibold">{{casa.DireccionCompleta}}</span>
              </div>
            </div>
            <div class="mb-6">
              <p class="text-gray-700 monserrat text-base">Aprovecha la oportunidad de estrenar la casa de tus sueños. <br>Contamos con planes de pago a tu medida<span><sup>*</sup></span>. ¡Descrubre lo sencillo que es!</p>
            </div>
            <button @click="$refs.Cita.openModal()" class="focus:outline-none hover:bg-yellow-700 active:bg-yellow-500 inline-flex justify-center text-lg w-full uppercase text-center font-semibold bg-yellow-600 text-white rounded-lg px-8 py-2 transition-all ease-in-out duration-300">
              <span class="mr-4">¡Quiero ésta casa!</span>
              <i class="fas fa-chevron-right self-center"></i>
            </button>
            <div class="border-t border-gray-200 inline-flex mt-4">
              <span class="text-xs text-gray-400 text-left">
                * Financiamiento a través de crédito ISSFAM, FOVISSTE, INFONAVIT e instituciones bancarias participantes. Aplican restricciones.
              </span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import AgendaCita from '@/components/AgendaCita.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
export default {
  name: 'DetallesCasa',
  components: {
    AgendaCita
  },
  data () {
    return {
      tipoRuta: '',
      ruta: '',
      idEstado: '',
      idCiudad: '',
      idCasa: '',
      UbicacionCasa: '',
      ciudad: '',
      frc: '',
      descripcion1: '',
      descripcion2: '',
      precioFormat: '',
      enFraccionamiento: null,
      expandF1: true,
      expandF2: true,
      expandF3: true,
      expandF4: true,
      expandF5: true,
      idFraccFrom: null,
      srcList: [],
      casa: {
        Baths: null,
        Descripcion: null,
        Habitaciones: null,
        Precio: null,
        Superficie: null,
        Terreno: null,
        Vendido: null
      },
      feat1: {
        Nombre: null,
        Descripcion: null
      },
      feat2: {
        Nombre: null,
        Descripcion: null
      },
      feat3: {
        Nombre: null,
        Descripcion: null
      },
      feat4: {
        Nombre: null,
        Descripcion: null
      },
      feat5: {
        Nombre: null,
        Descripcion: null
      },
      portada: '',
      foto1: '',
      foto2: '',
      foto3: '',
      foto4: '',
      foto5: ''
    }
  },
  mounted () {
    console.log(`Fraccionamiento ${this.$route.params.idFrc}`)
    console.log(`Fraccionamiento ${this.$route.params.idFrc}`)
    window.scrollTo(0, 0)
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    const storage = firebase.storage().ref()
    console.log(`this.$route.params.idFrc = ${this.$route.params.idFrc}`)
    console.log(`Ejecutando this.$route.params.enFraccionamiento = ${this.$route.params.enFraccionamiento}`)
    if (this.$route.params.idFrc !== undefined) {
      this.$route.params.enFraccionamiento = 'si'
      this.enFraccionamiento = true
    } else {
      this.$route.params.enFraccionamiento = 'no'
      this.enFraccionamiento = false
    }
    if (this.enFraccionamiento === true) {
      this.tipoRuta = 'Venta'
      this.idEstado = this.$route.params.idEst
      this.idCiudad = this.$route.params.idCd
      this.enFraccionamiento = true
      this.idFraccFrom = this.$route.params.idFrc
      this.idCasa = this.$route.params.idCasa
      this.UbicacionCasa = this.$route.params.frc/*  + '; ' + this.$route.params.ubicacion */
      this.descripcion2 = this.$route.params.ubicacion
      this.ruta = `Ubicaciones/${this.idEstado}/Ciudades/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/casas/${this.idCasa}`
      /* obtener datos de la casa */
      firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).get().then(fracc => {
        this.descripcion1 = fracc.data().Nombre
        this.descripcion2 = `${fracc.data().Ubicacion.Ciudad}, ${fracc.data().Ubicacion.Estado}`
      })
      const db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).collection('casas').doc(this.idCasa)
      db.get().then(casa => {
        this.casa = casa.data()
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        this.precioFormat = formatter.format(casa.data().Precio)
      }).then(() => {
        db.collection('features').doc(this.idCasa + 'F1').get().then(f1 => {
          this.feat1 = f1.data()
        })
        db.collection('features').doc(this.idCasa + 'F2').get().then(f2 => {
          this.feat2 = f2.data()
        })
        db.collection('features').doc(this.idCasa + 'F3').get().then(f3 => {
          this.feat3 = f3.data()
        })
        db.collection('features').doc(this.idCasa + 'F4').get().then(f4 => {
          this.feat4 = f4.data()
        })
        db.collection('features').doc(this.idCasa + 'F5').get().then(f5 => {
          this.feat5 = f5.data()
        })
      }).then(() => {
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/portada/portada.jpg`).getDownloadURL().then(url => {
          this.portada = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_1.jpg`).getDownloadURL().then(url => {
          this.foto1 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_2.jpg`).getDownloadURL().then(url => {
          this.foto2 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_3.jpg`).getDownloadURL().then(url => {
          this.foto3 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_4.jpg`).getDownloadURL().then(url => {
          this.foto4 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_5.jpg`).getDownloadURL().then(url => {
          this.foto5 = url
          this.srcList.push(url)
        })
      })
    }
    if (this.enFraccionamiento === false) {
      this.tipoRuta = this.$route.params.tipo
      this.enFraccionamiento = false
      this.idEstado = this.$route.params.idEst
      this.idCiudad = this.$route.params.idCd
      this.idCasa = this.$route.params.idCasa
      firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).get().then(cd => {
        this.descripcion1 = cd.data().Nombre
      })
      this.ruta = `Ubicaciones/${this.idEstado}/Ciudades/${this.idCiudad}/${this.$route.params.tipo}/${this.idCasa}`
      var db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection(this.$route.params.tipo).doc(this.idCasa)
      db.get().then(casa => {
        this.casa = casa.data()
        this.descripcion2 = casa.data().Direccion
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        this.precioFormat = formatter.format(casa.data().Precio)
      }).then(() => {
        db.collection('features').doc(this.idCasa + 'F1').get().then(f1 => {
          this.feat1 = f1.data()
        })
        db.collection('features').doc(this.idCasa + 'F2').get().then(f2 => {
          this.feat2 = f2.data()
        })
        db.collection('features').doc(this.idCasa + 'F3').get().then(f3 => {
          this.feat3 = f3.data()
        })
        db.collection('features').doc(this.idCasa + 'F4').get().then(f4 => {
          this.feat4 = f4.data()
        })
        db.collection('features').doc(this.idCasa + 'F5').get().then(f5 => {
          this.feat5 = f5.data()
        })
      }).then(() => {
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.$route.params.tipo}/${this.idCasa}/portada/portada.jpg`).getDownloadURL().then(url => {
          this.portada = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.$route.params.tipo}/${this.idCasa}/galeria/foto_1.jpg`).getDownloadURL().then(url => {
          this.foto1 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.$route.params.tipo}/${this.idCasa}/galeria/foto_2.jpg`).getDownloadURL().then(url => {
          this.foto2 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.$route.params.tipo}/${this.idCasa}/galeria/foto_3.jpg`).getDownloadURL().then(url => {
          this.foto3 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.$route.params.tipo}/${this.idCasa}/galeria/foto_4.jpg`).getDownloadURL().then(url => {
          this.foto4 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.$route.params.tipo}/${this.idCasa}/galeria/foto_5.jpg`).getDownloadURL().then(url => {
          this.foto5 = url
          this.srcList.push(url)
        })
      })
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('¿Deseas cerrar ésta ventana?')
        .then(_ => {
          done()
          location.reload()
        })
        .catch(_ => {})
    },
    toTop () {
      window.scrollTo(0, 0)
    },
    toggleVendido () {
      this.actualizando = true
      if (this.enFraccionamiento === true) {
        this.casa.Vendido = !this.casa.Vendido
        const db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).collection('casas').doc(this.idCasa)
        db.set(this.casa).then(() => {
          location.reload()
        })
      }
      if (this.enFraccionamiento === false) {
        this.casa.Vendido = !this.casa.Vendido
        var db = null
        if (this.tipoRuta === 'Venta') {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Venta').doc(this.idCasa)
        }
        if (this.tipoRuta === 'Renta') {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Renta').doc(this.idCasa)
        }
        db.set(this.casa).then(() => {
          location.reload()
        })
      }
    }
  }
}
</script>

<style scoped>
  #portada{
    background: linear-gradient(180deg, rgba(231,231,231,0.09007352941176472) 0%, rgba(11,7,5,0.5942752100840336) 56%, rgba(0,0,0,0.8127626050420168) 98%);
  }
  #action {
    height: 100%;
  }
  #rutaText {
    white-space: normal;
  }
  @media (min-width: 640px) {
    .side {
      width: 33.333333%;
    }
  }
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .contenedor-datos {
    width: 426px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #E8CBC0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .contenedor-img {
    position: relative;
    width: 426px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contenedor-img:before {
  /* empty pseudo */
  content: '';
  /* start transparent, include a transition bcuz */
  opacity: 1;
  transition: opacity 0.5s ease;
  /* covers the whole div */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
/* .contenedor-img:hover:before {
  opacity: 1;
} */
.contenedor-img img {
  position: absolute;
  object-fit: cover;
  display: block;
  width: inherit;
  height: inherit;
  z-index: 1;
}

.btn {
  opacity: 1;
  transition: opacity 0.5s ease;
  position: relative;
  padding: 0 40px;
  height: 40px;
  line-height: 40px;
  max-width: 260px;
  cursor: pointer;
  z-index: 3;
  font-size: 1rem;
  border-width: 2px;
  border-color: #f0f0f0;
  border-radius: 5px;
}
.contenedor-img:hover .btn {
  opacity: 1;
}
.featOpened {
  max-height: 400px;
}
.featClosed {
  height: 0px;
  opacity: 0;
}
</style>
