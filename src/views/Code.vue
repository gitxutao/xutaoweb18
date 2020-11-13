<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="商品编码设置"></Eheader>
    </div>
    <div class="content">
      <div class="content1">
        <div class="content1_1">
          <ul class="content1_2">
            <li>编码规则:前缀+顺序号</li>
            <li>
              编码位数:
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="8" value="1"></el-option>
                <el-option label="9" value="2"></el-option>
                <el-option label="10" value="3"></el-option>
                <el-option label="11" value="4"></el-option>
                <el-option label="12" value="5"></el-option>
              </el-select>
            </li>
            <li>
              编码前缀:
              <p @click="box1" class="content1_4">
                <el-radio v-model="radio" label="1">自定义</el-radio>
              </p>
              <p class="content1_5">
                <el-input v-model="input" placeholder="请输入内容" v-show="text"></el-input>
              </p>
              <br />
              <p @click="box">
                <el-radio v-model="radio" label="2" class="content1_3">使用类别前两位（勾选此项时，建档前要先选类别）</el-radio>
              </p>
            </li>
          </ul>
          <el-row class="btn">
            <el-button type="primary">主要按钮</el-button>
          </el-row>
        </div>
      </div>
      <div class="content2">
        <img src="../assets/8.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Eheader from "../components/Eheader.vue";
export default {
  components: {
    Eheader
  },
  data() {
    return {
      radio: "1",
      text: true
    };
  },
  methods: {
    box() {
      this.text = false;
    },
    box1() {
      this.text = true;
    }
  }
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 400px;
  margin: 115px 240px;
  position: absolute;
}
.main1 {
  position: absolute;
  width: 950px;
  height: 550px;
  margin: 0px 50px;
}
.input-with-select {
  width: 270px;
  height: 20px;
  margin: 10px 50px;
}
.btn {
  float: right;
  margin: 10px 70px;
}
.block {
  position: absolute;
  bottom: 5px;
  margin-left: 249px;
}
.content {
  width: 1070px;
  height: 400px;
}
.content1 {
  width: 49%;
  height: 400px;
  float: left;
}
.content2 {
  width: 50%;
  height: 400px;
  float: left;
}
.content1_1 {
  margin: 100px 40px;
}
.content1_2 li {
  list-style-type: none;
  margin: 24px;
}
.content1_3 {
  margin: 50px 78px;
}
.content1_4 {
  margin: -20px 80px;
}
.content1_5 {
  width: 200px;
  margin: -30px 170px;
}
.btn{
  position: absolute;
  top: 330px;
}
.content2 img{
  position: absolute;
  right: 100px;
  top: 70px;
}
</style>