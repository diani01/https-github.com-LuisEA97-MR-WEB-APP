<template>
    <div id="general-info" class="mb-16">
        <div class="bg-first-hero">
            <div class="mx-auto px-4 sm:px-16 md:px-32 my-12">
                <h3 class="inline-block uppercase mt-14 sm:mt-10 xl4 mb-8">¿Por qué <span class="texto-destacado-azul px-2 font-semibold">invertir</span> en bienes raíces?</h3>
                <p class="text-white font-sans font-light text-xl leading-tight">Invertir en bienes raíces representa una excelente opción para hacer crecer tu dinero. <br> Esto es debido a que este tipo de inversión en particular genera un <span class="text-yellow-400 underline font-medium">valor tangible</span>, con renidmientos competitivos. Ya sea que busques comprar una casa para <span class="text-yellow-400 underline font-medium">vivir</span>, ponerla en <span class="text-yellow-400 underline font-medium">renta</span> o buscas un espacio para tu <span class="text-yellow-400 underline font-medium">negocio</span>, con el asesoramiento adecuado tu propiedad puede generar plusvalía que te permitirá hacer crecer tu dinero.</p>
            </div>
        </div>
        <div class="pt-14 pb-8">
            <h3 class="inline-block uppercase sm:mt-10 md:my-4 brand-text">Nuestros <span class="texto-destacado-azul px-2 font-semibold">servicios</span></h3>
        </div>
        <div class="overflow-x-hidden bg-gray-50 rounded-lg shadow-md py-4 mb-16 items-center mx-0 sm:mx-4 md:mx-8 2xl:mx-16 self-center">
            <div>
              <p class="mx-6 inline-block my-4 text-center text-2xl text-gray-800 lato">Ya sea que quieras comprar una nueva casa, rentar en el lugar que quieras o vender tu propia casa, nosotros te ayudamos en todo el proceso.</p>
            </div>
            <div class="mt-14  overflow-x-auto overflow-y-hidden flex flex-col justify-center flex-nowrap lg:flex-row gap-6 px-6 md:px-12 lg:px-4 xl:px-8 py-12">
                <router-link to="/catalogo" id="compra" class="flex-none rounded-lg mx-0 xl:mr-1 2xl:mx-8 bg-transparent hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:w-auto lg:w-1/2 xl:w-96">
                    <div class="bg-compra rounded-t-lg text-left h-96">
                        <h4 class="raleway font-medium text-gray-100 text-3xl text-left md:text-center  inline-block pb-8">Adquiere tu nuevo hogar</h4>
                        <p class="lato text-lg font-light text-white">¿Buscas adquirir tu nuevo hogar? ¡Nosotros te ayudamos!<br> <br> Contamos con planes accesibles para tí y te brindamos asesoría personalizada desde el primer día.<br class="md:hidden"> Descubre cómo.</p>
                    </div>
                    <div class="text-left shadow-sm p-8 rounded-b-lg bg-gray-50 border border-gray-200 py-4 flex">
                        <span class="font-semibold">Explora nuestro catálogo</span>
                        <i class="fas fa-arrow-right self-center pl-2"></i>
                    </div>
                </router-link>
                <router-link to="/catalogo" id="renta" class="flex-none shadow-sm hover:shadow-lg rounded-lg mx-0 xl:mx-1 2xl:mx-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:w-auto lg:w-1/2 xl:w-96">
                    <div class="bg-renta rounded-t-lg text-left h-96">
                        <h4 class="raleway font-medium text-gray-100 text-3xl text-left md:text-center  inline-block pb-8">Renta tu <br> casa ideal</h4>
                        <p class="lato text-lg font-light text-white">¡La casa de tus sueños está más cerca que nunca!<br><br class="md:hidden">Nuestro catálogo cuenta con propiedades con excelentes ubicaciones y con rentas accesibles para que por fin puedas vivir en la casa que tanto deseas.</p>
                    </div>
                    <div class="text-left p-8 rounded-b-lg bg-gray-50 border border-gray-200 py-4 flex w-auto">
                        <span class="font-semibold">Casas en renta</span>
                        <i class="fas fa-arrow-right self-center pl-2"></i>
                    </div>
                </router-link>
                <router-link to="/contacto" id="venta" class="flex-none shadow-sm hover:shadow-lg rounded-lg mx-0 xl:ml-1 2xl:mx-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:w-auto lg:w-1/2 xl:w-96">
                    <div class="bg-venta rounded-t-lg text-left h-96">
                        <h4 class="raleway font-medium text-gray-100 text-3xl text-left md:text-center  inline-block pb-8">¿Buscas vender tu casa?</h4>
                        <p class="lato text-lg font-light text-white">¿Deseas vender tu casa?<br class="md:hidden">¡Nosotros te ayudamos!<br><br class="md:hidden"> Te brindamos asesoría inmediata y personalizada desde el día cero hasta que se concrete la venta. Un asesor te guiará en todo el proceso.</p>
                    </div>
                    <div class="text-left p-8 rounded-b-lg bg-gray-50 border border-gray-200 py-4 flex w-auto">
                        <span class="font-semibold">¡Contáctanos!</span>
                        <i class="fas fa-arrow-right self-center pl-2"></i>
                    </div>
                </router-link>
            </div>
        </div>
        <div id="axer-online" class="cta-parent w-full block lg:grid grid-cols-2 md:gap-10 my-12">
            <div class="cta-image h-96 lg:h-auto mx-0 lg:ml-16 xl:ml-28 2xl:ml-32"></div>
            <div class="md:h-full table mx-0 md:mr-12 lg:mr-16 xl:mr-28 2xl:mr-32">
                <div class="table-cell text-center lg:text-left align-middle pt-0 pb-6 md:py-12 md:h-full">
                    <h3 class="block my-4 text-white text-5xl font-semibold select-none">Toma el control de tu hogar, desde tu smartphone</h3>
                    <a href="https://ecomaro.mercadoshops.com.mx" target="_blank" class="group rounded-none cursor-pointer text-white  select-none inline-flex my-4 px-2 py-1 border-0 border-pink-500 border-b-8 transition-all ease-out hover:rounded-md hover:border-0 hover:bg-pink-500 active:bg-pink-600">
                        <span class="font-semibold text-3xl">Descúbrelo aquí</span>
                        <i class="block  fas fa-external-link-alt pl-2 text-xl self-center text-white"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="pt-14 pb-8">
            <h3 class="inline-block uppercase sm:mt-10 md:my-4 brand-text">Cómo<span class="texto-destacado-azul px-2 font-semibold">llegar</span></h3>
        </div>
        <div class="flex flex-col-reverse xl:flex-row 2xl:mx-16">
          <div class="mb-6 border border-gray-200 rounded-lg shadow-md w-full xl:w-1/2 xl mx-0 md:mx-3 h-96 xl:h-auto">
            <iframe class="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3817.998681958253!2d-95.03102947580528!3d16.875959749744133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe949f6388c55b69a!2sMR%20BIENES%20RAICES!5e0!3m2!1ses-419!2smx!4v1616613257374!5m2!1ses-419!2smx" width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>
          </div>
          <div class="rounded-lg border border-gray-200 mb-6 bg-gray-50 p-8 md:px-12 md:py-10 w-full xl:w-1/2 mx-0 xl:mx-3">
            <div class="pb-3 text-left border-b border-gray-200">
                <h4 class="raleway font-medium text-3xl">AXER GI Grupo Inmobiliario</h4>
            </div>
            <div class="text-left lato">
                <p class="inline-block py-2 text-xl font-light">Agencia de bienes raíces</p>
                <ul>
                    <li class="flex mb-4">
                        <i class="fas fa-map-marker-alt text-red-700 text-xl self-center pr-4"></i>
                        <span class="font-medium text-lg leading-tight">Calle Allende #708, Col. Barrio Juárez Sur. CP 70300 Matías Romero Avendaño, Oax.</span>
                    </li>
                    <li class="flex mb-4">
                        <i class="fas fa-clock text-blue-700 text-xl self-center pr-4"></i>
                        <ul class="font-medium text-lg leading-tight">
                            <li>
                                <span class="font-semibold">Lun-vie: </span> 9:00-14:00 y 17:00-20:00 Hrs.
                            </li>
                            <li>
                                <span class="font-semibold">Sáb: </span> 9:00-17:00 Hrs.
                            </li>
                            <li>
                                <span class="font-semibold">Dom: </span>11:00-15:00 Hrs.
                            </li>
                        </ul>
                    </li>
                    <li class="flex mb-4">
                        <i class="fas fa-phone-alt text-green-700 text-xl self-center pr-4"></i>
                        <span class="inline-block pr-6 font-medium text-lg leading-tight"><span class="font-semibold">+52 </span> 972 722 2317</span>
                        <a class="rounded-full bg-blue-700 hover:bg-blue-800 hover:shadow-md text-white font-semibold px-4 py-0.5 ease-linear transition-all duration-300" href="tel:+52972-722-2317">
                            <span class="inline-block self-center">Llamar</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="block xl:flex justify-between border-t border-gray-200 pt-4">
                <a href="https://wa.link/q5acjo" target="_blank" class="block md:inline-flex rounded-full px-4 py-2 shadow-md whatsapp-bg hover:bg-green-700 hover:shadow-xl ease-linear transition-all duration-300 mr-4 mb-4 xl:mb-0">
                    <i class="fab fa-whatsapp text-xl text-gray-50 pr-2"></i>
                    <span class="text-xl text-gray-50 font-semibold">Enviar mensaje</span>
                </a>
                <a href="https://maps.google.com/maps?ll=16.876057,-95.029234&z=16&t=m&hl=es-419&gl=MX&mapclient=embed&daddr=MR%20BIENES%20RAICES%20PORFIRIO%20DIAZ%201301%20BARRIO%20Juarez%20Nte.%2070300%20Mat%C3%ADas%20Romero%20Avenda%C3%B1o%2C%20Oax.@16.8760571,-95.0292341" target="_blank" class="block md:inline-flex rounded-full px-4 py-2 shadow-md just-white border border-gray-100 hover:shadow-xl ease-linear transition-all duration-300 mr-4">
                    <i class="fas fa-map-marker-alt text-red-700 text-xl pr-2"></i>
                    <span class="self-center inline-flex google-sans text-xl text-gray-800 font-bold pr-2">Cómo llegar</span>
                    <i class="fas fa-chevron-right self-center text-gray-800 font-bold text-xl pr-2"></i>
                </a>
            </div>
          </div>
        </div>
        <div class="h-24">
        </div>
    </div>
