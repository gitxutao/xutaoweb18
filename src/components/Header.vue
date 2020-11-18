<template>
  <div class="header">
    <div class="header1">
      <img src="../assets/11.png" alt />
    </div>
    <div class="header2">
      <ul class="headertitle">
        <li>内容管理</li>
        <li>系统设置</li>
      </ul>
    </div>
    <div class="header3">
      <ul class="header4">
        <li @mouseenter="mouseru1" @mouseleave="mousechu1">
          <i class="el-icon-user-solid"></i>
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
      <div class="shows" v-show="hideshow">
            <ul>
              <li>
                登录用户：admin
              </li>
              <li>
               上次登录：2018-04-28 18:00:00
              </li>
              <li>
               登录地区：广东省 广州市（IP：183.18.18.31）
              </li>
            </ul>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hideshow: false
    };
  },
  methods: {
    mouseru1: function() {
      this.hideshow = true;
    },
    mousechu1: function() {
      this.hideshow = false;
    },
    but(){
      this.$router.push({
        path:'/login'
      })
    },
    but1(){
      this.$router.push({
        path:'/main'
      })
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
}
.headertitle {
  list-style-type: none;
  margin: 0px -80px;
}
.headertitle li {
  float: left;
  height: 50px;
  width: 100px;
  line-height: 50px;
  background-color: aliceblue;
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
 box-shadow: darkgrey 5px 5px 15px 5px ;
}
.shows ul li {
  list-style: none;
  color: black;
  padding-top: 15px;
  font-size: 13px;
}
</style>