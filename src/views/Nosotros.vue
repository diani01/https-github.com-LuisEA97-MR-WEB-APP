<template>
  <div id="inicio" class="mt-6" :style="{ backgroundImage: 'linear-gradient(to top, #836c5e5b, #947c6d81, #a58c7c9a, #b79d8bbe, #c9ae9be0), url(' + imageValores + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }">
    <div class="container mx-auto px-2 sm:px-12 md:px-24 py-12">
      <div id="hero-nosotros" class="dark-gray-palette h-full flex flex-col justify-start items-start my-12">
        <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="50" id="title" class="uppercase font-medium text-left tracking-tighter text-7xl md:text-8xl">Sueña</h2>
        <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="100" id="title" class="inline-block my-2 uppercase underline font-semibold text-left tracking-tighter text-7xl md:text-8xl">Crea</h2>
        <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="150" id="title" class="inline-block px-2 custom-title uppercase font-medium text-left tracking-tighter text-6xl md:text-8xl">Trasciende</h2>
        <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="200" href="#info" class="action-btn-us transition-all duration-300 ease-in-out no-underline inline-flex place-self-start my-24 md:my-12 px-6 py-2 border-2 border-brown">
          <span class="uppercase text-lg text-gray-50 font-semibold">Conoce más sobre nosotros</span>
        </a>
      </div>
    </div>
    <div id="all" class="w-full flex flex-col justify-start items-start theme-gradient">
      <div id="info" class="mx-auto w-full px-4 md:w-4/6 md:px-0">
        <div data-aos="fade-right" data-aos-duration="800" id="quienes-somos" class="mt-6 py-16">
          <h3 class="dark-gray-palette text-5xl uppercase font-medium">Quiénes <span class="custom-title px-1 font-semibold">somos</span></h3>
          <div class="contenedor-destacado mt-4 py-4">
            <p class="text-2xl text-gray-100 font-sans">Somos una empresa joven, legalmente constituida, que desarrolla proyectos inmobiliarios de alto impacto, sustentables e innovadores; comprometidos con el crecimiento personal y profesional de nuestros colaboradores, clientes e inversionistas.</p>
            <a href="#mision" class="action-btn-us transition-all duration-300 ease-in-out no-underline inline-flex place-self-start my-12 px-6 py-2 border-2 border-brown">
              <span class="uppercase text-lg font-semibold">Ver más</span>
            </a>
          </div>
        </div>
        <div id="mision" class="mt-6 pt-16">
          <h3 data-aos="fade-left" class="pt-4 dark-gray-palette text-5xl uppercase font-medium">Nuestra <span class="custom-title px-1 font-semibold">misión</span></h3>
          <div class="contenedor-destacado mt-10 py-4">
            <p data-aos="fade-left" class="text-2xl text-gray-100 font-sans">Crear oportunidades de <span class="custom-title px-2">desarrollo</span> social y económico mediante proyectos inmobiliarios; manteniendo un constante compromiso con la <span class="custom-title px-2">satisfacción</span> de nuestros clientes e inversionistas, a través de oportunidades de negocio <span class="custom-title px-2">rentables</span></p>
            <a href="#vision" class="action-btn-us transition-all duration-300 ease-in-out no-underline inline-flex place-self-start my-12 px-6 py-2 border-2 border-brown">
              <span class="uppercase text-lg font-semibold">ir a visión</span>
            </a>
          </div>
        </div>
        <div id="vision" class="pt-16">
          <h3 data-aos="fade-right" class="dark-gray-palette text-5xl uppercase font-medium">Nuestra <span class="custom-title px-1 font-semibold">visión</span></h3>
          <div data-aos="fade-right" class="contenedor-destacado mt-10 py-4">
            <!-- <p class="line-through text-2xl text-gray-300 font-sans">Consolidarnos como una empresa líder en el ramo inmobiliario a nivel global a través de la innovación en nuestros servicios, generando desarrollos con un alto impacto social y económico.</p> -->
            <p class="text-2xl text-gray-100 font-sans">Ser la empresa líder a nivel global en el ramo inmobilario con desarrollos innovadores que generen un alto impacto social y económico.</p>
            <a href="#valores" class="action-btn-us transition-all duration-300 ease-in-out no-underline inline-flex place-self-start my-12 px-6 py-2 border-2 border-brown">
              <span class="uppercase text-lg font-semibold">Ir a valores</span>
            </a>
          </div>
        </div>
        <div data-aos="fade-left" id="valores" class="pt-16">
          <h3 class="dark-gray-palette text-5xl uppercase font-medium">Nuestros <span class="custom-title px-1 font-semibold">valores</span></h3>
          <div class="contenedor-destacado mt-10 py-4">
            <p class="text-2xl text-gray-100 font-sans">
              Nuestra esencia se refleja plenamente en el trato honesto e integro para con nuestros colaboradores clientes e inversionistas, fomentando el respeto y compromiso con el medio ambiente.</p>
              <a href="#inicio" class="action-btn-us transition-all duration-300 ease-in-out no-underline inline-flex place-self-start my-12 px-6 py-2 border-2 border-brown">
              <span class="uppercase text-lg font-semibold">Volver</span>
            </a>
          </div>
        </div>
      </div>
        <div data-aos="fade-down-right" id="claves" class="mx-auto w-11/12 py-16">
          <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 place-content-center">
            <li class="inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">Honestidad</li>
            <li class="inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">Iniciativa</li>
            <li class="inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">autocontrol</li>
            <li class="inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">integridad</li>
            <li class="inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">humildad</li>
            <li class="inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">superación</li>
            <li class="mx-2 inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">responsabilidad</li>
            <li class="mx-2 inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">compromiso</li>
            <li class="mx-2 inline-flex uppercase text-3xl text-center place-self-center custom-title px-4 font-semibold">respeto</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nosotros',
  data () {
    return {
      imageValores: require('@/assets/img/valores-bg.jpg'),
      observer: null
    }
  },
  created () {
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
#mainNosotros {
  transition: height 1000000s ease; -webkit-transition: height 1000000s ease; -moz-transition: height 1000000s ease; -o-transition: height 1000000s ease;
}
h2.titulo-destacado::after {
  content: "";
  width: 100%;
  height: 4px;
  background-color: rgb(245, 158, 11);
  display: block;
  text-align: center;
  margin: 0 auto;
}
@media (min-width: 768px) {
  h2.titulo-destacado::before,
  h2.titulo-destacado::after {
    content: "";
    position: absolute;
    width: 1.5em;
    height: 5px;
    background-color: rgb(245, 158, 11);
    top: 0.7em;
  }
  h2.titulo-destacado::before {
    left: -2em;
  }
  h2.titulo-destacado::after {
    right: -2em;
  }
  .familia-amplio {
    width: 90%;
    justify-content: end;
    float: right;
  }
}
  .action-btn-us{
    text-decoration: none;
    display: inline-flex;
    place-self: start;
    padding-left: 1.5rem/* 24px */;
    padding-right: 1.5rem/* 24px */;
    padding-top: 0.5rem, 1,5rem/* 8px */;
    padding-bottom: 0.5rem/* 8px */;
    border-width: 2px;
    border-color: #261f1a;
    color: #261F1A;
  }
  :hover.action-btn-us{
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    background-color: #261f1a;
    color: #ddb69a!important;
  }
  .custom-title {
    background-color: #261f1a;
    color: #ddb69a;
  }
  .hovered-element {
    background-color: #ddb69a;
    color: #261F1A;
    /* color: linear-gradient(to top, #836c5e5b, #947c6d81, #a58c7c9a, #b79d8bbe, #c9ae9be0) */
  }
  .dark-gray-palette {
    color: #261F1A;
  }
  .semidark-gray-palette {
    color: #898C88;
  }
  .contenedor-destacado {
    border-color: #261f1a;
    border-left-width: 4px;
    padding-left: 1rem/* 16px */;
    padding-right: 1rem/* 16px */;
  }
  :hover
  .border-brown {
    --tw-border-opacity: 1;
    border-color: #261f1a;
  }
  header {
    opacity: 0;
    transition: opacity .5s .25s ease-out;
  }

  header.is-visible {
    opacity: 1;
  }
  .in-view {
    animation: animate-in-view .6s ease-out forwards;
}
.theme-gradient {
  background: rgb(130,108,94);
  background: linear-gradient(180deg, rgba(130,108,94,0) 0%, rgba(132,129,113,0.5) 98%);
}

@keyframes animate-in-view {
    0% {
        transform: translate(0, 20px) scale(1.1);
        opacity: 0;
    }
    35% {
        transform: translate(0, 20px) scale(1.1);
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>
