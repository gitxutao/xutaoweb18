<template>
  <div class="main">
    <div >
      <div class="header">
        <Header></Header>
      </div>
      <div>
        <div class="sidebar">
          <Sidebar1></Sidebar1>
          <div class="main1"></div>
        </div>
        <!-- <div class="eheader">
                <Eheader></Eheader>
        </div>-->
        <div class="nr">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Sidebar1 from "../components/Sidebar1"
import Eheader from "../components/Eheader.vue";
export default {
  data() {
    return {
      name: ""
    };
  },
  components: {
    Header,
    Sidebar1,
    Eheader
  }
};
</script>
<style  scoped>
template {
  background: silver;
}
.sidebar {
  position: fixed;
  top: 50px;
}
.header {
  position: fixed;
  z-index: 10;
}
.main1 {
  background: silver;
  width: 100%;
  height: 100vh;
  position:fixed;
  z-index: -10;
}
</style>
