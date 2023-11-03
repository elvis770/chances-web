<template>
  <div class="mens">
    <Navbar/>
    <Feedback/>
    <div>
      <Meone/>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Feedback from '@/components/Feedback.vue'
import Meone from '@/components/Meone.vue'


export default {
  name: 'MensView',
  components: {
   Navbar,
   Feedback,
   Meone,
   Footer
    
  }
}
</script>