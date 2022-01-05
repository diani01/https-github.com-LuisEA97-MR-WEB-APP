<template>
  <div>
      <el-collapse accordion>
          <el-collapse-item v-for="fracc in Fraccionamientos" :key="fracc" :name="fracc.Nombre">
              <template #title>
                <div class="inline-flex">
                  <span class="lato text-base">{{fracc.Nombre}}</span>
                </div>
              </template>
              <div class="px-2 flex flex-col sm:flex-row justify-start text-left">
                <div class="inline-flex mr-2">
                  <span class="lato text-base font-semibold text-gray-500"><span class="text-gray-800">Ubicado en:</span> Col. {{fracc.Ubicacion.Colonia}}, {{fracc.Ubicacion.Ciudad}}</span>
                </div>
                <router-link :to="{ name: 'DetallesFrc', params: { id: fracc.id, nombre: fracc.Nombre, nombreLink: fracc.id, ciudad: idCiudad, estado: estado, idEstado: idEstado } }" class="inline-flex underline text-blue-500 mt-2 sm:my-0 font-semibold cursor-pointer">
                  <span class="monserrat text-base mr-2 self-center">Más detalles <i class="fas fa-angle-right"></i></span>
                </router-link>
              </div>
          </el-collapse-item>
      </el-collapse>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'TodosFraccionamientos',
  data () {
    return {
      Fraccionamientos: [],
      Fraccionamiento: {}
    }
  },
  props: {
    idCiudad: {
      type: String
    },
    idEstado: {
      type: String
    }
  },
  mounted () {
    firebase.firestore().collection('Ubicaciones').doc(this.idEstado).collection('Ciudades').doc(this.idCiudad).collection('Fraccionamientos').onSnapshot(snapshotChange => {
      this.Fraccionamientos = []
      snapshotChange.forEach(doc => {
        this.Fraccionamiento = doc.data()
        this.Fraccionamientos.push(this.Fraccionamiento)
      })
    })
  }
}
</script>

<style>

</style>
