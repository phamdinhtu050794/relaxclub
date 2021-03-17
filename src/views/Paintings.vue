<template>
  <div class="pain-container">
    <div class="header">
      <h1>RelaxClub Pictures</h1>
    </div>
    <div class="left-right">
      <button @click="back()" style="font-size: 48px">
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
      <div v-for="item in paintings" :key="item.key" class="slide">
        <img
          v-if="img == item.src"
          :src="getImg(item.src)"
         
        />
      </div>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <button @click="next()" style="font-size: 48px">
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
    <div class="all-buttons">
      <!-- <button @click="back()" style="font-size: 48px">
        <i class="material-icons">keyboard_arrow_left</i>
      </button> -->

      <div class="select-buttons-container">
        <div v-for="item in paintings" :key="item.key">
          <button @click="showImage(item.key)" class="select-buttons">
            <img :src="getImg(item.src)" class="select-buttons" />
          </button>
        </div>
      </div>

      <!-- <button @click="next()" style="font-size: 48px">
        <i class="material-icons">keyboard_arrow_right</i>
      </button> -->
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  name: "Paintings",
  data: () => {
    return {
      imgNum: 0,
    };
  },
  computed: {
    img(){
      console.log("heeeeeeellllllo")
      return "p" + this.imgNum;
    },
    paintings() {
      console.log("getting paintings");
      return store.state.Paintings;
    },
  },
  methods: {
    back() {
      this.imgNum -= 1;
      if (this.imgNum < 0) {
        this.imgNum = 11;
      }
      console.log("back ");
    },
    next() {
      this.imgNum += 1;
      if (this.imgNum > 11) {
        this.imgNum = 0;
      }
      console.log("netx");
    },
    showImage(img) {
      this.imgNum = img;
      console.log("showing img " + img);
    },
    getImg(img) {
      // console.log("getting images: " + img);
      var url = require("@/assets/" + img + ".jpg");
      return url;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pain-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // background-color:black;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(70, 70, 70);
//   background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 2%, rgba(0,212,255,1) 51%, rgba(7,7,41,1) 95%);
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.header h1 {
  //    margin-left: 35%;
  color: black;
     font-size: 50px;
}
.header button {
  // height: 50px;
  border: none;
  text-align: start;
}
.left-right {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.left-right button {
 
  // background-color: black;
  
  color: white;
  border: none;
}
.left-right i{
  font-size: 48px;
}
.all-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  // width: 70vw;
}
.select-buttons-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
}
.select-buttons{
  display: flex;
  flex-direction: row;
  height: 12vh;
  
  // margin: 2%;
  // height: 100px;
  // width: auto;
  
}
.select-buttons img{
   border-radius: 4px;
  padding: 5px;
}

.slide img{
  width: auto;
  height: 50vh;

  // border: 1px solid #ddd;
  // border-radius: 4px;
  // padding: 5px;
  // width: 90vw;
}

@media only screen and (max-width: 480px) {

.pain-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.pain-container h1{
  padding-top: 10%;
}
.slide img{
  width: 80vw;
  height: 50vh;

  // border: 1px solid #ddd;
  // border-radius: 4px;
  // padding: 5px;
  // width: 90vw;
}
.all-buttons{
   border-radius: 4px;
  padding: 5px;
// padding: 2%;
  // overflow: scroll;
}
.select-buttons-container{
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  width: 100vw;
  overflow: scroll;
  padding: 2%;
}


  
}
</style>
