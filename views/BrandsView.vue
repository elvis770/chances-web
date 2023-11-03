<template>
  <div class="brands">
    <Navbar/>
    this is the Brands page
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'BrandsView',
  components: {
   Navbar
    
  }
}
</script>