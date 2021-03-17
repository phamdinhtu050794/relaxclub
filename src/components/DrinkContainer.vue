<template>
    <div class="drink-content-container">

      
        <h1>Drinks</h1>
        <hr>
        
        <div v-for="item in drinks" :key="item.key" class="drink-items">
          <DrinkContents
            v-if="item.avaliable"
            :name="item.name"
            :name_content1="item.name_content1"
            :name_content2="item.name_content2"
            :name_content3="item.name_content3"
            :price1="item.price1"
          >
          </DrinkContents>      
      </div>
    </div>
</template>

<script>
import DrinkContents from "../components/DrinkContents.vue";

export default {
  name: "DrinkContainer",
  components: {
    DrinkContents,
  },
  props: {
    drinks : Array
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.drink-content-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.drink-content-container hr{
  color: red;
  width: 30%;
}


</style>
