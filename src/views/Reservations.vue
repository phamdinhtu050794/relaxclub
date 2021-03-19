<template>
  <div class="reservation-container">
      <div class="header">
        <h1>Reservation</h1>
        <h1>Book A Table</h1>
      </div>
      <div class="body">
        
        <div class="map">
          Google Map
        </div>
        <div class="table-details">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <div>
            <h3>Party Size</h3>
            <div class="cell">
              <input placeholder="number">
              <i class="material-icons">&#xe853;</i>
            </div>
          </div>
          <div>
            <h3>Area</h3>
            <div class="cell">
                 <input placeholder="Choose an area">
                 <i class="material-icons">&#xe871;</i>
            </div>
          </div>

          <div>
            <h3>Timne</h3>
            <div class="cell">
                 <input placeholder="7:00pm">
                 <i class="material-icons">&#xe855;</i>
            </div>
          </div>
          <br>
 <hr>
          <h1> Contact Details</h1>
          <div class="cell-footer">
               <input placeholder="first name">
          </div>

          <div class="cell-footer">
               <input placeholder="last name ">
          </div>

          <div class="cell-footer">
               <input placeholder="number phone">
          </div>

          <div class="cell-footer">
               <input placeholder="email address">
          </div>

          <div  id="comment">
            <h3>Comment</h3>
            <textarea v-model="message" placeholder="comment"></textarea>
          </div>

          <div class="button">
            <button>Submit</button>
          </div>

        </div>
      </div>
  <div>

      <div id="fb-root"></div>
  
      <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="106063938237662">
      </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "Reservation",
  props: {
    msg: String,
  },
  mounted(){
    console.log("Linking")
    window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.reservation-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}
.header{
  display: flex;
  flex-direction: column;
}
.body{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  height: 90vh;
  // padding: 5%;
  margin-left: 5%;
  padding-top: 5%;
  background-color: aqua;
}
.map{
  border: 2px solid black;
  background-color: gray;
  width: 40vw;
  height: 80vh;
  margin-left: 3%;
}
hr{
  width: 50%;
  margin-left: 25%;
}
.table-details{
  border: 2px solid black;
  background-color: rgb(29, 61, 29);
  width: 40vw;
  height: 80vh;
  margin-right: 3%;
}
.table-details input{
  width: 90%;
  border: 1px solid black;
  background-color: white;
}

.material-icons{
  border: 1px solid black;
  background-color: white;
}
.cell{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.cell-footer{
   display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 40px;
  padding-bottom: 2%;
}
#comment{

  display: flex;
  flex-direction: column;

}
textarea{
  
  border: 1px solid black;
  height: 100px;
  background-color: white;
}
.button{
  font-size: 20px;
  width: 100px;
  height: 40px;
  border: 2px solid black;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  
}

.body h1, h3{
  color: white;
}
</style>
