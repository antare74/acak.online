<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
  import Header from './views/layouts/Header.vue';
  import Footer from './views/layouts/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
html, body {
  height: 100%;
}
</style>
