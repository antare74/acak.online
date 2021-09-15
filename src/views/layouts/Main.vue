<template>
    <Header/>
    <Footer/>
</template>

<script>

const Header = () => import('./Header.vue')
const Footer = () => import('./Footer.vue')

export default {
  name: 'main',
  components: {
      Header,
      Footer
  }
}
</script>