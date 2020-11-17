<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="新增会员"></Eheader>
    </div>
    <div class="content">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="会员编码:">
          <el-input
            type="age"
            v-model.number="numberValidateForm.age"
            autocomplete="off"
            class="bm"
            placeholder="888 888 888"
            :disabled="true"
          ></el-input>
        </el-form-item>

        <el-form-item label="会员姓名:">
          <el-input
            type="age"
            autocomplete="off"
            v-model.number="numberValidateForm.djmc"
            class="bm"
            placeholder="十月大神"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码:" :rules="[
      { required: true},
    ]" class="sjhm">
          <el-input
            type="age"
            autocomplete="off"
            v-model.number="numberValidateForm.jfbs"
            class="bm"
            placeholder="1888888888"
          ></el-input>
        </el-form-item>
        <el-form-item label="会员等级:">
          <p>注册会员</p>
        </el-form-item>
        <el-form-item label="发卡门店:">
          <el-input
            type="age"
            autocomplete="off"
            class="bm"
            placeholder="产品大神(幸福店)"
            :disabled="true"
          ></el-input>
        </el-form-item>
      </el-form>
      <p class="radio">
        性别:
        <el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio>
      </p>
      <div class="block">
        生日：<el-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
      </div>
      <el-form class="block1">
         <el-form-item label="邮箱:">
          <p>----</p>
        </el-form-item>
         <el-form-item label="经验值:">
          <p>----</p>
        </el-form-item>
         <el-form-item label="可用积分:">
          <p>----</p>
        </el-form-item>
         <el-form-item label=" 储值账户余额:">
          <p>----</p>
        </el-form-item> 
         <el-form-item label=" 累计消费金额:">
          <p>----</p>
        </el-form-item> 
         <el-form-item label=" 最后消费日期:">
          <p>----</p>
        </el-form-item> 
        <el-form-item label=" 注册来源:">
          <p>----</p>
        </el-form-item> 
        <el-form-item label=" 注册邀请码:">
          <p>RH4O68</p>
        </el-form-item> 
        <el-form-item label=" 注册时间:">
          <p>----</p>
        </el-form-item> 
        <el-form-item label=" 个人邀请码:">
          <p>----</p>
        </el-form-item> 
      </el-form>
      <el-row class="btn">
        <el-button type="primary" @click="fh">保存</el-button>
        <el-button plain @click="fh">取消</el-button>
      </el-row>
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
      value1:'',
      numberValidateForm: {
        djmc: "",
        jfbs: "",
        sxjyz: ""
      }
    };
  },
  methods: {
    fh() {
      this.$router.go(-1);
    }
  }
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 1100px;
  margin: 115px 240px;
  position: absolute;
}
.main1 {
  position: absolute;
  width: 950px;
  height: 550px;
  margin: 0px 50px;
}
.content {
  width: 950px;
  height: 350px;
  margin: 20px auto;
}
.bm {
  width: 300px;
}
.sjhm{
    margin: 0px 0px;
}
.radio {
  margin: 0px 60px;
}
.jfbs {
  margin: 20px 20px;
}
.sxjyz {
  margin: 0px 8px;
}
.btn {
  margin: 26px 20px;
}
.block{
    margin: 15px 50px;
}
.block1{
    margin: 0px 50px;
}
</style>