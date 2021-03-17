<template>
  <div class="card-container">
     <!-- <div> <img :src="getImg(src)" width="400"></div> -->
     <img v-if="loaded" :src="getImg(src)" @load="load()" width="" height="" />
     <div>{{name}} </div>
     <div>{{price}} </div>
  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    name: String,
    price : String,
    src: String
  },
  data: () => {
      return {
          loaded: true,
          img: 0
      }
  },
  methods: {
    getImg(img){
        // console.log("getting images: " + img)
      var url = require('@/assets/' + img +'.jpg');
      return url; 
    },
    load(){
        console.log('loading!!!!!!')
        this.loaded = true; 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container{
  display: flex;
  

}
.card-container img{
   border-radius: 25px;
  padding: 5px;
  width: 30vw;
  // height: 30vh;
}
@media only screen and (max-width: 480px) {

  .card-container img{
    border-radius: 5px;
    width: 90vw;
    // height: 90vh;
  }
  
}
</style>
