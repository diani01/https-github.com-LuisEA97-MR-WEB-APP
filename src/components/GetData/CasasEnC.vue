<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item v-if="totalVenta!=0">
        <template #title>
          <div class="inline-flex text-blue-600">
            <span class="lato text-base">Venta</span>
            <i class="fas fa-long-arrow-alt-right self-center ml-2 text-base"></i>
          </div>
        </template>
        <div class="px-4">
          <el-collapse accordion>
            <el-collapse-item v-for="casa in venta" :key="casa" :name="casa.id">
              <template #title>
                <div class="inline-flex">
                    <span class="lato text-base mr-3">{{casa.id}}</span>
                    <div v-if="casa.Vendido" class="rounded-full bg-green-700 text-white px-4 inline-flex">
                      <span class="lato text-base">Vendido</span>
                    </div>
                    <div v-if="!casa.Vendido" class="rounded-full bg-red-700 text-white px-4 inline-flex">
                      <span class="lato text-base">No vendido</span>
                    </div>
                </div>
              </template>
              <div class="px-2 flex flex-col sm:flex-row justify-start text-left">
                <div class="inline-flex mr-2">
                  <span class="lato text-base font-semibold text-gray-500"><span class="text-gray-800">Ubicado en: </span>{{casa.Direccion}}</span>
                </div>
                <router-link :to="{name: 'DetallesCasaCd', params:{idCasa: casa.id, idEst: idEstado, idCd: idCiudad, enFraccionamiento: 'no', tipo: 'venta' }}" class="inline-flex underline text-blue-500 mt-2 sm:my-0 font-semibold cursor-pointer">
                  <span class="monserrat text-base mr-2 self-center">Más detalles <i class="fas fa-angle-right"></i></span>
                </router-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-collapse-item>
      <el-collapse-item v-if="totalRenta!=0">
        <template #title>
          <div class="inline-flex text-blue-600">
            <span class="lato text-base">Renta</span>
            <i class="fas fa-long-arrow-alt-right self-center ml-2 text-base"></i>
          </div>
        </template>
        <div class="px-4">
          <el-collapse accordion>
            <el-collapse-item v-for="casa in renta" :key="casa" :name="casa.id">
              <template #title>
                <div class="inline-flex">
                    <span class="lato text-base mr-3">{{casa.id}}</span>
                    <div v-if="casa.Vendido" class="rounded-full bg-green-700 text-white px-4 inline-flex">
                      <span class="lato text-base">Vendido</span>
                    </div>
                    <div v-if="!casa.Vendido" class="rounded-full bg-red-700 text-white px-4 inline-flex">
                      <span class="lato text-base">No vendido</span>
                    </div>
                </div>
              </template>
              <div class="px-2 flex flex-col sm:flex-row justify-start text-left">
                <div class="inline-flex mr-2">
                  <span class="lato text-base font-semibold text-gray-500"><span class="text-gray-800">Ubicado en: </span>{{casa.Direccion}}</span>
                </div>
                <router-link :to="{name: 'DetallesCasaCd', params:{idCasa: casa.id, idEst: idEstado, idCd: idCiudad, enFraccionamiento: 'no', tipo: 'renta' }}" class="inline-flex underline text-blue-500 mt-2 sm:my-0 font-semibold cursor-pointer">
                  <span class="monserrat text-base mr-2 self-center">Más detalles <i class="fas fa-angle-right"></i></span>
                </router-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'TodasLasCasas',
  data () {
    return {
      totalVenta: null,
      totalRenta: null,
      venta: [],
      renta: [],
      casaV: {},
      casaR: {}
    }
  },
  mounted () {
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Venta').onSnapshot(snapshotChange => {
      this.venta = []
      this.totalVenta = snapshotChange.size
      snapshotChange.forEach(doc => {
        this.casaV = doc.data()
        this.casaV.id = doc.ref.id
        this.venta.push(this.casaV)
      })
    })
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Renta').onSnapshot(snapshotChange => {
      this.renta = []
      this.totalRenta = snapshotChange.size
      snapshotChange.forEach(doc => {
        this.casaR = doc.data()
        this.casaR.id = doc.ref.id
        this.renta.push(this.casaR)
      })
    })
  },
  props: {
    idCiudad: {
      type: String
    },
    idEstado: {
      type: String
    }
  }

}
</script>

<style scoped>

</style>
