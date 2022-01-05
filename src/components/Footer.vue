<template>
  <footer class="footer-class relative brand-color pt-8 pb-6 mt-14">
    <div
      class="bg-gray-100 bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="brand-color fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="font-sans font-extrabold text-3xl text-gray-200"><span class="font-serif tracking-tighter text-yellow-500">MR</span> Inmobiliaria</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-200">
            ¿Buscas asesoría? <br> ¡Contáctanos y síguenos en nuestras redes sociales!
          </h5>
          <div class="hidden mt-6">
            <button
              class="bg-white wa-color shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <i class="fab fa-whatsapp"></i></button
            ><button
              class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <a href="https://www.facebook.com/MR-Inmobiliaria-1230709570401511/" target="_blank" rel="noopener noreferrer"><i class="flex fab fa-facebook-square"></i></a></button
            ><button
              class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <i class="fab fa-instagram-square insta-color"></i></button
            ><button
              class="hidden bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <i class="flex fab fa-github"></i>
            </button>
          </div>
          <div class="mt-2 inline-flex justify-center text-gray-50 text-2xl">
            <a href="https://www.facebook.com/axerinmobiliaria" target="_blank" class="mx-2">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/mr_inmobiliari" target="_blank" class="mx-2">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://wa.link/q5acjo" target="_blank" class="mx-2">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/company/axer-grupo-inmobiliario/" target="_blank" class="mx-2">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCxhmtWxsvXC6JsWGsj0gA-Q" target="_blank" class="mx-2">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@mr_inmobiliaria?" target="_blank" class="mx-2">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
          <div class="my-2 border-b sm:border-0 border-gray-400">
            <a target="_blank" class="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="mailto:bienesraicesmr@axerinmobiliaria.com.mx">bienesraicesmr@axerinmobiliaria.com.mx</a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap justify-end items-top">
            <div class="w-full lg:w-4/12 mt-4 px-4">
              <span
                class="block uppercase text-gray-100 text-sm font-semibold mb-2"
                >Navegación</span
              >
              <ul class="list-unstyled">
                <li>
                  <router-link
                    class="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                    to="/nosotros"
                    >Nosotros</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/catalogo"
                    class="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                    >Catálogo</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                    to="/contacto"
                    >¡Contáctanos!</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                    to="/aviso-de-privacidad"
                    >Aviso de privacidad</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-white font-semibold py-1">
            Copyright © {{date}} MR Inmobiliaria, by AXER GI.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-class {
   z-index: 1030;
 }
</style>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
