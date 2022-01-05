<template>
  <div id="app"><!--In case of error, please run npx vue-cli-service lint --fix -->
    <!--Navbar-->
        <!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="fixed-top brand-color">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" @click="toggleMenu">
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed. -->
                <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" :class="{'block': !showMobileMenu, 'hidden' : showMobileMenu}">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Icon when menu is open. -->
                <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" :class="{'block': showMobileMenu, 'hidden' : !showMobileMenu}">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                <router-link to="/" exact><img class="block lg:hidden h-8 w-auto" src="@/assets/logos/logo_small.png" alt="Inmobiliaria"></router-link>
                <router-link to="/" exact><img class="hidden lg:block h-8 w-auto" src="@/assets/logos/logo_large.png" alt="Inmobiliaria"></router-link>
                </div>
                <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                    <router-link to="/nosotros" exact class="inline-flex px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700" active-class="border-b-2 border-yellow-600 rounded-b-none uppercase text-white font-semibold">Nosotros</router-link>
                    <router-link to="/catalogo" class="inline-flex px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700" active-class="border-b-2 border-yellow-600 rounded-b-none uppercase text-white font-semibold">Catálogo</router-link>
                    <router-link to="/" class="hidden px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700" active-class="border-b-2 border-yellow-600 rounded-b-none uppercase text-white font-semibold">Blog</router-link>
                    <router-link to="/contacto" exact class="inline-flex px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700" active-class="border-b-2 border-yellow-600 rounded-b-none uppercase text-white font-semibold">Contáctanos</router-link>
                </div>
                </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button class="hidden bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: bell -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                </button>
                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                <div>
                    <button class="hidden bg-gray-800 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""  @click="showDropdown = !showDropdown">
                    </button>
                </div>
                <!--
                    Profile dropdown panel, show/hide based on dropdown state.
                    Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <transition
                enter-active-class="transition ease-out duration-100 transform"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75 transform"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
                >
                    <div v-show="showDropdown" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-40" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Perfil</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Configuraciones</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar sesión</a>
                    </div>
                </transition>
                </div>
            </div>
            </div>
        </div>
        <!--
            Mobile menu, toggle classes based on menu state.
            Menu open: "block", Menu closed: "hidden"
        -->
        <transition
                enter-active-class="transition ease-out duration-100 transform"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75 transform"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
                >
        <div :class="[showMobileMenu ? 'opened pb-4' : 'closed py-0']" id="mobileMenu" class="flex flex-col items-center sm:hidden ease-linear transition-all duration-150 px-2 space-y-1">
          <div @click="toggleMenu">
            <router-link v-if="showMobileMenu" to="/nosotros" exact class="inline-flex px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700" active-class="border-b-2 border-yellow-600 rounded-b-none uppercase text-white font-semibold">Nosotros</router-link>
          </div>
          <div @click="toggleMenu">
            <router-link v-if="showMobileMenu" to="/catalogo" class=" inline-flex px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" active-class="border-b-2 border-yellow-600 rounded-b-none uppercase text-white font-semibold">Catálogo</router-link>
          </div>
          <div @click="toggleMenu">
            <router-link v-if="showMobileMenu" to="/" class="hidden px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" >Blog</router-link>
          </div>
          <div @click="toggleMenu">
            <router-link v-if="showMobileMenu" to="/contacto" exact class="inline-flex px-3 mb-4 rounded-md text-base font-medium text-white hover:bg-gray-700" active-class="border-b-2 border-yellow-600 rounded-b-none uppercase text-white font-semibold">Contáctanos</router-link>
          </div>
            <p id="textNavMobile" v-if="!showMobileMenu" class="hidden"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad odit nemo ab impedit ea possimus totam, fugiat asperiores? Consequatur similique velit provident ab adipisci voluptatum totam amet, cum veritatis libero obcaecati consectetur eos repudiandae sequi facilis molestias! Id, reprehenderit?Eveniet ad odit nemo ab impedit ea possimus totam, fugiat asperiores? Consequatur similique velit provident ab adipisci voluptatum totam amet, cum veritatis libero obcaecati consectetur eos repudiandae sequi facilis molestias! Id, reprehenderit?</p>
        </div>
        </transition>
        </nav>
    <!--Navbar-->
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
.monserrat {
  font-family: 'Montserrat', sans-serif;
}
.oswald {
  font-family: 'Oswald', sans-serif;
}
.raleway {
  font-family: 'Raleway', sans-serif;
}
.lato {
  font-family: 'Lato', sans-serif;
}
.google-sans {
  font-family: 'Noto Sans', sans-serif;
}
/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: auto!important;
  scroll-behavior: smooth!important;

}
.fixed-top {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: auto;
   z-index: 1030;
 }
#nav {
  padding: 30px;
  z-index: 100;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.destacado
{
    font-size: 3em;
    font-family: serif;
    margin: 8px;
    float: left;
}
.opened {
  max-height: 400px;
  background-color: rgb(15, 35, 53);
}
.closed {
  max-height: 0px;
  opacity: 0;
  background-color: rgba(15, 35, 53, 0);
}
#textNavMobile {
  color: rgb(15, 35, 53);
  user-select: none;
}

</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  },
  data: () => ({
    showDropdown: false,
    showMobileMenu: false
  }),
  mounted () {
    var els = document.querySelectorAll('#mainNosotros')
    if (!els.length) return
    for (var i = 0; i < els.length; i++) {
      var el = els[i]
      if (el.nodeName === 'IMG') {
        el.onload = function () { this.style.height = this.clientHeight + 'px' }
      } else {
        el.style.height = el.clientHeight + 'px'
      }
    }
  },
  methods: {
    toggleMenu () {
      this.showMobileMenu = !this.showMobileMenu
      if (this.showMobileMenu === true) {
        document.getElementById('textNavMobile').classList.remove('hidden')
        document.getElementById('textNavMobile').classList.add('block')
      } else {
        setTimeout(() => {
          document.getElementById('textNavMobile').classList.remove('block')
          document.getElementById('textNavMobile').classList.add('hidden')
        }, 100)
      }
    }
  }
}
</script>
