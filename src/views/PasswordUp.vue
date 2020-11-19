<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="修改密码"></Eheader>
    </div>
    <div class="content">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="原密码:" prop="password" :rules="[
      { required: true},
    ]">
          <el-input
            type="text"
            v-model.number="numberValidateForm.password"
            autocomplete="off"
            class="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码:" prop="password1" :rules="[
      { required: true},
    ]">
          <el-input
            type="password1"
            v-model.number="numberValidateForm.password1"
            autocomplete="off"
            class="password"
          ></el-input>
        </el-form-item>
         <el-form-item label="确认新密码:" prop="password2" :rules="[
      { required: true},
    ]">
          <el-input
            type="password2"
            v-model.number="numberValidateForm.password2"
            autocomplete="off"
            class="password"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
     <el-row class="btn">
          <el-button type="primary" @click="fh">保存</el-button>
        </el-row>
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
      numberValidateForm: {
        djmc: "",
        jfbs: "",
        sxjyz: ""
      }
    };
  },
  methods:{
      fh(){
          this.$router.go(-1)
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
.password{
    width: 300px;
}
.content{
    margin: 70px 100px;
}
.btn{
    margin: 0px 100px;
}
</style>