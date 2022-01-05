<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()"/>
      <div class="modal__dialog overflow-y-scroll container mx-auto p-4 md:overflow-auto md:px-8 sm:py-12 sm:gap-x-2 md:py-14">
        <div class="absolute flex p-4 justify-end top-0 right-0 z-50">
            <button class="rounded-md text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:gray-700" @click="closeModal()">
            <span class="sr-only">Close panel</span>
            <!-- Heroicon name: x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
              <!-- <button class="border-2 border-gray-500 inline-flex">X</button> -->
        </div>
        <div class="divide-y divide-gray-200">
          <h3 class="font-semibold text-2xl text-center pb-4 text-yellow-500">Agenda una cita</h3>
          <div class="block sm:grid sm:grid-cols-2 py-4">
            <div id="contacto-cita" class="mx-0 sm:mr-4">
              <div class="text-center justify-center items-center">
                <span class="font-semibold">Datos de contacto</span>
                <!-- <span class="text-gray-600 lato">Completa el siguiente formulario y nos pondremos en contacto contigo lo más pronto posible</span> -->
              </div>
              <form action="#" method="POST">
                          <div class="overflow-hidden sm:rounded-md">
                          <div>
                              <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                  <label for="ap_paterno" class="block text-sm font-semibold">Apellido paterno</label>
                                  <input type="text" name="ap_paterno" id="ap_paterno" autocomplete="family-name" v-model="paterno" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                  <label for="ap_materno" class="block text-sm font-semibold">Apellido materno</label>
                                  <input type="text" name="ap_materno" id="ap_materno" autocomplete="middle-name" v-model="materno" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              </div>

                              <div class="col-span-6">
                                  <label for="nombre" class="block text-sm font-semibold">Nombre (s)</label>
                                  <input type="text" name="nombre" id="nombre" autocomplete="given-name" v-model="nombre" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                  <label for="phone" class="block text-sm font-semibold">Teléfono</label>
                                  <input type="number" name="phone" id="phone" autocomplete="phone" v-model="tel" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                  <label for="email_1" class="block text-sm font-semibold">Correo electrónico</label>
                                  <input type="email" name="email_1" id="email_1" autocomplete="email" v-model="email" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              </div>

                              </div>
                          </div>
                          </div>
              </form>
            </div>
            <div id="agenda-cita" class="pt-4 mx-0 sm:ml-4 sm:pt-0">
              <div class="flex my-4 sm:hidden border-t border-gray-200"></div>
              <div class="text-center justify-center items-center">
                <span class="font-semibold">Fecha y hora</span>
                <!-- <span class="text-gray-600 lato">Selecciona un horario accesible para tí. Llamaremos para confirmar tu cita y te enviaremos un correo electrónico con la confrimación del horario</span> -->
              </div>
              <div class="flex">
                <span class="mr-4 self-center text-base font-semibold">Seleccione un horario</span>
                <DatePicker class="inline-block h-full" :attributes='attrs' :min-date='new Date()' v-model="date" :model-config="modelConfig" mode="dateTime" :minute-increment="15" color="orange" is-dark>
                  <template v-slot="{ inputValue, togglePopover }">
                      <div class="flex items-center">
                        <button
                          class="p-2 bg-yellow-100 border border-yellow-200 hover:bg-yellow-200 text-yellow-600 rounded-l focus:bg-yellow-500 focus:text-white focus:border-yellow-500 focus:outline-none"
                          @click="togglePopover({ placement: 'auto-start' })"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            class="w-4 h-4 fill-current"
                          >
                            <path
                              d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                            ></path>
                          </svg>
                        </button>
                        <input
                          :value="inputValue"
                          class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                          readonly
                        />
                      </div>
                    </template>
                </DatePicker>
              </div>
              <div class="flex my-4 border-t border-gray-200"></div>
              <div class="my-4">
                <span class="font-semibold text-left text-yellow-500 py-2">Datos de contacto y fecha de cita:</span>
                <ul class="text-left">
                  <li>
                    <span class="font-semibold">Nombre: </span>{{nombre}} {{paterno}} {{materno}}
                  </li>
                  <li>
                    <span class="font-semibold">Teléfono: </span>{{tel}}
                  </li>
                  <li>
                    <span class="font-semibold">Fecha de cita: </span>{{date}}
                  </li>
                  <li>
                    <span class="font-semibold">Correo de confimación: </span>{{email}}
                  </li>
                </ul>
              </div>
              <div class="flex my-4 justify-end">
                <button @click="send" class="focus:outline-none hover:bg-yellow-600 active:bg-yellow-700 py-2 px-6 w-full sm:w-auto flex justify-center rounded-md bg-yellow-500 text-white hover:bg-yellow-600 font-bold">Agendar cita</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import emailjs from 'emailjs-com'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { DatePicker } from 'v-calendar'
