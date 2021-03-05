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
.foods-container{
    // display: flex;
    // flex-direction: row;
    // justify-content: space-around;
    // text-align: start;
}
// .leftt {
//   float: left;
//   width: 50vw;
//   height: 50vh;
//   shape-outside: polygon(0 0, 0 100%, 100% 100%);
  //   width: 300px;
  //   height: 200px;
  //   float: left;
//   opacity: 0.2;
  //     -webkit-shape-outside: polygon(0 0, 0% 100%, 100% 50%);
  // //   shape-outside: polygon(0 0, 50% 50%, 0% 100%);
  //   shape-outside: polygon(0 0, 0% 100%, 100% 50%);
  //   -webkit-shape-outside: polygon(0 0, 50% 50%, 0 50%);
  //   shape-outside: polygon(0 0, 50% 50%, 0 50%);
  //   float: left;
  //   -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
  //   clip-path: polygon(0 0, 100% 100%, 0 100%);
//   background-color: green;
// }
</style>
