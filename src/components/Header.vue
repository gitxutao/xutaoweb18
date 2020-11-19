<template>
  <div class="header">
    <div class="header1">
      <img src="../assets/11.png" alt />
    </div>
    <div class="header2">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="blue"
        text-color="gainsboro"
        active-text-color="#fff"
      >
        <ul class="headertitle">
          <li>
            <router-link to="/main">
              <el-menu-item index="1">内容管理</el-menu-item>
            </router-link>
          </li>
          <li>
            <router-link to="/main1">
              <el-menu-item index="2">系统设置</el-menu-item>
            </router-link>
          </li>
        </ul>
      </el-menu>
    </div>
    <div class="header3">
      <ul class="header4">
        <li @mouseenter="mouseru1" @mouseleave="mousechu1">
          <i class="el-icon-user-solid"  width="40px"
  height="40px">admin</i>
        </li>
        <span>|</span>
        <li>
          <i class="el-icon-message-solid"></i>
          <el-badge :value="99" class="item"></el-badge>
        </li>
        <span>|</span>
        <li>
          <i class="el-icon-share"></i>
        </li>
        <span>|</span>
        <li @click="but1">
          <i class="el-icon-s-home"></i>
        </li>
        <span>|</span>
        <li @click="but">
          <i class="el-icon-switch-button"></i>
        </li>
      </ul>
      <el-collapse-transition>
        <div class="shows" v-show="hideshow">
          <ul>
            <li>登录用户：admin</li>
            <li>上次登录：2018-04-28 18:00:00</li>
            <li>登录地区：广东省 广州市（IP：183.18.18.31）</li>
          </ul>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hideshow: false,
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    mouseru1: function() {
      this.hideshow = true;
    },
    mousechu1: function() {
      this.hideshow = false;
    },
    but() {
      this.$router.push({
        path: "/login"
      });
    },
    but1() {
      this.$router.push({
        path: "/main"
      });
    }
  }
};
</script>
<style  scoped>
.header {
  background: blue;
  width: 100%;
  height: 50px;
}
.header1 {
  width: 300px;
  float: left;
}
.header1 img {
  height: 40px;
  margin: 5px 40px;
}
.header2 {
  float: left;
  margin: 0px -80px;
}
.headertitle {
  list-style-type: none;
}
.headertitle li {
  float: left;
  height: 49px;
  width: 100px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
}
.header4 {
  float: right;
}
.header4 li {
  float: left;
  list-style: none;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.header4 span {
  position: absolute;
  font-size: 22px;
  font-family: sans-serif;
  margin: 10px -3px;
  color: gainsboro;
}
/* .header4 li:hover{
  background: white;
  opacity: 0.1;
  cursor: pointer;
} */
.header4 li i {
  color: white;
  z-index: 10;
}
.item {
  position: absolute;
  right: 326px;
  top: -6px;
}
.shows {
  background: white;
  position: absolute;
  opacity: 1;
  top: 51px;
  width: 350px;
  height: 140px;
  right: 75px;
  padding-left: 44px;
  z-index: 10;
  box-shadow: darkgrey 5px 5px 15px 5px;
}
.shows ul li {
  list-style: none;
  color: black;
  padding-top: 15px;
  font-size: 13px;
}
</style>