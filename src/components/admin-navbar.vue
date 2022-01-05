<template>
  <div>
    <nav
    class="flex w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10"
  >
    <div id="1" class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <h4 @click="isOpen = false, goHome()" class="font-sans font-extrabold text-3xl text-gray-700"><span class="font-serif tracking-tighter text-yellow-500">MR</span> Admin</h4>
    </div>
    <button class="hidden bg-red-600 hover:bg-red-700 mx-2 my-1 font-bold text-xs md:inline-flex px-2 md:px-4 py-2 text-white rounded-md shadow hover:shadow-md outline-none ease-linear transition-all duration-150"><i class="inline-flex self-center fas fa-sign-out-alt px-0 md:pr-2"></i><span class="block">Cerrar sesión</span></button>
    <div id="2" class="hidden items-center">
      <div id="3" class="hidden md:flex md:justify-between md:bg-transparent">
        <button
          title="Wishlist"
          class="flex items-center p-3 font-medium my-2 mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6 mr-2"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          <span>Wishlist</span>
        </button>
        <button
          class="flex items-center p-3 font-medium my-2 mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
        <button
          class="flex items-center p-3 font-medium my-2 mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
        <button class="flex items-center my-2 px-3 py-3 font-medium mr-2 text-center bg-yellow-600 rounded text-white hover:bg-yellow-700 focus:outline-none focus:bg-yellow-400"
        >
          <i class="fas fa sign-out-alt"></i>
          <p class="font-bold">
            Cerrar sesión
          </p></button>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="drawer(), goHome()"
        class="flex w-full items-center p-4 border-b"
      >
        <h4 class="font-sans font-extrabold text-2xl text-gray-700"><span class="font-serif tracking-tighter text-yellow-500">MR</span> Admin</h4>
      </span>
      <span
        @click="drawer(), goHome()"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
        ><span class="mr-2">
          <i class="fas fa-home"></i>
        </span>
        <span>Inicio</span></span>
      <span
        @click="drawer(), accessNewFracc()"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
        ><span class="mr-2">
          <i class="fas fa-folder-plus"></i>
        </span>
        <span>Agregar fraccionamiento</span></span>
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
        ><span class="mr-2">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span>Wishlist</span></span
      >
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>About</span></span
      >
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </span>
        <span>Contact</span></span
      >
      <div class="fixed bottom-0 w-full">
        <button
          class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-6 w-6 mr-2"
          >
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          <span>Share</span>
        </button>
        <a
          rel="noopener"
          class="flex items-center p-4 bg-orange-700 text-white "
          href="https://www.buymeacoffee.com/fayazahmed"
          target="_blank"
        >
          <img
            class="mr-2 h-8 w-auto"
            src="/sidebar/bmc.svg"
            alt="Buy Me Coffee"
          />
          <p>
            <span class="font-bold">Buy me a Coffee</span>
            <br />
            <span class="text-sm text-white">Help me keep this site alive</span>
          </p>
        </a>
      </div>
    </aside>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'AdminNavbar',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    drawer () {
      this.isOpen = !this.isOpen
    },
    accessNewFracc () {
      this.$router.push('/axer-mr-imb/admin/nuevo-fraccionamiento')
    },
    goHome () {
      this.$router.push('/axer-mr-imb/admin')
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  }
}
</script>
