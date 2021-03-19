<template>
  <div class="picture-container">
    <div class="header">
      <h1>Paintings Shop</h1>
    </div>
    <div class="img">
      <!-- <img src="@/assets/p12.jpg" v-on:click="showMainPicture" width="100%" height="100%" /> -->
       <PictureCard
          @click.native="showMainPicture"
          :src="this.mainPicture.src"
        ></PictureCard>
    </div>
    <div class="list-container">
      <div v-for="item in picture" :key="item.key" class="list-item">
        <PictureCard
          v-if="item.avaliable"
          @click.native="showPictureModal(item.key)"
          :src="item.src"
        ></PictureCard>
        <!-- :name="item.name"
          :price="item.price" -->
      </div>

      <transition name="fade">
        <PictureModal2
          v-if="showingPictureModal"
          v-on:close="closePictureModal"
          :picture="this.curPicture"
        ></PictureModal2>
          <!-- :name="picture[showPictureCard].name"
          :price="picture[showPictureCard].price"
          :describe="picture[showPictureCard].describe"
          :src="picture[showPictureCard].src" -->

      </transition>
    </div>
  </div>
</template>

<script>
import PictureCard from "@/components/PictureCard.vue";
import PictureModal2 from "@/components/PictureModal2.vue";
import store from "@/store/index";
export default {
  name: "Pictures",
  components: {
    PictureCard,
    PictureModal2,
  },
  data() {
    return {
      showPictureCard: 2,
      showingPictureModal: false,
      curPicture: null 
    };
  },
  computed: {
    picture() {
      console.log("getting picture");
      return store.state.Picture;
    },
    mainPicture() {
      return store.state.MainPicture;
    }
  },
  methods: {
    showMainPicture() {
      console.log(this.mainPicture)
      this.showPictureCard = this.mainPicture.key;
      this.curPicture = this.mainPicture;
      this.showingPictureModal = true;
    },
    showPictureModal(picKey) {
      console.log("picKey: " + picKey);
      this.showPictureCard = picKey;
      this.curPicture = this.picture[picKey];
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
  margin: 0;
  background: rgb(6, 6, 0);
  background: radial-gradient(
    circle,
    rgba(6, 6, 0, 1) 10%,
    rgba(194, 177, 169, 1) 100%
  );
  overflow: hidden;
}

.img {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 25%;
  margin-bottom: 3%;
  border: 2px solid gray;
  border-radius: 15px;
  padding: 3%;
  width: 50vw;
  height: 80vh;
  background-color: black;
}
.header {
  display: flex;
  flex-direction: row;
}
.header h1 {
  margin: auto;
  color: black;
  font-size: 42px;
}
.list-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  background-color: black;
  margin-bottom: 3%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 480px) {
  .picture-container {
    padding: 2%;
  }
  .list-container {
    border: 1px;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .img {
    border: 2px solid gray;
    width: 100%;
    height: 70vh;
    margin: 0;
    padding: 5%;
    
  }
}
</style>
