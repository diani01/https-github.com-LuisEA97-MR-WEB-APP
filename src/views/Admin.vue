<template>
  <div id="admin">
    <AdminNavbar />
    <router-view />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import AdminNavbar from '@/components/admin-navbar.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  beforeMount () {
    const router = useRouter()
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        router.replace('/axer-mr-imb/admin/login')
      }
    })
  },
  components: {
    AdminNavbar
  },
  async mounted () {
  },
  created () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.$store.getters.apiKey)
    }
  },
  data () {
    return {
      secrets: '',
      loggedIn: false,
      user: {
        name: '',
        address: '',
        phone: ''
      },
      Users: []
    }
  },
  methods: {
  }
}
</script>

<style>
  #admin {
    z-index: 1030;
  }
</style>
