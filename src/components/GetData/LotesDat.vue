<template>
  <div>
    <el-dialog
    title="Crear nuevo lote"
    v-model="nuevoLote"
    :width="anchoL"
    :before-close="handleClose"
    destroy-on-close=true
    center
    top="0"
    >
    <div v-show="step===1" class="block justify-items-center mx-auto overflow-y-auto">
      <!-- <div id="titulo">
        <h3 class="text-center">Información del lote</h3>
      </div> -->
      <div id="datos-generales" class="pb-2">
        <div id="ubicacion" class="block pb-1 md:flex border-b border-gray-100">
          <h4 class="block md:inline-flex px-0 md:pr-2 text-gray-800 text-base"><span class="pr-1 font-semibold">Nombre: </span> Lote {{$store.getters.verTotal + 1}}</h4>
          <h4 class="block md:inline-flex px-0 md:pl-2 text-gray-800 text-base"><span class="pr-1 font-semibold">Ubicado en: </span> Fraccionamiento {{nombreFrc}}, {{nombre}}</h4>
          <h4 class="inline-flex pr-4 md:px-4 text-gray-800 text-base font-semibold">Precio:</h4>
          <!-- <input
            type="text"
            name="precio"
            id="precio"
            @input="formatoMoneda"
            v-model="Lote.Precio"
            placeholder="Precio del lote"
            class="border-gray-200 px-3 py-0.5 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150 self-center"
            > -->
          <currency-input
            v-model="Lote.Precio"
            :options="{
              currency: 'MXN',
              distractionFree: false,
              locale: 'es-419',
              valueRange: {min:0, max:9999999999}
              }"
            class="border-gray-200 px-3 py-0.5 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150 self-center"
          />
          <!--   <h4 class="inline-flex md:pl-2 text-gray-800 text-base font-semibold">MXN</h4> -->
        </div>
      </div>
      <div id="dimensiones" class="py-1 block px-0 md:px-4">
        <h4 class="text-xl text-center">Dimensiones y colindancias</h4>
        <h4 class="text-gray-800 font-semibold ">Al norte</h4>
        <div id="norte" class="border-t py-2 border-gray-100 block md:flex w-full">
          <div id="norte-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
            <label for="alNorte" class="block uppercase text-gray-700 text-xs font-bold">Dimensiones (metros):</label>
            <input
            v-model="Lote.Norte.Dimension"
            @input="checkBeforeLoad()"
            type="number"
            name="alNorte"
            id="alNorte"
            placeholder="Al norte mide:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
          <div id="norte-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
            <label for="colNorte" class="block uppercase text-gray-700 text-xs font-bold">Colindancias:</label>
            <input
            v-model="Lote.Norte.Colindancia"
            @input="checkBeforeLoad()"
            type="text"
            name="colNorte"
            id="colNorte"
            placeholder="Y colinda con:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
        </div>
        <h4 class="text-gray-800 font-semibold ">Al sur</h4>
        <div id="sur" class="border-t py-2 border-gray-100 block md:flex w-full">
          <div id="sur-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
            <label for="alSur" class="block uppercase text-gray-700 text-xs font-bold">Dimensiones (metros):</label>
            <input
            v-model="Lote.Sur.Dimension"
            @input="checkBeforeLoad()"
            type="number"
            name="alSur"
            id="alSur"
            placeholder="Al sur mide:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
          <div id="sur-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
            <label for="colSur" class="block uppercase text-gray-700 text-xs font-bold">Colindancias:</label>
            <input
            v-model="Lote.Sur.Colindancia"
            @input="checkBeforeLoad()"
            type="text"
            name="colSur"
            id="colSur"
            placeholder="Y colinda con:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
        </div>
        <h4 class="text-gray-800 font-semibold ">Al este</h4>
        <div id="este" class="border-t py-2 border-gray-100 block md:flex w-full">
          <div id="este-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
            <label for="alEste" class="block uppercase text-gray-700 text-xs font-bold">Dimensiones (metros):</label>
            <input
            v-model="Lote.Este.Dimension"
            @input="checkBeforeLoad()"
            type="number"
            name="alEste"
            id="alEste"
            placeholder="Al este mide:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
          <div id="este-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
            <label for="colEste" class="block uppercase text-gray-700 text-xs font-bold">Colindancias:</label>
            <input
            v-model="Lote.Este.Colindancia"
            type="text"
            name="colEste"
            id="colEste"
            placeholder="Y colinda con:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
        </div>
        <h4 class="text-gray-800 font-semibold ">Al oeste</h4>
        <div id="oeste" class="border-t py-2 border-gray-100 block md:flex w-full">
          <div id="oeste-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
            <label for="alOeste" class="block uppercase text-gray-700 text-xs font-bold">Dimensiones (metros):</label>
            <input
            v-model="Lote.Oeste.Dimension"
            @input="checkBeforeLoad()"
            type="number"
            name="alOeste"
            id="alOeste"
            placeholder="Al oeste mide:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
          <div id="oeste-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
            <label for="colOeste" class="block uppercase text-gray-700 text-xs font-bold">Colindancias:</label>
            <input
            v-model="Lote.Oeste.Colindancia"
            @input="checkBeforeLoad()"
            type="text"
            name="colOeste"
            id="colOeste"
            placeholder="Y colinda con:"
            class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            >
          </div>
        </div>
        <h4 class="text-gray-800 font-semibold ">Superficie total</h4>
        <div id="total" class="border-t py-2 border-gray-100 block md:flex w-full">
          <div id="total-dim" class="w-full px-0 md:px-2">
            <span class="text-sm font-bold text-gray-800">Total: </span> <!-- <span v-if="!editarSup" class="text-sm font-bold text-gray-800">{{Lote.Superficie}}</span> -->
            <input
            type="number"
            @input="checkBeforeLoad()"
            name="superficie"
            id="superficie"
            v-model="Lote.Superficie"
            :placeholder="Lote.Superficie"
            class="border-gray-200 px-1 mx-2 py-0.5 w-24 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150 self-center"
            >
            <span class="text-sm font-bold text-gray-800">m<sup>2</sup> <!-- <span class="text-sm text-gray-800">(Este es un valor estimado. Si no coincide con tus datos, haz click en editar)</span> -->, precio: {{Lote.Precio}}</span>
          </div>
          <el-checkbox v-model="Lote.Vendido">Actualmente vendido</el-checkbox>
        </div>
      </div>
    </div>
    <div v-show="step===2">
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
                  <span class="font-semibold text-gray-700">Cargar fotos del lote</span>
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
    <div id="step-3" v-if="step === 3">
      <div class="text-center items-center justify-center">
        <h3>Agregar descripción</h3>
        <div id="descripcion" class="w-full px-0 md:px-2 my-4">
            <label for="descripcionL" class="block uppercase text-gray-700 text-xs font-bold mb-4">Escribe una descripción clara y atractiva para éste lote:</label>
            <textarea
            v-model="Lote.Descripcion"
            type="text"
            name="descripcionL"
            id="descripcionL"
            placeholder="Escribe la descripción aquí"
            class="border-gray-200 px-3 py-2 h-96 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            />
          </div>
      </div>
    </div>
    <div id="step-4" v-if="step === 4">
      <div class="mt-10 pb-4 sm:mt-0 flex flex-col content-center justify-center items-center self-center h-96 md:h-32r border-b border-gray-200">
        <i :class="{'fas fa-info-circle' : statusRegistroLote.status === 1, 'fas fa-list-alt' : statusRegistroLote.status === 2, 'fas fa-images' : statusRegistroLote.status === 3 }" class=" text-7xl text-green-700 mb-2"></i>
        <span class="text-3xl lato pb-2">{{statusRegistroLote.descripcion}}</span>
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
    <div id="step-5" v-if="step === 5">
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
    <div>
      <span v-if="step < 4" class="dialog-footer flex justify-around pt-4">
        <button v-show="step===1" @click="nuevoLote = !nuevoLote" class="items-center justify-center flex w-1/3 md:w-1/4 rounded-lg py-2 px-4 transition-all duration-500 ease-in-out bg-blue-700 text-white font-semibold text-xs hover:bg-blue-800 hover:shadow-lg hover:scale-110">
          <i class="fas fa-arrow-circle-left pr-2 self-center"></i>
          <span class="text-sm self-stretch">Cancelar</span>
        </button>
        <button v-show="step===2||step===3" @click="step--" class="items-center justify-center flex w-1/3 md:w-1/4 rounded-lg py-2 px-4 transition-all duration-500 ease-in-out bg-blue-700 text-white font-semibold text-xs hover:bg-blue-800 hover:shadow-lg hover:scale-110">
          <i class="fas fa-arrow-circle-left pr-2 self-center"></i>
          <span class="text-sm self-stretch">Atrás</span>
        </button>
        <button @click="step++" :disabled="notLoad" :class="[notLoad ? 'bg-gray-200 text-gray-400' : 'bg-green-700 hover:bg-green-800 hover:shadow-lg hover:scale-110 text-white']" class="items-center justify-center w-1/3 md:w-1/4 flex rounded-lg py-2 px-4 transition-all duration-500 ease-in-out font-semibold text-xs" v-show="step===1||step===2">
          <span class="text-sm font-semibold self-stretch">Siguiente</span>
          <i class="fas fa-arrow-right pl-2 self-center"></i>
        </button>
        <button @click="agregarLote" :disabled="notLoad" :class="[notLoad ? 'bg-gray-200 text-gray-400' : 'bg-green-700 hover:bg-green-800 hover:shadow-lg hover:scale-110 text-white']" class="items-center justify-center w-1/3 md:w-1/4 flex rounded-lg py-2 px-4 transition-all duration-500 ease-in-out font-semibold text-xs" v-show="step===3">
          <i class="fas fa-cloud-upload-alt pr-2 self-center"></i>
          <span class="text-sm font-semibold self-stretch">Guardar</span>
        </button>
      </span>
    </div>
    </el-dialog>
      <div id="add-lote" class="flex justify-between px-4 py-2">
        <span class="text-sm font-semibold text-gray-700">Agregar lote</span>
        <button id="agregarLoteBtn" @click="openLoad" class="text-sm flex rounded-full transition-all duration-500 ease-in-out hover:bg-green-500 hover:shadow-lg hover:scale-110 active:ring-0 active:bg-blue-600 bg-green-600 text-white font-semibold py-1 px-4">
          <i class="fas fa-plus pr-2 self-center"></i>
          <span class="font-semibold text-gray-50">Agregar</span>
          </button>
      </div>
      <el-collapse accordion class="px-1 sm:px-4">
        <el-collapse-item id="lotes" v-for="{ id, Nombre} in Lotes" :key="id" :title="Nombre" :name="Nombre">
          <LoteDatos :idEst="idEstado" :idC="idCiudad" :idFracc="idFracc" :idManzana="idManzana" :idLote="id" class="shadow-inner" />
        </el-collapse-item>
      </el-collapse>
      <div class="border-t-2 border-red-700">
        <div id="warning-zone" class="flex justify-between px-4 py-6 bg-red-100 rounded-md mt-1">
          <div class="inline-flex font-semibold text-red-700">
            <i class="fas fa-exclamation-triangle self-center text-base"></i>
            <span class="pl-2 text-sm self-center">Zona de peligro</span>
          </div>
          <button @click="centerDialogVisible = true" class="flex rounded-lg py-1 px-4 transition-all duration-500 ease-in-out hover:bg-red-800 hover:shadow-lg hover:scale-110 bg-red-700 text-white font-semibold text-xs">
            <i class="fas fa-trash pr-2 self-center"></i>
            <span class="text-sm font-semibold text-gray-50 self-stretch">Eliminar manzana</span>
          </button>
        </div>
      </div>
  </div>
  <div class="w-full md:w-1/3 items-center justify-center">
    <el-dialog
      title="Eliminar definitivamente"
      v-model="centerDialogVisible"
      :width="ancho"
      destroy-on-close
      center>
        <div class="justify-center items-center text-center">
          <span class="overflow-ellipsis">¿Desea eliminar definitivamente la manzana seleccionada?</span>
        </div>
        <div class="text-center">
          <strong class="text-gray-800 overflow-ellipsis">Nota: Si lo hace, <br>se eliminarán definitivamente los lotes dentro de ésta.<br>ÉSTA ACCIÓN ES IRREVERSIBLE</strong>
        </div>
        <div class="mt-12 mb-4 text-center">
          <span class="overflow-ellipsis">Para continuar, escribe el ID de la manzana: <strong class="text-gray-800">{{idManzana}}</strong></span>
          <input type="text" autocomplete="off" name="idmzn" v-model="verificarID" @input="verificarIDMzn" :placeholder="idManzana" class="mt-2 w-full placeholder-gray-500 placeholder-opacity-50 border border-gray-500 rounded-md py-1 font-semibold text-red-800">
        </div>
        <div id="alerta" class="hidden">
          <el-alert
            title="El ID de manzana debe ser en mayúsculas"
            type="error"
            :closable="false"
            show-icon>
          </el-alert>
        </div>
        <template #footer>
          <span class="dialog-footer flex justify-around">
            <button @click="ocultarTodo" class="flex w-5/12 rounded-lg py-2 px-4 transition-all duration-500 ease-in-out bg-blue-700 text-white font-semibold text-xs hover:bg-blue-800 hover:shadow-lg hover:scale-110">
              <i class="fas fa-arrow-circle-left pr-2 self-center"></i>
              <span class="text-sm self-stretch">Cancelar</span>
            </button>
            <button :disabled="isDisabled" @click="eliminarManzana" :class="[isDisabled ? 'bg-gray-200 text-gray-400' : 'bg-red-700 hover:bg-red-800 hover:shadow-lg hover:scale-110 text-white']" class="disabled:opacity-50 w-5/12 flex rounded-lg py-2 px-4 transition-all duration-500 ease-in-out font-semibold text-xs">
              <i class="fas fa-trash pr-2 self-center"></i>
              <span class="text-sm font-semibold self-stretch">Eliminar</span>
            </button>
          </span>
        </template>
    </el-dialog>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import LoteDatos from '@/components/GetData/LoteInfo.vue'
