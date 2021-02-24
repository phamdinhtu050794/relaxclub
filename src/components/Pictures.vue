<template>
  <div class="picture-container">
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
      <h1>Picture Shop</h1>
    </div>
    <div><img src="@/assets/picture.jpg"  /></div>
    <div class="list-container">
      <div v-for="item in picture" :key="item.key" class="list-item">
        <PictureCard
          v-if="item.avaliable && showPictureCard == 2"
          @click.native="showPictureModal"
          :name="item.name"
          :price="item.price"
        ></PictureCard>
      </div>
      <PictureModal
        v-if="showingPictureModal"
        v-on:close="closePictureModal"
        :name="picture[0].name"
        :price="picture[0].price"
        :describe="picture[0].describe"
      ></PictureModal>
    </div>
  </div>
</template>

<script>
import PictureCard from "@/components/PictureCard.vue";
import PictureModal from "@/components/PictureModal.vue"
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
  //   methods:{
  //       showPictureCard(){
  //           this.showPictureCard = 2;
  //       }
  //   },
  methods:{
      showPictureModal(){
          this.showingPictureModal = true;
      },
      closePictureModal(){
          this.showingPictureModal = false;
      },
      close(){
          console.log("closingggg");
          this.$emit("close")
      }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.picture-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.header{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.header h1{
   margin-left: 35%;
   color: red;
   font-size: 50px;
}
.header button{
    height: 50px;
    border: none;
}
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
    justify-content: space-around;
    overflow: hidden;
}
</style>
