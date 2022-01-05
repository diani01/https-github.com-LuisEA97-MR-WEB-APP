<template>
  <el-dialog
  title="Editar fotos de esta propiedad"
  v-model="EditarFotos"
  fullscreen="true"
  :before-close="handleClose"
  destroy-on-close
  center>
  <div class="h-96 rounded-lg shadow-sm p-4 sm:px-8 md:px-12">
    <div class="w-full h-full justify-center items-center content-center">
      <div class="flex flex-col md:flex-row justify-center items-center content-center">
        <div v-if="!changePortada" class="contenedor-img rounded-lg mx-0 md:mx-2 my-2">
          <img :src="portada">
          <input @change="selectPortada($event)" type="file" name="portadaFotoEdit" id="portadaFotoEdit" accept="image/jpeg" class="inputfile">
          <label for="portadaFotoEdit" class="btn"><span class="text-white font-semibold">Actualizar imagen</span></label>
        </div>
        <div v-if="changePortada" class="contenedor-datos">
          <div class="flex">
            <span class="lato text-xl font-semibold text-gray-50 mr-2">{{imagenPortada.name}}</span>
            <button v-if="!uploadPortada" @click="{changePortada = false;imagenPortada = null}" class="inline-flex text-lg self-center text-white focus:outline-none rounded-lg transition-all ease-in-out duration-300">
              <i class="fas fa-times self-center"></i>
            </button>
          </div>
          <span class="monserrat text-xl text-gray-200 mt-2 mb-4">{{portadaSize}} MB</span>
          <div v-if="!uploadPortada" class="flex">
            <button @click="{uploadPortada=true;updatePortada()}" class="inline-flex text-lg text-white focus:outline-none px-4 py-1 rounded-lg border-2 border-white transition-all ease-in-out duration-300 hover:bg-gray-700 hover:bg-opacity-10 hover:shadow-md active:bg-opacity-60 ml-4">
              <i class="fas fa-cloud-upload-alt self-center mr-2"></i>
              <span class="lato font-semibold">Cargar</span>
            </button>
          </div>
          <div v-if="uploadPortada" class="inline-flex text-lg text-white">
            <i v-if="errorUploadPortada" class="fas fa-exclamation-circle mr-2 select-none"></i>
            <i class="fas fa-spinner self-center animate-spin mr-2 select-none"></i>
            <span class="raleway text-lg font-semibold select-none">Subiendo... ({{portadaProgress}})</span>
            <button v-if="errorUploadPortada" @click="updatePortada" class="focus:outline-none">
              <i class="fas fa-redo-alt"></i>
            </button>
          </div>
        </div>
        <div v-if="!changeFoto1" class="contenedor-img rounded-lg mx-0 md:mx-2 my-2">
          <img :src="foto1">
          <input @change="selectFoto1($event)" type="file" name="Foto1Edit" id="Foto1Edit" accept="image/jpeg" class="inputfile">
          <label for="Foto1Edit" class="btn"><span class="text-white font-semibold">Actualizar imagen</span></label>
        </div>
        <div v-if="changeFoto1" class="contenedor-datos">
          <div class="flex">
            <span class="lato text-xl font-semibold text-gray-50 mr-2">{{foto1Edit.name}}</span>
            <button v-if="uploadFoto1===false" @click="{changeFoto1 = false;foto1Edit = null}" class="inline-flex text-lg self-center text-white focus:outline-none rounded-lg transition-all ease-in-out duration-300">
              <i class="fas fa-times self-center"></i>
            </button>
          </div>
          <span class="monserrat text-xl text-gray-200 mt-2 mb-4">{{foto1EditSize}} MB</span>
          <div v-if="!uploadFoto1" class="flex">
            <button @click="{uploadFoto1=true;updateFoto1()}" class="inline-flex text-lg text-white focus:outline-none px-4 py-1 rounded-lg border-2 border-white transition-all ease-in-out duration-300 hover:bg-gray-700 hover:bg-opacity-10 hover:shadow-md active:bg-opacity-60 ml-4">
              <i class="fas fa-cloud-upload-alt self-center mr-2"></i>
              <span class="lato font-semibold">Cargar</span>
            </button>
          </div>
          <div v-if="uploadFoto1" class="inline-flex text-lg text-white">
            <i v-if="errorUploadFoto1" class="fas fa-exclamation-circle mr-2 select-none"></i>
            <i class="fas fa-spinner self-center animate-spin mr-2 select-none"></i>
            <span class="raleway text-lg font-semibold select-none">Subiendo... ({{foto1Progress}})</span>
            <button v-if="errorUploadFoto1" @click="updateFoto1" class="focus:outline-none">
              <i class="fas fa-redo-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col overflow-x-auto md:flex-row justify-center items-center content-center">
        <div v-if="!changeFoto2" class="contenedor-img rounded-lg mx-0 md:mx-2 my-2">
          <img :src="foto2">
          <input @change="selectFoto2($event)" type="file" name="Foto2Edit" id="Foto2Edit" accept="image/jpeg" class="inputfile">
          <label for="Foto2Edit" class="btn"><span class="text-white font-semibold">Actualizar imagen</span></label>
        </div>
        <div v-if="changeFoto2" class="contenedor-datos">
          <div class="flex">
            <span class="lato text-xl font-semibold text-gray-50 mr-2">{{foto2Edit.name}}</span>
            <button v-if="uploadFoto2===false" @click="{changeFoto2 = false;foto2Edit = null}" class="inline-flex text-lg self-center text-white focus:outline-none rounded-lg transition-all ease-in-out duration-300">
              <i class="fas fa-times self-center"></i>
            </button>
          </div>
          <span class="monserrat text-xl text-gray-200 mt-2 mb-4">{{foto2EditSize}} MB</span>
          <div v-if="!uploadFoto2" class="flex">
            <button @click="{uploadFoto2=true;updateFoto2()}" class="inline-flex text-lg text-white focus:outline-none px-4 py-1 rounded-lg border-2 border-white transition-all ease-in-out duration-300 hover:bg-gray-700 hover:bg-opacity-10 hover:shadow-md active:bg-opacity-60 ml-4">
              <i class="fas fa-cloud-upload-alt self-center mr-2"></i>
              <span class="lato font-semibold">Cargar</span>
            </button>
          </div>
          <div v-if="uploadFoto2" class="inline-flex text-lg text-white">
            <i v-if="errorUploadFoto2" class="fas fa-exclamation-circle mr-2 select-none"></i>
            <i class="fas fa-spinner self-center animate-spin mr-2 select-none"></i>
            <span class="raleway text-lg font-semibold select-none">Subiendo... ({{foto2Progress}})</span>
            <button v-if="errorUploadFoto2" @click="updateFoto2" class="focus:outline-none">
              <i class="fas fa-redo-alt"></i>
            </button>
          </div>
        </div>
        <div v-if="!changeFoto3" class="contenedor-img rounded-lg mx-0 md:mx-2 my-2">
          <img :src="foto3">
          <input @change="selectFoto3($event)" type="file" name="Foto3Edit" id="Foto3Edit" accept="image/jpeg" class="inputfile">
          <label for="Foto3Edit" class="btn"><span class="text-white font-semibold">Actualizar imagen</span></label>
        </div>
        <div v-if="changeFoto3" class="contenedor-datos">
          <div class="flex">
            <span class="lato text-xl font-semibold text-gray-50 mr-2">{{foto3Edit.name}}</span>
            <button v-if="uploadFoto3===false" @click="{changeFoto3 = false;foto3Edit = null}" class="inline-flex text-lg self-center text-white focus:outline-none rounded-lg transition-all ease-in-out duration-300">
              <i class="fas fa-times self-center"></i>
            </button>
          </div>
          <span class="monserrat text-xl text-gray-200 mt-2 mb-4">{{foto3EditSize}} MB</span>
          <div v-if="!uploadFoto3" class="flex">
            <button @click="{uploadFoto3=true;updateFoto3()}" class="inline-flex text-lg text-white focus:outline-none px-4 py-1 rounded-lg border-2 border-white transition-all ease-in-out duration-300 hover:bg-gray-700 hover:bg-opacity-10 hover:shadow-md active:bg-opacity-60 ml-4">
              <i class="fas fa-cloud-upload-alt self-center mr-2"></i>
              <span class="lato font-semibold">Cargar</span>
            </button>
          </div>
          <div v-if="uploadFoto3" class="inline-flex text-lg text-white">
            <i v-if="errorUploadFoto3" class="fas fa-exclamation-circle mr-2 select-none"></i>
            <i class="fas fa-spinner self-center animate-spin mr-2 select-none"></i>
            <span class="raleway text-lg font-semibold select-none">Subiendo... ({{foto3Progress}})</span>
            <button v-if="errorUploadFoto3" @click="updateFoto3" class="focus:outline-none">
              <i class="fas fa-redo-alt"></i>
            </button>
          </div>
        </div>
        <div v-if="!changeFoto4" class="contenedor-img rounded-lg mx-0 md:mx-2 my-2">
          <img :src="foto4">
          <input @change="selectFoto4($event)" type="file" name="Foto4Edit" id="Foto4Edit" accept="image/jpeg" class="inputfile">
          <label for="Foto4Edit" class="btn"><span class="text-white font-semibold">Actualizar imagen</span></label>
        </div>
        <div v-if="changeFoto4" class="contenedor-datos">
          <div class="flex">
            <span class="lato text-xl font-semibold text-gray-50 mr-2">{{foto4Edit.name}}</span>
            <button v-if="uploadFoto4===false" @click="{changeFoto4 = false;foto4Edit = null}" class="inline-flex text-lg self-center text-white focus:outline-none rounded-lg transition-all ease-in-out duration-300">
              <i class="fas fa-times self-center"></i>
            </button>
          </div>
          <span class="monserrat text-xl text-gray-200 mt-2 mb-4">{{foto4EditSize}} MB</span>
          <div v-if="!uploadFoto4" class="flex">
            <button @click="{uploadFoto4=true;updateFoto4()}" class="inline-flex text-lg text-white focus:outline-none px-4 py-1 rounded-lg border-2 border-white transition-all ease-in-out duration-300 hover:bg-gray-700 hover:bg-opacity-10 hover:shadow-md active:bg-opacity-60 ml-4">
              <i class="fas fa-cloud-upload-alt self-center mr-2"></i>
              <span class="lato font-semibold">Cargar</span>
            </button>
          </div>
          <div v-if="uploadFoto4" class="inline-flex text-lg text-white">
            <i v-if="errorUploadFoto4" class="fas fa-exclamation-circle mr-2 select-none"></i>
            <i class="fas fa-spinner self-center animate-spin mr-2 select-none"></i>
            <span class="raleway text-lg font-semibold select-none">Subiendo... ({{foto4Progress}})</span>
            <button v-if="errorUploadFoto4" @click="updateFoto4" class="focus:outline-none">
              <i class="fas fa-redo-alt"></i>
            </button>
          </div>
        </div>
        <div v-if="!changeFoto5" class="contenedor-img rounded-lg mx-0 md:mx-2 my-2">
          <img :src="foto5">
          <input @change="selectFoto5($event)" type="file" name="Foto5Edit" id="Foto5Edit" accept="image/jpeg" class="inputfile">
          <label for="Foto5Edit" class="btn"><span class="text-white font-semibold">Actualizar imagen</span></label>
        </div>
        <div v-if="changeFoto5" class="contenedor-datos">
          <div class="flex">
            <span class="lato text-xl font-semibold text-gray-50 mr-2">{{foto5Edit.name}}</span>
            <button v-if="uploadFoto5===false" @click="{changeFoto5 = false;foto5Edit = null}" class="inline-flex text-lg self-center text-white focus:outline-none rounded-lg transition-all ease-in-out duration-300">
              <i class="fas fa-times self-center"></i>
            </button>
          </div>
          <span class="monserrat text-xl text-gray-200 mt-2 mb-4">{{foto5EditSize}} MB</span>
          <div v-if="!uploadFoto5" class="flex">
            <button @click="{uploadFoto5=true;updateFoto5()}" class="inline-flex text-lg text-white focus:outline-none px-4 py-1 rounded-lg border-2 border-white transition-all ease-in-out duration-300 hover:bg-gray-700 hover:bg-opacity-10 hover:shadow-md active:bg-opacity-60 ml-4">
              <i class="fas fa-cloud-upload-alt self-center mr-2"></i>
              <span class="lato font-semibold">Cargar</span>
            </button>
          </div>
          <div v-if="uploadFoto5" class="inline-flex text-lg text-white">
            <i v-if="errorUploadFoto5" class="fas fa-exclamation-circle mr-2 select-none"></i>
            <i class="fas fa-spinner self-center animate-spin mr-2 select-none"></i>
            <span class="raleway text-lg font-semibold select-none">Subiendo... ({{foto5Progress}})</span>
            <button v-if="errorUploadFoto5" @click="updateFoto5" class="focus:outline-none">
              <i class="fas fa-redo-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </el-dialog>
  <div class="mb-48">
      <div id="portada" :style="{backgroundImage: 'linear-gradient(180deg, rgba(231,231,231,0.09007352941176472) 0%, rgba(11,7,5,0.5942752100840336) 56%, rgba(0,0,0,0.8127626050420168) 98%), url(' + portada + ')', backgroundSize: 'cover', backgroundPosition: 'center', height: '30rem' }" class="relative z-10 shadow-xl">
        <div class="absolute top-2 right-2 px-4 sm:px-8 md:px-16 z-50 flex w-full justify-between text-white">
          <div class="flex justify-between">
            <router-link to="/axer-mr-imb/admin" class="focus:outline-none px-4 rounded-full hover:bg-gray-800 transition-all ease-in-out duration-500">
              <i class="fas fa-long-arrow-alt-left mr-2"></i>
              <span class="google-sans">Volver al menú</span>
            </router-link>
          </div>
          <div class="inline-flex">
            <button @click="EditarFotos=true" class="focus:outline-none px-4 rounded-full hover:bg-gray-800 transition-all ease-in-out duration-500">
              <i class="fas fa-pen mr-2"></i>
              <span class="google-sans">Editar</span>
            </button>
          </div>
        </div>
        <div class="flex w-full justify-between absolute bottom-2 px-4 sm:px-8 md:px-16 z-50 text-white">
          <div class="text-left">
            <h2>Casa en {{descripcion1}} </h2>
            <h3 class="font-thin">{{descripcion2}}</h3>
          </div>
          <div class="hidden sm:block text-right">
              <h3>Desde:</h3>
              <h2 class="text-4xl">{{precioFormat}} MXN</h2>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-11">
        <div class="flex flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-2/3 mx-0 sm:ml-4 p-4">
            <div class="text-left">
                <div class="inline-flex border-b-2 mb-4  border-yellow-600">
                  <span class="monserrat text-2xl font-medium inline-block">Detalles</span>
                </div>
              <div>
                <textarea v-model="casa.Descripcion" v-if="editingMode" name="editarDescr" id="editarDescr" class="w-full h-80 lato text-left text-lg text-gray-700" />
                <p v-if="editingMode === false" class="lato text-left text-lg text-gray-700">{{casa.Descripcion}}</p>
              </div>
            </div>
            <div class="mt-12 text-left">
              <div class="inline-flex mb-4 border-b-2 border-yellow-600">
                  <span class="monserrat text-2xl font-medium inline-block">Galería</span>
                </div>
              <div class="flex overflow-x-auto">
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="portada"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto1"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto2"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto3"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto4"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div>
                    <el-image
                      style="width: 176px; height: auto; border-radius: 0.5rem; margin:0 0.5rem 0.25rem 0.5rem; cursor: pointer"
                      :src="foto5"
                      :preview-src-list="srcList">
                      <template #placeholder>
                        <div class="image-slot">
                          Cargando imagen<span class="dot">...</span>
                        </div>
                      </template>
                       <template #error>
                        <div class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </template>
                    </el-image>
                  </div>
              </div>
            </div>
            <div class="mt-12 text-left">
              <div class="inline-flex mb-4 border-b-2 border-yellow-600">
                  <span class="monserrat text-2xl font-medium inline-block">Caraterísitcas destacadas</span>
                </div>
                <div class="px-4 transition-all ease-in-out duration-300">
                  <div v-if="editingMode === false" id="f1">
                    <div @click="expandF1=!expandF1"  id="titulo1" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat1.Nombre}}</span>
                      <button @click="expandF1=!expandF1" class="focus:outline-none">
                        <i :class="expandF1 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo1" :class="expandF1 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF1 ? 'block' : 'hidden'" class="lato text-base">{{feat1.Descripcion}}</p>
                    </div>
                  </div>
                  <div v-if="editingMode" id="f1Edit">
                    <div id="titulo1" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <input v-model="feat1.Nombre" type="text" name="editTitle1" id="editTitle1" class="mr-2 text-lg monserrat font-semibold py-0.5">
                      <button class="focus:outline-none">
                        <i :class="expandF1 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo1" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <textarea v-model="feat1.Descripcion" v-if="editingMode" name="editarDescr" id="editarDescr" class="w-full h-36 lato text-base" />
                    </div>
                  </div>
                  <div v-if="editingMode === false" id="f2">
                    <div @click="expandF2=!expandF2" id="titulo2" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat2.Nombre}}</span>
                      <button @click="expandF2=!expandF2" class="focus:outline-none">
                        <i :class="expandF2 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo2" :class="expandF2 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF2 ? 'block' : 'hidden'" class="lato text-base">{{feat2.Descripcion}}</p>
                    </div>
                  </div>
                  <div v-if="editingMode" id="f2Edit">
                    <div id="titulo2" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <input v-model="feat2.Nombre" type="text" name="editTitle1" id="editTitle1" class="mr-2 text-lg monserrat font-semibold py-0.5">
                      <button class="focus:outline-none">
                        <i :class="expandF2 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo2" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <textarea v-model="feat2.Descripcion" v-if="editingMode" name="editarDescr" id="editarDescr" class="w-full h-36 lato text-base" />
                    </div>
                  </div>
                  <div v-if="editingMode === false" id="f3">
                    <div @click="expandF3=!expandF3"  id="titulo3" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat3.Nombre}}</span>
                      <button @click="expandF3=!expandF3" class="focus:outline-none">
                        <i :class="expandF3 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo3" :class="expandF3 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF3 ? 'block' : 'hidden'" class="lato text-base">{{feat3.Descripcion}}</p>
                    </div>
                  </div>
                  <div v-if="editingMode" id="f3Edit">
                    <div id="titulo3" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <input v-model="feat3.Nombre" type="text" name="editTitle1" id="editTitle1" class="mr-2 text-lg monserrat font-semibold py-0.5">
                      <button class="focus:outline-none">
                        <i :class="expandF3 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo3" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <textarea v-model="feat3.Descripcion" v-if="editingMode" name="editarDescr" id="editarDescr" class="w-full h-36 lato text-base" />
                    </div>
                  </div>
                  <div v-if="editingMode === false" id="f4">
                    <div @click="expandF4=!expandF4"  id="titulo4" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat4.Nombre}}</span>
                      <button @click="expandF4=!expandF4" class="focus:outline-none">
                        <i :class="expandF4 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo4" :class="expandF4 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF4 ? 'block' : 'hidden'" class="lato text-base">{{feat4.Descripcion}}</p>
                    </div>
                  </div>
                  <div v-if="editingMode" id="f4Edit">
                    <div id="titulo4" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <input v-model="feat4.Nombre" type="text" name="editTitle1" id="editTitle1" class="mr-2 text-lg monserrat font-semibold py-0.5">
                      <button class="focus:outline-none">
                        <i :class="expandF4 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo4" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <textarea v-model="feat4.Descripcion" v-if="editingMode" name="editarDescr" id="editarDescr" class="w-full h-36 lato text-base" />
                    </div>
                  </div>
                  <div v-if="editingMode === false" id="f5">
                    <div @click="expandF5=!expandF5"  id="titulo5" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <span class="mr-2 text-lg monserrat font-semibold">{{feat5.Nombre}}</span>
                      <button @click="expandF5=!expandF5" class="focus:outline-none">
                        <i :class="expandF5 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo5" :class="expandF5 ? 'featOpened' : 'featClosed'" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <p :class="expandF5 ? 'block' : 'hidden'" class="lato text-base">{{feat5.Descripcion}}</p>
                    </div>
                  </div>
                  <div v-if="editingMode" id="f5Edit">
                    <div id="titulo5" class="cursor-pointer inline-flex border-b border-gray-200">
                      <i class="fas fa-check-circle self-center text-green-700 mr-2"></i>
                      <input v-model="feat5.Nombre" type="text" name="editTitle1" id="editTitle1" class="mr-2 text-lg monserrat font-semibold py-0.5">
                      <button class="focus:outline-none">
                        <i :class="expandF5 ? 'transform rotate-90' : 'transform rotate-0'" class="fas fa-chevron-right transition-all ease-in-out duration-300"></i>
                      </button>
                    </div>
                    <div id="cuerpo5" class="mt-2 px-4 transition-all ease-in-out duration-300">
                      <textarea v-model="feat5.Descripcion" v-if="editingMode" name="editarDescr" id="editarDescr" class="w-full h-36 lato text-base" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div id="action" class="appearance-none side border-l p-4 sm:pl-4 border-gray-300 whitespace-normal">
            <div v-if="editingMode === false" class="border-b border-gray-200 text-center sm:text-left text-3xl lato font-bold pb-2">
              <div v-if="tipoRuta != 'Renta'">
                <span >Precio: </span> <span class="text-yellow-700">{{precioFormat}} MXN</span>
              </div>
              <div v-if="tipoRuta === 'Renta'">
                <span >Renta: </span> <span class="text-yellow-700">{{precioFormat}} MXN / mes </span>
              </div>
            </div>
            <div v-if="editingMode" class="border-b border-gray-200 text-center sm:text-left text-3xl lato font-bold pb-2">
              <span >Precio: </span> <input v-model="casa.Precio" type="number" name="precioEdit" id="precioEdit" class="lato text-xl text-center py-1 px-4">
            </div>
            <div v-if="editingMode" class="flex flex-col px-4 mt-4 mb-6 text-left justify-start">
              <div class="inline-flex mx-4 mt-3">
                <label for="editSuperficie" class="font-semibold mr-1 self-center">Superficie</label>
                <input v-model="casa.Superficie" type="number" name="editSuperficie" id="editSuperficie" class="py-0.5 w-32 mr-2">
                <span class="font-semibold">m<sup>2</sup></span>
              </div>
              <div class="inline-flex mx-4 mt-3">
                <label for="editTerreno" class="font-semibold mr-1 self-center">Terreno</label>
                <input v-model="casa.Terreno" type="text" name="editTerreno" id="editTerreno" class="py-0.5 w-32 mr-2">
                <span class="font-semibold">mts.</span>
              </div>
              <div class="inline-flex mx-4 mt-3">
                <label for="editHabs" class="font-semibold mr-1 self-center">Habitaciones</label>
                <input v-model="casa.Habitaciones" type="text" name="editHabs" id="editHabs" class="py-0.5 w-32 mr-2">
              </div>
              <div class="inline-flex mx-4 mt-3">
                <label for="editBaths" class="font-semibold mr-1 self-center">Baños</label>
                <input v-model="casa.Baths" type="text" name="editBaths" id="editBaths" class="py-0.5 w-32 mr-2">
              </div>
            </div>
            <div v-if="editingMode === false" class="flex flex-col px-4 mt-4 mb-6 text-left justify-start">
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-ruler mr-2 self-center"></i>
                <span class="font-semibold mr-2">Superficie: </span>
                <span>{{casa.Superficie}} m<sup>2</sup></span>
              </div>
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-ruler-combined mr-2 self-center"></i>
                <span class="font-semibold mr-2">Dimensiones de terreno: </span>
                <span>{{casa.Terreno}} mts.</span>
              </div>
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-bed mr-2 self-center"></i>
                <span class="font-semibold mr-2">Habitaciones: </span>
                <span>{{casa.Habitaciones}}</span>
              </div>
              <div class="inline-flex mx-4">
                <i class="text-green-700 w-5 fas fa-toilet mr-2 self-center"></i>
                <span class="font-semibold mr-2">Baños: </span>
                <span>{{casa.Baths}}</span>
              </div>
              <div v-if="casa.Vendido" class="inline-flex mx-4">
                <span class="font-semibold mr-2 text-green-700 text-lg">Vendido</span>
              </div>
              <div v-if="!casa.Vendido" class="inline-flex mx-4">
                <span class="font-semibold mr-2 text-red-700 text-lg">No vendido</span>
              </div>
            </div>
            <div class="mb-6">
              <p class="text-gray-700 monserrat text-base">Aprovecha la oportunidad de estrenar la casa de tus sueños. <br>Contamos con planes de pago a tu medida<span><sup>*</sup></span>. ¡Descrubre lo sencillo que es!</p>
            </div>
            <button class="focus:outline-none inline-flex justify-center text-lg w-full uppercase text-center font-semibold bg-yellow-600 text-white rounded-lg px-8 py-2">
              <span class="mr-4">¡Quiero ésta casa!</span>
              <i class="fas fa-chevron-right self-center"></i>
            </button>
            <div class="border-t border-gray-200 inline-flex mt-4">
              <span class="text-xs text-gray-400 text-left">
                * Financiamiento a través de crédito ISSFAM, FOVISSTE, INFONAVIT e instituciones bancarias participantes. Aplican restricciones.
              </span>
            </div>
            <div id="opciones-edicion" class="mt-8 py-4 border-t-2 border-yellow-600">
              <h4 class="google-sans inline-flex text-left text-4xl font-semibold border-b border-gray-200">Opciones</h4>
              <div id="menu-opciones" class="mt-6 flex flex-col justify-start">
                <button v-if="editingMode === false" @click="editingMode=true" class="select-none flex justify-center text-center my-2 px-4 py-1 rounded-full text-blue-600 bg-gray-100 focus:outline-none active:outline-none hover:bg-gray-200 hover:shadow-md active:bg-gray-50 transition-all ease-in-out duration-500">
                  <i class="fas fa-pen self-center mr-2 select-none"></i>
                  <span class="raleway text-lg font-semibold text-gray-700 select-none">Editar información</span>
                </button>
                <button v-if="editingMode" @click="uploadFracc" class="select-none flex justify-center text-center my-2 px-4 py-1 rounded-full text-green-800 bg-green-100 focus:outline-none active:outline-none hover:bg-green-200 hover:shadow-md active:bg-green-50 transition-all ease-in-out duration-500">
                  <i v-if="actualizando" class="fas fa-spinner self-center animate-spin mr-2 select-none"></i>
                  <i v-if="!actualizando" class="fas fa-check self-center mr-2 select-none"></i>
                  <span v-if="!actualizando" class="raleway text-lg font-semibold select-none">Actualizar</span>
                  <span v-if="actualizando" class="raleway text-lg font-semibold select-none">Un momento...</span>
                </button>
                <button @click="EditarFotos=true" class="select-none flex justify-center text-center my-2 px-4 py-1 rounded-full text-purple-600 bg-gray-100 focus:outline-none active:outline-none hover:bg-gray-200 hover:shadow-md active:bg-gray-50 transition-all ease-in-out duration-500">
                  <i class="fas fa-images self-center mr-2 select-none"></i>
                  <span class="raleway text-lg font-semibold text-gray-700 select-none">Editar fotos</span>
                </button>
                <button v-if="!casa.Vendido" @click="toggleVendido" class="select-none flex justify-center text-center my-2 px-4 py-1 rounded-full text-green-600 bg-gray-100 focus:outline-none active:outline-none hover:bg-gray-200 hover:shadow-md active:bg-gray-50 transition-all ease-in-out duration-500">
                  <i class="fas fa-check-circle self-center mr-2 select-none"></i>
                  <span class="raleway text-lg font-semibold text-gray-700 select-none">Marcar como vendido</span>
                </button>
                <button v-if="casa.Vendido" @click="toggleVendido" class="select-none flex justify-center text-center my-2 px-4 py-1 rounded-full text-red-600 bg-red-100 focus:outline-none active:outline-none hover:bg-red-200 hover:shadow-md active:bg-red-50 transition-all ease-in-out duration-500">
                  <i class="fas fa-times self-center mr-2 select-none"></i>
                  <span class="raleway text-lg font-semibold text-red-700 select-none">Marcar como no vendido</span>
                </button>
                <!-- Eliminar casa -->
                <button @click="eliminarCasa" class="select-none flex justify-center text-center my-2 px-4 py-1 rounded-full text-red-600 bg-red-100 focus:outline-none active:outline-none hover:bg-red-200 hover:shadow-md active:bg-red-50 transition-all ease-in-out duration-500">
                  <i class="fas fa-times self-center mr-2 select-none"></i>
                  <span class="raleway text-lg font-semibold text-red-700 select-none">Eliminar casa</span>
                </button>
              </div>
              <div id="asistencia" class="my-4 bg-green-100 text-center rounded-lg w-full py-4">
                <span class="text-xl text-green-800 font-semibold mb-4">Obtener asistencia técnica</span>
                <div id="ruta" class="text-left px-4 w-full">
                  <span class="text-base google-sans text-left text-green-700 mb-3">Por favor, anexe la siguiente información a la solicitud de ayuda sobre ésta casa:</span>
                  <div class="h-10 mb-0.5 flex pb-0.5">
                    <el-popover
                      placement="top-start"
                      title="Copiar ruta"
                      :width="200"
                      trigger="hover"
                      content="Click para copiar"
                    >
                      <template #reference>
                        <button @click="copiar('rutaText')" class="mr-1 focus:outline-none self-start active:bg-green-700 active:text-white transition-all ease-in-out duration-300 p-1 rounded-sm">
                          <i class="far fa-copy"></i>
                        </button>
                      </template>
                    </el-popover>
                    <div class="overflow-x-auto overflow-y-hidden px-1">
                      <p id="rutaText" class="monserrat text-gray-500 font-semibold">{{ruta}}</p>
                    </div>
                  </div>
                  <div v-if="copiado" class="px-2 bg-white font-semibold rounded-md">
                    <i class="far fa-check-circle self-center mr-2 text-green-700 font-semibold"></i>
                    <span class="text-gray-600">¡Copiado!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
