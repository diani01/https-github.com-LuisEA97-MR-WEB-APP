<template>
  <div class="brand-color my-16 h-screen flex flex-col justify-center items-center self-center text-center text-white">
      <img class="block h-16 w-auto" src="@/assets/logos/logo_small.png" alt="Inmobiliaria">
      <h1 class="text-4xl pt-6">La página que intentas buscar no existe</h1>
      <span class="lato text-3xl text-gray-50 my-2">No eres tú, somos nosotros :(</span>
      <h2 class="text-8xl">404</h2>
      <div class="mt-4">
        <div class="cursor-pointer">
          <router-link to="/" class="underline text-xl font-semibold text-yellow-400 cursor-pointer">Volver al inicio <i class="fas fa-arrow-right"></i></router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>

</style>
