<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="新增会员类别"></Eheader>
    </div>
    <div class="content">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="编码:" prop="age" :rules="[
      { required: true},
    ]">
          <el-input
            type="age"
            v-model.number="numberValidateForm.age"
            autocomplete="off"
            class="bm"
            placeholder="01"
            :disabled="true"
          ></el-input>
        </el-form-item>

        <el-form-item label="等级名称:" :rules="[
      { required: true},
    ]">
          <el-input
            type="age"
            autocomplete="off"
            v-model.number="numberValidateForm.djmc"
            class="bm"
            placeholder="钻石会员"
          ></el-input>
        </el-form-item>
      </el-form>
      <p class="radio">
        会员特价：
        <el-radio v-model="radio" label="1">支持</el-radio>
        <el-radio v-model="radio" label="2">不支持</el-radio>
      </p>
      <el-form>
        <el-form-item label="积分倍数:" :rules="[
      { required: true},
    ]" class="jfbs">
          <el-input
            type="age"
            autocomplete="off"
            v-model.number="numberValidateForm.jfbs"
            class="bm"
            placeholder
          ></el-input>
        </el-form-item>
        <el-form-item label="所需经验值:" :rules="[
      { required: true},
    ]" class="sxjyz">
          <el-input
            type="age"
            v-model.number="numberValidateForm.sxjyz"
            autocomplete="off"
            class="bm"
            placeholder="钻石会员"
          ></el-input>
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
  height: 390px;
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
.radio {
  margin: 0px 30px;
}
.jfbs {
  margin: 20px 20px;
}
.sxjyz {
  margin: 0px 8px;
}
.btn{
  margin: 26px 20px;
}
</style>