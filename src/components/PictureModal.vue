<template>
  <div v-if="showPictureModal" class="modal-container">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <div>
          <img :src="src" alt="">
      </div>
    <div>{{name}} </div>
    <div> {{describe}} </div>
    <div> {{price}} </div>
    <div>
        <button  @click="close" ><i class="material-icons">&#xe14c;</i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureModal",
  data(){
      return{
          showPictureModal : true,
      }
  },
  props: {
    name: String,
    price: String,
    describe: String,
    src: String
  },
  methods:{
      showAlert(){
          this.showPictureModal = !this.showPictureModal;

      },
       close() {
      console.log("closing")
      this.$emit("close");
    },
  }
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
  background-color: khaki;
  
  margin: 0px auto;

  border: 1px solid white;
  

  border-radius: 0px 50px;
  
}
</style>
