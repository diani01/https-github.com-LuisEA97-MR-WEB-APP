<template>
  <div>
    <el-collapse accordion>
        <el-collapse-item v-for="ciudad in ciudades" :key="ciudad" :name="ciudad.Nombre">
            <template #title>
              <div class="inline-flex">
                <span class="lato text-base">{{ciudad.Nombre}}</span>
              </div>
            </template>
            <div class="px-2 sm:px-6">
              <el-collapse accordion>
                <el-collapse-item>
                    <template #title>
                      <div class="inline-flex">
                      <span class="lato text-base text-green-700">Fraccionamientos</span>
                      </div>
                  </template>
                  <div class="flex flex-col border-y justify-start text-left border-gray-200 px-4">
                    <div class="inline-flex py-2">
                      <NuevoFraccionamiento :PrefijoEstado="idEstado" :Estado="nombreEstado" :idCiudad="ciudad.id" :Ciudad="ciudad.Nombre" ref="Fracc" class="z-100" />
                    <span class="lato text-gray-700 self-center mr-4 font-semibold text-base">Nuevo fraccionamiento</span>
                    <button @click="$refs.Fracc.openModal()" class="focus:outline-none inline-flex px-4 py-1 rounded-full bg-green-600 hover:bg-green-700 hover:shadow-md text-white active:bg-green-500 transition-all ease-in-out duration-300">
                        <i class="fas fa-plus self-center mr-2"></i>
                        <span class="font-semibold ">Agregar</span>
                    </button>
                    </div>
                    <div>
                      <TodosFraccionamientos :idCiudad="ciudad.id" :idEstado="idEstado" />
                    </div>
                  </div>
                </el-collapse-item>
                <NuevaCasa ref="Casa" :idEstado="idEstado" :nombreEstado="nombreEstado" :idCiudad="ciudad.id" :nombreCiudad="ciudad.Nombre" />
                <el-collapse-item>
                    <template #title>
                      <div class="inline-flex">
                      <span class="lato text-base text-green-700">Casas</span>
                      </div>
                  </template>
                  <div class="flex border-y border-gray-200 px-4 py-0.5">
                    <span class="lato text-gray-700 self-center mr-4 font-semibold text-base">Nueva casa</span>
                    <button @click="$refs.Casa.openModal()" class="focus:outline-none inline-flex px-4 py-1 rounded-full bg-green-600 hover:bg-green-700 hover:shadow-md text-white active:bg-green-500 transition-all ease-in-out duration-300">
                        <i class="fas fa-plus self-center mr-2"></i>
                        <span class="font-semibold ">Agregar</span>
                    </button>
                  </div>
                  <div class="px-4">
                    <TodasLasCasas :idCiudad="ciudad.id" :idEstado="idEstado" />
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import NuevoFraccionamiento from '@/components/CreateDB/Fraccionamiento.vue'
import TodasLasCasas from '@/components/GetData/CasasEnC.vue'
import NuevaCasa from '@/components/CreateDB/NuevaCasaEnC.vue'
import TodosFraccionamientos from '@/components/GetData/FraccionamientosEnC.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'Ciudades',
  components: {
    NuevoFraccionamiento,
    TodosFraccionamientos,
    NuevaCasa,
    TodasLasCasas
  },
  data () {
    return {
      ciudades: [],
      ciudad: {
        Nombre: ''
      }
    }
  },
  props: {
    idEstado: {
      type: String
    },
    nombreEstado: {
      type: String
    }
  },
  mounted () {
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').onSnapshot(snapshotChange => {
      this.ciudades = []
      snapshotChange.forEach(doc => {
        this.ciudad = doc.data()
        this.ciudad.id = doc.ref.id
        this.ciudades.push(this.ciudad)
      })
    })
  }
}
</script>

<style scoped>
</style>
