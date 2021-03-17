<template>
  <div class="main-container">
    <!-- <img src="@/assets/logorelax.jpg" alt=""> -->
    <!-- <video playsinline autoplay muted loop id="myvideo" >
      <source src="@/assets/beer.mp4" type="video/mp4">
    </video> -->
    <div><h1>RelaxClub Menu</h1></div>
    <div class="food-drink">
    <food-container class="food" :foods="foods" />
    <hr>
    <drink-container class="drink" :drinks="drinks" />
    </div>
  </div>
</template>

<script>
import FoodContainer from "../components/FoodContainer.vue";
import DrinkContainer from "../components/DrinkContainer.vue";
import store from "@/store/index";

export default {
  name: "FoodAndDrink",
  components: {
    FoodContainer,
    DrinkContainer,
  },
  data() {
    return {};
  },
  computed: {
    foods() {
      console.log("getting foods");
      return store.state.Foods;
    },
    drinks() {
      console.log("getting drinks");
      return store.state.Drinks;
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
hr{
  color:rgb(141, 0, 0);;
}
.main-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(198,143,18);
background: linear-gradient(90deg, rgba(198,143,18,1) 0%, rgba(227,205,96,1) 49%, rgba(215,159,9,1) 83%);
}
.main-container h1{
  
  color: rgb(65, 64, 64);
}
.food-drink{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  
  padding-top: 5%;
  // padding-left: 10%;
}
.food{
  // background-color: red;
}
.drink{
  // background-color: green;
}


@media only screen and (max-width: 800px) {
  .food-drink {
    display: flex;
    flex-direction: column;
    // padding-left: 20%;
    text-align: center;
    // margin-left: 7%;
  }
  hr{
    color: brown;
  }
  // .food{
  //   padding-left: 20%;
  // }
  
}

@media only screen and (max-width: 480px) {

.main-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

  .food-drink {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // text-align: center;
    // margin-left: 30%;
    

  }
  hr{
    color: brown;
  }
 
}
@media only screen and (max-width: 480px){
  
  
}


</style>
