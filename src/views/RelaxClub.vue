<template>
  <div class="home-container">
    <div class="logo">
      <h1>RelaxClub</h1>
      <!-- <img src="@/assets/logorelax.jpg" width="200" height="200"> -->
    </div>
    <div class="slide">
      <transition mode="out-in" :duration="3000" name="fade">
        <img v-if="loaded" :src="getImg(showImage)" width="auto" height="300" />
      </transition>

      <!-- <transition mode="out-in" :duration="3000" name="fade">
        <img v-if="!loaded" :src="getImg(showImage)" width="400" height="300" />
      </transition> -->
    </div>
    <div class="select">
      
      <div  class="stacked">
        <router-link class="router-link" :to="{ name: 'FoodAndDrink', params: { residentialsId: 123 }}">Food&Drink</router-link>
      </div>
      <div class="stacked">
         <router-link class="router-link" :to="{ name: 'Reservations', params: { residentialsId: 123 }}">Reservations</router-link>
         <router-link class="router-link" :to="{ name: 'Calendar', params: { residentialsId: 123 }}">Calendar</router-link>
      </div>
      <div class="stacked">
         <router-link class="router-link" :to="{ name: 'Paintings', params: { residentialsId: 123 }}">Pictures</router-link>
         <router-link class="router-link" :to="{ name: 'Pictures', params: { residentialsId: 123 }}">Paintings</router-link>
      </div>
    </div>
  </div>
</template>






<script>


export default {
  name: "RelaxClub",
  mounted() {
    setInterval(this.switchImage, 3000);
  },
  data: () => {
    return {
      loaded: false, 
      showImage: 0, 
    }
  },
  watch: {
    showImage: {
      handler() {
        // this.loaded = !this.loaded;
        this.loaded = false;
        setInterval(()=>{
          this.loaded = true;
        }, 500);
      },
      immediate: true, 
    }
  },
  methods: {
    getImg(img){
      var url = require('@/assets/' + img +'.jpg');
      return url; 
    },
    switchImage() {
     
      if((this.showImage+1) % 6 == 0){
        this.showImage = 0; 
      }
      else {
         this.showImage = this.showImage + 1; 
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
//   background: rgb(255,239,0);
// background: radial-gradient(circle, rgba(255,239,0,1) 0%, rgba(254,255,20,1) 35%, rgba(255,0,0,1) 100%);
 
  // opacity: .1;

//   background: rgb(235,238,217);
// background: radial-gradient(circle, rgba(235,238,217,1) 10%, rgba(80,76,74,1) 100%);


background: rgb(154,156,147);
background: radial-gradient(circle, rgba(154,156,147,1) 10%, rgba(3,2,2,1) 100%);
}
.logo{
 
  width: 300px;
  height: 100px;
  border-radius: 50px 50px 50px 50px ;
  background-color:black;
  margin: auto;
  top: 50%;
  //  background:radial-gradient(ellipse 50px 30px,lightgreen ,darkgreen);
  // position: relative;
  
}
.logo h1 {
  
  color: rgba(255, 255, 255, 254);
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

    background-color: white; 
}

.stacked {
  display: flex; 
    flex-direction: column;
    flex: 1 1 auto; 
    justify-content: space-around;
    // background-color: green; 
}

.router-link {
  display: flex; 
    flex: 1 1 auto;
    justify-content: space-around; 
    align-items: center; 
  text-decoration: none;
  font-size: 1.5em;
//  background: rgb(80,80,80);
// background: linear-gradient(0deg, rgba(80,80,80,1) 0%, rgba(209,209,209,1) 8%, rgba(226,226,226,1) 10%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%);

    border: 1px solid black;
color: black;

    background: rgb(238,238,217);
background: radial-gradient(circle, rgba(238,238,217,1) 10%, rgba(80,76,74,1) 100%);
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 3s; 
}
.fade-enter, .fade-leave-to {
  opacity: 0; 
}

</style>
