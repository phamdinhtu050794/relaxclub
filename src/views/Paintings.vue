<template>
  <div class="pain-container">
    <div class="header">
      <h1>Pictures</h1>
    </div>
    <div class="left-right">
      <button @click="back()" style="font-size: 32px">
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
      <div v-for="item in paintings" :key="item.key" class="slide">
        <img
          v-if="img == item.src"
          :src="getImg(item.src)"
          width="900"
          height="500"
        />
      </div>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <button @click="next()" style="font-size: 32px">
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
    <div class="all-buttons">
      <button @click="back()" style="font-size: 32px">
        <i class="material-icons">keyboard_arrow_left</i>
      </button>

      <div class="select-buttons-container">
        <div v-for="item in paintings" :key="item.key">
          <button @click="showImage(item.key)" class="select-buttons">
            <img :src="getImg(item.src)" class="select-buttons" />
          </button>
        </div>

        <!-- <button @click="showImage(0)">
          <img src="@/assets/paitt.jpg" width="100" height="100" />
        </button>
        <button @click="showImage(1)">
          <img src="@/assets/picture.jpg" width="100" height="100" />
        </button>
        <button @click="showImage(2)">
          <img src="@/assets/paitt.jpg" width="100" height="100" />
        </button>
        <button @click="showImage(3)">
          <img src="@/assets/picture.jpg" width="100" height="100" />
        </button> -->
      </div>

      <button @click="next()" style="font-size: 32px">
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
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
        this.imgNum = 8;
      }
      console.log("back ");
    },
    next() {
      this.imgNum += 1;
      if (this.imgNum > 8) {
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
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.header h1 {
  //    margin-left: 35%;
  color: red;
  //    font-size: 50px;
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
}
.left-right button {
  width: auto;
  height: 50px;
  margin-top: 10%;
  background-color: white;
  border: none;
}
.all-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.select-buttons-container{
  display: flex;
}
.select-buttons{
  height: 100px;
  // width: auto;
}
</style>
