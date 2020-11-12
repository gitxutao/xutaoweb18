<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="首页"></Eheader>
      <div>
        <div class="header">
          <div class="header_1">
            <div class="header1_1">
              <img src="../assets/1.png" alt class="img" />
            </div>
            <div class="header1_2">
              <ul class="header1_3">
                <li>欢迎您!</li>
                <li>十月大神</li>
              </ul>
            </div>
          </div>
          <div class="header2">
            <ul class="header2_1">
              <li>
                <p>商户ID</p>
                <p>6666688</p>
              </li>
              <li>
                <p>商户ID</p>
                <p>6666688</p>
              </li>
              <li>
                <p>商户ID</p>
                <p>6666688</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="content">
          <div class="content_1">
            <img src="../assets/5.png" alt="">
          </div>
          <div class="content_2">
            <img src="../assets/6.png" alt="">
          </div>
        </div>
        <div class="content1">
          <img src="../assets/2.png" alt="">
        </div>
        <div class="content2">
          <div class="content2_1">
            <div class="content2_4">
                <h3>采购单汇总</h3>
            </div>
            <div class="content2_3">
              <el-time-picker
                is-range
                v-model="value1"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围"
              ></el-time-picker>
            </div>
            <Echarts></Echarts>
          </div>
          <div class="content2_2">
            <img src="../assets/3.png" alt="">
          </div>
        </div>
        <div class="content3">
    <img src="../assets/4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Eheader from "../components/Eheader.vue";
import Echarts from "../components/Echarts.vue";
import Echartszzt from "../components/Echartszzt.vue";
export default {
  components: {
    Eheader,
    Echarts,
    Echartszzt
  },
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    };
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
.header {
  width: 95%;
  height: 110px;
  border: solid 1px rgb(235, 222, 222);
  margin: 10px 26px;
}
.header_1 {
  width: 40%;
  height: 110px;
  float: left;
}
.header_2 {
  width: 59.5%;
  height: 110px;
  border: solid 1px rgb(235, 222, 222);
  float: left;
}
.header2 ul li {
  list-style-type: none;
  float: left;
  padding-left: 100px;
  margin-top: 36px;
}
.content {
  width: 97%;
  height: 200px;
  margin: 10px 26px;
}
.content_1 {
  width: 48%;
  height: 220px;
  border: solid 1px rgb(235, 222, 222);
  float: left;
}
.content_2 {
  width: 48%;
  height: 220px;
  border: solid 1px rgb(235, 222, 222);
  float: left;
  margin: 0px 18px;
}
.content2 {
  width: 48%;
  height: 220px;
  margin: 0px 18px;
  float: left;
}
.content1 {
  width: 95%;
  height: 210px;
  border: solid 1px rgb(235, 222, 222);
  margin: 50px 26px;
}
.content2 {
  width: 97%;
  height: 240px;
  margin: -20px 26px;
}
.content2_1 {
  width: 48%;
  height: 245px;
  border: solid 1px rgb(235, 222, 222);
  float: left;
}
.content2_2 {
  width: 48%;
  height: 245px;
  border: solid 1px rgb(235, 222, 222);
  margin: 0px 18px;
  float: left;
}
.content3 {
  width: 95%;
  height: 270px;
  border: 1px solid rgb(235, 222, 222);
  margin: 50px 26px;
}
.img {
  border-radius: 40px;
  margin: 23px 80px;
}
.header1_1 {
  width: 38%;
  height: 110px;
  float: left;
}
.header1_2 {
  width: 45%;
  height: 110px;
  float: left;
}
.header1_3 {
  margin: 30px 0px;
}
.header1_3 li {
  list-style-type: none;
  margin: 5px 0px;
}
.content2_3 {
  position: absolute;
  margin: -55px 130px;
  z-index: 2;
}
.content2_4 h3{
margin: 20px 20px;
}
.content1 img{
  width: 100%;
  height: 210px;
}
.content2_2 img{
  width: 495px;
  height: 245px;
}
.content3{
  width: 95%;
  height: 340px;
  border: 1px rgb(235, 222, 222) solid;
  position: absolute;
  bottom: -32px;
}
.content3 img{
  width: 100%;
  height: 340px;
}
.content_1 img{
  width: 100%;
  height: 220px;
}
.content_2 img{
  width: 100%;
  height: 220px;
}
</style>