<template>
  <div class="trends">
    <Navbar/>
    this is the Trends page
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'TrendsView',
  components: {
   Navbar
    
  }
}
</script>