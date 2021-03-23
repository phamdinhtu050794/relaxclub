<template>
  <div class="reservation-container">
    <div class="header">
      <h1>Reservation</h1>
      <h1>Book A Table</h1>
      
    </div>
    <div class="body">
      <div class="map">
        <GoogleMap></GoogleMap>
      </div>
     <div class="table-details">
       <TableDetail></TableDetail>
     </div>
     
    </div>
  
    <div>
      <div id="fb-root"></div>

      <div
        class="fb-customerchat"
        attribution="setup_tool"
        page_id="106063938237662"
      ></div>
    </div>
  </div>
</template>

<script>

import TableDetail from './../components/TableDetail.vue'
import GoogleMap from "./../components/GoogleMap.vue";



export default {
  name: "Reservation",
  components: {
    GoogleMap,
    TableDetail
  },
  props: {
    msg: String,
  },
  mounted() {
    console.log("Linking");
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v10.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.reservation-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  overflow: hidden;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.body {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90vw;
  margin-left: 5%;
}

hr {
  width: 50%;
  margin-left: 25%;
}
.table-details {
  border: 2px solid black;
  background-color: rgb(9, 56, 48);
  width: 40vw;
  height: 80vh;
  margin-right: 3%;
}
.table-details input {
  width: 90%;
  border: 1px solid black;
  background-color: white;
}

.material-icons {
  border: 1px solid black;
  background-color: white;
}
.cell {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.cell-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 40px;
  padding-bottom: 2%;
}
#comment {
  display: flex;
  flex-direction: column;
}
textarea {
  border: 1px solid black;
  height: 100px;
  background-color: white;
}
.button {
  font-size: 20px;
  width: 100px;
  height: 40px;
  border: 2px solid black;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
}

.body h1,
h3 {
  color: white;
}
@media only screen and (max-width: 480px){
.body{
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;
  width: 90vw;
}
// 
.map{
  height: 100vh;
  width: 90vw;
  margin-bottom: 5%;
}
.table-details{
  width: 90vw;
}
}
.btn-list{
  background-color: red;
  width: 150px;
  color: black;
}
</style>
