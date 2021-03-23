<template>
  <div class="map-container">
<div class="button">

      <button @click="drawMarkers">Draw Markers</button>
      <button @click="drawDirection">Draw Direction</button>
      <button @click="clearMap">Clear Map</button>
</div>
     <GmapMap class="map"
  :center="center"
  :zoom="15"
  
  
>
<!-- <iframe src="http://maps.google.com/maps?q=25.3076008,51.4803216&z=16&output=embed" height="450" width="600"></iframe> -->

 <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />

 <gmap-polygon :paths="paths" ></gmap-polygon>
</GmapMap>
  </div>
</template>

<script>

const home ={lat:16.107940506818974,lng: 108.25955907491169};
const work ={lat:16.107940506818974,lng: 108.25955907491169};

export default {
  name: "GoogleMap",
  
  data(){
      return{
          markers: [],
          center : home,
          paths : [],
      }
  },

  methods:{
      drawMarkers(){
        //   alert("drawMarkers");
        this.markers = [
            {
                position: home,
            },
            {
                position: work,
            }
        ]
      },
      drawDirection(){
          this.paths = [home, work];
      },
      clearMap(){
        //   alert("clearMap")
        this.paths =[];
        this.markers = [];
      }
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.map-container{
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 80vh;
}
.map{
    width: 40vw;
    height: 80vh;
}
.button{
    display: flex;
    justify-content: center;
}

.button button{
    margin-left: 2%;
    border: 1px solid black;
    
}
@media only screen and (max-width: 480px) {

    .map{
        width: 90vw;
        
    }
    
}
</style>
