<template>
  <div class="food-container">
    <div><h1>Food</h1></div>

    <hr>
    
     
      <div v-for="item in foods" :key="item.key" class="food-items" >
        <FoodContents
          v-if="item.avaliable"
          :name="item.name"
          :price="item.price"
        ></FoodContents>
      </div>     
    </div>
  
</template>

<script>
import FoodContents from "../components/FoodContents.vue";

export default {
  name: "FoodContainer",
  components: {
    FoodContents,
  },
  props: {
    foods: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.food-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.food-container hr{
  width: 30%;
  color: red;
  
}
.food-items{
  // width: auto;
  padding-top: 5%;
}
</style>
