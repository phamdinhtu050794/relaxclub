<template>
  <div class="foods-container">
      <!-- <div class="leftt"></div> -->
      {{name}} 
      {{price}}
      <img src="@/assets/img1.jpg" width="100" height="100">
  </div>
</template>

<script>
export default {
  name: "FoodContents",
  props: {
    name : String,
    price : String,
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
