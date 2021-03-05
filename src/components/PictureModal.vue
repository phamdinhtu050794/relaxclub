<template>
  <div v-if="showPictureModal" class="modal-container">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <div>
      <img
        v-if="loaded"
        :src="getImg(src)"
        @load="load()"
        width="auto"
        height="400"
      />
    </div>
    <div class="contents">
      <div class="name"> <h2>Painting Name :</h2> {{ name }}</div>
      <div class="describe"> <h2>Describe : </h2> {{ describe }}</div>
      <div class="price"> <h2>Price : </h2> {{ price }}</div>
    </div>
    <div class="btn">
      <button @click="close"><i class="material-icons">&#xe14c;</i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureModal",
  data() {
    return {
      showPictureModal: true,
      loaded: true,
    };
  },
  props: {
    name: String,
    price: String,
    describe: String,
    src: String,
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

  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0;

  width: 100vw;
  height: 100vh;
  // background-color:yellow;

  margin: 0px auto;

  border: 1px solid white;

  // border-radius: 0;
  text-align: center;
  overflow: hidden;
  background: rgb(244,236,17);
background: radial-gradient(circle, rgba(244,236,17,1) 10%, rgba(252,135,70,1) 100%);
}
.contents {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: start;
  margin-left: 30%;
}

.btn{
 width: 50px;
  border: 1px solid black;
  background-color: red;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
