<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="查看会员"></Eheader>
    </div>
    <div class="content">
      <el-form class="block1">
         <el-form-item label=" 会员卡号:">
          <p>8888 8888 8888 8888</p>
        </el-form-item> 
         <el-form-item label=" 会员姓名:">
          <p>十月大神</p>
        </el-form-item> 
         <el-form-item label=" 手机号码:">
          <p>18888888888</p>
        </el-form-item> 
        <el-form-item label=" 会员等级:">
          <p>钻石会员</p>
        </el-form-item> 
        <el-form-item label=" 发卡门店:">
          <p>产品大神（幸福店）</p>
        </el-form-item> 
        <el-form-item label=" 性别:">
          <p>男</p>
        </el-form-item> 
        <el-form-item label=" 生日:">
          <p>2018-01-01</p>
        </el-form-item> 
         <el-form-item label="邮箱:">
          <p>----</p>
        </el-form-item>
         <el-form-item label="经验值:">
          <p>88</p>
        </el-form-item>
         <el-form-item label="可用积分:">
          <p>88</p>
        </el-form-item>
         <el-form-item label=" 储值账户余额:">
          <p>0.00</p>
        </el-form-item> 
         <el-form-item label=" 累计消费金额:">
          <p>88.00</p>
        </el-form-item> 
         <el-form-item label=" 最后消费日期:">
          <p>2018-04-28</p>
        </el-form-item> 
        <el-form-item label=" 注册来源:">
          <p>收银终端/门店后台/APP/WAP/PC</p>
        </el-form-item> 
        <el-form-item label=" 注册邀请码:">
          <p>RH4O68</p>
        </el-form-item> 
        <el-form-item label=" 注册时间:">
          <p>2018-01-01</p>
        </el-form-item> 
        <el-form-item label=" 个人邀请码:">
          <p>7R8VG3</p>
        </el-form-item> 
        <el-form-item label=" 登录密码:">
          <p>已设置</p>
        </el-form-item> 
        <el-form-item label=" 支付密码:">
          <p>已设置</p>
        </el-form-item> 
        <el-form-item label=" 会员状态:">
          <p>正常</p>
        </el-form-item> 
      </el-form>
      <el-row class="btn">
        <el-button plain @click="fh">返回</el-button>
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
  height: 1350px;
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