<template>
  <transition name="fade">
    <div class="modal justify-center items-center" v-if="show">
      <div class="modal__backdrop" @click="closeModal()"/>
      <div class="modal__dialog">
        <div class="bg-gray-50">
          <div class="flex p-4 justify-end">
            <button class="rounded-md text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:gray-700" @click="closeModal()">
            <span class="sr-only">Close panel</span>
            <!-- Heroicon name: x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
              <!-- <button class="border-2 border-gray-500 inline-flex">X</button> -->
          </div>
        <div class="block md:grid md:grid-cols-2">
          <div id="login-form" class="px-4 border-r-2 border-gray-100">
            <!--
            This example requires Tailwind CSS v2.0+
            This example requires some changes to your config
            ```
            // tailwind.config.js
            module.exports = {
              // ...
              plugins: [
                // ...
                require('@tailwindcss/forms'),
              ]
            }
            ```
          -->
          <div class="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
              <div>
                <span class="texto-logo font-sans font-extrabold text-gray-600"><span class="font-serif tracking-tighter text-yellow-500">MR</span> Inmobiliaria</span>
                <h2 class="mt-4 text-center text-3xl font-extrabold text-gray-900">
                  ¡Bienvenido!
                </h2>
                <p class="font-medium text-gray-500">
                    Inicia sesión para adquirir propiedades, vender tu casa o buscar un espacio para tu negocio
                </p>
              </div>
              <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label for="email-address" class="sr-only">Correo electrónico</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Correo electrónico">
                  </div>
                  <div>
                    <label for="password" class="sr-only">Contraseña</label>
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Contraseña">
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded">
                    <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                      Recuérdame
                    </label>
                  </div>

                  <div class="text-sm">
                    <a href="#" class="font-medium text-yellow-600 hover:text-yellow-500">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>

                <div>
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <!-- Heroicon name: lock-closed -->
                      <svg class="h-5 w-5 text-yellow-300 group-hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <strong>Iniciar sesión</strong>
                  </button>
                </div>
              </form>
                  <router-link to="/crear-cuenta" class="text-yellow-500 flex justify-start md:hidden hover:text-yellow-600 font-bold text-left">No tengo cuenta <span><i class="fas fa-arrow-right inline-flex pl-2"></i></span></router-link>
            </div>
          </div>
          </div>
          <div id="signup-form" class="hidden px-4 md:flex items-center justify-center">
            <div class="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
              <div>
                <h2 class="mt-4 text-center text-3xl font-extrabold text-gray-900">
                  ¿No tienes cuenta?
                </h2>
                <p class="font-medium text-gray-500">
                    ¡Regístrate!<br>Adquiere o renta la propiedad de tus sueños de la forma más sencilla
                </p>
              </div>
              <router-link to="/crear-cuenta">
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: lock-closed -->
                  <i class="fas fa-sign-in-alt inline-flex text-lg text-yellow-300 group-hover:text-yellow-400"></i>
                </span>
                <strong>Crear una cuenta</strong>
              </button>
              </router-link>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Registro',
  data () {
    return {
      show: false
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
.texto-logo{
  font-size: 2.7rem!important;
}
.modal {
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
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
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    top: -50px;
    @media screen and (max-width: 639px) {
      width: 95%;
    }
    @media (min-width: 640px) {
      width: 90%;
     }
    @media (min-width: 768px) {
      width: 95%;
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
