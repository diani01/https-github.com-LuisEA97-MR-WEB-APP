<template>
  <el-dialog
    title="Editar datos del lote"
    v-model="editarLote"
    :width="anchoL"
    destroy-on-close
    center
    @close="closing()"
    top="0"
  >
    <div class="block justify-items-center mx-auto overflow-y-auto">
      <div id="step1" v-show="stepEditar===1">
        <div id="datos-generales" class="pb-2">
          <div id="ubicacion" class="block pb-1 md:flex border-b border-gray-100">
            <h4 class="block md:inline-flex px-0 md:pr-2 text-gray-800 text-base">
              <span class="pr-1 font-semibold">Nombre: {{EditLoteObj.Nombre}} </span>
            </h4>
            <h4 class="block md:inline-flex px-0 md:pl-2 text-gray-800 text-base">
              <span class="pr-1 font-semibold">Ubicado en: </span>Fraccionamiento {{nombreFrc}}, <span class="font-semibold"> {{manzanaNombre}}</span>
            </h4>
            <h4 class="inline-flex pr-4 md:px-4 text-gray-800 text-base font-semibold">
              Precio:
            </h4>
            <currency-input
              v-model="EditLoteObj.Precio"
              :options="{
                currency: 'MXN',
                distractionFree: false,
                locale: 'es-419',
                valueRange: {min:0, max:9999999999}
                }"
              class="border-gray-200 px-3 py-0.5 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150 self-center"
            />
          </div>
        </div>
        <div id="dimensiones" class="py-1 block px-0 md:px-4">
          <h4 class="text-xl text-center">Dimensiones y colindancias</h4>
          <h4 class="text-gray-800 font-semibold">Al norte</h4>
          <div id="norte" class="border-t py-2 border-gray-100 block md:flex w-full">
            <div id="norte-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
              <label for="alNorte" class="block uppercase text-gray-700 text-xs font-bold"
                >Dimensiones (metros):</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Norte.Dimension"
                type="number"
                name="alNorte"
                id="alNorte"
                placeholder="Al norte mide:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
            <div id="norte-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
              <label for="colNorte" class="block uppercase text-gray-700 text-xs font-bold"
                >Colindancias:</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Norte.Colindancia"
                type="text"
                name="colNorte"
                id="colNorte"
                placeholder="Y colinda con:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <h4 class="text-gray-800 font-semibold">Al sur</h4>
          <div id="sur" class="border-t py-2 border-gray-100 block md:flex w-full">
            <div id="sur-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
              <label for="alSur" class="block uppercase text-gray-700 text-xs font-bold"
                >Dimensiones (metros):</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Sur.Dimension"
                type="number"
                name="alSur"
                id="alSur"
                placeholder="Al sur mide:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
            <div id="sur-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
              <label for="colSur" class="block uppercase text-gray-700 text-xs font-bold"
                >Colindancias:</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Sur.Colindancia"
                type="text"
                name="colSur"
                id="colSur"
                placeholder="Y colinda con:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <h4 class="text-gray-800 font-semibold">Al este</h4>
          <div id="este" class="border-t py-2 border-gray-100 block md:flex w-full">
            <div id="este-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
              <label for="alEste" class="block uppercase text-gray-700 text-xs font-bold"
                >Dimensiones (metros):</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Este.Dimension"
                type="number"
                name="alEste"
                id="alEste"
                placeholder="Al este mide:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
            <div id="este-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
              <label for="colEste" class="block uppercase text-gray-700 text-xs font-bold"
                >Colindancias:</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Este.Colindancia"
                type="text"
                name="colEste"
                id="colEste"
                placeholder="Y colinda con:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <h4 class="text-gray-800 font-semibold">Al oeste</h4>
          <div id="oeste" class="border-t py-2 border-gray-100 block md:flex w-full">
            <div id="oeste-dim" class="w-full md:w-1/3 px-0 md:px-2 my-4">
              <label for="alOeste" class="block uppercase text-gray-700 text-xs font-bold"
                >Dimensiones (metros):</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Oeste.Dimension"
                type="number"
                name="alOeste"
                id="alOeste"
                placeholder="Al oeste mide:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
            <div id="oeste-col" class="w-full md:w-2/3 px-0 md:px-2 my-4">
              <label for="colOeste" class="block uppercase text-gray-700 text-xs font-bold"
                >Colindancias:</label
              >
              <input
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Oeste.Colindancia"
                type="text"
                name="colOeste"
                id="colOeste"
                placeholder="Y colinda con:"
                class="border-gray-200 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <h4 class="text-gray-800 font-semibold">Superficie total</h4>
          <div id="total" class="border-t py-2 border-gray-100 block md:flex w-full">
            <div id="total-dim" class="w-full px-0 md:px-2">
              <span class="text-sm font-bold text-gray-800">Total: </span>
              <input
                type="number"
                @input="checkBeforeUpdate()"
                v-model="EditLoteObj.Superficie"
                name="superficie"
                id="superficie"
                class="border-gray-200 px-1 mx-2 py-0.5 w-24 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150 self-center"
              />
              <span class="text-sm font-bold text-gray-800">m<sup>2</sup>, precio: {{EditLoteObj.Precio}}</span>
            </div>
            <el-checkbox v-model="EditLoteObj.Vendido">Actualmente vendido</el-checkbox>
          </div>
        </div>
      </div>
      <div id="step2" v-show="stepEditar===2">
        <div class="text-center items-center justify-center">
          <h3>Editar descripción del lote</h3>
          <div id="descripcion" class="w-full px-0 md:px-2 my-4">
              <label for="descripcionL" class="block uppercase text-gray-700 text-xs font-bold mb-4">Escribe una descripción clara y atractiva para éste lote:</label>
              <textarea
              v-model="EditLoteObj.Descripcion"
              type="text"
              name="descripcionL"
              id="descripcionL"
              placeholder="Escribe la descripción aquí"
              class="border-gray-200 px-3 py-2 h-96 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              />
            </div>
        </div>
      </div>
    </div>
    <div id="buttons-holder">
      <span class="dialog-footer flex justify-around pt-4">
        <button
          v-if="stepEditar===1"
          @click="editarLote = !editarLote"
          class="items-center justify-center flex w-1/3 md:w-1/4 rounded-lg py-2 px-4 transition-all duration-500 ease-in-out bg-blue-700 text-white font-semibold text-xs hover:bg-blue-800 hover:shadow-lg hover:scale-110"
        >
          <i class="fas fa-arrow-circle-left pr-2 self-center"></i>
          <span class="text-sm self-stretch">Cancelar</span>
        </button>
        <button
          v-if="stepEditar===2"
          @click="stepEditar--"
          class="items-center justify-center flex w-1/3 md:w-1/4 rounded-lg py-2 px-4 transition-all duration-500 ease-in-out bg-blue-700 text-white font-semibold text-xs hover:bg-blue-800 hover:shadow-lg hover:scale-110"
        >
          <i class="fas fa-arrow-circle-left pr-2 self-center"></i>
          <span class="text-sm self-stretch">Atrás</span>
        </button>
        <button
          v-if="stepEditar===1"
          @click="stepEditar++"
          :disabled="notUpdate"
          :class="[
            notUpdate
              ? 'bg-gray-200 text-gray-400'
              : 'bg-green-700 hover:bg-green-800 hover:shadow-lg hover:scale-110 text-white',
          ]"
          class="items-center justify-center w-1/3 md:w-1/4 flex rounded-lg py-2 px-4 transition-all duration-500 ease-in-out font-semibold text-xs"
        >
          <span class="text-sm font-semibold self-center">Siguiente</span>
          <i class="fas fa-arrow-right pl-2 self-center"></i>
        </button>
        <button
          v-if="stepEditar===2"
          @click="updateLote()"
          :disabled="notUpdate"
          :class="[
            notUpdate
              ? 'bg-gray-200 text-gray-400'
              : 'bg-green-700 hover:bg-green-800 hover:shadow-lg hover:scale-110 text-white',
          ]"
          class="items-center justify-center w-1/3 md:w-1/4 flex rounded-lg py-2 px-4 transition-all duration-500 ease-in-out font-semibold text-xs"
        >
          <i class="fas fa-sync-alt pr-2 self-center"></i>
          <span class="text-sm font-semibold self-center">Actualizar</span>
        </button>
      </span>
    </div>
  </el-dialog>
  <el-dialog
    title="Fotografías del lote"
    v-model="EditImages"
    :width="anchoL"
    :before-close="handleClose"
    fullscreen="true"
    destroy-on-close
    center
    @close="closingImg()"
    top="0"
  >
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
  <el-dialog
      title="Eliminar definitivamente"
      v-model="EliminarLote"
      :width="ancho"
      destroy-on-close
      center>
        <div class="justify-center items-center text-center">
          <span class="overflow-ellipsis">¿Desea eliminar definitivamente el lote?</span>
        </div>
        <div class="text-center">
          <strong class="text-gray-800 overflow-ellipsis">Nota: Si lo hace, <br>se eliminará definitivamente el lote seleccionado.<br><br>ÉSTA ACCIÓN ES IRREVERSIBLE Y <br>PODRÍA CONDUCIR A ERRORES EN LA NUMERACIÓN DE LOS LOTES</strong>
        </div>
        <div class="mt-12 mb-4 text-center">
          <span class="overflow-ellipsis">Para continuar, escribe el ID del lote: <strong class="text-gray-800">{{idLote}}</strong></span>
          <input type="text" autocomplete="off" name="idmzn" v-model="verificarIDL" @input="verificarIDLote" :placeholder="idLote" class="mt-2 w-full placeholder-gray-500 placeholder-opacity-50 border border-gray-500 rounded-md py-1 font-semibold text-red-800">
        </div>
        <div id="alerta" class="hidden">
          <el-alert
            title="El ID del lote debe ser en mayúsculas"
            type="error"
            :closable="false"
            show-icon>
          </el-alert>
        </div>
        <template #footer>
          <span class="dialog-footer flex justify-around">
            <button @click="ocultarTodo" class="flex w-5/12 rounded-lg py-2 px-4 transition-all duration-500 ease-in-out bg-blue-700 text-white font-semibold text-xs hover:bg-blue-800 hover:shadow-lg hover:scale-110">
              <i class="fas fa-arrow-circle-left pr-2 self-center"></i>
              <span class="text-sm self-center">Cancelar</span>
            </button>
            <button :disabled="isDisabled" @click="borrarLote" :class="[isDisabled ? 'bg-gray-200 text-gray-400' : 'bg-red-700 hover:bg-red-800 hover:shadow-lg hover:scale-110 text-white']" class="disabled:opacity-50 w-5/12 flex rounded-lg py-2 px-4 transition-all duration-500 ease-in-out font-semibold text-xs">
              <i class="fas fa-trash pr-2 self-center"></i>
              <span class="text-sm font-semibold self-center">Eliminar</span>
            </button>
          </span>
        </template>
    </el-dialog>
  <el-table :data="Lote" style="width: 100%" max-height="250">
    <el-table-column fixed label="Estatus" width="120">
      <div class="flex">
        <span
          :class="[Lote[0].Vendido ? 'text-green-700' : 'text-red-700']"
          class="font-semibold"
          >{{ Lote[0].Status }}</span
        >
      </div>
    </el-table-column>
    <el-table-column label="Precio" width="120">
      <div class="flex">
        <span class="font-semibold text-green-700">{{ Lote[0].precioFormateado }}</span>
      </div>
    </el-table-column>
    <el-table-column label="Norte" width="120">
      <div class="flex">
        <span class="mr-2 font-semibold text-gray-700"
          >{{ Lote[0].Norte.Dimension }} mts.</span
        >
        <el-popover
          ref="popover"
          placement="right"
          title="Colindancias"
          :width="200"
          trigger="hover"
          :content="Lote[0].Norte.Colindancia"
        >
          <template #reference>
            <button class="p-1 inline-flex text-blue-600 rounded-full hover:shadow-md">
              <i class="text-xs font-semibold fas fa-info"></i>
            </button>
          </template>
        </el-popover>
      </div>
    </el-table-column>
    <el-table-column label="Sur" width="120">
      <div class="flex">
        <span class="mr-2 font-semibold text-gray-700">{{ Lote[0].Sur.Dimension }} mts.</span>
        <el-popover
          ref="popover"
          placement="right"
          title="Colindancias"
          :width="200"
          trigger="hover"
          :content="Lote[0].Sur.Colindancia"
        >
          <template #reference>
            <button class="p-1 inline-flex text-blue-600 rounded-full hover:shadow-md">
              <i class="text-xs font-semibold fas fa-info"></i>
            </button>
          </template>
        </el-popover>
      </div>
    </el-table-column>
    <el-table-column label="Este" width="120">
      <div class="flex">
        <span class="mr-2 font-semibold text-gray-700">{{ Lote[0].Este.Dimension }} mts.</span>
        <el-popover
          ref="popover"
          placement="right"
          title="Colindancias"
          :width="200"
          trigger="hover"
          :content="Lote[0].Este.Colindancia"
        >
          <template #reference>
            <button class="p-1 inline-flex text-blue-600 rounded-full hover:shadow-md">
              <i class="text-xs font-semibold fas fa-info"></i>
            </button>
          </template>
        </el-popover>
      </div>
    </el-table-column>
    <el-table-column label="Oeste" width="120">
      <div class="flex">
        <span class="mr-2 font-semibold text-gray-700"
          >{{ Lote[0].Oeste.Dimension }} mts.</span
        >
        <el-popover
          ref="popover"
          placement="right"
          title="Colindancias"
          :width="200"
          trigger="hover"
          :content="Lote[0].Oeste.Colindancia"
        >
          <template #reference>
            <button class="p-1 inline-flex text-blue-600 rounded-full hover:shadow-md">
              <i class="text-xs font-semibold fas fa-info"></i>
            </button>
          </template>
        </el-popover>
      </div>
    </el-table-column>
    <el-table-column label="Tamaño total" width="120">
      <div class="flex">
        <span class="font-semibold text-gray-700"
          >{{ Lote[0].Superficie }} m<sup>2</sup></span
        >
      </div>
    </el-table-column>
    <el-table-column fixed="right" label="Operaciones" width="120">
      <div class="flex justify-around">
        <button
          @click="openDialog()"
          class="transition-all duration-500 ease-in-out inline-flex p-2 mr-1 text-xs text-gray-50 bg-green-700 rounded-full hover:bg-green-600 hover:shadow-lg hover:scale-110"
        >
          <i class="fas fa-pen self-center"></i>
        </button>
        <button
          @click="EditImages = true"
          class="transition-all duration-500 ease-in-out inline-flex p-2 ml-1 text-xs text-gray-50 bg-blue-700 rounded-full hover:bg-blue-600 hover:shadow-lg hover:scale-110"
        >
          <i class="fas fa-image"></i>
        </button>
      </div>
    </el-table-column>
  </el-table>
  <div class="border-t-2 border-red-700">
    <div id="warning-zone" class="flex justify-between p-4 bg-red-100 rounded-md mt-1">
      <div class="inline-flex font-semibold text-red-700">
        <i class="fas fa-exclamation-triangle self-center text-base"></i>
        <span class="pl-2 text-sm self-center">Zona de peligro</span>
      </div>
      <button @click="EliminarLote = true" class="flex rounded-lg py-1 px-4 transition-all duration-500 ease-in-out hover:bg-red-800 hover:shadow-lg hover:scale-110 bg-red-700 text-white font-semibold text-xs">
        <i class="fas fa-trash pr-2 self-center"></i>
        <span class="text-sm font-semibold text-gray-50 self-stretch">Eliminar lote</span>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import CurrencyInput from '@/components/currencyInput.vue'

