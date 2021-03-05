<template>
  <div class="container">
      <div>{{name}} </div>
      <div class="contents">
          {{name_content1}} -
          {{name_content2}} -
          {{name_content3}}
      </div>
      <br>
      <br>
  </div>
</template>

<script>
export default {
  name: "DrinkContents",
  props: {
    name: String,
    name_content1: String,
    name_content2: String,
    name_content3: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto;
    width: auto;
    text-align: center;
}
// .contents{
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
// }
</style>
