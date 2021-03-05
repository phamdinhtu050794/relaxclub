<template>
  <div class="main-container">
      <div class="left"></div>
    <div class="food-container">
      <!-- <div class="left"></div> -->
      <h1>Food</h1>
      <div v-for="item in foods" :key="item.key">
        <FoodContents
          v-if="item.avaliable"
          :name="item.name"
          :price="item.price"
          class="food-items"
        ></FoodContents>
      </div>
    </div>
    <div class="drinks-container">
      <h1>Drinks</h1>
      <!-- <div class="right"></div> -->
      <div v-for="item in drinks" :key="item.key">
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
//   overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.left {
  float: left;
  width: 100vw;
  height: 100vh;
  shape-outside: polygon(0 0, 0 100%, 50% 50%);
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
//   overflow: hidden;
  background-color: green;
}
.food-container {
//   display: flex;
//   flex-direction: column;
  
  text-align: start;
  background-color: red;
    // width: 100vw;
  height: 50vh;
}
.food-items {
    // height: 50vh;
    // display: flex;
    flex-direction: column;
    // overflow: hidden;
   text-align: start;
//   background-color: purple;
//   display: flex;
//   flex: 1 0 auto; 
// height: calc(50/70)vh; // todo very very very bad!!!!!
}
.drinks-container {
    background-color: pink;
  height: 50vh;
  text-align: start;
}
// .right {
//   float: right;
//   width: 100vw;
//   height: 100vh;
//   shape-outside: polygon(100% 0, 100% 50%, 0 100%);
//   opacity: 0.2;
//   background-color: blue;
// }

// .food-drink-container {
//   display: flex;
//   flex-direction: column;
// }
// .food-container {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   text-align: start;
// }

// .food-content {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   // display: inline;
//   text-align: start;
//   margin: 0;

//   padding: 0;
//   background-color: rgb(110, 240, 77);
// }
// .food-content h1 {
//   font-size: 50px;
//   text-align: center;

//   color: red;
// }
// .food-content li {
//   list-style: none;
//   // text-align: end;
// }
// .food-content button {
//   width: auto;
//   height: 50px;
// }
// .drink-content {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   // display: inline;
//   // text-align: start;
//   margin: 0;

//   padding: 0;
//   background-color: rgb(0, 225, 255);
// }
// .drink-content h1 {
//   font-size: 50px;
//   color: red;
//   text-align: center;
// }
// .drink-content li {
//   list-style: none;
// }
// .drink-content ul, li{
//      margin-bottom: 10px;
//     padding: 10px 0;
//     // text-align: center;
//     width: 150px;
// }
// @media screen and (max-width:320px) {
//     .food-content, .drink-content {
//     flex-direction: column;
//   }
// }
// @media only screen and (min-width: 320px) and (max-width: 860px) {
//         .food-content, .drink-content {
//     flex-direction: column;
//   }
// }
// ul, li {
//     list-style: none;
//     padding: 0;
// }

// ul {
//     border: 1px solid #ccc;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     margin: 0 auto;
//     width: 640px;
//     max-width: 100%;
// }

// ul li {
//     background-color: #a4e7fd;
//     margin-bottom: 10px;
//     padding: 10px 0;
//     text-align: center;
//     width: 150px;
// }

// @media only screen and (max-width: 480px) {
//     li {
//         width: 48%;
//     }
// }
</style>