export default {
  name: 'LoteDatos',
  components: {
    CurrencyInput
  },
  data () {
    return {
      srcList: [],
      portada: '',
      foto1: '',
      foto2: '',
      foto3: '',
      foto4: '',
      foto5: '',
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
      portadaEdit: null,
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
      ancho: '35%',
      EliminarLote: false,
      EditImages: false,
      verificarIDL: '',
      isDisabled: true,
      stepEditar: 1,
      notUpdate: false,
      nombreFrc: '',
      manzanaNombre: '',
      anchoL: '70%',
      status: true,
      editarLote: false,
      EditLoteObj: {},
      EditLoteObjBackup: {},
      Lote: [
        {
          Precio: null,
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
          Vendido: false,
          Status: '',
          precioFormateado: '',
          Descripcion: ''
        }
      ]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('¿Deseas cerrar ésta ventana?')
        .then(_ => {
          this.EditImages = false
          done()
        })
        .catch(_ => {})
    },
    openDialog () {
      this.EditLoteObj = this.EditLoteObjBackup
      this.editarLote = true
    },
    closing () {
      this.editarLote = false
    },
    closingImg () {
      this.EditImages = false
    },
    onResize () {
      if (window.innerWidth < 768) {
        this.anchoL = '100%'
        this.ancho = '100%'
      } else {
        this.anchoL = '75%'
        this.ancho = '35%'
      }
    },
    verificarIDLote () {
      if (this.verificarIDL === this.idLote) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
        if (this.verificarIDL === this.idLote.toLowerCase()) {
          document.getElementById('alerta').classList.add('block')
          document.getElementById('alerta').classList.remove('hidden')
        } else {
          document.getElementById('alerta').classList.add('hidden')
          document.getElementById('alerta').classList.remove('block')
        }
      }
    },
    checkBeforeUpdate () {
      if (
        this.EditLoteObj.Norte.Dimension === '' ||
        this.EditLoteObj.Norte.Colindancia === '' ||
        this.EditLoteObj.Sur.Dimension === '' ||
        this.EditLoteObj.Sur.Colindancia === '' ||
        this.EditLoteObj.Oeste.Dimension === '' ||
        this.EditLoteObj.Oeste.Colindancia === '' ||
        this.EditLoteObj.Este.Dimension === '' ||
        this.EditLoteObj.Este.Colindancia === '' ||
        this.EditLoteObj.Superficie === '' ||
        this.EditLoteObj.Precio === '' ||
        this.EditLoteObj.Precio === 0
      ) {
        this.notUpdate = true
      } else {
        if (this.EditLoteObj.Precio === '' || this.EditLoteObj.Precio === 0) {
          this.notUpdate = true
        } else {
          this.notUpdate = false
        }
      }
    },
    updateLote () {
      const loading = this.$loading({
        lock: true,
        text: 'Actualizando datos...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const db = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana).collection('lotes').doc(this.idLote)
      this.editarLote = false
      db.set(this.EditLoteObj).then(() => {
        loading.close()
        this.$message({
          message: 'Actualizado correctamente',
          type: 'success'
        })
      }).catch(() => {
        loading.close()
        this.$message.error('Compruebe su conexión a internet')
      })
    },
    borrarLote () {
      const Lt = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana).collection('lotes').doc(this.idLote)
      this.$confirm('¿Desea realmente eliminar este lote?')
        .then(_ => {
          Lt.delete().then(() => {
            const carpeta = firebase.storage().ref().child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}`)
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
            }).catch(error => {
              console.log('Error al borrar en galeria: ' + error.message)
              this.$message({
                message: error.message,
                type: 'error',
                offset: 35
              })
            })
            this.$store.dispatch('updateLotesFromDB', { idEstado: this.idEst, idCiudad: this.idC, idFracc: this.idFracc })
            this.EliminarLote = false
          }).catch((error) => {
            console.log('Error al borrar: ' + error.message)
            this.$message({
              message: error.message,
              type: 'error',
              offset: 35
            })
          })
        })
        .catch(_ => {})
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
      ruta = storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/portada/portada.jpg`)
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
      const storage = firebase.storage().ref()
      var ruta = null
      ruta = storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_1.jpg`)
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
      ruta = storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_2.jpg`)
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
      ruta = storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_3.jpg`)
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
      ruta = storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_4.jpg`)
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
      ruta = storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_5.jpg`)
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
    }
  },
  created () {
    window.addEventListener('resize', this.onResize)
    var ancho = screen.width
    if (ancho < 640) {
      this.anchoL = '100%'
      this.ancho = '100%'
    } else {
      this.anchoL = '75%'
      this.ancho = '35%'
    }
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MXN'
    })
    const frc = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFracc)
    frc.get().then((f) => {
      this.nombreFrc = f.data().Nombre
    })
    const mzn = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana)
    mzn.get().then((mz) => {
      this.manzanaNombre = mz.data().Nombre
    })
    const db = firebase.firestore().collection('Ubicaciones').doc(this.idEst).collection('Ciudades').doc(this.idC).collection('Fraccionamientos').doc(this.idFracc).collection('manzanas').doc(this.idManzana).collection('lotes').doc(this.idLote)
    db.onSnapshot((doc) => {
      this.Lote[0] = doc.data()
      this.EditLoteObj = doc.data()
      this.EditLoteObjBackup = doc.data()
      this.Lote[0].precioFormateado = formatter.format(doc.data().Precio)
      if (doc.data().Vendido) {
        this.Lote[0].Status = 'Vendido'
      } else {
        this.Lote[0].Status = 'No vendido'
      }
    })
    /* obtener imágenes */
    const storage = firebase.storage().ref()
    storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/portada/portada.jpg`).getDownloadURL().then(url => {
      this.portada = url
      this.srcList.push(url)
    })
    storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_1.jpg`).getDownloadURL().then(url => {
      this.foto1 = url
      this.srcList.push(url)
    })
    storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_2.jpg`).getDownloadURL().then(url => {
      this.foto2 = url
      this.srcList.push(url)
    })
    storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_3.jpg`).getDownloadURL().then(url => {
      this.foto3 = url
      this.srcList.push(url)
    })
    storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_4.jpg`).getDownloadURL().then(url => {
      this.foto4 = url
      this.srcList.push(url)
    })
    storage.child(`Ubicaciones/${this.idEst}/${this.idC}/Fraccionamientos/${this.idFracc}/manzanas/${this.idManzana}/lotes/${this.idLote}/galeria/foto_5.jpg`).getDownloadURL().then(url => {
      this.foto5 = url
      this.srcList.push(url)
    })
  },
  props: {
    idEst: {
      type: String
    },
    idC: {
      type: String
    },
    idFracc: {
      type: String
    },
    idManzana: {
      type: String
    },
    idLote: {
      type: String
    }
  }
}
</script>

<style scoped>
  .text-xxs {
    font-size: 0.5rem/* 12px */;
    line-height: 0.75rem/* 16px */;
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
</style>
