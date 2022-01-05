<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="hero-desktop" class="fixed-top flex flex-row" :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(15,35,53,1) 12%, #1c4062c2 53%, #1e486e89 100%), url(' + heroBackground + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }">
    <div id="main-container" class="relative container flex flex-row mx-auto px-2 sm:px-12 mt-12">
      <div class="flex flex-col md:flex-row">
        <div id="title" class="text-left h-full leading-tight mt-10 md:mt-20">
          <h2 data-aos="fade-down" data-aos-duration="800" class="uppercase font-medium text-left text-6xl md:text-7xl text-gray-50">Hacemos realidad</h2>
          <h2 data-aos="fade-down" data-aos-duration="800" class="uppercase font-light text-left tracking-tighter text-7xl md:text-8xl text-gray-50">Lo <span class="line-through">im</span><span class="text-yellow-500 tracking-tighter md:tracking-wide font-semibold">posible</span>.</h2>
          <div data-aos="fade-right" class="block md:flex mt-0 md:mt-8">
            <router-link to="/catalogo" class="action-btn-us transition-all duration-300 ease-in-out no-underline inline-flex place-self-start my-4 md:my-12 px-6 py-2 border-2 border-brown">
              <span class="uppercase text-lg font-semibold">Explora nuestro catálogo</span>
            </router-link>
            <router-link to="/contacto" class="mx-0 md:mx-4 action-btn-us transition-all duration-300 ease-in-out no-underline inline-flex place-self-start my-4 md:my-12 px-6 py-2 border-2 bg-yellow-500">
              <span class="uppercase text-lg font-semibold">Quiero vender mi propiedad</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-16 md:bottom-10 w-full items-center justify-items-center">
      <a href="#general-info">
        <i class="animate-bounce fas fa-arrow-down text-4xl text-white"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      heroBackground: require('@/assets/img/herobg.jpg')
    }
  }
}
</script>

<style scoped>
 /* .image-background{
   background-image:
    linear-gradient(to bottom, rgba(15,35,53,1) 1%, #1c4062c2 53%, #1e486e89 100%),
    linear-gradient(to bottom, rgba(15,35,53,1), #947c6d81, #a58c7c9a, #b79d8bbe, #c9ae9be0),
    url('img/hero-medium-large1.jpg');
    background-size: cover;
    background-attachment: fixed;
 } */
 .fixed-top {
   position: fixed;
   top: 10px;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 40;
 }
 .action-btn-us{
    text-decoration: none;
    display: inline-flex;
    place-self: start;
    padding-left: 1.5rem/* 24px */;
    padding-right: 1.5rem/* 24px */;
    padding-top: 0.5rem, 1,5rem/* 8px */;
    padding-bottom: 0.5rem/* 8px */;
    border-width: 3px;
    border-color: rgba(245, 158, 11, 1);
    color: #f0f0f0;
  }
  :hover.action-btn-us{
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    background-color: rgba(245, 158, 11, 1);
    color: #f0f0f0;
  }
</style>
