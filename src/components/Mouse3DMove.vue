<template>
  <div class="mouse3d-container">
    <img
      @mousemove="mouseMove"
      @touchmove="touchMove"
      @mouseleave="mouseLeave"
      @touchend="touchEnd"
      src="@/assets/logorelax.jpg"
      width="300"
      height="200"
    />

    <div> 
      <!-- Test: {{x}} , {{y}} -->
    </div>
    <!-- <div class="temp">TTT</div> -->
  </div>
</template>

<script>
export default {
  name: "Mouse3DMove",
  props: {},
  data: () => {
    return {
      x: 0,
      y: 0
    }
  },

//   methods: {
//     mouseMove(e) {
//       // var container = document.querySelector(".mouse3d-container");

//       // var mouseContainerX = e.x - container.offsetLeft;
//       // var mouseContainerY = e.y - container.offsetTop;
//       // this.x = mouseContainerX; 
//       // this.y = mouseContainerY; 
//       var container = document.querySelector(".mouse3d-container");

//       var xPer = e.x - container.offsetLeft;
//       var yPer = e.y - container.offsetTop;

//       xPer = xPer / container.clientWidth;
//       yPer = yPer / container.clientHeight;
//       this.setRot(container, yPer, xPer);
//     },
//     mouseLeave(e) {
//       this.resetTransform();
//     },
//     touchMove(e) {
//       var container = document.querySelector(".mouse3d-container");

//       var touch = e.changedTouches[0]; 

//       var xPer = touch.clientX - container.offsetLeft;
//       var yPer = touch.clientY - container.offsetTop;

//       xPer = xPer / container.clientWidth;
//       yPer = yPer / container.clientHeight;

//       this.x = parseFloat( xPer ).toFixed(2); 
//       this.y = parseFloat( yPer ).toFixed(2); 
//       this.setRot(container, xPer, yPer);

//       e.preventDefault();
//     },
//     touchEnd() {
//       this.resetTransform(); 
//     },

//     setRot(container, xPer, yPer) {
//       var rotX = 45 - xPer * 90;
//       var rotY = 45 - yPer * 90;
// this.x = parseFloat( rotX ).toFixed(2); 
//       this.y = parseFloat( rotY ).toFixed(2); 
//       container.style.transform = "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
//     },
//     resetTransform() {
//       var container = document.querySelector(".mouse3d-container");

//       container.style.transform = "rotateX(0) rotateY(0)";
//     },
//   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mouse3d-container {
  border-radius: 50%;
  overflow: hidden;
  transition: transform 600ms;
  perspective: 100px;
  // mix-blend-mode: multiply;
  transform-style: preserve-3d;
  z-index: 0;
   animation: mymove 5s infinite;
}
@keyframes mymove {
  50% {transform: rotateY(90deg);}
}
.temp {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 30px;
  font-weight: 900;
  color: yellow;
  z-index: 100;
}
</style>