export default {
  name: 'AgendaCita',

  data () {
    return {
      show: false,
      date: null,
      paterno: '',
      materno: '',
      nombre: '',
      tel: '',
      email: '',
      doc: '',
      cita: {
        Count: null,
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        Nombre: '',
        Tel: '',
        Email: '',
        Fecha: ''
      },
      attrs: [
        {
          key: 'today',
          dot: true,
          dates: new Date()
        }
      ],
      modelConfig: {
        type: 'string',
        mask: 'WWWW, DD "de" MMMM "del" YYYY, hh:mm A'
      }
    }
  },
  components: {
    DatePicker
  },
  props: {
    idCasa: {
      type: String
    },
    Lote: {
      type: Boolean,
      default: false
      /* :Lote=true */
    },
    nombreLote: {
      type: String,
      default: ''
    },
    Ubicacion: {
      type: String
    },
    tipo: {
      type: String
    }
  },
  mounted () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
  },
  methods: {
    closeModal () {
      this.show = false
      this.date = null
      this.paterno = null
      this.materno = null
      this.nombre = null
      this.tel = null
      this.email = null
      this.date = null
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    openModal () {
      this.show = true
      document.querySelector('body').classList.add('overflow-hidden')
    },
    send () {
      if (
        this.date === null ||
        this.paterno === null ||
        this.materno === null ||
        this.nombre === null ||
        this.tel === null ||
        this.email === null ||
        this.date === '' ||
        this.paterno === '' ||
        this.materno === '' ||
        this.nombre === '' ||
        this.tel === '' ||
        this.email === ''
      ) {
        this.$message.error('Verifique que haya ingresado toda su información e inténtelo de nuevo.')
      } else {
        firebase.firestore().collection('Citas').get().then(citas => {
          const n = citas.size
          this.doc = 'CITA' + (n + 1)
          this.cita.Count = (n + 1)
        }).then(() => {
          this.cita.ApellidoPaterno = this.paterno
          this.cita.ApellidoMaterno = this.materno
          this.cita.Nombre = this.nombre
          this.cita.Tel = this.tel
          this.cita.Email = this.email
          this.cita.Fecha = this.date
          if (this.Lote) {
            emailjs.send('service_kh0cax6', 'template_06irbsy', {
              nombre: `${this.cita.Nombre} ${this.cita.ApellidoPaterno} ${this.cita.ApellidoMaterno}`,
              fecha: this.cita.Fecha,
              lote: this.nombreLote,
              ubicacion: this.Ubicacion,
              correo: this.cita.Email,
              tel: this.cita.Tel
            })
          } else {
            emailjs.send('service_kh0cax6', 'template_lrqb2vl', {
              nombre: `${this.cita.Nombre} ${this.cita.ApellidoPaterno} ${this.cita.ApellidoMaterno}`,
              fecha: this.cita.Fecha,
              casa: this.idCasa,
              ubicacion: this.Ubicacion,
              tipo: this.tipo,
              correo: this.cita.Email,
              tel: this.cita.Tel
            })
          }
          firebase.firestore().collection('Citas').doc(this.doc).set(this.cita).then(() => {
            this.$message({
              message: `Se le enviará un correo de confirmación a ${this.cita.Email}`,
              type: 'success',
              offset: 35
            })
            this.show = false
            this.date = null
            this.paterno = null
            this.materno = null
            this.nombre = null
            this.tel = null
            this.email = null
            this.date = null
            document.querySelector('body').classList.remove('overflow-hidden')
          })
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
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
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
