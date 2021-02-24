<template>
  <div class="pain-container">
       <div class="header"> 
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <button>
         <router-link :to="{ name: 'Home'}">
        <i class="material-icons" style="font-size: 48px">&#xe88a;</i>
        </router-link>
      </button>
      <h1>Paintings</h1>
    </div>
    <div class="left-right">
        <button @click="back()" style="font-size:32px"><i class="material-icons">keyboard_arrow_left</i></button>
    <div class="slide"><img v-if="img == 0" src="@/assets/paitt.jpg" width="900" height="500"></div>
    <div class="slide"><img v-if="img == 1" src="@/assets/picture.jpg" width="900" height="500"></div>
    <div class="slide"><img v-if="img == 2" src="@/assets/paitt.jpg" width="900" height="500"></div>
    <div class="slide"><img v-if="img == 3" src="@/assets/picture.jpg" width="900" height="500"></div>
   
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
       
       <button @click="next()" style="font-size:32px"> <i class="material-icons">keyboard_arrow_right</i></button>
     
    </div>
      <div class="buttom">
           <button @click="back()" style="font-size:32px"><i class="material-icons">keyboard_arrow_left</i></button>
    <button @click="showImage(0)" ><img  src="@/assets/paitt.jpg" width="100" height="100"></button>
    <button @click="showImage(1)" ><img  src="@/assets/picture.jpg" width="100" height="100"></button>
    <button @click="showImage(2)" ><img  src="@/assets/paitt.jpg" width="100" height="100"></button>
    <button @click="showImage(3)" ><img  src="@/assets/picture.jpg" width="100" height="100"></button>
      <button @click="next()" style="font-size:32px"> <i class="material-icons">keyboard_arrow_right</i></button>
    </div>



  </div>
  
</template>

<script>
export default {
  name: "Paintings",
    data: () =>{
    return{
      img :0,
    }
  },
   methods:{
      back(){
          this.img -=1;
          if(this.img < 0){
              this.img = 3;
          }
          console.log("back ");
      },
      next(){
          this.img += 1;
          if(this.img > 3){
              this.img = 0;
          }
          console.log("netx")
      },
      showImage(img){
          this.img = img;
          console.log("showing img " + img);
      }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pain-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.header{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.header h1{
//    margin-left: 35%;
   color: red;
//    font-size: 50px;
}
.header button{
    // height: 50px;
    border: none;
    text-align: start;
}
.left-right{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.left-right button{
    width: auto;
    height: 50px;
    margin-top: 10%;
    background-color: white;
    border: none;
    
    
}
.buttom{
    display: flex;
    flex-direction: row;
    justify-content: center;

}
</style>
