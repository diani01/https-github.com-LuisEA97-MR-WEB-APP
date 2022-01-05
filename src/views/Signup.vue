<template>
    <div class="bg-gray-100">
        <div class="container mx-auto p-4">
            <h3 class="text-center">Registro de usuario</h3>
            <!--
            This example requires Tailwind CSS v2.0+

            This example requires some changes to your config:

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
            <div class="p-4">
                <div class="flex mb-2 items-center justify-between">
                    <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                        <i :class="{'fas fa-key' : step===1, 'fas fa-user' : step===2, 'fas fa-file-alt' : step===3, 'fas fa-id-card' : step===4 }" class="px-2"></i>
                        {{ statusSign }}
                    </span>
                    </div>
                    <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-green-600">
                        {{progressSignup}}
                    </span>
                    </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                    <div :class="{ 'w-1/4' : step===1, 'w-1/2' : step===2, 'w-3/4' : step===3, 'w-full' : step===4 }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
            </div>
            <div id="step-1" v-show="step === 1">
                <div class="mt-10 sm:mt-0">
                <!--Profile-->
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Datos de inicio de sesión</h3>
                        <p class="mt-1 text-sm text-gray-600">
                        Por favor, ingrese un correo electrónico activo y en uso. A través de él, usted recibirá notificaciones sobre sus compras
                        </p>
                    </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="email_1" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
                                <input type="email" name="email_1" id="email_1" autocomplete="email" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="emai_2" class="block text-sm font-medium text-gray-700">Confirmar correo electrónico</label>
                                <input type="email" name="emai_2" id="emai_2" autocomplete="email" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="password_1" class="block text-sm font-medium text-gray-700">Contraseña</label>
                                <input type="password" name="password_1" id="password_1" autocomplete="password" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="password_2" class="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                                <input type="password" name="password_2" id="password_2" autocomplete="password" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            </div>
                        </div>
                        </div>
                    </form>
                    </form>
                    </div>
                </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
                </div>
            </div>
            <div id="step-2" v-show="step === 2">
                <div class="mt-10 sm:mt-0">
                <!--Personal Information-->
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Datos personales</h3>
                        <p class="mt-1 text-sm text-gray-600">
                        Por favor, llena los siguiente campos con tus datos personales
                        </p>
                    </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="ap_paterno" class="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                <input type="text" name="ap_paterno" id="ap_paterno" autocomplete="family-name" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="ap_materno" class="block text-sm font-medium text-gray-700">Apellido materno</label>
                                <input type="text" name="ap_materno" id="ap_materno" autocomplete="middle-name" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre (s)</label>
                                <input type="text" name="nombre" id="nombre" autocomplete="given-name" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
                                <input type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6">
                                <label for="street_address" class="block text-sm font-medium text-gray-700">Dirección</label>
                                <input type="text" name="street_address" id="street_address" autocomplete="street-address" placeholder="Calle, no. de casa, colonia" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>
                                <input type="text" name="city" id="city" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="state" class="block text-sm font-medium text-gray-700">Estado</label>
                                <select id="state" name="state" autocomplete="state" value="Seleccione un estado" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                                <option value="none" selected disabled>Seleccione un estado</option>
                                <option value="Aguascalientes">Aguascalientes</option>
                                <option value="Baja California">Baja California</option>
                                <option value="Baja California Sur">Baja California Sur</option>
                                <option value="Campeche">Campeche</option>
                                <option value="Chiapas">Chiapas</option>
                                <option value="Chihuahua">Chihuahua</option>
                                <option value="CDMX">Ciuad de México</option>
                                <option value="Coahuila">Coahuila</option>
                                <option value="Colima">Colima</option>
                                <option value="Durango">Durango</option>
                                <option value="Estado de México">Estado de México</option>
                                <option value="Guanajuato">Guanajuato</option>
                                <option value="Guerrero">Guerrero</option>
                                <option value="Hidalgo">Hidalgo</option>
                                <option value="Jalisco">Jalisco</option>
                                <option value="Michoacán">Michoacán</option>
                                <option value="Morelos">Morelos</option>
                                <option value="Nayarit">Nayarit</option>
                                <option value="Nuevo León">Nuevo León</option>
                                <option value="Oaxaca">Oaxaca</option>
                                <option value="Puebla">Puebla</option>
                                <option value="Querétaro">Querétaro</option>
                                <option value="Quintana Roo">Quintana Roo</option>
                                <option value="San Luis Potosí">San Luis Potosí</option>
                                <option value="Sinaloa">Sinaloa</option>
                                <option value="Sonora">Sonora</option>
                                <option value="Tabasco">Tabasco</option>
                                <option value="Tamaulipas">Tamaulipas</option>
                                <option value="Tlaxcala">Tlaxcala</option>
                                <option value="Veracuz">Veracruz</option>
                                <option value="Yucatán">Yucatán</option>
                                <option value="Zacatecas">Zacatecas</option>
                                </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal_code" class="block text-sm font-medium text-gray-700">Código Postal</label>
                                <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
                </div>
            </div>
            <div id="step-3" v-show="step === 3">
                <div class="mt-10 sm:mt-0">
                <!-- Notifications -->
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                        <p class="mt-1 text-sm text-gray-600">
                        Decide which communications you'd like to receive and how.
                        </p>
                    </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <fieldset>
                            <legend class="text-base font-medium text-gray-900">By Email</legend>
                            <div class="mt-4 space-y-4">
                                <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="comments" class="font-medium text-gray-700">Comments</label>
                                    <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                </div>
                                </div>
                                <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                </div>
                                </div>
                                <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="offers" class="font-medium text-gray-700">Offers</label>
                                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                </div>
                                </div>
                            </div>
                            </fieldset>
                            <fieldset>
                            <div>
                                <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                                <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                            </div>
                            <div class="mt-4 space-y-4">
                                <div class="flex items-center">
                                <input id="push_everything" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                                    Everything
                                </label>
                                </div>
                                <div class="flex items-center">
                                <input id="push_email" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">
                                    Same as email
                                </label>
                                </div>
                                <div class="flex items-center">
                                <input id="push_nothing" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                                    No push notifications
                                </label>
                                </div>
                            </div>
                            </fieldset>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>
            </div>
            <div id="step-4" v-show="step === 4">
                <div class="mt-10 sm:mt-0">
                <!--Personal Information-->
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Datos generales e identificación</h3>
                        <p class="mt-1 text-sm text-gray-600">
                        Ingrese información adicional sobre usted y alguna identificación oficial
                        </p>
                    </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="ap_paterno" class="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                <input type="text" name="ap_paterno" id="ap_paterno" autocomplete="family-name" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="ap_materno" class="block text-sm font-medium text-gray-700">Apellido materno</label>
                                <input type="text" name="ap_materno" id="ap_materno" autocomplete="middle-name" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre (s)</label>
                                <input type="text" name="nombre" id="nombre" autocomplete="given-name" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
                                <input type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6">
                                <label for="street_address" class="block text-sm font-medium text-gray-700">Dirección</label>
                                <input type="text" name="street_address" id="street_address" autocomplete="street-address" placeholder="Calle, no. de casa, colonia" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>
                                <input type="text" name="city" id="city" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="state" class="block text-sm font-medium text-gray-700">Estado</label>
                                <select id="state" name="state" autocomplete="state" value="Seleccione un estado" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                                <option disabled selected value="">-- Seleccione un estado --</option>
                                <option value="Aguascalientes">Aguascalientes</option>
                                <option value="Baja California">Baja California</option>
                                <option value="Baja California Sur">Baja California Sur</option>
                                <option value="Campeche">Campeche</option>
                                <option value="Chiapas">Chiapas</option>
                                <option value="Chihuahua">Chihuahua</option>
                                <option value="CDMX">Ciuad de México</option>
                                <option value="Coahuila">Coahuila</option>
                                <option value="Colima">Colima</option>
                                <option value="Durango">Durango</option>
                                <option value="Estado de México">Estado de México</option>
                                <option value="Guanajuato">Guanajuato</option>
                                <option value="Guerrero">Guerrero</option>
                                <option value="Hidalgo">Hidalgo</option>
                                <option value="Jalisco">Jalisco</option>
                                <option value="Michoacán">Michoacán</option>
                                <option value="Morelos">Morelos</option>
                                <option value="Nayarit">Nayarit</option>
                                <option value="Nuevo León">Nuevo León</option>
                                <option value="Oaxaca">Oaxaca</option>
                                <option value="Puebla">Puebla</option>
                                <option value="Querétaro">Querétaro</option>
                                <option value="Quintana Roo">Quintana Roo</option>
                                <option value="San Luis Potosí">San Luis Potosí</option>
                                <option value="Sinaloa">Sinaloa</option>
                                <option value="Sonora">Sonora</option>
                                <option value="Tabasco">Tabasco</option>
                                <option value="Tamaulipas">Tamaulipas</option>
                                <option value="Tlaxcala">Tlaxcala</option>
                                <option value="Veracuz">Veracruz</option>
                                <option value="Yucatán">Yucatán</option>
                                <option value="Zacatecas">Zacatecas</option>
                                </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal_code" class="block text-sm font-medium text-gray-700">Código Postal</label>
                                <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
                </div>
            </div>
            <div class="flex w-2/3 justify-center items-center mx-auto py-4 sm:py-0">
                 <button type="submit" class=" mx-12 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click.prevent="prev()" v-show="step > 1">
                    <span class="inline-flex items-center px-2">
                    <!-- Heroicon name: lock-closed -->
                    <i class="fas fa-arrow-left inline-flex text-base text-green-300 group-hover:text-green-400"></i>
                    </span>
                    <strong class="inline-flex text-base mx-2">Anterior</strong>
                </button>
                <button type="submit" class=" mx-12 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click.prevent="next()" v-show="step < 4">
                    <strong class="inline-flex text-base mx-2">Siguiente</strong>
                    <span class="inline-flex items-center px-2">
                    <!-- Heroicon name: lock-closed -->
                    <i class="fas fa-arrow-right inline-flex text-base text-green-300 group-hover:text-green-400"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Registro',
  mounted () {
    document.querySelector('body').classList.remove('overflow-hidden')
    document.body.scrollTop = 0
  },
  data () {
    return {
      step: 1,
      registration: {
        name: null,
        email: null,
        street: null,
        city: null,
        state: null,
        numtickets: 0,
        shirtsize: 'XL'
      }
    }
  },
  computed: {
    statusSign: function () {
      if (this.step === 1) {
        return 'Datos de inicio de sesión'
      } else {
        if (this.step === 2) {
          return 'Datos personales'
        } else {
          if (this.step === 3) {
            return 'Datos adicionales'
          } else {
            if (this.step === 4) {
              return 'Cargar documentos'
            }
          }
        }
      }
      return ''
    },
    progressSignup: function () {
      if (this.step === 1) {
        return 'Paso 1 de 4'
      } else {
        if (this.step === 2) {
          return 'Paso 2 de 4'
        } else {
          if (this.step === 3) {
            return 'Paso 3 de 4'
          } else {
            if (this.step === 4) {
              return 'Paso 4 de 4'
            }
          }
        }
      }
      return ''
    }
  },
  methods: {
    prev () {
      this.step--
    },
    next () {
      this.step++
    }
  }
}
</script>

<style>

</style>
