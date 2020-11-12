<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="新增相册"></Eheader>
    </div>
  </div>
</template>
<script>
import Eheader from "../components/Eheader.vue";
export default {
  components: {
    Eheader,
  },
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 1250px;
  margin: 115px 240px;
  position: absolute;
}
.main1 {
  position: absolute;
  width: 950px;
  height: 550px;
  margin: 0px 80px;
}
</style>