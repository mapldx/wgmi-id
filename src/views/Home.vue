<template>
<div class="h-screen overflow-hidden">
  <Header />
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