export default {
  name: 'DetallesCasa',
  data () {
    return {
      tipoRuta: '',
      ruta: '',
      copiado: false,
      portadaProgress: '',
      foto1Progress: '',
      foto2Progress: '',
      foto3Progress: '',
      foto4Progress: '',
      foto5Progress: '',
      errorUploadPortada: false,
      errorUploadFoto1: false,
      errorUploadFoto2: false,
      errorUploadFoto3: false,
      errorUploadFoto4: false,
      errorUploadFoto5: false,
      EditarFotos: false,
      imagenPortada: null,
      changePortada: false,
      changeFoto1: false,
      changeFoto2: false,
      changeFoto3: false,
      changeFoto4: false,
      changeFoto5: false,
      uploadPortada: false,
      uploadFoto1: false,
      uploadFoto2: false,
      uploadFoto3: false,
      uploadFoto4: false,
      uploadFoto5: false,
      foto1Edit: null,
      foto2Edit: null,
      foto3Edit: null,
      foto4Edit: null,
      foto5Edit: null,
      portadaSize: null,
      foto1EditSize: null,
      foto2EditSize: null,
      foto3EditSize: null,
      foto4EditSize: null,
      foto5EditSize: null,
      editingMode: false,
      actualizando: false,
      idEstado: '',
      idCiudad: '',
      idCasa: '',
      UbicacionCasa: '',
      ciudad: '',
      frc: '',
      descripcion1: '',
      descripcion2: '',
      precioFormat: '',
      enFraccionamiento: null,
      expandF1: true,
      expandF2: true,
      expandF3: true,
      expandF4: true,
      expandF5: true,
      idFraccFrom: null,
      srcList: [],
      casa: {
        Baths: null,
        Descripcion: null,
        Habitaciones: null,
        Precio: null,
        Superficie: null,
        Terreno: null,
        Vendido: null
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
      portada: '',
      foto1: '',
      foto2: '',
      foto3: '',
      foto4: '',
      foto5: ''
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
    const storage = firebase.storage().ref()
    console.log(`this.$route.params.idFrc = ${this.$route.params.idFrc}`)
    console.log(`Ejecutando this.$route.params.enFraccionamiento = ${this.$route.params.enFraccionamiento}`)
    if (this.$route.params.idFrc !== undefined) {
      this.$route.params.enFraccionamiento = 'si'
      this.enFraccionamiento = true
    } else {
      this.$route.params.enFraccionamiento = 'no'
      this.enFraccionamiento = false
    }
    if (this.enFraccionamiento === true) {
      console.log(`Ejecutando this.enFraccionamiento = ${this.enFraccionamiento}`)
      this.idEstado = this.$route.params.idEst
      this.idCiudad = this.$route.params.idCd
      this.enFraccionamiento = true
      this.idFraccFrom = this.$route.params.idFrc
      this.idCasa = this.$route.params.idCasa
      this.UbicacionCasa = this.$route.params.frc + '; ' + this.$route.params.ubicacion
      this.descripcion2 = this.$route.params.ubicacion
      this.ruta = `Ubicaciones/${this.idEstado}/Ciudades/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/casas/${this.idCasa}`
      /* obtener datos de la casa */
      firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).get().then(fracc => {
        this.descripcion1 = fracc.data().Nombre
        this.descripcion2 = `${fracc.data().Ubicacion.Ciudad}, ${fracc.data().Ubicacion.Estado}`
      })
      const db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).collection('casas').doc(this.idCasa)
      db.get().then(casa => {
        this.casa = casa.data()
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        this.precioFormat = formatter.format(casa.data().Precio)
      }).then(() => {
        db.collection('features').doc(this.idCasa + 'F1').get().then(f1 => {
          this.feat1 = f1.data()
        })
        db.collection('features').doc(this.idCasa + 'F2').get().then(f2 => {
          this.feat2 = f2.data()
        })
        db.collection('features').doc(this.idCasa + 'F3').get().then(f3 => {
          this.feat3 = f3.data()
        })
        db.collection('features').doc(this.idCasa + 'F4').get().then(f4 => {
          this.feat4 = f4.data()
        })
        db.collection('features').doc(this.idCasa + 'F5').get().then(f5 => {
          this.feat5 = f5.data()
        })
      }).then(() => {
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/portada/portada.jpg`).getDownloadURL().then(url => {
          this.portada = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_1.jpg`).getDownloadURL().then(url => {
          this.foto1 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_2.jpg`).getDownloadURL().then(url => {
          this.foto2 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_3.jpg`).getDownloadURL().then(url => {
          this.foto3 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_4.jpg`).getDownloadURL().then(url => {
          this.foto4 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_5.jpg`).getDownloadURL().then(url => {
          this.foto5 = url
          this.srcList.push(url)
        })
      })
    }
    if (this.enFraccionamiento === false) {
      console.log(`Ejecutando this.enFraccionamiento = ${this.enFraccionamiento}`)
      this.enFraccionamiento = false
      this.idEstado = this.$route.params.idEst
      this.idCiudad = this.$route.params.idCd
      this.idCasa = this.$route.params.idCasa
      var db = null
      firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).get().then(cd => {
        this.descripcion1 = cd.data().Nombre
      })
      if (this.$route.params.tipo === 'venta') {
        this.tipoRuta = 'Venta'
        this.ruta = `Ubicaciones/${this.idEstado}/Ciudades/${this.idCiudad}/Venta/${this.idCasa}`
        db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Venta').doc(this.idCasa)
      }
      if (this.$route.params.tipo === 'renta') {
        this.tipoRuta = 'Renta'
        this.ruta = `Ubicaciones/${this.idEstado}/Ciudades/${this.idCiudad}/Renta/${this.idCasa}`
        db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Renta').doc(this.idCasa)
      }
      db.get().then(casa => {
        this.casa = casa.data()
        this.descripcion2 = casa.data().Direccion
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        this.precioFormat = formatter.format(casa.data().Precio)
      }).then(() => {
        db.collection('features').doc(this.idCasa + 'F1').get().then(f1 => {
          this.feat1 = f1.data()
        })
        db.collection('features').doc(this.idCasa + 'F2').get().then(f2 => {
          this.feat2 = f2.data()
        })
        db.collection('features').doc(this.idCasa + 'F3').get().then(f3 => {
          this.feat3 = f3.data()
        })
        db.collection('features').doc(this.idCasa + 'F4').get().then(f4 => {
          this.feat4 = f4.data()
        })
        db.collection('features').doc(this.idCasa + 'F5').get().then(f5 => {
          this.feat5 = f5.data()
        })
      }).then(() => {
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/portada/portada.jpg`).getDownloadURL().then(url => {
          this.portada = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_1.jpg`).getDownloadURL().then(url => {
          this.foto1 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_2.jpg`).getDownloadURL().then(url => {
          this.foto2 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_3.jpg`).getDownloadURL().then(url => {
          this.foto3 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_4.jpg`).getDownloadURL().then(url => {
          this.foto4 = url
          this.srcList.push(url)
        })
        storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_5.jpg`).getDownloadURL().then(url => {
          this.foto5 = url
          this.srcList.push(url)
        })
      })
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('¿Deseas cerrar ésta ventana?')
        .then(_ => {
          done()
          location.reload()
        })
        .catch(_ => {})
    },
    copiar (id) {
      var aux = document.createElement('input')
      aux.setAttribute('value', document.getElementById(id).innerHTML)
      document.body.appendChild(aux)
      aux.select()
      document.execCommand('copy')
      this.copiado = true
      document.body.removeChild(aux)
      setTimeout(() => {
        this.copiado = false
      }, 2000)
    },
    toTop () {
      window.scrollTo(0, 0)
    },
    uploadFracc () {
      this.actualizando = true
      if (this.enFraccionamiento === true) {
        const db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).collection('casas').doc(this.idCasa)
        db.set(this.casa).then(() => {
          db.collection('features').doc(this.idCasa + 'F1').set(this.feat1).then(() => {
            db.collection('features').doc(this.idCasa + 'F2').set(this.feat2).then(() => {
              db.collection('features').doc(this.idCasa + 'F3').set(this.feat3).then(() => {
                db.collection('features').doc(this.idCasa + 'F4').set(this.feat4).then(() => {
                  db.collection('features').doc(this.idCasa + 'F5').set(this.feat5).then(() => {
                    this.$message({
                      message: 'Datos actualizados',
                      type: 'success',
                      offset: 35
                    })
                    this.actualizando = false
                    location.reload()
                  })
                })
              })
            })
          })
        })
      }
      if (this.enFraccionamiento === false) {
        var db = null
        if (this.tipoRuta === 'Venta') {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Venta').doc(this.idCasa)
        }
        if (this.tipoRuta === 'Renta') {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Renta').doc(this.idCasa)
        }
        db.set(this.casa).then(() => {
          db.collection('features').doc(this.idCasa + 'F1').set(this.feat1).then(() => {
            db.collection('features').doc(this.idCasa + 'F2').set(this.feat2).then(() => {
              db.collection('features').doc(this.idCasa + 'F3').set(this.feat3).then(() => {
                db.collection('features').doc(this.idCasa + 'F4').set(this.feat4).then(() => {
                  db.collection('features').doc(this.idCasa + 'F5').set(this.feat5).then(() => {
                    this.$message({
                      message: 'Datos actualizados',
                      type: 'success',
                      offset: 35
                    })
                    this.actualizando = false
                    location.reload()
                  })
                })
              })
            })
          })
        })
      }
    },
    toggleVendido () {
      this.actualizando = true
      if (this.enFraccionamiento === true) {
        this.casa.Vendido = !this.casa.Vendido
        const db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).collection('casas').doc(this.idCasa)
        db.set(this.casa).then(() => {
          location.reload()
        })
      }
      if (this.enFraccionamiento === false) {
        this.casa.Vendido = !this.casa.Vendido
        var db = null
        if (this.tipoRuta === 'Venta') {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Venta').doc(this.idCasa)
        }
        if (this.tipoRuta === 'Renta') {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Renta').doc(this.idCasa)
        }
        db.set(this.casa).then(() => {
          location.reload()
        })
      }
    },
    selectPortada (e) {
      this.imagenPortada = e.target.files[0]
      this.portadaSize = (this.imagenPortada.size / (1024 * 1024)).toFixed(2)
      this.changePortada = true
    },
    updatePortada () {
      this.errorUploadPortada = false
      const storage = firebase.storage().ref()
      var ruta = null
      if (this.enFraccionamiento === true) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/portada/portada.jpg`)
      }
      if (this.enFraccionamiento === false) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/portada/portada.jpg`)
      }
      const metadata = { contentType: 'image/jpeg' }
      ruta.put(this.imagenPortada, metadata).on('state_changed', snapshot => {
        this.portadaProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo portada: ' + this.portadaProgress)
      }, error => {
        console.log(error.message)
        this.errorUploadPortada = true
      },
      () => {
        ruta.getDownloadURL().then(url => {
          this.portada = url
        })
        this.uploadPortada = false
        this.changePortada = false
        this.imagenPortada = null
      })
    },
    selectFoto1 (e) {
      this.foto1Edit = e.target.files[0]
      this.foto1EditSize = (this.foto1Edit.size / (1024 * 1024)).toFixed(2)
      this.changeFoto1 = true
    },
    updateFoto1 () {
      this.errorUploadFoto1 = false
      var ruta = null
      const storage = firebase.storage().ref()
      if (this.enFraccionamiento === true) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_1.jpg`)
      }
      if (this.enFraccionamiento === false) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_1.jpg`)
      }
      const metadata = { contentType: 'image/jpeg' }
      ruta.put(this.foto1Edit, metadata).on('state_changed', snapshot => {
        this.foto1Progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo foto 1: ' + this.Foto1)
      }, error => {
        console.log(error.message)
        this.errorUploadFoto1 = true
      },
      () => {
        ruta.getDownloadURL().then(url => {
          this.foto1 = url
        })
        this.uploadFoto1 = false
        this.changeFoto1 = false
        this.foto1Edit = null
      })
    },
    selectFoto2 (e) {
      this.foto2Edit = e.target.files[0]
      this.foto2EditSize = (this.foto2Edit.size / (1024 * 1024)).toFixed(2)
      this.changeFoto2 = true
    },
    updateFoto2 () {
      this.errorUploadFoto2 = false
      const storage = firebase.storage().ref()
      var ruta = null
      if (this.enFraccionamiento === true) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_2.jpg`)
      }
      if (this.enFraccionamiento === false) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_2.jpg`)
      }
      const metadata = { contentType: 'image/jpeg' }
      ruta.put(this.foto2Edit, metadata).on('state_changed', snapshot => {
        this.foto2Progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo foto 1: ' + this.Foto2)
      }, error => {
        console.log(error.message)
        this.errorUploadFoto2 = true
      },
      () => {
        ruta.getDownloadURL().then(url => {
          this.foto2 = url
        })
        this.uploadFoto2 = false
        this.changeFoto2 = false
        this.foto2Edit = null
      })
    },
    selectFoto3 (e) {
      this.foto3Edit = e.target.files[0]
      this.foto3EditSize = (this.foto3Edit.size / (1024 * 1024)).toFixed(2)
      this.changeFoto3 = true
    },
    updateFoto3 () {
      this.errorUploadFoto3 = false
      const storage = firebase.storage().ref()
      var ruta = null
      if (this.enFraccionamiento === true) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_3.jpg`)
      }
      if (this.enFraccionamiento === false) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_3.jpg`)
      }
      const metadata = { contentType: 'image/jpeg' }
      ruta.put(this.foto3Edit, metadata).on('state_changed', snapshot => {
        this.foto3Progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo foto 3: ' + this.Foto3.name)
      }, error => {
        console.log(error.message)
        this.errorUploadFoto3 = true
      },
      () => {
        ruta.getDownloadURL().then(url => {
          this.foto3 = url
        })
        this.uploadFoto3 = false
        this.changeFoto3 = false
        this.foto3Edit = null
      })
    },
    selectFoto4 (e) {
      this.foto4Edit = e.target.files[0]
      this.foto4EditSize = (this.foto4Edit.size / (1024 * 1024)).toFixed(2)
      this.changeFoto4 = true
    },
    updateFoto4 () {
      this.errorUploadFoto4 = false
      const storage = firebase.storage().ref()
      var ruta = null
      if (this.enFraccionamiento === true) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_4.jpg`)
      }
      if (this.enFraccionamiento === false) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_4.jpg`)
      }
      const metadata = { contentType: 'image/jpeg' }
      ruta.put(this.foto4Edit, metadata).on('state_changed', snapshot => {
        this.foto4Progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo foto 4: ' + this.Foto4.name)
      }, error => {
        console.log(error.message)
        this.errorUploadFoto4 = true
      },
      () => {
        ruta.getDownloadURL().then(url => {
          this.foto4 = url
        })
        this.uploadFoto4 = false
        this.changeFoto4 = false
        this.foto4Edit = null
      })
    },
    selectFoto5 (e) {
      this.foto5Edit = e.target.files[0]
      this.foto5EditSize = (this.foto5Edit.size / (1024 * 1024)).toFixed(2)
      this.changeFoto5 = true
    },
    updateFoto5 () {
      this.errorUploadFoto5 = false
      const storage = firebase.storage().ref()
      var ruta = null
      if (this.enFraccionamiento === true) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}/galeria/foto_5.jpg`)
      }
      if (this.enFraccionamiento === false) {
        ruta = storage.child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}/galeria/foto_5.jpg`)
      }
      const metadata = { contentType: 'image/jpeg' }
      ruta.put(this.foto5Edit, metadata).on('state_changed', snapshot => {
        this.foto5Progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
        console.log('Subiendo foto 5: ' + this.Foto5.name)
      }, error => {
        console.log(error.message)
        this.errorUploadFoto5 = true
      },
      () => {
        ruta.getDownloadURL().then(url => {
          this.foto5 = url
        })
        this.uploadFoto5 = false
        this.changeFoto5 = false
        this.foto5Edit = null
      })
    },
    eliminarCasa () {
      this.$confirm('Ésto eliminará permanentemente ésta casa ¿Deseas continuar?', 'Eliminar casa', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      }).then(() => {
        /* Borrar aquí */
        var db = null
        if (this.enFraccionamiento === true) {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').doc(this.idFraccFrom).collection('casas').doc(this.idCasa)
        }
        if (this.enFraccionamiento === false) {
          db = firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection(this.tipoRuta).doc(this.idCasa)
        }
        db.collection('features').get().then(conjunto => {
          conjunto.forEach(feature => {
            const id = feature.ref.id
            db.collection('features').doc(id).delete()
          })
        }).then(() => {
          db.delete().then(() => {
            var carpeta = null
            if (this.enFraccionamiento === true) {
              carpeta = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Fraccionamientos/${this.idFraccFrom}/${this.idCasa}`)
            }
            if (this.enFraccionamiento === false) {
              carpeta = firebase.storage().ref().child(`Ubicaciones/${this.idEstado}/${this.idCiudad}/Casas/${this.tipoRuta}/${this.idCasa}`)
            }
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
                        this.$router.push('/axer-mr-imb/admin')
                      })
                    })
                  })
                })
              })
            })
          })
        })
        this.$message({
          type: 'success',
          message: 'Se eliminó la casa seleccionada'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Se canceló la operación'
        })
      })
    }
  }
}
</script>

<style scoped>
  #portada{
    background: linear-gradient(180deg, rgba(231,231,231,0.09007352941176472) 0%, rgba(11,7,5,0.5942752100840336) 56%, rgba(0,0,0,0.8127626050420168) 98%);
  }
  #action {
    height: 100%;
  }
  #rutaText {
    white-space: normal;
  }
  @media (min-width: 640px) {
    .side {
      width: 33.333333%;
    }
  }
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .contenedor-datos {
    width: 426px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #E8CBC0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .contenedor-img {
    position: relative;
    width: 426px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contenedor-img:before {
  /* empty pseudo */
  content: '';
  /* start transparent, include a transition bcuz */
  opacity: 1;
  transition: opacity 0.5s ease;
  /* covers the whole div */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
/* .contenedor-img:hover:before {
  opacity: 1;
} */
.contenedor-img img {
  position: absolute;
  object-fit: cover;
  display: block;
  width: inherit;
  height: inherit;
  z-index: 1;
}

.btn {
  opacity: 1;
  transition: opacity 0.5s ease;
  position: relative;
  padding: 0 40px;
  height: 40px;
  line-height: 40px;
  max-width: 260px;
  cursor: pointer;
  z-index: 3;
  font-size: 1rem;
  border-width: 2px;
  border-color: #f0f0f0;
  border-radius: 5px;
}
.contenedor-img:hover .btn {
  opacity: 1;
}
.featOpened {
  max-height: 400px;
}
.featClosed {
  height: 0px;
  opacity: 0;
}
</style>
