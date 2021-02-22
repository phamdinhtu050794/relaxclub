<template>
  <div class="food-container">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      
      <div class="food-content">
          <button><i class="material-icons"  style="font-size:48px;">&#xe88a;</i></button>
          <div>
          <h1>Food</h1>
          <!-- <FoodContents></FoodContents>
          <FoodContents></FoodContents>
          <FoodContents></FoodContents>
          <FoodContents></FoodContents> -->

          <ul>
              <li>Dried Fish : 20k <img src="@/assets/img1.jpg" alt=""></li>
              <li>Sausage : 20k  <img src="@/assets/img2.jpg" alt=""></li>
              <li>Egg Rolls : 20k <img src="@/assets/img3.jpg" alt=""></li>
              <li>Dried Squids : 20k <img src="@/assets/img4.jpg" alt=""></li>
          </ul>
          </div>
      </div>
      <div class="drink-content">
          <h1>Drink</h1>
          <ul>
              <li><h2>Beer</h2>
                  <br>
                  <h3>Larue - Huda - Tiger - Heniken</h3>
              </li>
              <li><h2>Soft Drinks</h2>
                  <br>
                  <h3>Coca - Pepsi - 7Up - RedBull </h3>
              </li>
              <li><h2>Coffee</h2>
                  <br>
                <h3>  Black Coffee - Milk Coffee - Espresso</h3>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import FoodContents from '../components/FoodContents.vue'

export default {
  name: "FoodAndDrink",
  components:{
      FoodContents
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.food-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}
.food-content{
       display: flex;
       flex-direction: row;
       justify-content: flex-start;
}
.food-content li{
    list-style: none;
    text-align: end;
}
.food-content button{
       width: auto;
       height: 50px;
}
.drink-content li{
    list-style: none;
}

</style>
