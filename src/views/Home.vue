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
        <div class="two">
          <div class="left">
            <p>待处理事务</p>
            <ul style="margin: 0px 48px;">
              <li>
                <p>
                  <el-badge :value="4" class="item">采购待审核</el-badge>
                </p>
                <p>
                  <el-badge :value="1" class="item">出货待审核</el-badge>
                </p>
                <p>订单促销待审核</p>
              </li>
              <li>
                <p>采购退货待审核</p>
                <p>
                  <el-badge :value="1" class="item">调拨待审核</el-badge>
                </p>
                <p>商品促销待审核</p>
              </li>
              <li>
                <p>入库待审核</p>
                <p>盘点待审核</p>
                <p>— —</p>
              </li>
            </ul>
          </div>
          <div class="rigth left">
            <p>快捷菜单</p>
            <span>添加/设置</span>
            <ul style="margin: 0px 48px;">
              <li>
                <p>商品档案</p>
                <p>终端销售交易明细</p>
                <p>终端财务收银汇总</p>
              </li>
              <li>
                <p>商品库存</p>
                <p>终端财务收银明细</p>
                <p>— —</p>
              </li>
              <li>
                <p>商品库存明细</p>
                <p>终端销售交易明细</p>
                <p>— —</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="content1">
          <img src="../assets/2.png" alt />
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
            <img src="../assets/3.png" alt />
          </div>
        </div>
        <div class="content3">
          <img src="../assets/4.png" alt />
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
.content2_4 h3 {
  margin: 20px 20px;
}
.content1 img {
  width: 100%;
  height: 210px;
}
.content2_2 img {
  width: 495px;
  height: 245px;
}
.content3 {
  width: 95%;
  height: 340px;
  border: 1px rgb(235, 222, 222) solid;
  position: absolute;
  bottom: -32px;
}
.content3 img {
  width: 100%;
  height: 340px;
}
.content_1 img {
  width: 100%;
  height: 220px;
}
.content_2 img {
  width: 100%;
  height: 220px;
}
.two {
  width: 95%;
  height: 150px;
  margin: 20px auto;
}
.seven {
  width: 90%;
  height: 204px;
  margin: 13px auto;
}
.three {
  width: 90%;
  height: 180px;
  margin: 13px auto;
  border: 1px solid silver;
}
.three .p {
  font-weight: bold;
  margin: 11px 40px;
  font-size: 13px;
}
.three p {
  font-size: 12px;
  font-weight: 100;
}
.three ul li {
  float: left;
  font-size: 12px;
  padding: 0px 7px;
}
.three ul li p > img {
  width: 49%;
  position: relative;
  left: 26px;
}
.three ul li p:nth-of-type(2) > img,
.three ul li p:nth-of-type(3) {
  padding: 51px 0px;
}
.four {
  width: 90%;
  height: 286px;
  margin: 34px auto;
  border: 1px solid silver;
}
.four div ul li {
  float: left;
  font-size: 12px;
  font-weight: 100;
  padding: 0px 5px;
  margin: 12px 0px;
}
.four div:nth-of-type(1) {
  float: left;
  font-weight: bold;
  font-size: 12px;
  padding: 12px 30px;
}
.four div:nth-of-type(2) {
  float: right;
  padding: 4px 26px 0px 0px;
}

/* .four div ul li:nth-of-type(1){
font-weight: bold;    padding: 0px 27px;
 } */
.four div ul li:nth-of-type(2) {
  color: blue;
}
.four div ul li:nth-of-type(4) {
  border: 1px solid silver;
  border-radius: 5px;
  padding: 3px 4px;
  margin: 7px 2px;
}
.sb {
  width: 100%;
  height: 79%;
  margin: 46px 0px;
}
.sb .sb_left {
  font-weight: 100 !important;
  font-size: 12px;
}
.sb .sb_left p:nth-of-type(2),
.sb .sb_left p:nth-of-type(5) {
  font-size: 13px;
  font-weight: 500 !important;
}
.sb .sb_left p:nth-of-type(3) > i {
  font-size: 12px;
  font-weight: 100;
  color: red;
}
.sb .sb_left p:nth-of-type(6) > i {
  font-size: 12px;
  font-weight: 100;
  color: #55bb55;
}
.sb .sb_left p {
  line-height: 31px;
}
.sb .sb_right {
  padding: 0px !important;
  height: 97%;
  width: 71%;
}
.sb .sb_right > img {
  height: 100%;
  width: 100%;
}
.seven_left div ul li {
  float: left;
  font-size: 12px;
  font-weight: 100;
  padding: 0px 5px;
  margin: 12px 0px;
}
.seven_left div ul li:nth-of-type(1) {
  font-weight: bold;
  padding: 0px 27px;
}
.seven_left div ul li:nth-of-type(3) {
  color: blue;
}
.seven_left div ul li:nth-of-type(5) {
  border: 1px solid silver;
  border-radius: 5px;
  padding: 3px 4px;
  margin: 7px 2px;
}
.seven_left div > img {
  width: 100%;
  height: 164px;
}
.five {
  width: 90%;
  height: 286px;
  margin: 13px auto;
  border: 1px solid silver;
}
.two .left {
  width: 49%;
  height: 100%;
  border: 1px solid silver;
  float: left;
}

.two .left ul > li {
  list-style: none;
  float: left;
  padding: 2px 0px 0px 37px;
  font-size: 12px;
  line-height: 30px;
  font-weight: 100;
}
.two .left ul > li > p:hover {
  color: blue;
  cursor: pointer;
}
.two .left > p {
  font-weight: bold;
  margin: 14px 0px 0px 35px;
  font-size: 13px;
}
.two .rigth > p {
  font-weight: bold;
  margin: 14px 0px 0px 27px;
}
.two .rigth ul li {
  padding: 2px 0px 0px 30px;
}
.two .rigth {
  width: 49%;
  height: 100%;
  border: 1px solid silver;
  float: right;
}
.rigth span {
  float: right;
  color: blue;
  font-size: 12px;
  margin: -20px 19px 0px 0px;
}
.seven .seven_left {
  width: 49%;
  height: 100%;
  border: 1px solid silver;
  float: left;
}
.seven .seven_rigth {
  width: 49%;
  height: 100%;
  border: 1px solid silver;
  float: right;
}
.el-badge__content.is-fixed {
  position: absolute;
  top: 10px;
  right: -2px !important;
  transform: translateY(-47%) translateX(92%) !important;
}
::v-deep .el-badge__content {
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 15px;
  line-height: 15px;
  padding: 0px 5px;
  text-align: center;
  white-space: nowrap;
  /* left: 29px; */
  border: 1px solid #fff;
}
</style>