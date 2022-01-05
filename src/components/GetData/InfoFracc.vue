<template>
  <transition name="fade">
    <div class="text-gray-800 bg-gray-50 py-2 pb-12">
      <el-dialog
        title="Registrar nueva propiedad"
        v-model="CargarCasa"
        :before-close="handleClose"
        fullscreen="true"
        destroy-on-close
        center>
        <div class="block">
          <div v-if="step < 5" class="px-4">
            <div class="flex mb-2 items-center justify-between transition-all duration-500 ease-in-out">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    <i :class="{'fas fa-info-circle' : step===1, 'fas fa-list-alt' : step===2, 'fas fa-images' : step===3, 'fas fa-cloud-upload-alt' : step===4 }" class="px-2"></i>
                    {{ statusSign }}
                </span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-semibold inline-block text-green-600">
                      {{progressSignup}}
                  </span>
              </div>
            </div>
            <div class="transition-all duration-500 ease-in-out overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div :class="{ 'w-1/4' : step===1, 'w-1/2' : step===2, 'w-3/4' : step===3, 'w-full' : step===4 }" class="transition-all duration-500 ease-in-out shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
            </div>
          </div>
          <div id="DatosCasa">
            <div id="step-1" v-show="step === 1">
          <div class="mt-10 sm:mt-0">
          <!--Profile-->
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Información básica</h3>
                    <p class="mt-1 text-sm text-gray-600">
                    Ingresa la información de la casa a registrar a continuación. Especifique los detalles solicitados de forma clara y atractiva para los potenciales clientes. Toda la información solicitada es obligatoria
                    </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                  <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-gray-50 sm:p-6 h-auto sm:h-96 overflow-y-auto">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label for="precioCasa" class="block text-sm font-medium text-gray-700">Precio</label>
                        <div class="flex mt-1 w-full px-0 sm:pr-4">
                          <input v-model="nuevaCasa.Precio" type="number" name="precioCasa" id="precioCasa" class=" border-2 border-r-0 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 block w-10/12 shadow-sm sm:text-sm rounded-l-md" placeholder="Ejemplo: 1000000">
                          <div class="bg-gray-50 p-2 w-2/12 rounded-r-md border-2  focus:border-yellow-500 border-gray-300">
                            <span class="inline-block self-center justify-center text-gray-700 font-semibold">mxn</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                          <label for="supferficie-in" class="block text-sm font-medium text-gray-700">Superficie total (en metros)</label>
                          <div class="flex mt-1">
                            <input v-model="nuevaCasa.Superficie" type="number" name="supferficie" id="supferficie-in" class=" border-2 border-r-0 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 block w-10/12 shadow-sm sm:text-sm rounded-l-md" placeholder="Ejemplo: 50">
                            <div class="bg-gray-50 p-2 w-2/12 rounded-r-md border-2  focus:border-yellow-500 border-gray-300">
                              <span class="inline-block self-center justify-center text-gray-700 font-semibold">m <sup class="inline-block">2</sup></span>
                            </div>
                          </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                          <label for="terreno-in" class="block text-sm font-medium text-gray-700">Dimensiones de terreno</label>
                          <div class="flex mt-1">
                            <input v-model="nuevaCasa.Terreno" type="text" name="terreno" id="terreno-in" class=" border-2 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 block w-10/12 shadow-sm sm:text-sm rounded-l-md" placeholder="Ejemplo: 7 x 10">
                            <div class="bg-gray-50 p-2 w-2/12 rounded-r-md border-2 border-l-0  focus:border-yellow-500 border-gray-300">
                              <span class="inline-block self-center justify-center text-gray-700 font-semibold">mts.</span>
                            </div>
                          </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <div class="flex justify-between">
                          <label for="bths" class="inline-block self-center text-sm font-medium text-gray-700">Cantidad de baños</label>
                          <input v-model="nuevaCasa.Baths" type="number" name="bths" id="bths" min="1" class="mt-1 ml-2 focus:ring-yellow-500 focus:border-yellow-500 inline-block w-auto shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Ejemplo: 2">
                        </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <div class="flex justify-between">
                          <label for="rooms" class="inline-block self-center text-sm font-medium text-gray-700">Habitaciones</label>
                          <input v-model="nuevaCasa.Habitaciones" type="number" name="rooms" id="rooms" min="1" class="mt-1 ml-2 focus:ring-yellow-500 focus:border-yellow-500 inline-block w-auto shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Ejemplo: 4">
                        </div>
                      </div>

                      <div class="col-span-6">
                          <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción general de la casa</label>
                          <textarea v-model="nuevaCasa.Descripcion" type="text" name="descripcion" id="street_address" placeholder="Ingresa una descripción clara y atractiva de la casa, especificando con detalle las características principales y relevantes de la casa, ubicación y lugares cercanos importantes. Presta especial atención en la ortografía y la redacción de la descripción, recuerda que ésta aparecerá en la página principal de ésta casa." class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-40" />
                      </div>
                      <div class="col-span-6">
                          <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección:</label>
                          <textarea @input="getAddress" v-model="direccionCasa" type="text" name="direccion" id="street_address" placeholder="Calle, número y colonia" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          <span class="font-semibold text-gray-700 mt-1">{{nuevaCasa.DireccionCompleta}}</span>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>

            </div>
            <div id="step-2" v-show="step === 2">
                <div class="mt-10 sm:mt-0">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                          <h3 class="text-lg font-medium leading-6 text-gray-900">Características adicionales</h3>
                          <p class="mt-1 text-sm text-gray-600">
                          Cada casa es diferente. Por eso, puedes añadir características adicionales a destacar de esta casa. Ingresa un título, y una descripción breve de dicha característica. Puedes agregar hasta 5 características adicionales.
                          </p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-gray-50 sm:p-6 h-auto sm:h-96 overflow-y-auto">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6">
                                <div @click="toggleFeat1" class="flex justify-between border-b border-gray-200 cursor-pointer">
                                  <div class="flex self-center">
                                    <span class="self-center font-semibold text-gray-700">Característica 1</span>
                                    <span class="self-center ml-2 text-gray-300">(Click para expandir / contraer)</span>
                                  </div>
                                  <button @click="toggleFeat1" class="inline-block focus:outline-none">
                                    <i :class="[feat1Collapsed ? 'far fa-plus-square ' : 'fas fa-minus-square']" class="self-center text-lg text-blue-700"></i>
                                  </button>
                                </div>
                                <div :class="[feat1Collapsed ? 'featClosed' : 'featOpened p-2']" class="col-span-6 transition-all ease-in-out">
                                    <div v-if="!feat1Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft1" class="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input v-model="feat1.Nombre" type="text" name="ft1" id="ft1" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div v-if="!feat1Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft1D" class="block text-sm font-medium text-gray-700">Descripcion</label>
                                        <textarea v-model="feat1.Descripcion" type="text" name="ft1D" id="ft1D" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-16" />
                                    </div>
                                </div>
                              </div>
                              <div class="col-span-6">
                                <div @click="toggleFeat2" class="flex justify-between border-b border-gray-200 cursor-pointer">
                                  <div class="flex self-center">
                                    <span class="self-center font-semibold text-gray-700">Característica 2</span>
                                    <span class="self-center ml-2 text-gray-300">(Click para expandir / contraer)</span>
                                  </div>
                                  <button @click="toggleFeat2" class="inline-block focus:outline-none">
                                    <i :class="[feat2Collapsed ? 'far fa-plus-square ' : 'fas fa-minus-square']" class="self-center text-lg text-blue-700"></i>
                                  </button>
                                </div>
                                <div :class="[feat2Collapsed ? 'featClosed' : 'featOpened p-2']" class="col-span-6 transition-all ease-in-out">
                                    <div v-if="!feat2Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft2" class="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input v-model="feat2.Nombre" type="text" name="ft2" id="ft2" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div v-if="!feat2Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft2D" class="block text-sm font-medium text-gray-700">Descripcion</label>
                                        <textarea v-model="feat2.Descripcion" type="text" name="ft2D" id="ft2D" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-16" />
                                    </div>
                                </div>
                              </div>
                              <div class="col-span-6">
                                <div @click="toggleFeat3" class="flex justify-between border-b border-gray-200 cursor-pointer">
                                  <div class="flex self-center">
                                    <span class="self-center font-semibold text-gray-700">Característica 3</span>
                                    <span class="self-center ml-2 text-gray-300">(Click para expandir / contraer)</span>
                                  </div>
                                  <button @click="toggleFeat3" class="inline-block focus:outline-none">
                                    <i :class="[feat3Collapsed ? 'far fa-plus-square ' : 'fas fa-minus-square']" class="self-center text-lg text-blue-700"></i>
                                  </button>
                                </div>
                                <div :class="[feat3Collapsed ? 'featClosed' : 'featOpened p-2']" class="col-span-6 transition-all ease-in-out">
                                    <div v-if="!feat3Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft3" class="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input v-model="feat3.Nombre" type="text" name="ft3" id="ft3" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div v-if="!feat3Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft3D" class="block text-sm font-medium text-gray-700">Descripcion</label>
                                        <textarea v-model="feat3.Descripcion" type="text" name="ft3D" id="ft3D"  class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-16" />
                                    </div>
                                </div>
                              </div>
                              <div class="col-span-6">
                                <div @click="toggleFeat4" class="flex justify-between border-b border-gray-200 cursor-pointer">
                                  <div class="flex self-center">
                                    <span class="self-center font-semibold text-gray-700">Característica 4</span>
                                    <span class="self-center ml-2 text-gray-300">(Click para expandir / contraer)</span>
                                  </div>
                                  <button @click="toggleFeat4" class="inline-block focus:outline-none">
                                    <i :class="[feat4Collapsed ? 'far fa-plus-square ' : 'fas fa-minus-square']" class="self-center text-lg text-blue-700"></i>
                                  </button>
                                </div>
                                <div :class="[feat4Collapsed ? 'featClosed' : 'featOpened p-2']" class="col-span-6 transition-all ease-in-out">
                                    <div v-if="!feat4Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft4" class="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input v-model="feat4.Nombre" type="text" name="ft4" id="ft4" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div v-if="!feat4Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft4D" class="block text-sm font-medium text-gray-700">Descripcion</label>
                                        <textarea v-model="feat4.Descripcion" type="text" name="ft4D" id="ft4D" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-16" />
                                    </div>
                                </div>
                              </div>
                              <div class="col-span-6">
                                <div @click="toggleFeat5" class="flex justify-between border-b border-gray-200 cursor-pointer">
                                  <div class="flex self-center">
                                    <span class="self-center font-semibold text-gray-700">Característica 5</span>
                                    <span class="self-center ml-2 text-gray-300">(Click para expandir / contraer)</span>
                                  </div>
                                  <button @click="toggleFeat5" class="inline-block focus:outline-none">
                                    <i :class="[feat5Collapsed ? 'far fa-plus-square ' : 'fas fa-minus-square']" class="self-center text-lg text-blue-700"></i>
                                  </button>
                                </div>
                                <div :class="[feat5Collapsed ? 'featClosed' : 'featOpened p-2']" class="col-span-6 transition-all ease-in-out">
                                    <div v-if="!feat5Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft5" class="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input v-model="feat5.Nombre" type="text" name="ft5" id="ft5" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div v-if="!feat5Collapsed" class="col-span-6 sm:col-span-3">
                                        <label for="ft5D" class="block text-sm font-medium text-gray-700">Descripcion</label>
                                        <textarea v-model="feat5.Descripcion" type="text" name="ft5D" id="ft5D" class="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-16" />
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="step-3" v-show="step === 3">

                <div class="mt-10 sm:mt-0">
                <!-- Notifications -->
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                          <h3 class="text-lg font-medium leading-6 text-gray-900">Cargar imágenes</h3>
                          <p class="mt-1 text-sm text-gray-600">
                          Selecciona imágenes claras y atractivas de la casa. Presta especial atención en seleccionar la foto de portada.
                          </p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-gray-50 sm:p-6 h-auto sm:h-96 overflow-y-auto">
                            <div class="flex flex-col">
                              <div id="portada">
                                <div id="titulo" class="border-b border-gray-200 mb-2">
                                  <span class="font-semibold text-gray-700">Cargar foto de portada</span>
                                </div>
                                <div id="carga-portada" class="p-4">
                                  <input v-if="imagenPortada===null" @change="selectPortada($event)" type="file" name="portadaFoto" id="portadaFoto" accept="image/jpeg" class="inputfile">
                                  <label v-if="imagenPortada===null" for="portadaFoto" class="hover:border-transparent hover:shadow-lg hover:bg-white focus:outline-none rounded-lg border-2 border-dashed text-indigo-300 border-indigo-200 hover:text-green-600 flex flex-col items-center justify-center w-full pt-6 pb-6 transition-all duration-500 ease-in-out cursor-pointer">
                                    <i class="fas fa-plus text-4xl"></i>
                                    <span class="google-sans font-semibold">Agregar foto</span>
                                  </label>
                                  <div v-if="imagenPortada!=null" class="flex flex-col justify-center items-center">
                                    <i class="fas fa-image text-5xl text-indigo-500 mb-0.5"></i>
                                    <span class="font-semibold mb-2">{{imagenPortada.name}}</span>
                                    <span class="text-gray-300 mb-2">{{portadaSize}} MB</span>
                                    <button @click="{imagenPortada=null;portadaSize=null}" class="flex py-1 px-6 text-sm text-white bg-red-600 focus:outline-none rounded-full hover:bg-red-700 hover:shadow-md transition-all ease-in-out duration-300">
                                      <i class="fas fa-trash inline-block self-center mr-2"></i>
                                      <span class="font-semibold">Eliminar</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div id="fotos">
                                <div id="titulo" class="border-b border-gray-200 mb-2">
                                  <span class="font-semibold text-gray-700">Cargar fotos de la casa</span>
                                </div>
                                <div id="carga-fotos">
                                  <div class="overflow-x-auto flex flex-col sm:flex-row justify-center">
                                      <div v-if="foto1!=null" class="hidden relative sm:inline-flex rounded-lg bg-indigo-400 text-gray-50 flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out">
                                        <div class="absolute top-1 right-2 w-full flex justify-end items-end text-right">
                                          <el-popover
                                            placement="right"
                                            :width="300"
                                            trigger="click"
                                          >
                                            <template #reference>
                                              <button class="text-white text-sm rounded-full focus:bg-gray-50 focus:bg-opacity-5 focus:outline-none p-0.5">
                                                <i class="fas fa-ellipsis-h"></i>
                                              </button>
                                            </template>
                                            <div class="flex flex-col p-2">
                                              <span class="font-semibold mb-1">{{foto1.name}}</span>
                                              <span class="mb-4 text-gray-300">{{foto1Size}} MB</span>
                                              <button @click="{foto1=null;foto1Size=null}" class="focus:outline-none inline-flex text-red-700">
                                                <i class="fas fa-trash inline-block self-center mr-2"></i>
                                                <span class="font-semibold">Eliminar</span>
                                              </button>
                                            </div>
                                          </el-popover>
                                        </div>
                                        <i class="far fa-image text-6xl self-center inline-flex mx-4"></i>
                                      </div>
                                      <div v-if="foto1!=null" class="flex sm:hidden flex-col justify-center items-center mb-2">
                                        <i class="fas fa-image text-5xl text-indigo-500 mb-0.5"></i>
                                        <span class="font-semibold mb-2">{{foto1.name}}</span>
                                        <span class="text-gray-300 mb-2">{{foto1Size}} MB</span>
                                        <button @click="{foto1=null;foto1Size=null}" class="flex py-1 px-6 text-sm text-white bg-red-600 focus:outline-none rounded-full hover:bg-red-700 hover:shadow-md transition-all ease-in-out duration-300">
                                          <i class="fas fa-trash inline-block self-center mr-2"></i>
                                          <span class="font-semibold">Eliminar</span>
                                        </button>
                                      </div>
                                      <input v-if="foto1===null" @change="selectFoto1($event)" type="file" name="foto1" id="foto1" accept="image/jpeg" class="inputfile">
                                      <label v-if="foto1===null" for="foto1" class="hover:border-transparent hover:shadow-lg hover:bg-white focus:outline-none rounded-lg border-2 border-dashed text-indigo-300 border-indigo-200 hover:text-green-600 flex flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out cursor-pointer">
                                        <i class="fas fa-plus text-4xl"></i>
                                        <span class="google-sans font-semibold block">Agregar foto</span>
                                      </label>
                                      <div v-if="foto2!=null" class="hidden relative sm:inline-flex rounded-lg bg-indigo-400 text-gray-50 flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out">
                                        <div class="absolute top-1 right-2 w-full flex justify-end items-end text-right">
                                          <el-popover
                                            placement="right"
                                            :width="300"
                                            trigger="click"
                                          >
                                            <template #reference>
                                              <button class="text-white text-sm rounded-full focus:bg-gray-50 focus:bg-opacity-5 focus:outline-none p-0.5">
                                                <i class="fas fa-ellipsis-h"></i>
                                              </button>
                                            </template>
                                            <div class="flex flex-col p-2">
                                              <span class="font-semibold mb-1">{{foto2.name}}</span>
                                              <span class="mb-4 text-gray-300">{{foto2Size}} MB</span>
                                              <button @click="{foto2=null;foto2Size=null}" class="focus:outline-none inline-flex text-red-700">
                                                <i class="fas fa-trash inline-block self-center mr-2"></i>
                                                <span class="font-semibold">Eliminar</span>
                                              </button>
                                            </div>
                                          </el-popover>
                                        </div>
                                        <i class="far fa-image text-6xl self-center inline-flex mx-4"></i>
                                      </div>
                                      <div v-if="foto2!=null" class="flex sm:hidden flex-col justify-center items-center mb-2">
                                        <i class="fas fa-image text-5xl text-indigo-500 mb-0.5"></i>
                                        <span class="font-semibold mb-2">{{foto2.name}}</span>
                                        <span class="text-gray-300 mb-2">{{foto2Size}} MB</span>
                                        <button @click="{foto2=null;foto2Size=null}" class="flex py-1 px-6 text-sm text-white bg-red-600 focus:outline-none rounded-full hover:bg-red-700 hover:shadow-md transition-all ease-in-out duration-300">
                                          <i class="fas fa-trash inline-block self-center mr-2"></i>
                                          <span class="font-semibold">Eliminar</span>
                                        </button>
                                      </div>
                                    <input v-if="foto2===null" @change="selectFoto2($event)" type="file" name="foto2" id="foto2" accept="image/jpeg" class="inputfile">
                                      <label v-if="foto2===null" for="foto2" class="hover:border-transparent hover:shadow-lg hover:bg-white focus:outline-none rounded-lg border-2 border-dashed text-indigo-300 border-indigo-200 hover:text-green-600 flex flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out cursor-pointer">
                                        <i class="fas fa-plus text-4xl"></i>
                                        <span class="google-sans font-semibold block">Agregar foto</span>
                                      </label>
                                      <div v-if="foto3!=null" class="hidden relative sm:inline-flex rounded-lg bg-indigo-400 text-gray-50 flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out">
                                        <div class="absolute top-1 right-2 w-full flex justify-end items-end text-right">
                                          <el-popover
                                            placement="right"
                                            :width="300"
                                            trigger="click"
                                          >
                                            <template #reference>
                                              <button class="text-white text-sm rounded-full focus:bg-gray-50 focus:bg-opacity-5 focus:outline-none p-0.5">
                                                <i class="fas fa-ellipsis-h"></i>
                                              </button>
                                            </template>
                                            <div class="flex flex-col p-2">
                                              <span class="font-semibold mb-1">{{foto3.name}}</span>
                                              <span class="mb-4 text-gray-300">{{foto3Size}} MB</span>
                                              <button @click="{foto3=null;foto3Size=null}" class="focus:outline-none inline-flex text-red-700">
                                                <i class="fas fa-trash inline-block self-center mr-2"></i>
                                                <span class="font-semibold">Eliminar</span>
                                              </button>
                                            </div>
                                          </el-popover>
                                        </div>
                                        <i class="far fa-image text-6xl self-center inline-flex mx-4"></i>
                                      </div>
                                      <div v-if="foto3!=null" class="flex sm:hidden flex-col justify-center items-center mb-2">
                                        <i class="fas fa-image text-5xl text-indigo-500 mb-0.5"></i>
                                        <span class="font-semibold mb-2">{{foto3.name}}</span>
                                        <span class="text-gray-300 mb-2">{{foto3Size}} MB</span>
                                        <button @click="{foto3=null;foto3Size=null}" class="flex py-1 px-6 text-sm text-white bg-red-600 focus:outline-none rounded-full hover:bg-red-700 hover:shadow-md transition-all ease-in-out duration-300">
                                          <i class="fas fa-trash inline-block self-center mr-2"></i>
                                          <span class="font-semibold">Eliminar</span>
                                        </button>
                                      </div>
                                    <input  v-if="foto3===null" @change="selectFoto3($event)" type="file" name="foto3" id="foto3" accept="image/jpeg" class="inputfile">
                                      <label v-if="foto3===null" for="foto3" class="hover:border-transparent hover:shadow-lg hover:bg-white focus:outline-none rounded-lg border-2 border-dashed text-indigo-300 border-indigo-200 hover:text-green-600 flex flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out cursor-pointer">
                                        <i class="fas fa-plus text-4xl"></i>
                                        <span class="google-sans font-semibold block">Agregar foto</span>
                                      </label>
                                      <div v-if="foto4!=null" class="hidden relative sm:inline-flex rounded-lg bg-indigo-400 text-gray-50 flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out">
                                        <div class="absolute top-1 right-2 w-full flex justify-end items-end text-right">
                                          <el-popover
                                            placement="right"
                                            :width="300"
                                            trigger="click"
                                          >
                                            <template #reference>
                                              <button class="text-white text-sm rounded-full focus:bg-gray-50 focus:bg-opacity-5 focus:outline-none p-0.5">
                                                <i class="fas fa-ellipsis-h"></i>
                                              </button>
                                            </template>
                                            <div class="flex flex-col p-2">
                                              <span class="font-semibold mb-1">{{foto4.name}}</span>
                                              <span class="mb-4 text-gray-300">{{foto4Size}} MB</span>
                                              <button @click="{foto4=null;foto4Size=null}" class="focus:outline-none inline-flex text-red-700">
                                                <i class="fas fa-trash inline-block self-center mr-2"></i>
                                                <span class="font-semibold">Eliminar</span>
                                              </button>
                                            </div>
                                          </el-popover>
                                        </div>
                                        <i class="far fa-image text-6xl self-center inline-flex mx-4"></i>
                                      </div>
                                      <div v-if="foto4!=null" class="flex sm:hidden flex-col justify-center items-center mb-2">
                                        <i class="fas fa-image text-5xl text-indigo-500 mb-0.5"></i>
                                        <span class="font-semibold mb-2">{{foto4.name}}</span>
                                        <span class="text-gray-300 mb-2">{{foto4Size}} MB</span>
                                        <button @click="{foto4=null;foto4Size=null}" class="flex py-1 px-6 text-sm text-white bg-red-600 focus:outline-none rounded-full hover:bg-red-700 hover:shadow-md transition-all ease-in-out duration-300">
                                          <i class="fas fa-trash inline-block self-center mr-2"></i>
                                          <span class="font-semibold">Eliminar</span>
                                        </button>
                                      </div>
                                    <input v-if="foto4===null" @change="selectFoto4($event)" type="file" name="foto4" id="foto4" accept="image/jpeg" class="inputfile">
                                      <label v-if="foto4===null" for="foto4" class="hover:border-transparent hover:shadow-lg hover:bg-white focus:outline-none rounded-lg border-2 border-dashed text-indigo-300 border-indigo-200 hover:text-green-600 flex flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out cursor-pointer">
                                        <i class="fas fa-plus text-4xl"></i>
                                        <span class="google-sans font-semibold block">Agregar foto</span>
                                      </label>
                                      <div v-if="foto5!=null" class="hidden relative sm:inline-flex rounded-lg bg-indigo-400 text-gray-50 flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out">
                                        <div class="absolute top-1 right-2 w-full flex justify-end items-end text-right">
                                          <el-popover
                                            placement="right"
                                            :width="300"
                                            trigger="click"
                                          >
                                            <template #reference>
                                              <button class="text-white text-sm rounded-full focus:bg-gray-50 focus:bg-opacity-5 focus:outline-none p-0.5">
                                                <i class="fas fa-ellipsis-h"></i>
                                              </button>
                                            </template>
                                            <div class="flex flex-col p-2">
                                              <span class="font-semibold mb-1">{{foto5.name}}</span>
                                              <span class="mb-4 text-gray-300">{{foto5Size}} MB</span>
                                              <button @click="{foto5=null;foto5Size=null}" class="focus:outline-none inline-flex text-red-700">
                                                <i class="fas fa-trash inline-block self-center mr-2"></i>
                                                <span class="font-semibold">Eliminar</span>
                                              </button>
                                            </div>
                                          </el-popover>
                                        </div>
                                        <i class="far fa-image text-6xl self-center inline-flex mx-4"></i>
                                      </div>
                                      <div v-if="foto5!=null" class="flex sm:hidden flex-col justify-center items-center mb-2">
                                        <i class="fas fa-image text-5xl text-indigo-500 mb-0.5"></i>
                                        <span class="font-semibold mb-2">{{foto5.name}}</span>
                                        <span class="text-gray-300 mb-2">{{foto5Size}} MB</span>
                                        <button @click="{foto5=null;foto5Size=null}" class="flex py-1 px-6 text-sm text-white bg-red-600 focus:outline-none rounded-full hover:bg-red-700 hover:shadow-md transition-all ease-in-out duration-300">
                                          <i class="fas fa-trash inline-block self-center mr-2"></i>
                                          <span class="font-semibold">Eliminar</span>
                                        </button>
                                      </div>
                                    <input v-if="foto5===null"  @change="selectFoto5($event)" type="file" name="foto5" id="foto5" accept="image/jpeg" class="inputfile">
                                      <label v-if="foto5===null" for="foto5" class="hover:border-transparent hover:shadow-lg hover:bg-white focus:outline-none rounded-lg border-2 border-dashed text-indigo-300 border-indigo-200 hover:text-green-600 flex flex-col items-center justify-center p-4 mx-0 sm:mr-4 mb-2 sm:mb-0 transition-all duration-500 ease-in-out cursor-pointer">
                                        <i class="fas fa-plus text-4xl"></i>
                                        <span class="google-sans font-semibold block">Agregar foto</span>
                                      </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="step-4" v-show="step === 4">
                <div class="mt-10 sm:mt-0">
                <!--Personal Information-->
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Revisar datos y finalizar</h3>
                        <p class="mt-1 text-sm text-gray-600">
                        Revisa la información de la casa a cargar. <br> Si alguno de los datos está incorrecto, puedes regresar y corregirlo. Luego, da click en <span class="text-blue-700 font-semibold">Cargar datos</span> para cargar toda la información de la casa.
                        </p>
                    </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-gray-50 sm:p-6 h-auto sm:h-96 overflow-y-auto">
                            <div class="flex flex-col">
                              <div class="block">
                                <div id="info-basica" class="mb-4">
                                  <div class="flex border-b border-gray-200 font-semibold mb-2">
                                    <i class="fas fa-info-circle inline-flex mr-2 self-center text-indigo-700"></i>
                                    <span class="text-gray-700">Información básica</span>
                                  </div>
                                  <div>
                                    <ul class="px-4">
                                      <li class="flex">
                                        <i class="w-2 mr-2 fas fa-dollar-sign self-center"></i>
                                        <span class="ml-2 font-semibold">Precio:</span>
                                        <span class="ml-2">{{precioCasaCurrency}} MXN</span>
                                      </li>
                                      <li class="flex">
                                        <i class="w-2 mr-2 fas fa-ruler self-center"></i>
                                        <span class="ml-2 font-semibold">Superficie:</span>
                                        <span class="ml-2">{{nuevaCasa.Superficie}} m<sup>2</sup> </span>
                                      </li>
                                      <li class="flex">
                                        <i class="w-2 mr-2 fas fa-ruler-combined self-center"></i>
                                        <span class="ml-2 font-semibold">Terreno:</span>
                                        <span class="ml-2">{{nuevaCasa.Terreno}} metros</span>
                                      </li>
                                      <li class="flex">
                                        <i class="w-2 mr-2 fas fa-toilet self-center"></i>
                                        <span class="ml-2 font-semibold">Baños:</span>
                                        <span class="ml-2">{{nuevaCasa.Baths}}</span>
                                      </li>
                                      <li class="flex">
                                        <i class="w-2 mr-2 fas fa-bed self-center"></i>
                                        <span class="ml-2 font-semibold">Recámaras:</span>
                                        <span class="ml-2">{{nuevaCasa.Habitaciones}}</span>
                                      </li>
                                      <li class="flex flex-col sm:flex-row">
                                        <div class="flex flex-shrink-0">
                                          <i class="w-2 mr-2 fas fa-comment py-1"></i>
                                        <span class="inline-flex flex-shrink-0 ml-2 font-semibold w-auto">Descripción:</span>
                                        </div>
                                        <div>
                                          <span class="inline-flex ml-2 w-full sm:w-auto">{{nuevaCasa.Descripcion}}</span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div id="caracteristicas" class="mb-4">
                                  <div class="flex border-b border-gray-200 font-semibold mb-2">
                                    <i class="fas fa-tasks inline-flex mr-2 self-center text-indigo-700"></i>
                                    <span class="text-gray-700">Caracterísiticas adicionales</span>
                                  </div>
                                  <div>
                                    <ul class="px-4">
                                      <li v-if="!feat1Collapsed" class="flex flex-col sm:flex-row mb-2">
                                        <div class="flex flex-shrink-0">
                                          <i class="w-2 mr-2 fas fa-check-circle py-1"></i>
                                          <span class="inline-flex flex-shrink-0 ml-2 font-semibold w-auto">{{feat1.Nombre}}:</span>
                                        </div>
                                        <div>
                                          <span class="inline-flex ml-2 w-full sm:w-auto">{{feat1.Descripcion}}</span>
                                        </div>
                                      </li>
                                      <li v-if="!feat2Collapsed" class="flex flex-col sm:flex-row mb-2">
                                        <div class="flex flex-shrink-0">
                                          <i class="w-2 mr-2 fas fa-check-circle py-1"></i>
                                          <span class="inline-flex flex-shrink-0 ml-2 font-semibold w-auto">{{feat2.Nombre}}:</span>
                                        </div>
                                        <div>
                                          <span class="inline-flex ml-2 w-full sm:w-auto">{{feat2.Descripcion}}</span>
                                        </div>
                                      </li>
                                      <li v-if="!feat3Collapsed" class="flex flex-col sm:flex-row mb-2">
                                        <div class="flex flex-shrink-0">
                                          <i class="w-2 mr-2 fas fa-check-circle py-1"></i>
                                          <span class="inline-flex flex-shrink-0 ml-2 font-semibold w-auto">{{feat3.Nombre}}:</span>
                                        </div>
                                        <div>
                                          <span class="inline-flex ml-2 w-full sm:w-auto">{{feat3.Descripcion}}</span>
                                        </div>
                                      </li>
                                      <li v-if="!feat4Collapsed" class="flex flex-col sm:flex-row mb-2">
                                        <div class="flex flex-shrink-0">
                                          <i class="w-2 mr-2 fas fa-check-circle py-1"></i>
                                          <span class="inline-flex flex-shrink-0 ml-2 font-semibold w-auto">{{feat4.Nombre}}:</span>
                                        </div>
                                        <div>
                                          <span class="inline-flex ml-2 w-full sm:w-auto">{{feat4.Descripcion}}</span>
                                        </div>
                                      </li>
                                      <li v-if="!feat5Collapsed" class="flex flex-col sm:flex-row">
                                        <div class="flex flex-shrink-0">
                                          <i class="w-2 mr-2 fas fa-check-circle py-1"></i>
                                          <span class="inline-flex flex-shrink-0 ml-2 font-semibold w-auto">{{feat5.Nombre}}:</span>
                                        </div>
                                        <div>
                                          <span class="inline-flex ml-2 w-full sm:w-auto">{{feat5.Descripcion}}</span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="step-5" v-if="step === 5">
              <div class="mt-10 pb-4 sm:mt-0 flex flex-col content-center justify-center items-center self-center h-96 md:h-32r border-b border-gray-200">
                <i :class="{'fas fa-info-circle' : statusRegistroCasa.status === 1, 'fas fa-list-alt' : statusRegistroCasa.status === 2, 'fas fa-images' : statusRegistroCasa.status === 3 }" class=" text-7xl text-green-700 mb-2"></i>
                <span class="text-3xl lato pb-2">{{statusRegistroCasa.descripcion}}</span>
                <div class="mt-4 w-1/4 text-center">
                  <span class="text-gray-300 google-sans">Imágenes</span>
                </div>
                <div class="inline-flex flex-col text-left border-t border-gray-200">
                  <div class="inline-flex text-lg mb-0.5">
                    <i class="fas fa-image mr-2 self-center text-indigo-800"></i>
                    <span class="font-semibold text-blue-700 mr-2">Portada: </span>
                    <span :class="portadaStatus === 'FALLIDO' ? 'text-red-700 font-semibold' : 'text-gray-400 font-thin'" class="font-sans mr-2">{{portadaStatus}}</span>
                    <button @click="reuploadPortada" v-show="portadaStatus === 'FALLIDO'" class="text-red-700 focus:outline-none inline-flex text-sm">
                      <i class="fas fa-redo-alt self-center"></i>
                    </button>
                  </div>
                  <div class="inline-flex text-lg mb-0.5">
                    <i class="fas fa-image mr-2 self-center text-indigo-800"></i>
                    <span class="font-semibold text-blue-700 mr-2">Foto 1: </span>
                    <span :class="foto1Status === 'FALLIDO' ? 'text-red-700 font-semibold' : 'text-gray-400 font-thin'" class="font-sans mr-2">{{foto1Status}}</span>
                    <button @click="reuploadPhoto1" v-show="foto1Status === 'FALLIDO'" class="text-red-700 focus:outline-none inline-flex text-sm">
                      <i class="fas fa-redo-alt self-center"></i>
                    </button>
                  </div>
                  <div class="inline-flex text-lg mb-0.5">
                    <i class="fas fa-image mr-2 self-center text-indigo-800"></i>
                    <span class="font-semibold text-blue-700 mr-2">Foto 2: </span>
                    <span :class="foto2Status === 'FALLIDO' ? 'text-red-700 font-semibold' : 'text-gray-400 font-thin'" class="font-sans mr-2">{{foto2Status}}</span>
                    <button @click="reuploadPhoto2" v-show="foto2Status === 'FALLIDO'" class="text-red-700 focus:outline-none inline-flex text-sm">
                      <i class="fas fa-redo-alt self-center"></i>
                    </button>
                  </div>
                  <div class="inline-flex text-lg mb-0.5">
                    <i class="fas fa-image mr-2 self-center text-indigo-800"></i>
                    <span class="font-semibold text-blue-700 mr-2">Foto 3: </span>
                    <span :class="foto3Status === 'FALLIDO' ? 'text-red-700 font-semibold' : 'text-gray-400 font-thin'" class="font-sans mr-2">{{foto3Status}}</span>
                    <button @click="reuploadPhoto3" v-show="foto3Status === 'FALLIDO'" class="text-red-700 focus:outline-none inline-flex text-sm">
                      <i class="fas fa-redo-alt self-center"></i>
                    </button>
                  </div>
                  <div class="inline-flex text-lg mb-0.5">
                    <i class="fas fa-image mr-2 self-center text-indigo-800"></i>
                    <span class="font-semibold text-blue-700 mr-2">Foto 4: </span>
                    <span :class="foto4Status === 'FALLIDO' ? 'text-red-700 font-semibold' : 'text-gray-400 font-thin'" class="font-sans mr-2">{{foto4Status}}</span>
                    <button @click="reuploadPhoto4" v-show="foto4Status === 'FALLIDO'" class="text-red-700 focus:outline-none inline-flex text-sm">
                      <i class="fas fa-redo-alt self-center"></i>
                    </button>
                  </div>
                  <div class="inline-flex text-lg mb-0.5">
                    <i class="fas fa-image mr-2 self-center text-indigo-800"></i>
                    <span class="font-semibold text-blue-700 mr-2">Foto 5: </span>
                    <span :class="foto5Status === 'FALLIDO' ? 'text-red-700 font-semibold' : 'text-gray-400 font-thin'" class="font-sans mr-2">{{foto5Status}}</span>
                    <button @click="reuploadPhoto5" v-show="foto5Status === 'FALLIDO'" class="text-red-700 focus:outline-none inline-flex text-sm">
                      <i class="fas fa-redo-alt self-center"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mt-4 px-12">
                <div class="flex justify-between text-gray-700 font-bold">
                  <div class="flex">
                    <span class="lato mr-2">{{loadingCurrent}}</span>
                    <div class="text-grey-300"></div>
                  </div>
                  <span class="lato">{{photoLoadProgress}}</span>
                </div>
                <div :class="portadaStatus === 'FALLIDO' || foto1Status === 'FALLIDO' || foto2Status === 'FALLIDO' || foto3Status === 'FALLIDO' || foto4Status === 'FALLIDO' || foto5Status === 'FALLIDO'  ? 'bg-red-200' : 'bg-blue-200'" class="transition-all duration-500 ease-in-out overflow-hidden h-2 mb-4 text-xs flex rounded">
                    <div id="progressBarUpload" :class="portadaStatus === 'FALLIDO' || foto1Status === 'FALLIDO' || foto2Status === 'FALLIDO' || foto3Status === 'FALLIDO' || foto4Status === 'FALLIDO' || foto5Status === 'FALLIDO'  ? 'bg-red-500' : 'bg-blue-500'" :style="{width: photoLoadProgress}" class="transition-all duration-500 ease-in-out shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
                </div>
              </div>
            </div>
            <div id="step-6" v-if="step === 6">
              <div class="mt-10 pb-4 sm:mt-0 flex flex-col content-center justify-center items-center self-center h-96 md:h-32r border-b border-gray-200">
                <i class="far fa-check-circle text-7xl text-green-700 mb-2"></i>
                <span class="text-3xl lato pb-2">Se cargó con éxito toda la información</span>
                <div class="mt-4 w-1/4 text-center">
                  <span class="text-gray-300 google-sans text-xl">Ahora puedes cerrar esta ventana</span>
                </div>
              </div>
              <div class="mt-4 px-12">
                <div class="flex justify-between text-gray-700 font-bold">
                  <span class="lato">Cargado exitosamente</span>
                  <span class="lato">100%</span>
                </div>
                <div class="transition-all duration-500 ease-in-out overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div id="progressBarUpload" :style="{width: '100%'}" class="transition-all duration-500 ease-in-out shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div v-if="step < 5" id="buttons-holder" class="flex justify-evenly mt-5 py-4 border-t border-gray-200">
            <button v-if="step >= 2 && step < 5" @click="step--" class="inline-flex px-4 py-1 rounded-md bg-green-700 font-semibold text-gray-50"><i class="fas fa-arrow-left pr-2 self-center"></i><span>Anterior</span></button>
            <button  v-if="step === 2  || step < 4" @click="step++" class="inline-flex px-4 py-1 rounded-md bg-green-700 font-semibold text-gray-50"><span>Siguiente</span><i class="fas fa-arrow-right pl-2 self-center"></i></button>
            <button @click="loadCasa" v-if="step === 4" class="inline-flex px-4 py-1 rounded-md bg-blue-700 font-semibold text-gray-50"><span>Cargar datos</span><i class="fas fa-cloud-upload-alt pl-2 self-center"></i></button><!-- @click="{step=5; statusRegistroCasa.status=1;statusRegistroCasa.descripcion='Cargando datos de la casa'}" -->
          </div>
      </el-dialog>
      <div class="container mx-auto relative">
        <div class="py-4">
          <button class="mx-0 md:mx-8 my-1 inline-flex rounded-full text-sm bg-green-600 text-gray-50 hover:bg-green-700 focus:outline-none focus:ring-2 focus:gray-700 py-0.5">
                <router-link to="/axer-mr-imb/admin">
                <!-- Heroicon name: x -->
                <i class="fas fa-chevron-circle-left pl-2 pr-1"></i>
                <span class="font-semibold pl-1 pr-2">Regresar</span>
                </router-link>
            </button>
          <h2 v-if="!connectionError" class="text-center justify-center items-center text-3xl sm:text-4xl md:text-5xl">Fraccionamiento {{ nombreFrac }}</h2>
          <h3 class="text-gray-400 text-2xl">Col. {{Fracc.Ubicacion.Colonia}}</h3>
        </div>
        <div v-if="!connectionError" class="block sm:flex justify-center items-center">
          <div class="my-2 md:my-4 mx-2 rounded-md px-4 py-2 custom-bg inline-flex transition-all duration-500 ease-in-out shadow-md">
            <div id="icon-loc" class="pr-2 h-full">
              <i class="fas fa-location-arrow text-5xl sm:text-6xl self-center custom-text"></i>
            </div>
            <div id="text-location block">
              <h3 class="text-gray-500 flex font-extralight text-xl sm:text-2xl leading-tight">{{ciudadFrac}}</h3>
              <span class="text-gray-500 flex font-semibold text-lg sm:text-xl leading-tight">{{estadoFrac}}</span>
            </div>
          </div>
          <div class="block sm:flex">
            <div class="my-2 mx-2 rounded-md px-4 py-2 custom-bg inline-flex transition-all duration-500 ease-in-out shadow-md">
              <div class="pr-2 h-full">
                <span class="text-5xl sm:text-6xl self-center custom-text">{{ totalDeLotes }}</span>
              </div>
              <div>
                <h3 class="text-gray-500 flex font-extralight text-xl sm:text-2xl leading-tight">Lotes</h3>
                <span class="text-gray-500 flex font-semibold text-xl leading-tight">Registrados</span>
              </div>
            </div>
            <div class="my-2 mx-2 rounded-md px-4 py-2 custom-bg inline-flex transition-all duration-500 ease-in-out shadow-md">
              <div class="pr-2 h-full">
                <span class="text-5xl sm:text-6xl self-center custom-text">{{ totalDeCasas }}</span>
              </div>
              <div>
                <h3 class="text-gray-500 flex font-extralight text-xl sm:text-2xl leading-tight">Casas</h3>
                <span class="text-gray-500 flex font-semibold text-lg sm:text-xl leading-tight">Registradas</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="connectionError" class="w-full py-12 px-12 mx-auto">
          <div class="block justify-center items-center">
            <i class="w-full fas fa-exclamation-circle text-red-700 text-8xl py-4"></i>
            <span class="inline-flex text-5xl font-semibold py-2">Error de conexión</span>
            <p class="text-2xl custom-error-text">Asegúrese que su conexión a internet sea estable, e inténte cargar de nuevo la página</p>
          </div>
        </div>
        <div :class="[loaded ? 'block' : 'hidden']" class="w-full px-2 sm:mx-0 mt-24">
          <h4 class="font-sans text-left text-3xl">Administrar lotes en este fraccionamiento</h4>
          <div class="border-t border-gray-200 pt-4 pb-2">
            <div id="tabla-lotes" class="shadow-md text-gray-700 border border-gray-200 rounded-lg py-4 px-2 mx-auto w-full md:w-11/12 lg:w-10/12">
              <div id="add-mzn" class="flex justify-between px-4 py-1">
                <span class="text-sm font-semibold text-gray-700">Nueva manzana</span>
                <button id="agregarMznBtn" @click="nuevaMzn" class="text-sm flex rounded-full transition-all duration-500 ease-in-out hover:bg-green-500 hover:shadow-lg hover:scale-110 active:ring-0 active:bg-blue-600 bg-green-600 text-white font-semibold py-1 px-4">
                  <i class="fas fa-plus pr-2 self-center"></i>
                  <span class="font-semibold text-gray-50">Agregar</span>
                  </button>
              </div>
              <el-collapse accordion class="px-1 sm:px-4 relative">
                <el-collapse-item v-for="{ id, Nombre} in Manzanas" :key="id" :title="Nombre" :name="Nombre" >
                  <lotesInMzn ref="Lotes" :idEstado="idEst" :idCiudad="idC" :idFracc="idFrc" :idManzana="id" :nombre="Nombre" :nombreFrc="nombreFrac" class="bg-gray-50 text-gray-700"/>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <h4 class="py-2 font-sans text-left text-3xl">Administrar casas en este fraccionamiento</h4>
          <div class="border-t border-gray-200 pt-4 px-2 sm:px-4 md:px-6">
            <div class="flex justify-between mb-6">
              <h5 class="font-sans text-lg">Registrar nueva casa</h5>
              <button @click="CargarCasa = true; step = 1" class="transition-all duration-500 ease-in-out bg-green-500 hover:shadow-lg hover:scale-110 hover:bg-green-700 rounded-lg px-4 py-1 font-semibold text-white">Agregar</button>
            </div>
            <div class="relative flex flex-col min-w-0 w-full mb-6 shadow-lg border border-gray-300 rounded">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap">
                  <div class="relative w-full px-2 sm:px-4 md:px-8 lg:px-14 max-w-full flex justify-between flex-grow flex-1">
                    <h3
                      class="font-semibold text-sm sm:text-base md:text-lg text-gray-800"
                    >
                      Casas registradas en este fraccionamiento
                    </h3>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <!-- table goes here -->
                <table class="w-full table-fixed overflow-x-auto">
                  <thead class="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center brand-color text-yellow-300">
                    <tr class="h-8">
                      <td class="w-28">Casa</td>
                      <td class="w-28">Precio</td>
                      <td class="w-28">Superficie</td>
                      <td class="w-28">Terreno</td>
                      <td class="w-28">Habitaciones</td>
                      <td class="w-28">Baños</td>
                      <td class="w-28">Status</td>
                      <td class="w-28">Acciones</td>
                    </tr>
                  </thead>
                  <tbody class="lato font-semibold text-sm">
                    <tr v-if="sinCasas">
                      <th colspan="7" class="h-12 text-gray-400 font-light">No hay casas registradas</th>
                    </tr>
                    <tr v-for="{ i, ID, Precio, Superficie, Terreno, Habitaciones, Baths, Status } in loadcasas" :key="i" class="bg-white border-b border-gray-300">
                      <td class="w-28">{{ID}}</td>
                      <td class="w-28">{{Precio}} MXN</td>
                      <td class="w-28">{{Superficie}} m<sup>2</sup></td>
                      <td class="w-28">{{Terreno}} mts.</td>
                      <td class="w-28">{{Habitaciones}} Recámaras</td>
                      <td class="w-28">{{Baths}} Baños</td>
                      <td class="w-28"><span class="text-green-700">{{Status}}</span></td>
                      <td class="w-28"><router-link :to="{name: 'DetallesCasa', params:{idCasa: ID, frc: nombreFrac, idEst: idEst, idCd: idC, enFraccionamiento: 'si', idFrc: idFrc }}" class="my-1 inline-flex px-2 rounded-full bg-yellow-600 text-white font-semibold focus:outline-none">Más detalles</router-link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import lotesInMzn from '@/components/GetData/LotesDat.vue'
