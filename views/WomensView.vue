<template>
  <div class="womens">
    <Navbar/>
    <Feedback/>
    <div>
      <Intro/>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Feedback from '@/components/Feedback.vue'
import Intro from '@/components/Intro.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'WomensView',
  components: {
   Navbar,
   Feedback,
   Intro,
   Footer
    
  }
}
</script>