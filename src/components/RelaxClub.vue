<template>
  <div class="home-container">
    <div class="logo">
      <h1>RelaxClub</h1>
    </div>
    <div class="slide">
      <img src="@/assets/logo.png" width="400" height="300" />
    </div>
    <div class="select">
      <a href="#"><router-link :to="{ name: 'FoodAndDrink', params: { residentialsId: 123 }}"><h2>Food&Drink</h2></router-link></a>
      <div>
         <a href="#"><router-link :to="{ name: 'Calendar', params: { residentialsId: 123 }}"><h2>Calendar</h2></router-link></a>
         <a href="#"><router-link :to="{ name: 'Reservations', params: { residentialsId: 123 }}"><h2>Reservations</h2></router-link></a>
      </div>
      <div>
         <a href="#"><router-link :to="{ name: 'Pictures', params: { residentialsId: 123 }}"><h2>Pictures</h2></router-link></a>
         <a href="#"><router-link :to="{ name: 'Paintings', params: { residentialsId: 123 }}"><h2>Paintings</h2></router-link></a>
      </div>
    </div>
  </div>
</template>

<script>
import FoodAndDrink from '../components/FoodAndDrink'
import Calendar from '../components/Calendar'
import Reservations from '../components/Reservations'
import Pictures from '../components/Pictures'
import Paintings from '../components/Paintings'


export default {
  name: "RelaxClub",
  components:{
    FoodAndDrink,
    Calendar,
    Reservations,
    Pictures,
    Paintings,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
.logo h1 {
  font-size: 50px;
  height: 30vh;
}
.slide{
  height: 40vh;
}
.select {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 30vh;
}
.select a{
     color: black;
  text-decoration: none;
}
</style>
