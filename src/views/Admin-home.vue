<template>
  <div class="bg-gray-50">
    <div class="container mx-auto items-center justify-center flex flex-wrap">
      <div class="w-full mb-12 mt-6">
        <div class="mb-2 sm:mb-6 flex justify-center sm:justify-between">
          <div class="inline-flex">
            <span class="text-3xl mr-2" >¡Bienvenido, {{ name }}!</span>
          </div>
          <button @click="logout" class="hidden sm:inline-flex px-6 flex-none font-semibold text-white rounded-lg bg-red-600">
            <span class="lato inline-flex self-center mr-2">Cerrar sesión</span>
            <i class="fas fa-sign-out-alt self-center"></i>
          </button>
        </div>
        <div class="flex sm:hidden justify-center mb-4">
          <button @click="logout" class="inline-flex px-6 py-1
           flex-none font-semibold text-white rounded-lg bg-red-600">
            <span class="lato inline-flex self-center mr-2">Cerrar sesión</span>
            <i class="fas fa-sign-out-alt self-center"></i>
          </button>
        </div>
        <div class="border-b border-gray-300 mt-12 mb-2 px-2">
          <h4 class="text-gray-600 lato text-2xl text-left">Gestión de citas</h4>
        </div>
        <div class="text-left px-2 pt-4">
          <span>Por favor, verifique el correo <span class="underline font-semibold">ventas@axerinmobiliaria.com.mx</span> para obtener más detalles de la cita</span>
        </div>
        <div class="relative flex flex-col min-w-0 w-full mb-6 shadow-lg border border-gray-300 rounded">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap">
                  <div class="relative w-full px-2 sm:px-4 md:px-8 lg:px-14 max-w-full flex justify-between flex-grow flex-1">
                    <h3
                      class="font-semibold text-sm sm:text-base md:text-lg text-gray-800"
                    >
                      Citas agendadas
                    </h3>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <!-- table goes here -->
                <table class="w-full table-fixed overflow-x-auto">
                  <thead class="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center brand-color text-yellow-300">
                    <tr class="h-8">
                      <td class="w-28">Fecha</td>
                      <td class="w-28">Ap. Paterno</td>
                      <td class="w-28">Ap. Materno</td>
                      <td class="w-28">Nombre(s)</td>
                      <td class="w-28">Teléfono</td>
                      <td class="w-28">Correo</td>
                    </tr>
                  </thead>
                  <tbody class="lato font-semibold text-sm">
                    <tr v-for="cita in citas" :key="cita" class="bg-white border-b border-gray-300">
                      <td class="w-28 pl-2">{{cita.Fecha}}</td>
                      <td class="w-28">{{cita.ApellidoPaterno}}</td>
                      <td class="w-28">{{cita.ApellidoMaterno}}</td>
                      <td class="w-28">{{cita.Nombre}}</td>
                      <td class="w-28">{{cita.Tel}}</td>
                      <td class="w-28 overflow-auto">{{cita.Email}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>
        <div class="border-b border-gray-300 mt-12 mb-2 px-2">
          <h4 class="text-gray-600 lato text-2xl text-left">Administrador de casas y fraccionamientos</h4>
        </div>
        <div id="admin-locations" class=" my-6 px-4 sm:px-8 border border-gray-300 rounded-lg">
          <div class="my-2 flex w-full justify-between">
            <div class="inline-flex">
              <span class="mr-4 font-semibold self-center">
                Todas las ubicaciones
              </span>
              <button v-if="!agregarUbicacion" @click="agregarUbicacion=true" class="inline-flex font-bold uppercase text-xs text-white rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 px-4 py-2" type="button" :class="[color === 'light' ? 'bg-green-900 hover:bg-green-800' : 'bg-yellow-500 hover:bg-yellow-600']"><span class="monserrat">Agregar ubicación</span></button>
            </div>
          </div>
          <el-collapse accordion>
            <div v-if="agregarUbicacion" class="flex border-b border-gray-200 py-2 justify-start">
              <div class="inline-flex">
                <select name="state" autocomplete="state" class="border-gray-200 px-3 py-1 mr-4 placeholder-gray-400 text-gray-700 bg-gray-50 rounded text-sm shadow focus:outline-none focus:shadow-outline w-48 ease-linear transition-all duration-150 cursor-pointer" @change="selectEstado($event)">
                  <option disabled selected>Seleccione un estado</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="CDMX">Ciudad de México</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                </select>
                <span class="lato self-center text-gray-400 mr-4">{{prefijoEstado}}</span>
                <button v-if="prefijoEstado != ''" @click="loadDocEstado" class=" mr-2 focus:outline-none text-green-500 text-lg hover:text-green-700 rounded-full inline-flex">
                  <i class="fas fa-check-circle self-center"></i>
                </button>
                  <i v-if="cargandoEstado" class="fas fa-spinner self-center animate-spin"></i>
                <button v-if="!cargandoEstado" @click="{agregarUbicacion = false; seleccionaEstado = ''; prefijoEstado = ''}" class=" mr-2 focus:outline-none text-red-500 text-lg hover:text-red-700 rounded-full inline-flex">
                  <i class="fas fa-times-circle self-center"></i>
                </button>
              </div>
            </div>
            <div v-if="listaEstadosVacia" class="flex justify-center items-center border-b border-gray-200 py-2">
              <span class="lato text-gray-300">No hay datos registrados</span>
            </div>
            <el-collapse-item v-for="estado in Estados" :key="estado" :name="estado.Nombre">
              <template #title>
                <div class="inline-flex">
                  <span class="lato text-base mr-2 text-blue-700 font-semibold">{{estado.Nombre}}</span>
                  <span class="lato text-base font-normal text-gray-400">({{estado.Prefijo}})</span>
                </div>
              </template>
              <el-collapse accordion class="px-2 sm:px-4">
                <div class="flex border-b border-gray-200 py-2 justify-between">
                  <div class="flex">
                    <label for="ciudad" class="inline-flex flex-shrink-0 lato font-semibold mr-2 self-center text-base cursor-pointer text-green-700">Agregar ciudad:</label>
                    <input v-model="ciudad.Nombre" type="text" name="ciudad" id="ciudad" class=" border-0 border-b-2 border-gray-400 px-4 py-1 mr-2 placeholder-gray-400 text-gray-700 bg-gray-50 text-sm focus:border-0 focus:outline-none w-full ease-linear transition-all duration-150" placeholder="Agrega un nombre">
                    <button @click="loadCiudad(estado.Nombre, estado.Prefijo)" v-if="ciudad.Nombre != ''" class=" mr-2 focus:outline-none text-green-500 text-lg hover:text-green-700 rounded-full inline-flex">
                      <i class="fas fa-check-circle self-center mr-2"></i>
                    </button>
                    <i v-if="cargandoCiudad" class="fas fa-spinner self-center animate-spin"></i>
                  </div>
                </div>
                <Ciudades :nombreEstado="estado.Nombre" :idEstado="estado.Prefijo" />
              </el-collapse>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import Ciudades from '@/components/GetData/Ciudades.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  setup () {
    const name = ref('')
    onBeforeMount(() => {
      const user = firebase.auth().currentUser
      if (user) {
        name.value = user.email.split('@')[0]
      }
    })
    const logout = () => {
      firebase.auth().signOut().then(() => {
      }).catch(err => {
        alert(err.message)
      })
    }
    return {
      name,
      logout
    }
  },
  components: {
    Ciudades
  },
  mounted () {
  },
  created () {
    this.listaEstadosVacia = true
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    firebase.firestore().collection('Ubicaciones').onSnapshot((snapshotChange) => {
      if (snapshotChange.size === 0) {
        this.listaEstadosVacia = true
      } else {
        this.listaEstadosVacia = false
      }
      this.Estados = []
      snapshotChange.forEach((doc) => {
        this.Estados.push(doc.data())
      })
    })
    firebase.firestore().collection('users').onSnapshot((snapshotChange) => {
      this.Users = []
      snapshotChange.forEach((doc) => {
        this.Users.push({
          key: doc.id,
          name: doc.data().name,
          address: doc.data().address,
          phone: doc.data().phone
        })
      })
    })
    firebase.firestore().collection('Citas').onSnapshot((snapshotChange) => {
      this.citas = []
      snapshotChange.forEach(cita => {
        this.citas.push(cita.data())
        this.citas = this.citas.reverse()
      })
    })
  },
  data () {
    return {
      secrets: '',
      loggedIn: false,
      user: {
        name: '',
        address: '',
        phone: ''
      },
      loadingData: false,
      Estados: [],
      Users: [],
      citas: [],
      ciudad: {
        Nombre: ''
      },
      listaEstadosVacia: true,
      agregarUbicacion: false,
      seleccionaEstado: '',
      prefijoEstado: '',
      cargandoEstado: false,
      cargandoCiudad: false,
      docEstado: {
        Nombre: '',
        Prefijo: ''
      }
    }
  },
  methods: {
    selectEstado (event) {
      this.seleccionaEstado = event.target.value
      switch (this.seleccionaEstado) {
        case 'Aguascalientes':
          this.prefijoEstado = 'AGS'
          break
        case 'Baja California':
          this.prefijoEstado = 'BC'
          break
        case 'Baja California Sur':
          this.prefijoEstado = 'BCS'
          break
        case 'Campeche':
          this.prefijoEstado = 'CAMP'
          break
        case 'Chiapas':
          this.prefijoEstado = 'CHIS'
          break
        case 'Chihuahua':
          this.prefijoEstado = 'CHIH'
          break
        case 'CDMX':
          this.prefijoEstado = 'CDMX'
          break
        case 'Coahuila':
          this.prefijoEstado = 'COAH'
          break
        case 'Colima':
          this.prefijoEstado = 'COL'
          break
        case 'Durango':
          this.prefijoEstado = 'DGO'
          break
        case 'Estado de México':
          this.prefijoEstado = 'EDOMEX'
          break
        case 'Guanajuato':
          this.prefijoEstado = 'GTO'
          break
        case 'Guerrero':
          this.prefijoEstado = 'GRO'
          break
        case 'Hidalgo':
          this.prefijoEstado = 'HGO'
          break
        case 'Jalisco':
          this.prefijoEstado = 'JAL'
          break
        case 'Michoacán':
          this.prefijoEstado = 'MICH'
          break
        case 'Morelos':
          this.prefijoEstado = 'MOR'
          break
        case 'Nayarit':
          this.prefijoEstado = 'NAY'
          break
        case 'Nuevo León':
          this.prefijoEstado = 'NL'
          break
        case 'Oaxaca':
          this.prefijoEstado = 'OAX'
          break
        case 'Puebla':
          this.prefijoEstado = 'PUE'
          break
        case 'Querétaro':
          this.prefijoEstado = 'QRO'
          break
        case 'Quintana Roo':
          this.prefijoEstado = 'QROO'
          break
        case 'San Luis Potosí':
          this.prefijoEstado = 'SLP'
          break
        case 'Sinaloa':
          this.prefijoEstado = 'SIN'
          break
        case 'Sonora':
          this.prefijoEstado = 'SON'
          break
        case 'Tabasco':
          this.prefijoEstado = 'TAB'
          break
        case 'Tamaulipas':
          this.prefijoEstado = 'TAMPS'
          break
        case 'Tlaxcala':
          this.prefijoEstado = 'TLAX'
          break
        case 'Veracruz':
          this.prefijoEstado = 'VER'
          break
        case 'Yucatán':
          this.prefijoEstado = 'YUC'
          break
        case 'Zacatecas':
          this.prefijoEstado = 'ZAC'
          break
        default :
          this.prefijoEstado = ''
          break
      }
    },
    loadDocEstado () {
      this.cargandoEstado = true
      this.docEstado.Nombre = this.seleccionaEstado
      this.docEstado.Prefijo = this.prefijoEstado
      firebase.firestore().collection('Ubicaciones').doc(this.prefijoEstado).set(this.docEstado).then(() => {
        this.$message({
          message: `Se registró ${this.docEstado.Nombre} en ubicaciones`,
          type: 'success',
          offset: 35
        })
        this.cargandoEstado = false
        this.agregarUbicacion = false
        this.seleccionaEstado = ''
        this.prefijoEstado = ''
      })
    },
    loadCiudad (nombreEstado, idEstado) {
      this.cargandoCiudad = true
      firebase.firestore().collection('Ubicaciones').doc(idEstado).collection('Ciudades').add(this.ciudad).then(() => {
        this.$message({
          message: `Se registró ${this.ciudad.Nombre} en ${nombreEstado}`,
          type: 'success',
          offset: 35
        })
        this.cargandoCiudad = false
        this.ciudad.Nombre = ''
      })
    }
  }
}
</script>

<style>

</style>