export default {
  name: 'InformacionFracc',
  components: {
    lotesInMzn
  },
  data () {
    return {
      statusRegistroCasa: {
        status: 0,
        descripcion: ''
      },
      direccionCasa: '',
      CargarCasa: false,
      sinCasas: true,
      step: 1,
      loading: true,
      loaded: false,
      totalDeCasas: 0,
      connectionError: false,
      nombreFrac: '',
      ciudadFrac: '',
      estadoFrac: '',
      Fracc: {
        Nombre: '',
        Ubicacion: {
          Ciudad: '',
          Colonia: '',
          Estado: '',
          Pais: ''
        },
        id: ''
      },
      idFrc: null,
      idC: '',
      idEst: '',
      inicialNombre: null,
      Manzanas: [
      ],
      loadcasas: [],
      casa: {
        ID: null,
        Baths: null,
        Descripcion: null,
        Habitaciones: null,
        Precio: null,
        Superficie: null,
        Terreno: null,
        Vendido: null,
        Status: null,
        Direccion: '',
        DireccionCompleta: ''
      },
      nuevaCasa: {
        Baths: null,
        Descripcion: null,
        Habitaciones: null,
        Precio: null,
        Superficie: null,
        Terreno: null,
        Vendido: false
      },
      feat1: {
        Nombre: null,
        Descripcion: null
      },
      feat2: {
        Nombre: null,
        Descripcion: null
      },
      feat3: {
        Nombre: null,
        Descripcion: null
      },
      feat4: {
        Nombre: null,
        Descripcion: null
      },
      feat5: {
        Nombre: null,
        Descripcion: null
      },
      Manzana: {
        Nombre: null,
        id: null,
        Numero: null,
        lotesInMzn: []
      },
      NuevaManzana: {
        Nombre: null,
        id: null,
        Numero: null
      },
      cantidad: null,
      nombre: '',
      totalRegistros: null,
      feat1Collapsed: false,
      feat2Collapsed: true,
      feat3Collapsed: true,
      feat4Collapsed: true,
      feat5Collapsed: true,
      imagenPortada: null,
      portadaSize: null,
      foto1: null,
      foto1Size: null,
      foto2: null,
      foto2Size: null,
      foto3: null,
      foto3Size: null,
      foto4: null,
      foto4Size: null,
      foto5: null,
      foto5Size: null,
      loadingCurrent: '',
      idDoc: '',
      photoLoadProgress: '0%',
      currentLoad: '',
      totalLoad: '',
      foto1Status: 'Pendiente...',
      foto2Status: 'Pendiente...',
      foto3Status: 'Pendiente...',
      foto4Status: 'Pendiente...',
      foto5Status: 'Pendiente...',
      portadaStatus: 'Pendiente...',
      interrupOnLoad: false
    }
  },
  mounted () {
    const loading = this.$loading({
      lock: true,
      text: 'Cargando',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    this.idFrc = this.$route.params.nombreLink
    this.idC = this.$route.params.ciudad
    this.idEst = this.$route.params.idEstado
    this.$store.dispatch('updateLotesFromDB', { idEstado: this.idEst, idCiudad: this.idC, idFracc: this.idFrc })
    const Frc = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFrc)
    Frc.get().then(doc => {
      this.nombreFrac = doc.data().Nombre
      this.ciudadFrac = doc.data().Ubicacion.Ciudad
      this.estadoFrac = doc.data().Ubicacion.Estado
      this.Fracc = doc.data()
      this.inicialNombre = doc.data().id
    }).then(() => {
      loading.close()
      this.loaded = true
      this.$message({
        message: 'Cargado exitosamente',
        type: 'success'
      })
    }).catch(() => {
      loading.close()
      this.connectionError = true
    })
    Frc.collection('manzanas').onSnapshot((snapshotChange) => {
      this.Manzanas = []
      document.querySelector('body').classList.remove('overflow-hidden')
      document.querySelector('body').classList.add('overflow-y-scroll')
      snapshotChange.forEach((doc) => {
        this.Manzana = doc.data()
        this.Manzana.id = doc.ref.id
        this.Manzanas.push(this.Manzana)
        this.cantidad = this.Manzanas.length
      })
      this.Manzanas = this.Manzanas.sort(function (a, b) {
        if (a.Numero > b.Numero) {
          return 1
        }
        if (a.Numero < b.Numero) {
          return -1
        }
      })
    })
    Frc.collection('casas').onSnapshot((snapshot) => {
      this.loadcasas = []
      if (snapshot.size > 0) {
        this.sinCasas = false
        this.totalDeCasas = snapshot.size
      } else {
        this.sinCasas = true
        this.totalDeCasas = 0
      }
      snapshot.forEach((casaDoc) => {
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        this.sinCasas = false
        this.casa = casaDoc.data()
        this.casa.ID = casaDoc.ref.id
        this.casa.Precio = formatter.format(casaDoc.data().Precio)
        if (this.casa.Vendido === true) {
          this.casa.Status = 'Vendido'
        } else {
          this.casa.Status = 'No vendido'
        }
        this.loadcasas.push(this.casa)
      })
    })
  },
  computed: {
    totalDeLotes () {
      return this.$store.getters.verTotal
    },
    statusSign: function () {
      if (this.step === 1) {
        return 'Información básica'
      } else {
        if (this.step === 2) {
          return 'Características adicionales'
        } else {
          if (this.step === 3) {
            return 'Cargar imágenes'
          } else {
            if (this.step === 4) {
              return 'Revisar datos y finalizar'
            }
          }
        }
      }
      return ''
    },
    precioCasaCurrency: function () {
      var cur = 0
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      cur = formatter.format(this.nuevaCasa.Precio)
      return cur
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
    handleClose (done) {
      this.$confirm('Si no has cargado ningún dato, deberás volver a cargar nuevamente toda la información de la casa. Si ya cargaste toda la información, puedes cerrar ésta ventana. ¿Deseas continuar?')
        .then(_ => {
          done()
          this.nuevaCasa.Precio = null
          this.nuevaCasa.Descripcion = null
          this.nuevaCasa.Baths = null
          this.nuevaCasa.Habitaciones = null
          this.direccionCasa = null
          this.nuevaCasa.Superficie = null
          this.nuevaCasa.Terreno = null
          this.feat1.Nombre = null
          this.feat1.Descripcion = null
          this.feat2.Nombre = null
          this.feat2.Descripcion = null
          this.feat3.Nombre = null
          this.feat3.Descripcion = null
          this.feat4.Nombre = null
          this.feat4.Descripcion = null
          this.feat5.Nombre = null
          this.feat5.Descripcion = null
          this.imagenPortada = null
          this.portadaSize = null
          this.foto1 = null
          this.foto1Size = null
          this.foto2 = null
          this.foto2Size = null
          this.foto3 = null
          this.foto3Size = null
          this.foto4 = null
          this.foto4Size = null
          this.foto5 = null
          this.foto5Size = null
          this.idDoc = null
          this.loadingCurrent = ''
          this.photoLoadProgress = '0%'
          this.foto1Status = 'Pendiente...'
          this.foto2Status = 'Pendiente...'
          this.foto3Status = 'Pendiente...'
          this.foto4Status = 'Pendiente...'
          this.foto5Status = 'Pendiente...'
          this.portadaStatus = 'Pendiente...'
        })
        .catch(_ => {})
    },
    getAddress () {
      this.nuevaCasa.Direccion = this.direccionCasa
      this.nuevaCasa.DireccionCompleta = `${this.direccionCasa}, Fraccionamiento ${this.Fracc.Nombre}; ${this.ciudadFrac}, ${this.estadoFrac}`
    },
    closeModal () {
      this.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    openModal () {
      this.show = true
      document.querySelector('body').classList.add('overflow-hidden')
    },
    toggleFeat1 () {
      this.feat1Collapsed = !this.feat1Collapsed
      if (this.feat1Collapsed === true) {
        this.feat1.Nombre = null
        this.feat1.Descripcion = null
      }
    },
    toggleFeat2 () {
      this.feat2Collapsed = !this.feat2Collapsed
      if (this.feat2Collapsed === true) {
        this.feat2.Nombre = null
        this.feat2.Descripcion = null
      }
    },
    toggleFeat3 () {
      this.feat3Collapsed = !this.feat3Collapsed
      if (this.feat3Collapsed === true) {
        this.feat3.Nombre = null
        this.feat3.Descripcion = null
      }
    },
    toggleFeat4 () {
      this.feat4Collapsed = !this.feat4Collapsed
      if (this.feat4Collapsed === true) {
        this.feat4.Nombre = null
        this.feat4.Descripcion = null
      }
    },
    toggleFeat5 () {
      this.feat5Collapsed = !this.feat5Collapsed
      if (this.feat5Collapsed === true) {
        this.feat5.Nombre = null
        this.feat5.Descripcion = null
      }
    },
    nuevaMzn () {
      const loading = this.$loading({
        lock: true,
        text: 'Cargando',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      if (this.Manzanas.length === 0) {
        console.log('si')
        const newID = (this.inicialNombre + 'M1')
        this.NuevaManzana.Nombre = 'Manzana 1'
        this.NuevaManzana.Numero = 1
        this.NuevaManzana.id = newID
        document.getElementById('agregarMznBtn').classList.remove('flex')
        document.getElementById('agregarMznBtn').classList.add('hidden')
        const db = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFrc)
        db.collection('manzanas').doc(newID).set(this.NuevaManzana).then(() => {
          this.$message({
            showClose: true,
            message: 'Se agregó una nueva manzana. Comienza a registrar lotes',
            type: 'success'
          })
          this.$store.dispatch('updateLotesFromDB', { idEstado: this.idEst, idCiudad: this.idC, idFracc: this.idFrc })
          console.log('termina si')
          loading.close()
          document.getElementById('agregarMznBtn').classList.remove('hidden')
          document.getElementById('agregarMznBtn').classList.add('flex')
          document.body.classList.add('overflow-auto')
        }).catch((error) => {
          console.log(error)
          /* this.$message.error('Ha ocurrido un error. Vuelva a intentarlo') */
          this.$message({
            showClose: true,
            message: 'Ha ocurrido un error. Vuelva a intentarlo',
            type: 'error'
          })
          loading.close()
        })
      } else {
        console.log('Si no')
        const newID = (this.inicialNombre + 'M' + (this.cantidad + 1))
        this.NuevaManzana.Nombre = 'Manzana ' + (this.cantidad + 1)
        this.NuevaManzana.Numero = (this.cantidad + 1)
        this.NuevaManzana.id = newID
        const db = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFrc)
        db.collection('manzanas').doc(newID).set(this.NuevaManzana).then(() => {
          this.$message({
            showClose: true,
            message: 'Se agregó una nueva manzana. Comienza a registrar lotes',
            type: 'success'
          })
          this.$store.dispatch('updateLotesFromDB', { idEstado: this.idEst, idCiudad: this.idC, idFracc: this.idFrc })
          loading.close()
        }).catch((error) => {
          console.log(error)
          loading.close()
        })
      }
    },
    prev () {
      this.step--
    },
    next () {
      this.step++
    },
    selectPortada (e) {
      this.imagenPortada = e.target.files[0]
      console.log(this.imagenPortada)
      this.portadaSize = (this.imagenPortada.size / (1024 * 1024)).toFixed(2)
    },
    selectFoto1 (e) {
      this.foto1 = e.target.files[0]
      console.log(this.foto1)
      this.foto1Size = (this.foto1.size / (1024 * 1024)).toFixed(2)
    },
    selectFoto2 (e) {
      this.foto2 = e.target.files[0]
      console.log(this.foto2)
      this.foto2Size = (this.foto2.size / (1024 * 1024)).toFixed(2)
    },
    selectFoto3 (e) {
      this.foto3 = e.target.files[0]
      console.log(this.foto3)
      this.foto3Size = (this.foto3.size / (1024 * 1024)).toFixed(2)
    },
    selectFoto4 (e) {
      this.foto4 = e.target.files[0]
      console.log(this.foto4)
      this.foto4Size = (this.foto4.size / (1024 * 1024)).toFixed(2)
    },
    selectFoto5 (e) {
      this.foto5 = e.target.files[0]
      console.log(this.foto5)
      this.foto5Size = (this.foto5.size / (1024 * 1024)).toFixed(2)
    },
    loadCasa () {
      if (
        this.nuevaCasa.Descripcion === null ||
        this.nuevaCasa.Precio === null ||
        this.nuevaCasa.Baths === null ||
        this.nuevaCasa.Habitaciones === null ||
        this.nuevaCasa.Superficie === null ||
        this.nuevaCasa.Terreno === null ||
        this.direccionCasa === null ||
        this.direccionCasa === '' ||
        this.feat1.Nombre === null ||
        this.feat1.Descripcion === null ||
        this.feat2.Nombre === null ||
        this.feat2.Descripcion === null ||
        this.feat3.Nombre === null ||
        this.feat3.Descripcion === null ||
        this.feat4.Nombre === null ||
        this.feat4.Descripcion === null ||
        this.feat5.Nombre === null ||
        this.feat5.Descripcion === null ||
        this.imagenPortada === null ||
        this.foto1 === null ||
        this.foto2 === null ||
        this.foto3 === null ||
        this.foto4 === null ||
        this.foto5 === null
      ) {
        this.$message.error('Verifique que haya cargado todos los datos e inténtelo de nuevo.')
      } else {
        const Frc = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFrc)
        const storage = firebase.storage()
        const ref = storage.ref()
        this.step = 5
        this.statusRegistroCasa.status = 1
        this.statusRegistroCasa.descripcion = 'Cargando datos de la casa'
        var n = 0
        this.idDoc = null
        Frc.collection('casas').get().then((collection) => {
          n = collection.size + 1
          this.idDoc = (this.inicialNombre + 'C' + n)
          console.log('Cargando datos')
        }).then(() => {
          this.statusRegistroCasa.status = 2
          this.statusRegistroCasa.descripcion = 'Cargando características'
          Frc.collection('casas').doc(this.idDoc).set(this.nuevaCasa)
        }).then(() => {
          console.log('Cargando características')
          var nombreDocFeature = this.idDoc + 'F1'
          Frc.collection('casas').doc(this.idDoc).collection('features').doc(nombreDocFeature).set(this.feat1).then(() => {
            nombreDocFeature = this.idDoc + 'F2'
            Frc.collection('casas').doc(this.idDoc).collection('features').doc(nombreDocFeature).set(this.feat2).then(() => {
              nombreDocFeature = this.idDoc + 'F3'
              Frc.collection('casas').doc(this.idDoc).collection('features').doc(nombreDocFeature).set(this.feat3).then(() => {
                nombreDocFeature = this.idDoc + 'F4'
                Frc.collection('casas').doc(this.idDoc).collection('features').doc(nombreDocFeature).set(this.feat4).then(() => {
                  nombreDocFeature = this.idDoc + 'F5'
                  Frc.collection('casas').doc(this.idDoc).collection('features').doc(nombreDocFeature).set(this.feat5)
                })
              })
            })
          })
        }).then(() => {
          this.statusRegistroCasa.status = 3
          this.statusRegistroCasa.descripcion = 'Subiendo Imágenes'
          console.log('Cargando imágenes')
          this.statusRegistroCasa.uploadingPhoto = true
          this.loadingCurrent = this.imagenPortada.name
          const metadata = { contentType: 'image/jpeg' }

          const rutaPortada = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/portada/portada.` + (this.imagenPortada.name).slice((Math.max(0, (this.imagenPortada.name).lastIndexOf('.')) || Infinity) + 1))
          const rutaFoto1 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_1.` + (this.foto1.name).slice((Math.max(0, (this.foto1.name).lastIndexOf('.')) || Infinity) + 1))
          const rutaFoto2 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_2.` + (this.foto2.name).slice((Math.max(0, (this.foto2.name).lastIndexOf('.')) || Infinity) + 1))
          const rutaFoto3 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_3.` + (this.foto3.name).slice((Math.max(0, (this.foto3.name).lastIndexOf('.')) || Infinity) + 1))
          const rutaFoto4 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_4.` + (this.foto4.name).slice((Math.max(0, (this.foto4.name).lastIndexOf('.')) || Infinity) + 1))
          const rutaFoto5 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_5.` + (this.foto5.name).slice((Math.max(0, (this.foto5.name).lastIndexOf('.')) || Infinity) + 1))
          this.portadaStatus = 'Subiendo...'
          rutaPortada.put(this.imagenPortada, metadata).on('state_changed', snapshot => {
            this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
            console.log('Subiendo portada: ' + this.photoLoadProgress)
          }, error => {
            this.portadaStatus = 'FALLIDO'
            this.foto1Status = 'FALLIDO'
            this.foto2Status = 'FALLIDO'
            this.foto3Status = 'FALLIDO'
            this.foto4Status = 'FALLIDO'
            this.foto5Status = 'FALLIDO'
            console.log(error.message)
          },
          () => {
            this.portadaStatus = 'Listo'
            this.loadingCurrent = this.foto1.name
            this.foto1Status = 'Subiendo...'
            rutaFoto1.put(this.foto1, metadata).on('state_changed', snapshot => {
              this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
              console.log('Subiendo Foto 1: ' + this.photoLoadProgress)
            }, error => {
              this.foto1Status = 'FALLIDO'
              this.foto2Status = 'FALLIDO'
              this.foto3Status = 'FALLIDO'
              this.foto4Status = 'FALLIDO'
              this.foto5Status = 'FALLIDO'
              console.log(error.message)
            },
            () => {
              this.foto1Status = 'Listo'
              this.loadingCurrent = this.foto2.name
              this.foto2Status = 'Subiendo...'
              rutaFoto2.put(this.foto2, metadata).on('state_changed', snapshot => {
                this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
                console.log('Subiendo Foto 2: ' + this.photoLoadProgress)
              }, error => {
                this.foto2Status = 'FALLIDO'
                this.foto3Status = 'FALLIDO'
                this.foto4Status = 'FALLIDO'
                this.foto5Status = 'FALLIDO'
                console.log(error.message)
              },
              () => {
                this.foto2Status = 'Listo'
                this.loadingCurrent = this.foto3.name
                this.foto3Status = 'Subiendo...'
                rutaFoto3.put(this.foto3, metadata).on('state_changed', snapshot => {
                  this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
                  console.log('Subiendo Foto 3: ' + this.photoLoadProgress)
                }, error => {
                  this.foto3Status = 'FALLIDO'
                  this.foto4Status = 'FALLIDO'
                  this.foto5Status = 'FALLIDO'
                  console.log(error.message)
                },
                () => {
                  this.foto3Status = 'Listo'
                  this.loadingCurrent = this.foto4.name
                  this.foto4Status = 'Subiendo...'
                  rutaFoto4.put(this.foto4, metadata).on('state_changed', snapshot => {
                    this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
                    console.log('Subiendo Foto 4: ' + this.photoLoadProgress)
                  }, error => {
                    this.foto4Status = 'FALLIDO'
                    this.foto5Status = 'FALLIDO'
                    console.log(error.message)
                  },
                  () => {
                    this.foto4Status = 'Listo'
                    this.loadingCurrent = this.foto5.name
                    this.foto5Status = 'Subiendo...'
                    rutaFoto5.put(this.foto5, metadata).on('state_changed', snapshot => {
                      this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
                      console.log('Subiendo Foto 5: ' + this.photoLoadProgress)
                    }, error => {
                      this.foto5Status = 'FALLIDO'
                      console.log(error.message)
                    },
                    () => {
                      this.foto5Status = 'Listo'
                      this.step = 6
                    })
                  })
                })
              })
            })
          })
        })
      }
    },
    reuploadPortada () {
      const storage = firebase.storage()
      const ref = storage.ref()
      const rutaPortada = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/portada/portada.` + (this.imagenPortada.name).slice((Math.max(0, (this.imagenPortada.name).lastIndexOf('.')) || Infinity) + 1))
      console.log(this.imagenPortada)
      this.loadingCurrent = this.imagenPortada.name
      const metadata = { contentType: 'image/jpeg' }
      this.portadaStatus = 'Subiendo...'
      rutaPortada.put(this.imagenPortada, metadata).on('state_changed', snapshot => {
        this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo portada: ' + this.photoLoadProgress)
      }, error => {
        this.portadaStatus = 'FALLIDO'
        console.log(error.message)
      },
      () => {
        this.portadaStatus = 'Listo'
        if (
          this.portadaStatus === 'Listo' &&
          this.foto1Status === 'Listo' &&
          this.foto2Status === 'Listo' &&
          this.foto3Status === 'Listo' &&
          this.foto4Status === 'Listo' &&
          this.foto5Status === 'Listo'
        ) {
          this.step = 6
        }
      })
    },
    reuploadPhoto1 () {
      const storage = firebase.storage()
      const ref = storage.ref()
      console.log(this.foto1)
      const rutaFoto1 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_1.` + (this.foto1.name).slice((Math.max(0, (this.foto1.name).lastIndexOf('.')) || Infinity) + 1))
      this.loadingCurrent = this.foto1.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto1Status = 'Subiendo...'
      rutaFoto1.put(this.foto1, metadata).on('state_changed', snapshot => {
        this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo Foto 1: ' + this.photoLoadProgress)
      }, error => {
        this.foto1Status = 'FALLIDO'
        console.log(error.message)
      },
      () => {
        this.foto1Status = 'Listo'
        if (
          this.portadaStatus === 'Listo' &&
          this.foto1Status === 'Listo' &&
          this.foto2Status === 'Listo' &&
          this.foto3Status === 'Listo' &&
          this.foto4Status === 'Listo' &&
          this.foto5Status === 'Listo'
        ) {
          this.step = 6
        }
      })
    },
    reuploadPhoto2 () {
      const storage = firebase.storage()
      const ref = storage.ref()
      console.log(this.foto2)
      const rutaFoto2 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_2.` + (this.foto2.name).slice((Math.max(0, (this.foto2.name).lastIndexOf('.')) || Infinity) + 1))
      this.loadingCurrent = this.foto2.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto2Status = 'Subiendo...'
      rutaFoto2.put(this.foto2, metadata).on('state_changed', snapshot => {
        this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo Foto 2: ' + this.photoLoadProgress)
      }, error => {
        this.foto2Status = 'FALLIDO'
        console.log(error.message)
      },
      () => {
        this.foto2Status = 'Listo'
        if (
          this.portadaStatus === 'Listo' &&
          this.foto1Status === 'Listo' &&
          this.foto2Status === 'Listo' &&
          this.foto3Status === 'Listo' &&
          this.foto4Status === 'Listo' &&
          this.foto5Status === 'Listo'
        ) {
          this.step = 6
        }
      })
    },
    reuploadPhoto3 () {
      const storage = firebase.storage()
      const ref = storage.ref()
      console.log(this.foto3)
      const rutaFoto3 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_3.` + (this.foto3.name).slice((Math.max(0, (this.foto3.name).lastIndexOf('.')) || Infinity) + 1))
      this.loadingCurrent = this.foto3.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto3Status = 'Subiendo...'
      rutaFoto3.put(this.foto3, metadata).on('state_changed', snapshot => {
        this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo Foto 3: ' + this.photoLoadProgress)
      }, error => {
        this.foto3Status = 'FALLIDO'
        console.log(error.message)
      },
      () => {
        this.foto3Status = 'Listo'
        if (
          this.portadaStatus === 'Listo' &&
          this.foto1Status === 'Listo' &&
          this.foto2Status === 'Listo' &&
          this.foto3Status === 'Listo' &&
          this.foto4Status === 'Listo' &&
          this.foto5Status === 'Listo'
        ) {
          this.step = 6
        }
      })
    },
    reuploadPhoto4 () {
      const storage = firebase.storage()
      const ref = storage.ref()
      console.log(this.foto4)
      const rutaFoto4 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_4.` + (this.foto4.name).slice((Math.max(0, (this.foto4.name).lastIndexOf('.')) || Infinity) + 1))
      this.loadingCurrent = this.foto4.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto4Status = 'Subiendo...'
      rutaFoto4.put(this.foto4, metadata).on('state_changed', snapshot => {
        this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo Foto 4: ' + this.photoLoadProgress)
      }, error => {
        this.foto4Status = 'FALLIDO'
        console.log(error.message)
      },
      () => {
        this.foto4Status = 'Listo'
        if (
          this.portadaStatus === 'Listo' &&
          this.foto1Status === 'Listo' &&
          this.foto2Status === 'Listo' &&
          this.foto3Status === 'Listo' &&
          this.foto4Status === 'Listo' &&
          this.foto5Status === 'Listo'
        ) {
          this.step = 6
        }
      })
    },
    reuploadPhoto5 () {
      const storage = firebase.storage()
      const ref = storage.ref()
      console.log(this.foto5)
      const rutaFoto5 = ref.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.inicialNombre}/${this.idDoc}/galeria/foto_5.` + (this.foto5.name).slice((Math.max(0, (this.foto5.name).lastIndexOf('.')) || Infinity) + 1))
      this.loadingCurrent = this.foto5.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto5Status = 'Subiendo...'
      rutaFoto5.put(this.foto5, metadata).on('state_changed', snapshot => {
        this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo Foto 5: ' + this.photoLoadProgress)
      }, error => {
        this.foto5Status = 'FALLIDO'
        console.log(error.message)
      },
      () => {
        this.foto5Status = 'Listo'
        if (
          this.portadaStatus === 'Listo' &&
          this.foto1Status === 'Listo' &&
          this.foto2Status === 'Listo' &&
          this.foto3Status === 'Listo' &&
          this.foto4Status === 'Listo' &&
          this.foto5Status === 'Listo'
        ) {
          this.step = 6
        }
      })
    }
  }
}
</script>

<style scoped>
  label {
    font-weight: 700!important;
  }
  .custom-text {
    background: #99d3f9;
    background: -webkit-linear-gradient(225deg, #99d3f9 0%, #3c43bd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .h-custom {
    height: 22rem!important;
  }
  .h-32r {
    height: 32rem;
  }
  .custom-bg {
    background-color: #CDDCDC;
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
  }
  .table-color {
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% );
  }
  .custom-error-text {
    font-weight: 200;
  }
  .featOpened {
    max-height: 400px;
  }
  .featClosed {
    height: 0px;
    opacity: 0;
  }
</style>
