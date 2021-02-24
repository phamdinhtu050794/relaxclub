<template>
  <div class="food-container">
      
      
      <div>
          <!-- <button><i class="material-icons"  style="font-size:48px;">&#xe88a;</i></button> -->
           <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <button class="home-icon">
         <router-link :to="{ name: 'Home'}">
        <i class="material-icons" style="font-size: 48px">&#xe88a;</i>
        </router-link>
      </button>
      
      
          <div class="food-content">
           <h1 style="text-indent: -15em">Food</h1>
          <!-- <FoodContents></FoodContents>
          <FoodContents></FoodContents>
          <FoodContents></FoodContents>
          <FoodContents></FoodContents> -->

          <ul>
              <li style="text-indent: 15em">Dried Fish : 20k <img src="@/assets/img1.jpg" alt=""></li>
              <li style="text-indent: 30em">Sausage : 20k  <img src="@/assets/img2.jpg" alt=""></li>
              <li style="text-indent: 45em">Egg Rolls : 20k <img src="@/assets/img3.jpg" alt=""></li>
              <li style="text-indent: 60em">Dried Squids : 20k <img src="@/assets/img4.jpg" alt=""></li>
          </ul>
          </div>
      </div>
      <div>
      <div class="drink-content">
          <h1 style="text-indent: 10em">Drink</h1>
          <ul>
              <li  style="text-indent: 60em"><h2>Beer</h2>
                  <h3>Larue - Huda - Tiger - Heniken</h3>
              </li>
              <br>
              <li  style="text-indent: 45em"><h2>Soft Drinks</h2>
                  <h3>Coca - Pepsi - 7Up - RedBull </h3>
              </li>
              <br>
              <li  style="text-indent: 30em"><h2>Coffee</h2>
                <h3>  Black Coffee - Milk Coffee - Espresso</h3>
              </li>
          </ul>
      </div>
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
    text-align: start;
}

.food-content{
       display: flex;
       flex-direction: column;
       justify-content: center;
    // display: inline;
    text-align: start;
    margin: 0;
    
    padding: 0;
    background-color: rgb(110, 240, 77);
    
       
}
.food-content h1{
    font-size: 50px;
    text-align: center;
    
    color: red;
}
.food-content li{
    list-style: none;
    // text-align: end;
    
}
.food-content button{
       width: auto;
       height: 50px;
}
.drink-content{
         display: flex;
       flex-direction: column;
       justify-content: center;
    // display: inline;
    // text-align: start;
    margin: 0;
    
    padding: 0;
    background-color: rgb(0, 225, 255);
}
.drink-content h1{
    font-size: 50px;
    color: red;
    text-align: center;
}
.drink-content li{
    list-style: none;
}

</style>
