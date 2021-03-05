<template>
  <div class="main-container">
    <div class="food-container">
      <div class="left"></div>
      <h1>Food</h1>
      <div v-for="item in foods" :key="item.key" class="food-items">
        <FoodContents
          v-if="item.avaliable"
          :name="item.name"
          :price="item.price"
        ></FoodContents>
      </div>
    </div>

    <div class="drinks-container">
            <!-- <div class="right"></div> -->
      <div class="drink-contents">
        <h1>Drinks</h1>

        <div v-for="item in drinks" :key="item.key" class="drink-items"  >
          <DrinkContents
            v-if="item.avaliable"
            :name="item.name"
            :name_content1="item.name_content1"
            :name_content2="item.name_content2"
            :name_content3="item.name_content3"
          >
          </DrinkContents>
        </div>
        
        
      </div>
         
        <div class="right"></div>
      <!-- </div> -->
      
    </div>
    
  </div>
</template>

<script>
import FoodContents from "../components/FoodContents.vue";
import DrinkContents from "../components/DrinkContents.vue";
import store from "@/store/index";

export default {
  name: "FoodAndDrink",
  components: {
    FoodContents,
    DrinkContents,
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
.main-container {
  display: flex;
  flex-direction: column;
//   justify-content: flex-start;
//   overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.food-container {
  height: 50vh;
  overflow: scroll;
}
.food-container h1 {
  text-align: start;
}
.left {
  display: flex;
  width: 100vw;
  height: 100vh;
  -webkit-shape-outside: polygon(5% 0, 40% 100%, 5% 100%);
  shape-outside: polygon(5% 0, 40% 100%, 5% 100%);
  float: left;
  -webkit-clip-path: polygon(5% 0, 40% 100%, 5% 100%);
  clip-path: polygon(5% 0, 40% 100%, 5% 100%);
}
.food-items {
  width: 50vw;
  display: flex;
  flex-direction: column;
//   justify-content: flex-end;
  text-align: start;
}
.drinks-container {
  height: 50vh;
//   width: 100vw;
  overflow: scroll;
  display: flex;
// //   flex-direction: column;
// //   justify-content: flex-end;
// //   align-items: flex-start;
  text-align: right;
//  height: 50vh;
// //  width: 100vw;
//   overflow: scroll;
  background-color: red;
}
.drink-contents{
    width: 100vw;
    height: 100vh;
    margin: 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;
    text-align: start;
    overflow: scroll;
}
.drinks-container h1{
     text-align: right;
}
// .drink-contents {
   
//     text-align: start;
//     background-color: blue;

// }


 .drink-items {
    // position: absolute;
  width: auto;
//   height: auto;
   display: block;
//   -webkit-flex-direction: column;
//    flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   flex-flow: wrap;
//   float: left;
//   height: -20vh;
//   display: inline;
  flex-direction: column;
  justify-content: flex-end;
// display: block;
  text-align: end;
// align-items: flex-end;
//   flex-wrap: wrap;
  background-color:yellow;
    // margin-top: 50%;
    // margin: 0 auto;
}
.right {
    // margin-bottom: 0%;
    // top: 0%;
//     // position: absolute;
//   display: flex;
//   text-align: start;
//   float: right;
// display: block;
  width: 100vw;
  height: 100vh;
  -webkit-shape-outside: polygon(100% 0%, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0%, 100% 100%, 0 100%);
  float: right;
  -webkit-clip-path: polygon(100% 0%, 100% 100%, 0 100%);
  clip-path: polygon(100% 0%, 100% 100%, 0 100%);
  background-color: green;


// display: flex;
//   width: 100vw;
//   height: 100vh;
//   -webkit-shape-outside: polygon(5% 0, 40% 100%, 5% 100%);
//   shape-outside: polygon(5% 0, 40% 100%, 5% 100%);
//   float: left;
//   -webkit-clip-path: polygon(5% 0, 40% 100%, 5% 100%);
//   clip-path: polygon(5% 0, 40% 100%, 5% 100%);
//   background-color: green;
}
</style>
