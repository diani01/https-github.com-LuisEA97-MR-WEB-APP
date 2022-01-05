<template>
  <div class="home">
    <Hero/>
    <General/>
  </div>
</template>

<style>
  .home {
    scroll-behavior: smooth;
  }
</style>

<script>
// @ is an alias to /src
import Hero from '@/components/home/Hero.vue'
import General from '@/components/home/General-info.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    General
  },
  data () {
    return {
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
