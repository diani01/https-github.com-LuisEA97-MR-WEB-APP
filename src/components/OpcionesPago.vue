<template>
  <transition name="fade">
    <div class="modal" v-if="show">
    <Registro ref="Registro" class="z-50" />
    <AgendaCita ref="Cita" class="z-100" />
      <div class="modal__backdrop" @click="closeModal()"/>
      <div class="modal__dialog relative">
        <div class="absolute flex p-4 justify-end top-0 right-0 z-50">
            <button class="rounded-md text-gray-100 md:text-gray-400 md:hover:text-gray-700 hover:text-gray-300 focus:outline-none focus:ring-2 focus:gray-700" @click="closeModal()">
            <span class="sr-only">Close panel</span>
            <!-- Heroicon name: x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
              <!-- <button class="border-2 border-gray-500 inline-flex">X</button> -->
        </div>
        <!-- <h3 class="font-semibold text-xl text-center">Cómo adquirir esta propiedad</h3> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-4 md:px-8 sm:py-12 sm:gap-x-2 md:py-16">
        <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 sm:pt-0 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Adquirir propiedad</p>
          <h2 class="text-2xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">{{propiedadNom}}</h2>
        </div>
        <div class="col-start-1 row-start-2 px-4 sm:px-0 md:px-4 pb-4">
          <div class="flex sm:grid sm:grid-cols-8 sm:gap-x-1 sm:grid-rows-2 md:flex justify-center items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <div class="inline-flex sm:col-span-3 justify-center items-center text-center">
              <i class="fas fa-ruler-horizontal mr-2 sm:mr-1 md:mr-2 font-semibold"></i>
              <div class="ml-1 sm:mx-0 md:ml-1">
                <span class="text-black">{{sz}} m<sup>2</sup></span>
              </div>
              <div class="text-base font-normal mx-2 sm:hidden md:block">.</div>
            </div>
            <div class="inline-flex sm:col-span-5 sm:col-start-4 sm:row-start-1 justify-center items-center">
              <i class="fas fa-bed mr-2 font-semibold"></i>
              <div class="ml-1">
                <span class="text-black">{{bdrms}} habitaciones</span>
              </div>
              <div class="text-base font-normal mx-2 sm:hidden md:block">.</div>
            </div>
            <div class="inline-flex sm:col-span-full justify-center items-center">
            <i class="fas fa-bed mr-2 font-semibold"></i>
            <div class="ml-1">
              <span class="text-black">{{bths}} baños</span>
            </div>
          </div>
          </div>
          <span class="text-left">{{loc}}</span>
          <hr class="w-16 border-gray-300 hidden sm:block">
        </div>
        <div class="col-start-1 row-start-3 space-y-3 p-4">
          <p class="text-center text-gray-800 antialiased">Inicia sesión o regístrate para adquirir una propiedad, obtener detalles de su estado de cuenta y acceder a promociones especiales</p>
          <div class="flex text-black text-sm font-medium justify-center items-center">
            <div class="p-1 rounded-full border-solid border-2 border-yellow-500 mr-2">
              <img :src="vendedor" alt="" class="w-10 h-10 rounded-full bg-gray-100">
            </div>
            <div class="inline-block">
            <p class="text-yellow-500 font-semibold m-0">Tu asesor inmobiliario:</p>
            <p class="text-gray-600 m-0">- {{nombreVendedor}}</p>
            </div>
          </div>
          <div class="pt-4">
          <button class="m-auto p-2 w-full md:w-1/2 flex items-center justify-center rounded-md bg-yellow-500 text-white hover:bg-yellow-600 font-bold" @click="$refs.Cita.openModal()">¡Quiero esta propiedad!</button>
          </div>
        </div>
        <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div class="relative col-span-3 row-span-2 md:col-span-2">
              <img :src="imagen" alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
            </div>
            <div class="relative hidden md:block">
              <img :src="imagen" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
            <div class="relative hidden md:block">
              <img :src="imagen" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Registro from '@/components/Registro.vue'
import AgendaCita from '@/components/AgendaCita.vue'
export default {
  name: 'Opciones',
  components: {
    Registro,
    AgendaCita
  },
  data () {
    return {
      show: false
    }
  },
  props: {
    imagen: {
      type: String
    },
    vendedor: {
      type: String
    },
    nombreVendedor: {
      type: String
    },
    propiedadNom: {
      type: String
    },
    loc: {
      type: String
    },
    sz: {
      type: Number
    },
    bdrms: {
      type: Number
    },
    bths: {
      type: Number
    }

  },
  methods: {
    closeModal () {
      this.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    openModal () {
      this.show = true
      document.querySelector('body').classList.add('overflow-hidden')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    overflow: hidden;
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
