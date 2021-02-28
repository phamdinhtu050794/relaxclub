<template>
  <div class="card-container">
     <!-- <div> <img :src="getImg(src)" width="400"></div> -->
     <img v-if="loaded" :src="getImg(src)" @load="load()" width="400" height="300" />
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

</style>
