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
        <li @mouseenter="mouseru1" @mouseleave="mousechu1"><i class="el-icon-user-solid"></i></li><span>|</span>
        <li>
          <i class="el-icon-message-solid"  ></i>
           <el-badge :value="99" class="item">
          </el-badge>
            <div class="shows" v-show="hideshow">
              <ul>
                  <li>您有3笔外卖订单未接单<br><span>2018-12-28 09:18:00</span></li>
                  <li>您有1笔上门服务订单未接单<br><span>2018-12-28 09:18:00</span></li>
                  <li>您有5笔订单待发货<br><span>2018-04-28 09:18:00</span></li>
              </ul>
          </div>
          </li><span>|</span>
        <li><i class="el-icon-share"></i></li><span>|</span>
        <li><i class="el-icon-s-home"></i></li><span>|</span>
        <li><i class="el-icon-switch-button"></i></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hideshow:false
    }
  },
  methods:{
     mouseru1: function () {
      this.hideshow = true;
    },
    mousechu1: function () {
      this.hideshow = false;
    },
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
.header4{
  float: right;
}
.header4 li{
  float: left;
  list-style: none;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.header4 span{
  position:absolute;
  font-size: 22px;
  font-family: sans-serif;
  margin: 10px -3px;
  color: gainsboro;
}
.header4 li:hover{
  background: gainsboro;
  opacity: 1;
  cursor: pointer;
}
.header4 li i{
  color: white;
  z-index: 10;
}
.item{
    position: absolute;
    right: 327px;
    top: -7px;
}
.shows{
     background: gainsboro!important;
     position: absolute;
     opacity: 1;
    top: 51px;
    width: 250px;
    line-height: 2;
    right: 205px;
    padding-left: 44px;
    box-shadow: 0 0 4px black;
}
.shows ul li span{
    color: gray;
    font-size: 14px;
}

</style>