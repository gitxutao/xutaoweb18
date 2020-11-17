<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="新增商品"></Eheader>
    </div>
    <div class="content">
      <h3>基本配置</h3>
      <p class="fgx"></p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品类别:">
          <el-select v-model="form.region" placeholder="请选择活动区域" class="el-select">
            <el-option label="未分类" value="shanghai"></el-option>
            <el-option label="烟酒糖茶" value="beijing"></el-option>
            <el-option label="烟" value="beijing"></el-option>
            <el-option label="酒水" value="beijing"></el-option>
            <el-option label="饮料" value="beijing"></el-option>
            <el-option label="糖果" value="beijing"></el-option>
            <el-option label="茶叶" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品编码:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="商品名称:">
          <el-input v-model="form.name" class="el-input__inner1" placeholder="长度小于64"></el-input>
        </el-form-item>
        <el-form-item label="所属品牌:">
          <el-select v-model="form.region" placeholder="未指定" class="el-select">
            <el-option label="清风" value="shanghai"></el-option>
            <el-option label="心相印" value="beijing"></el-option>
            <el-option label="奥利奥" value="beijing"></el-option>
            <el-option label="德芙" value="beijing"></el-option>
            <el-option label="蒙牛" value="beijing"></el-option>
            <el-option label="伊利" value="beijing"></el-option>
            <el-option label="可口可乐" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单位:">
          <el-select v-model="form.region" placeholder="未指定" class="el-select">
            <el-option label="个" value="shanghai"></el-option>
            <el-option label="盒" value="beijing"></el-option>
            <el-option label="包" value="beijing"></el-option>
            <el-option label="件" value="beijing"></el-option>
            <el-option label="瓶" value="beijing"></el-option>
            <el-option label="袋" value="beijing"></el-option>
            <el-option label="只" value="beijing"></el-option>
            <el-option label="罐" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="零售价:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="最低售价:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="市场指导价:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="成本参考价:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="助记码:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="会员特价:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
      </el-form>
      <p class="radio">
        积分赠送:
        <el-radio v-model="radio" label="1">赠送</el-radio>
        <el-radio v-model="radio" label="2">不赠送</el-radio>
      </p>
      <div class="content1">
        <h3>商城设置</h3>
        <p class="fgx"></p>
        <img src="../assets/9.png" alt />
        <div class="content2">
          <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <el-form ref="form">
          <el-form-item label="排序:" class="el-input__inner3">
            <el-input v-model="form.name" class="el-input__inner2" placeholder="数字越大排名越前"></el-input>
          </el-form-item>
        </el-form>
        <div class="tpsc">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="10%" :src="dialogImageUrl" alt />
        </el-dialog>
        </div>
        <el-row class="btn">
          <el-button type="primary" @click="fh">保存</el-button>
          <el-button plain @click="fh">取消</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
const cityOptions = ["新品上架", "热门推荐", "清仓优惠"];
import Eheader from "../components/Eheader.vue";
export default {
  components: {
    Eheader
  },
  data() {
    return {
      radio: "1",
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
      cities: cityOptions,
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      }
    };
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      fh(){
      this.$router.go(-1);
    },
    }
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 1550px;
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
  height: 1600px;
  margin: 20px auto;
}
.fgx {
  width: 960px;
  height: 1px;
  background: rgb(235, 222, 222);
  margin: 15px 0px;
}
.content1 {
  margin: 20px 0px;
}
.el-input__inner1 {
  width: 300px;
}
.el-select {
  width: 300px;
}
.radio {
  margin: 0px 13px;
}
.content1 {
  margin: 40px 0px;
}
.content2 {
  margin: 20px 120px;
}
.el-input__inner2 {
  width: 300px;
}
.el-input__inner3 {
  margin: 0px 75px;
}
.tpsc{
  margin: 20px 30px;
}
.btn{
  margin: 40px 130px;
}
</style>