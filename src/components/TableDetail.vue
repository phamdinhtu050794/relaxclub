<template>
   <div class="table-details">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div>
          <h3>Party Size</h3>
          <div class="cell">
            <input v-model="list.Party_Size" placeholder="number" />
            <i class="material-icons">&#xe853;</i>
          </div>
        </div>
        <div>
          <h3>Area</h3>
          <div class="cell">
            <input v-model="list.Area" placeholder="Choose an area" />
            <i class="material-icons">&#xe871;</i>
          </div>
        </div>

        <div>
          <h3>Time</h3>
          <div class="cell">
            <input v-model="list.Time" placeholder="7:00pm" />
            <i class="material-icons">&#xe855;</i>
          </div>
        </div>
        <br />
        <hr />
        <h1>Contact Details</h1>
        <div class="cell-footer">
          <input v-model="list.First_Name" placeholder="first name" />
        </div>

        <div class="cell-footer">
          <input v-model="list.Last_Name" placeholder="last name " />
        </div>

        <div class="cell-footer">
          <input v-model="list.Phone" placeholder="number phone" />
        </div>

        <div class="cell-footer">
          <input v-model="list.Email" placeholder="email address" />
        </div>

        <div id="comment">
          <h3>Comment</h3>
          <textarea v-model="list.Comment" placeholder="comment"></textarea>
        </div>

        <div class="button">
          <button @click="createList">Submit</button>
        </div>
      </div>
</template>

<script>

export default {
  name: "TableDetail",

  data(){
      return{
          list:{
              Party_Size: null,
              Area : null,
              Time : null,
              First_Name : null,
              Last_Name : null,
              Phone : null,
              Email : null,
              Comment : null,

          }
      }
  },
  methods:{
      createList(){
          console.log("in add modal lists....")
          var payload ={
              Party_Size : this.list.Party_Size,
              Area : this.list.Area,
              Time : this.list.Time,
              First_Name : this.list.First_Name,
              Last_Name : this.list.Last_Name,
              Phone : this.list.Phone,
              Email : this.list.Email,
              Comment : this.list.Comment,
          };
          this.$store.dispatch("createList", payload);
          this.back();
      }

  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

</style>
