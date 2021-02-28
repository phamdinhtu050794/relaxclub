<template>
  <div class="calendar-container" v-cloak>
      <!-- <ds-calendar></ds-calendar> -->
        <!-- <ds-calendar-app :calendar="calendar"></ds-calendar-app> -->
  </div>
</template>

<script>
// import { Calendar } from 'dayspan';
export default {
  name: "Calendar",
//   data: () => ({
//     calendar: Calendar.months()
//   }),
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calendar-container{
    font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
