<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <RelaxClub msg="Welcome to Your RelaxClub App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RelaxClub from '@/components/RelaxClub.vue'

export default {
  name: 'Home',
  components: {
    RelaxClub
  }
}
</script>