import CurrencyInput from '@/components/currencyInput.vue'
export default {
  name: 'lotesInMzn',
  components: {
    CurrencyInput,
    LoteDatos
  },
  data () {
    return {
      statusRegistroLote: {
        status: 0,
        descripcion: ''
      },
      editarSup: false,
      ancho: '100%',
      anchoL: '70%',
      verificarID: '',
      step: 1,
      isDisabled: true,
      notLoad: false,
      idM: null,
      show: false,
      loadingCurrent: null,
      photoLoadProgress: 0,
      foto1Status: 'Pendiente...',
      foto2Status: 'Pendiente...',
      foto3Status: 'Pendiente...',
      foto4Status: 'Pendiente...',
      foto5Status: 'Pendiente...',
      portadaStatus: 'Pendiente...',
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
      rutaPortada: null,
      rutaFoto1: null,
      rutaFoto2: null,
      rutaFoto3: null,
      rutaFoto4: null,
      rutaFoto5: null,
      Lote: {
        id: null,
        Nombre: null,
        Numero: null,
        Precio: null,
        Descripcion: null,
        Norte: {
          Dimension: '',
          Colindancia: ''
        },
        Sur: {
          Dimension: '',
          Colindancia: ''
        },
        Oeste: {
          Dimension: '',
          Colindancia: ''
        },
        Este: {
          Dimension: '',
          Colindancia: ''
        },
        Superficie: '',
        Vendido: false
      },
      Lotes: [],
      nuevoLote: false,
      centerDialogVisible: false
    }
  },
  props: {
    nombreFrc: {
      type: String
    },
    idEstado: {
      type: String
    },
    idCiudad: {
      type: String
    },
    idFracc: {
      type: String
    },
    idManzana: {
      type: String
    },
    nombre: {
      type: String
    }
  },
  mounted () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    const FrcMnz = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana)
    FrcMnz.collection('lotes').onSnapshot((snapshotChange) => {
      this.Lotes = []
      snapshotChange.forEach((doc) => {
        this.Lote = doc.data()
        this.Lote.id = doc.ref.id
        this.Lotes.push(this.Lote)
      })
      this.Lotes = this.Lotes.sort(function (a, b) {
        if (a.Numero > b.Numero) {
          return 1
        }
        if (a.Numero < b.Numero) {
          return -1
        }
      })
    })
  },
  methods: {
    handleClose (done) {
      this.$confirm('Si no has cargado ningún dato, deberás volver a cargar nuevamente toda la información de éste lote. Si ya cargaste toda la información, puedes cerrar ésta ventana. ¿Deseas continuar?')
        .then(_ => {
          done()
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
          document.getElementById('agregarLoteBtn').classList.remove('hidden')
          document.getElementById('agregarLoteBtn').classList.add('flex')
        })
        .catch(_ => {})
    },
    checkBeforeLoad () {
      if (
        this.Lote.Norte.Dimension === '' ||
        this.Lote.Norte.Colindancia === '' ||
        this.Lote.Sur.Dimension === '' ||
        this.Lote.Sur.Colindancia === '' ||
        this.Lote.Oeste.Dimension === '' ||
        this.Lote.Oeste.Colindancia === '' ||
        this.Lote.Este.Dimension === '' ||
        this.Lote.Este.Colindancia === '' ||
        this.Lote.Superficie === ''
      ) {
        this.notLoad = true
      } else {
        if (this.Lote.Precio === '' || this.Lote.Precio === 0) {
          this.notLoad = true
        } else {
          this.notLoad = false
        }
      }
    },
    formatoMoneda () {
      var inputValue = this.Lote.Precio
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
      if (inputValue !== '') {
        this.Lote.Precio = formatter.format(inputValue)
      }
    },
    onResize () {
      if (window.innerWidth < 768) {
        this.ancho = '100%'
        this.anchoL = '100%'
      } else {
        this.ancho = '33%'
        this.anchoL = '75%'
      }
    },
    ocultarTodo () {
      this.verificarID = ''
      this.isDisabled = true
      this.centerDialogVisible = false
      /* document.getElementById('app').classList.add('overflow-auto') */
    },
    verificarIDMzn () {
      if (this.verificarID === this.idManzana) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
        if (this.verificarID === this.idManzana.toLowerCase()) {
          document.getElementById('alerta').classList.add('block')
          document.getElementById('alerta').classList.remove('hidden')
        } else {
          document.getElementById('alerta').classList.add('hidden')
          document.getElementById('alerta').classList.remove('block')
        }
      }
    },
    openLoad () {
      this.Lote = {
        id: null,
        Nombre: null,
        Numero: null,
        Precio: null,
        Descripcion: null,
        Norte: {
          Dimension: '',
          Colindancia: ''
        },
        Sur: {
          Dimension: '',
          Colindancia: ''
        },
        Oeste: {
          Dimension: '',
          Colindancia: ''
        },
        Este: {
          Dimension: '',
          Colindancia: ''
        },
        Superficie: '',
        Vendido: false
      }
      this.nuevoLote = true
      this.step = 1
      this.imagenPortada = null
      this.foto1 = null
      this.foto2 = null
      this.foto3 = null
      this.foto4 = null
      this.foto5 = null
    },
    eliminarManzana () {
      const loading = this.$loading({
        lock: true,
        text: 'Cargando',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.centerDialogVisible = false
      const m = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana)
      m.collection('lotes').get().then((snapshot) => {
        snapshot.forEach(doc => {
          var id = doc.ref.id
          m.collection('lotes').doc(id).delete()
          const carpeta = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${id}`)
          const portada = carpeta.child('portada/portada.jpg')
          const foto1 = carpeta.child('galeria/foto_1.jpg')
          const foto2 = carpeta.child('galeria/foto_2.jpg')
          const foto3 = carpeta.child('galeria/foto_3.jpg')
          const foto4 = carpeta.child('galeria/foto_4.jpg')
          const foto5 = carpeta.child('galeria/foto_5.jpg')
          portada.delete().then(() => {
            foto1.delete().then(() => {
              foto2.delete().then(() => {
                foto3.delete().then(() => {
                  foto4.delete().then(() => {
                    foto5.delete().then(() => {
                      console.log('borrado con éxito')
                    })
                  })
                })
              })
            })
          })
        })
      }).then(() => {
        m.delete().then(() => {
          this.$store.dispatch('updateLotesFromDB', { idEstado: this.idEstado, idCiudad: this.idCiudad, idFracc: this.idFracc })
        }).then(() => {
          loading.close()
          this.$message({
            message: 'Se eliminó la manzana seleccionada',
            type: 'success'
          })
        })
      })
    },
    agregarLote () {
      this.$confirm('¿Desea agregar este lote?')
        .then(_ => {
          this.step = 4
          const m = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana).collection('lotes')
          const total = this.$store.getters.verTotal
          const id = this.idManzana + 'L' + (total + 1)
          const nombre = 'Lote ' + (total + 1)
          this.Lote.id = id
          this.Lote.Numero = (total + 1)
          this.Lote.Nombre = nombre
          document.getElementById('agregarLoteBtn').classList.remove('flex')
          document.getElementById('agregarLoteBtn').classList.add('hidden')
          /* alert(nombre + ' ' + this.idManzana) */
          m.doc(id).set(this.Lote).then(() => {
            this.rutaPortada = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.Lote.id}/portada/portada.` + (this.imagenPortada.name).slice((Math.max(0, (this.imagenPortada.name).lastIndexOf('.')) || Infinity) + 1))
            this.rutaFoto1 = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.Lote.id}/galeria/foto_1.` + (this.foto1.name).slice((Math.max(0, (this.foto1.name).lastIndexOf('.')) || Infinity) + 1))
            this.rutaFoto2 = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.Lote.id}/galeria/foto_2.` + (this.foto2.name).slice((Math.max(0, (this.foto2.name).lastIndexOf('.')) || Infinity) + 1))
            this.rutaFoto3 = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.Lote.id}/galeria/foto_3.` + (this.foto3.name).slice((Math.max(0, (this.foto3.name).lastIndexOf('.')) || Infinity) + 1))
            this.rutaFoto4 = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.Lote.id}/galeria/foto_4.` + (this.foto4.name).slice((Math.max(0, (this.foto4.name).lastIndexOf('.')) || Infinity) + 1))
            this.rutaFoto5 = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.Lote.id}/galeria/foto_5.` + (this.foto5.name).slice((Math.max(0, (this.foto5.name).lastIndexOf('.')) || Infinity) + 1))

            this.loadingCurrent = this.imagenPortada.name
            const metadata = { contentType: 'image/jpeg' }
            this.statusRegistroLote.status = 3
            this.statusRegistroLote.descripcion = 'Subiendo Imágenes'
            this.portadaStatus = 'Subiendo...'
            this.rutaPortada.put(this.imagenPortada, metadata).on('state_changed', snapshot => {
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
              this.rutaFoto1.put(this.foto1, metadata).on('state_changed', snapshot => {
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
                this.rutaFoto2.put(this.foto2, metadata).on('state_changed', snapshot => {
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
                  this.rutaFoto3.put(this.foto3, metadata).on('state_changed', snapshot => {
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
                    this.rutaFoto4.put(this.foto4, metadata).on('state_changed', snapshot => {
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
                      this.rutaFoto5.put(this.foto5, metadata).on('state_changed', snapshot => {
                        this.photoLoadProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
                        console.log('Subiendo Foto 5: ' + this.photoLoadProgress)
                      }, error => {
                        this.foto5Status = 'FALLIDO'
                        console.log(error.message)
                      },
                      () => {
                        this.foto5Status = 'Listo'
                        this.step = 5
                        this.$store.dispatch('updateLotesFromDB', { idEstado: this.idEstado, idCiudad: this.idCiudad, idFracc: this.idFracc })
                      })
                    })
                  })
                })
              })
            }).then(() => {
              this.$store.dispatch('updateLotesFromDB', { idEstado: this.idEstado, idCiudad: this.idCiudad, idFracc: this.idFracc })
              this.nuevoLote = false
              document.getElementById('agregarLoteBtn').classList.remove('hidden')
              document.getElementById('agregarLoteBtn').classList.add('flex')
              this.$message({
                showClose: true,
                message: 'Se agregó un nuevo lote',
                type: 'success'
              })
              this.Lote.Precio = ''
              this.Lote.Norte.Dimension = ''
              this.Lote.Norte.Colindancia = ''
              this.Lote.Sur.Dimension = ''
              this.Lote.Sur.Colindancia = ''
              this.Lote.Oeste.Dimension = ''
              this.Lote.Oeste.Colindancia = ''
              this.Lote.Este.Dimension = ''
              this.Lote.Este.Colindancia = ''
              this.Lote.Superficie = ''
              this.Lote.Vendido = false
            })
          })
        })
        .catch(_ => {})
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
    reuploadPortada () {
      console.log(this.imagenPortada)
      this.loadingCurrent = this.imagenPortada.name
      const metadata = { contentType: 'image/jpeg' }
      this.portadaStatus = 'Subiendo...'
      this.rutaPortada.put(this.imagenPortada, metadata).on('state_changed', snapshot => {
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
          this.step = 5
        }
      })
    },
    reuploadPhoto1 () {
      this.loadingCurrent = this.foto1.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto1Status = 'Subiendo...'
      this.rutaFoto1.put(this.foto1, metadata).on('state_changed', snapshot => {
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
          this.step = 5
        }
      })
    },
    reuploadPhoto2 () {
      this.loadingCurrent = this.foto2.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto2Status = 'Subiendo...'
      this.rutaFoto2.put(this.foto2, metadata).on('state_changed', snapshot => {
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
          this.step = 5
        }
      })
    },
    reuploadPhoto3 () {
      this.loadingCurrent = this.foto3.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto3Status = 'Subiendo...'
      this.rutaFoto3.put(this.foto3, metadata).on('state_changed', snapshot => {
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
          this.step = 5
        }
      })
    },
    reuploadPhoto4 () {
      this.loadingCurrent = this.foto4.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto4Status = 'Subiendo...'
      this.rutaFoto4.put(this.foto4, metadata).on('state_changed', snapshot => {
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
          this.step = 5
        }
      })
    },
    reuploadPhoto5 () {
      this.loadingCurrent = this.foto5.name
      const metadata = { contentType: 'image/jpeg' }
      this.foto5Status = 'Subiendo...'
      this.rutaFoto5.put(this.foto5, metadata).on('state_changed', snapshot => {
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
          this.step = 5
        }
      })
    }
  },
  created () {
    window.addEventListener('resize', this.onResize)
    var ancho = screen.width
    if (ancho < 640) {
      this.ancho = '100%'
      this.anchoL = '100%'
    } else {
      this.ancho = '33%'
      this.anchoL = '75%'
    }
  }
}
</script>

<style scoped>
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
</style>
