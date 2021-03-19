<template>
  <div v-if="showPictureModal" class="modal-container">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <div class="contents">
      <!-- <div> -->
        <img v-if="loaded" :src="getImg(picture.src)" @load="load()" />
      <!-- </div> -->
      <div class="name-price">
        <div class="name">
          <h2>Painting Name :</h2>
          {{ picture.name }}
        </div>
        <div class="price">
          <h2>Price :</h2>
          {{ picture.price }}
        </div>
      </div>
      <div class="describe">
        <h2>Describe :</h2>
        {{ picture.describe }}
      </div>
    </div>

    <button @click="close"><i class="btn material-icons">&#xe14c;</i></button>
  </div>
</template>

<script>
export default {
  name: "PictureModal2",
  data() {
    return {
      showPictureModal: true,
      loaded: true,
    };
  },
  props: {
    picture: Object
    //  {
      // name: String,
      // price: String,
      // describe: String,
      // src: String,
    // }
  },
  methods: {
    showAlert() {
      this.showPictureModal = !this.showPictureModal;
    },
    close() {
      console.log("closing");
      this.$emit("close");
    },
    getImg(img) {
      // console.log("getting images: " + img)
      var url = require("@/assets/" + img + ".jpg");
      return url;
    },
    load() {
      console.log("loading!!!!!!");
      this.loaded = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  z-index: 0;
  top: 0;
  // left: 15%;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color:yellow;

  // margin: 0px;

  // margin-top: 5%;

  border: 1px solid white;
  align-items: center;
  // justify-content: space-around;
  // border-radius: 0;
  text-align: center;
  overflow: hidden;
  background: rgb(244, 236, 17);
  background: radial-gradient(
    circle,
    rgba(244, 236, 17, 1) 10%,
    rgba(252, 135, 70, 1) 100%
  );
}
img {
  display: flex;
  align-self: center;
  width: auto;
  height: 50vh;
  border: 2px solid gray;
  border-radius: 25px;
  padding: 3%;
  background-color: black;
  
}
.contents {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: start;
  // margin-left: 30%;
  width: 70%;
}
.price {
  margin-right: 5%;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  right: 3%;
  bottom: 3%;
}
.name-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 60px;
}

@media only screen and (max-width: 480px) {
  .modal-container img {
    width: 100%;
    height: 50vh;
    border: 2px solid gray;
    border-radius: 25px;
    padding: 3%;
  }

  .contents {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: start;
    // margin-left: 30%;
    width: 70%;
    // height: 40vh;
  }
  .price {
    margin-right: 5%;
  }
}
</style>
