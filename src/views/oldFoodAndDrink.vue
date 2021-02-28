<template>
  <div class="page-container">
    <button class="home-icon">
      <router-link :to="{ name: 'Home' }">
        <i class="material-icons" style="font-size: 48px">&#xe88a;</i>
      </router-link>
    </button>

    <div class="left">a</div>
    <div class="food-drink-container">
      <div class="food-container">
        <!-- <button><i class="material-icons"  style="font-size:48px;">&#xe88a;</i></button> -->
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <div class="food-content">
          <h1>Food</h1>
          <!-- <FoodContents></FoodContents>
          <FoodContents></FoodContents>
          <FoodContents></FoodContents>
          <FoodContents></FoodContents> -->

          <ul>
            <li>Dried Fish : 20k <img src="@/assets/img1.jpg" alt="" /></li>
            <li>Sausage : 20k <img src="@/assets/img2.jpg" alt="" /></li>
            <li>Egg Rolls : 20k <img src="@/assets/img3.jpg" alt="" /></li>
            <li>Dried Squids : 20k <img src="@/assets/img4.jpg" alt="" /></li>

            <!-- <li>Dried Squids : 20k <img src="@/assets/img4.jpg" alt=""></li> -->
          </ul>
        </div>
      </div>
      <div>
        <div class="drink-content">
          <h1>Drink</h1>
          <ul>
            <li>
              <h2>Beer</h2>
              <h3>Larue - Huda - Tiger - Heniken</h3>
            </li>
            <br />
            <li>
              <h2>Soft Drinks</h2>
              <h3>Coca - Pepsi - 7Up - RedBull</h3>
            </li>
            <br />
            <li>
              <h2>Coffee</h2>
              <h3>Black Coffee - Milk Coffee - Espresso</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FoodContents from "../components/FoodContents.vue";

export default {
  name: "FoodAndDrink",
  components: {
    FoodContents,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.left {
//   display: flex;
float: left;
  height: 90%;
  background-color: green;
  width: 100vw;
  shape-outside: polygon(0 0, 0 100%, 100% 100%);
}
.home-icon {
  position: absolute;
  top: 0;
  left: 0;
}
.page-container {
  display: flex;
  background-color: red;
}
.food-drink-container{
    display: flex; 
    flex-direction: column;
}
.food-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: start;
}

.food-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // display: inline;
  text-align: start;
  margin: 0;

  padding: 0;
  background-color: rgb(110, 240, 77);
}
.food-content h1 {
  font-size: 50px;
  text-align: center;

  color: red;
}
.food-content li {
  list-style: none;
  // text-align: end;
}
.food-content button {
  width: auto;
  height: 50px;
}
.drink-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // display: inline;
  // text-align: start;
  margin: 0;

  padding: 0;
  background-color: rgb(0, 225, 255);
}
.drink-content h1 {
  font-size: 50px;
  color: red;
  text-align: center;
}
.drink-content li {
  list-style: none;
}
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
