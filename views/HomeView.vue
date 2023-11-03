<template>
  <div class="home">
    <Navbar/>
    
    <div>
      <Hero/>
    </div>
    <div>
        <Makeup/>
    </div>
    <div>
        <Foot/>
    </div>
    
    <div>
        <Skin/>
    </div>
    <Feedback/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Makeup from '@/components/Makeup.vue'
import Foot from '@/components/Foot.vue'
import Skin from '@/components/Skin.vue'
import Hero from '@/components/Hero.vue'
import Feedback from '@/components/Feedback.vue'

export default {
  name: 'HomeView',
  components: {
   Navbar,
   Makeup,
   Foot,
   Skin,
   Hero,
   Feedback,
   Footer
    
  }
}
</script>
