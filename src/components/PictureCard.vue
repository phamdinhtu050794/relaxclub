<template>
  <div class="card-container">
     <div> <img src="@/assets/picture.jpg" width="400"></div>
     <div>{{name}} </div>
     <div>{{price}} </div>
  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    name: String,
    price : String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
