import { createStore } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default createStore({
  state: {
    totalLotes: 0,
    filterStatus: {
      type: 0,
      value: 'Casas'
    },
    firebaseConfig: {
      apiKey: 'AIzaSyDuLG3U-iGFSZSVTR1_LL5nP9C7wjFfe34',
      authDomain: 'mr-web-admin.firebaseapp.com',
      projectId: 'mr-web-admin',
      storageBucket: 'mr-web-admin.appspot.com',
      messagingSenderId: '923812228840',
      appId: '1:923812228840:web:6c7d6e249fca5de15ae35d',
      measurementId: 'G-SECQPW0067'
    }
  },
  mutations: {
    vaciarLotes (state) {
      state.totalLotes = 0
    },
    total (state, n) {
      state.totalLotes += n
    },
    toogleFilteringBy (state) {
      if (state.filterStatus.type === 0) {
        state.filterStatus.type = 1
        state.filterStatus.value = 'Terrenos'
      } else {
        state.filterStatus.type = 0
        state.filterStatus.value = 'Casas'
      }
    },
    setDefaultToggle (state) {
      state.filterStatus.type = 0
      state.filterStatus.value = 'Casas'
    }
  },
  actions: {
    sumarTotal ({ commit }, cantidad) {
      commit('total', cantidad)
    },
    ceroLotes ({ commit }) {
      commit('vaciarLotes')
    },
    updateLotesFromDB ({ commit }, { idEstado, idCiudad, idFracc }) {
      if (!firebase.apps.length) {
        firebase.initializeApp(this.state.firebaseConfig)
      }
      commit('vaciarLotes')
      const Frc = firebase.firestore().collection('Ubicaciones').doc(idEstado).collection('Ciudades').doc(idCiudad).collection('Fraccionamientos').doc(idFracc)
      Frc.collection('manzanas').get().then((snapshot) => {
        snapshot.forEach((manzana) => {
          const id = manzana.ref.id
          Frc.collection('manzanas').doc(id).collection('lotes').get()
            .then(lotes => {
              this.dispatch('sumarTotal', lotes.size)
            })
        })
      })
    }
  },
  getters: {
    verTotal (state) {
      return state.totalLotes
    },
    apiKey (state) {
      return state.firebaseConfig
    },
    mobileMenuStatus (state) {
      return state.showMobileMenu
    },
    casasInFracc (state) {
      return state.totalCasasEnFracc
    },
    sortBy (state) {
      return state.filterStatus
    }
  }
})
