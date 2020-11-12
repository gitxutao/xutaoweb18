<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="新增商品"></Eheader>
    </div>
    <div class="content">
      <div class="content1">
        <h3>基本配置</h3>
        <p class="fgx"></p>
      </div>
    </div>
  </div>
</template>
<script>
import Eheader from "../components/Eheader.vue";
export default {
  components: {
    Eheader
  }
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
.content {
  width: 90%;
  height: 1200px;
  border: 1px black solid;
  margin: 0px auto;
}
.fgx {
  width: 960px;
  height: 1px;
  background: rgb(235, 222, 222);
  margin: 15px 0px;
}
.content1{
  margin: 20px 0px;
}
</style>