</template>

<script>
/* import Testimonial from '@/components/home/Testimonial.vue' */
export default {
  name: 'General',
  mounted () {
  }
}
</script>

<style scoped>
#general-info {
  background-color: #f0f0f0;
  position: relative;
  margin-top: 100vh;
  z-index: 1000;
}
.whatsapp-bg {
    background-color: #25D366;
}
.just-white {
    background-color: #f0f0f0;
}
.bg-first-hero{
    background-image:
    linear-gradient(180deg, rgba(28, 64, 98, 0.692) 60%, rgba(30,72,110,0.3393732492997199) 97%),
    url('img/whyrealstate.jpg');
    background-size: cover;
    color: white;
    padding: 20px;
}
.cta-parent{
    background-color: #001b2f;
    height: 28rem;
    padding: 0 2rem;
}
.cta-image{
    background-image:
    url('img/cta-square.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right;
    color: white;
    /* height: auto; */
    padding: 3rem 2rem;
}
.bg-compra{
    background-image:
    linear-gradient(313deg, rgba(231,231,231,0.09007352941176472) 0%, rgba(35,64,6,0.6951155462184874) 44%, rgba(35,64,6,0.7987570028011204) 90%),
    url('img/compra.jpg');
    background-size: cover;
    color: white;
    padding: 3rem 2rem;
}
.bg-renta{
    background-image:
    linear-gradient(313deg, rgba(231,231,231,0.09007352941176472) 0%, rgba(217,153,98,0.6979166666666667) 44%, rgba(140,22,22,0.8071603641456583) 85%),
    url('img/renta.jpg');
    background-size: cover;
    color: white;
    padding: 3rem 2rem;
}
.bg-venta{
    background-image:
    linear-gradient(313deg, rgba(231,231,231,0.09007352941176472) 0%, rgba(217,163,143,0.5942752100840336) 44%, rgba(64,27,27,0.8127626050420168) 85%),
    url('img/venta.jpg');
    background-size: cover;
    color: white;
    padding: 3rem 2rem;
}
.bg-first-hero{
    background-image:
    linear-gradient(180deg, rgba(28, 64, 98, 0.692) 60%, rgba(30,72,110,0.3393732492997199) 97%),
    url('img/whyrealstate.jpg');
    background-size: cover;
    color: white;
    padding: 20px;
}
.texto-destacado-azul {
    background-color: rgba(245, 158, 11, 1);
    color:rgb(15, 35, 53);
}
.brand-text {
    color:rgb(15, 35, 53);
}
.texto-destacado-blanco {
    background-color: rgba(245, 158, 11, 1);
    color: #f0f0f0;;
}
h2.titulo-destacado::after
{
    content: "";
    width: 100%;
    height: 4px;
    background-color: rgb(245, 158, 11);
    display: block;
    text-align: center;
    margin: 0 auto;
}
@media (max-width:640px) {
    .cta-parent{
        height: auto;
    }
    .cta-image{
        background-size: auto 90%;
        background-position: center;
        padding: 3rem 0;
    }
}
@media (min-width: 640px) and (max-width: 1023px) {
    .cta-parent{
        height: auto;
    }
    .cta-image{
        background-size: auto 90%;
        background-position: center;
        padding: 3rem 0;
    }
}
@media (min-width: 768px) {
h2.titulo-destacado::before,h2.titulo-destacado::after
{
    content: "";
    position: absolute;
    width: 1.5em;
    height: 5px;
    background-color: rgb(245, 158, 11);
    top: 1.8em;
}
h2.titulo-destacado::before{
    left: -1.7em;
}
h2.titulo-destacado::after{
    right: -1.7em;
}
}
</style>
