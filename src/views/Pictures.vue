<template>
  <div class="picture-container">
    <div class="header">
      <h1>Paintings Shop</h1>
    </div>
    <div class="img"><img src="@/assets/0.jpg" width="500" /></div>
    <div class="list-container">
      <div v-for="item in picture" :key="item.key" class="list-item">
        <PictureCard
          v-if="item.avaliable"
          @click.native="showPictureModal"
          :name="item.name"
          :price="item.price"
          :src="item.src"
        ></PictureCard>
      </div>
      <PictureModal
        v-if="showingPictureModal"
        v-on:close="closePictureModal"
        :name="picture[showPictureCard].name"
        :price="picture[showPictureCard].price"
        :describe="picture[showPictureCard].describe"
        :src="picture[showPictureCard].src"
      ></PictureModal>
    </div>
  </div>
</template>

<script>
import PictureCard from "@/components/PictureCard.vue";
import PictureModal from "@/components/PictureModal.vue";
import store from "@/store/index";
export default {
  name: "Pictures",
  components: {
    PictureCard,
    PictureModal,
  },
  data() {
    return {
      showPictureCard: 2,
      showingPictureModal: false,
    };
  },
  computed: {
    picture() {
      console.log("getting picture");
      return store.state.Picture;
    },
  },
  methods: {
    showPictureModal() {
      this.showingPictureModal = true;
    },
    closePictureModal() {
      this.showingPictureModal = false;
    },
    close() {
      console.log("closingggg");
      this.$emit("close");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.picture-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  // flex-wrap: wrap;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.header h1 {
  margin: auto;
  color: black;
  font-size: 50px;
}
// .header button{
//     height: 50px;
//     border: none;
// }
.list-container {
  display: flex;
  flex-direction: row;
  min-width: 0px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px auto;
  overflow: visible;
  // background-color: yellow;
  padding: 30px;
  justify-content: space-between;
}
.list-item {
  display: flex;
  min-width: 0px;
  flex: 0 10 30%;
  // margin: 5px;
  // background-color: purple;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  // order: 3;
  // flex-grow: 1;
}
// @media only screen and (max-width:1024px) and (min-width: 641px) and (min-width: 320px) {

// }
.img {
  //  height: 100vh;
  // width: 100vw;
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .list-container {
    flex-direction: column;
  }

  .list-container .list-item {
    width: 50%;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 480px) {
  .list-container .list-item {
    width: 100%;
  }
}
</style>
