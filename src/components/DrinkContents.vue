<template>
  <!-- <div class="container">
    <div>{{ name }}</div>
    <div class="contents">
      {{ name_content1 }} - 
      {{ name_content2 }} -
      {{ name_content3 }}
    </div>
    <br />
    <br />
  </div> -->
  <div class="drink-content-container">
    <ul class="list-content">
      <div>
        <h2>- {{ name }} -</h2>
      </div>
      <li class="content"><div> {{ name_content1 }}  </div><div>....................</div> <div class="price"> {{price1}} </div>  </li>
      <li class="content"><div> {{ name_content2 }} </div><div>....................</div> <div class="price"> {{price1}} </div>  </li>
      <li class="content"><div> {{ name_content3 }} </div><div>....................</div> <div class="price"> {{price1}} </div>  </li>
      
      <br />
      <br />
    </ul>
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
    price1: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.drink-content-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: start;
  // background-color: yellow;

  width: 30vw;
}
.list-content{
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-align: start;
  
}
.list-content li{
  font-size: 1.3em;
  
}
.content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // width: 100%;
  // background-color: yellowgreen;
}
.price{
  color: rgb(141, 0, 0);
}

</style>
