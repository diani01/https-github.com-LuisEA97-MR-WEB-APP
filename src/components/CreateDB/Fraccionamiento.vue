<template>
  <el-dialog
        title="Nuevo Fraccionamiento"
        v-model="nuevoFracc"
        :width="ancho"
        destroy-on-close
        center>
        <div class="flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg border-0">
          <div class="flex-auto bg-gray-100 px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Datos generales
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="border-gray-200 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" v-model="fraccionamiento.Nombre"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Colonia
                    </label>
                    <input
                      type="text"
                      class="border-gray-200 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" v-model="fraccionamiento.Ubicacion.Colonia"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Ciudad
                    </label>
                    <input
                      type="text"
                      disabled
                      class="border-gray-200 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" v-model="fraccionamiento.Ubicacion.Ciudad"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Estado
                    </label>
                    <select disabled id="state" name="state" autocomplete="state" value="Seleccione un estado" class="border-gray-200 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" v-model="fraccionamiento.Ubicacion.Estado">
                      <option value="none" selected disabled>Seleccione un estado</option>
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
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full my-3 py-2">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                    </label>
                      <button
                        class="bg-green-600 text-white hover:bg-green-700 font-bold uppercase text-xs px-5 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button" @click="createFracc"
                      >
                        Guardar fraccionamiento
                      </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
  </el-dialog>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'NuevoFraccionamiento',
  created () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    window.addEventListener('resize', this.onResize)
    var ancho = screen.width
    if (ancho < 640) {
      this.ancho = '100%'
    } else {
      this.ancho = '50%'
    }
  },
  mounted () {
    this.fraccionamiento.Ubicacion.Ciudad = this.Ciudad
    this.fraccionamiento.Ubicacion.Estado = this.Estado
    switch (this.fraccionamiento.Ubicacion.Estado) {
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
  data () {
    return {
      fraccionamiento: {
        Nombre: '',
        Ubicacion: {
          Colonia: '',
          Ciudad: '',
          Estado: '',
          Pais: 'México'
        }
      },
      ancho: '',
      nuevoFracc: false,
      prefijoEstado: '',
      iniciales: '',
      id: ''
    }
  },
  props: {
    Estado: {
      type: String
    },
    Ciudad: {
      type: String
    },
    idCiudad: {
      type: String
    }
  },
  methods: {
    onResize () {
      if (window.innerWidth < 768) {
        this.ancho = '100%'
      } else {
        this.ancho = '50%'
      }
    },
    closeModal () {
      this.nuevoFracc = false
    },
    openModal () {
      this.nuevoFracc = true
    },
    createFracc () {
      var normalizado = ''
      if (this.fraccionamiento.Nombre === '' || this.fraccionamiento.Ubicacion.Colonia === '' || this.fraccionamiento.Ubicacion.Ciudad === '' || this.fraccionamiento.Ubicacion.Estado === '') {
        this.$message({
          message: 'No se permiten registros en blanco',
          type: 'warning',
          offset: 35
        })
      } else {
        var getInitials = function (name) {
          var parts = name.split(' ')
          var initials = ''
          for (var i = 0; i < parts.length; i++) {
            if (parts[i].length > 0 && parts[i] !== '') {
              initials += parts[i][0]
            }
          }
          return initials
        }
        this.fraccionamiento.Nombre = this.fraccionamiento.Nombre.trim()
        normalizado = this.fraccionamiento.Nombre.replace(/ /g, '')
        normalizado = normalizado.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        normalizado = normalizado.toUpperCase()
        this.fraccionamiento.Ubicacion.Ciudad = this.fraccionamiento.Ubicacion.Ciudad.trim()
        this.fraccionamiento.Ubicacion.Colonia = this.fraccionamiento.Ubicacion.Colonia.trim()
        this.fraccionamiento.Ubicacion.Estado = this.fraccionamiento.Ubicacion.Estado.trim()
        this.iniciales = getInitials(`${this.fraccionamiento.Ubicacion.Ciudad} ${this.fraccionamiento.Ubicacion.Estado}`)
        this.fraccionamiento.id = `${normalizado}${this.iniciales}`
        firebase.firestore().collection('Ubicaciones').doc(this.prefijoEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.fraccionamiento.id).set(this.fraccionamiento).then(() => {
          this.$message({
            message: 'Registro creado con éxito',
            type: 'success',
            offset: 35
          })
          this.fraccionamiento.Nombre = ''
          this.fraccionamiento.Ubicacion.Colonia = ''
          this.nuevoFracc = false
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1500;
  /* overflow: hidden; */
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 1100;
    @media screen and (max-width: 639px) {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 640px) {
      width: 100%;
      height: 100%;
     }
    @media (min-width: 768px) {
      width: 95%;
      height: auto;
      margin: 50px auto;
     }
    @media (min-width: 1024px) {
      width: 80%;
     }
    @media (min-width: 1280px) {
      width: 75%;
     }
    @media (min-width: 1536px) {
      width: 70%;
     }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
