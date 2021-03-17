<template>
  <div class="picture-container">
    <div class="header">
      <h1>Paintings Shop</h1>
    </div>
    <div class="img">
      <img src="@/assets/p12.jpg" 
      
      width="400px"
      height=""
    /></div>
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
      <PictureModal
      
        v-if="showingPictureModal"
        v-on:close="closePictureModal"
        :name="picture[showPictureCard].name"
        :price="picture[showPictureCard].price"
        :describe="picture[showPictureCard].describe"
        :src="picture[showPictureCard].src"
      ></PictureModal>
      </transition>
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
    showPictureModal(picKey) {
      console.log("picKey: " + picKey);
      this.showPictureCard = picKey;
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
background: rgb(6,6,0);
background: radial-gradient(circle, rgba(6,6,0,1) 10%, rgba(194,177,169,1) 100%);
  // flex-wrap: wrap;
  overflow: hidden;
}

.img{
   
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 25%;
   border: 2px solid gray;
  border-radius:  15px; 
  padding: 3%;
  width: 50vw;
  background-color:black;
 
  
  // padding: 2%;

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
  // padding-bottom: 2%;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // width: 30vw;
  // flex: 1 1 30%;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  background-color:black;
  margin-bottom: 3%;
  

  
 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s; 
}
.fade-enter, .fade-leave-to {
  opacity: 0; 
}


@media only screen and (max-width: 480px) {

  .picture-container{
    padding: 2%;
  }
  .list-container{
    border: 1px;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  }

  .img{
    border: 2px solid gray;
   width: 95vw;
   margin: 0;
  //  height: 100vh;
  padding: 2%;
  
  }
}
</style>
