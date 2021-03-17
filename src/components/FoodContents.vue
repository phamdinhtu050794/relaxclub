<template>
  <div class="food-content-container">
    <div > <img src="@/assets/img1.jpg" width="100" height="100" ></div>
      <div> {{name}} </div>
      <div>..................</div>
      <div class="price"> {{price}} </div>
       
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
.food-content-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30vw;
  // background-color: yellow;
  font-size: 1.3em;
}
.price{
  color: rgb(141, 0, 0);
}

    
</style>
