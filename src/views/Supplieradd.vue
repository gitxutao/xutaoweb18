<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="新增供应商"></Eheader>
    </div>
    <div class="content">
      <h3>基本配置</h3>
      <p class="fgx"></p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="供应商名称:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <p class="jli2">
          * 所属区域：
          <template>
            <el-select class="changdi" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select class="changdi2" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select class="changdi" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </p>
        <el-form-item label="编码:">
          <el-input v-model="form.name" class="el-input__inner1" placeholder="长度小于64"></el-input>
        </el-form-item>
        <el-form-item label="详细地址:">
          <el-input v-model="form.name" class="el-input__inner1" placeholder="
幸福村幸福街18号"></el-input>
        </el-form-item>
        <h3>财务信息</h3>
        <p class="fgx"></p>
        <el-form-item label="开户名称:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="开户银行:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
        <el-form-item label="银行账号:">
          <el-input v-model="form.name" class="el-input__inner1"></el-input>
        </el-form-item>
      </el-form>
      <div class="content1">
        <h3>联系人信息</h3>
        <p class="fgx"></p>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名:">
            <el-input v-model="form.name" class="el-input__inner1"></el-input>
            <p class="radio">
              <el-radio v-model="radio" label="1">男</el-radio>
              <el-radio v-model="radio" label="2">女</el-radio>
            </p>
          </el-form-item>
          <el-form-item label="职务:">
            <el-input v-model="form.name" class="el-input__inner1"></el-input>
          </el-form-item>
          <el-form-item label="手机:">
            <el-input v-model="form.name" class="el-input__inner1"></el-input>
          </el-form-item>
          <el-form-item label="电话:">
            <el-input v-model="form.name" class="el-input__inner1"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input v-model="form.name" class="el-input__inner1"></el-input>
          </el-form-item>
        </el-form>
        <h3>其他信息</h3>
        <p class="fgx"></p>
        <p>
          <span class="describe1">描述:</span>
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="textarea"
            class="describe"
          ></el-input>
        </p>
        <p class="radio1">
          状态:
          <el-radio v-model="radio" label="1">正常</el-radio>
          <el-radio v-model="radio" label="2">关闭</el-radio>
        </p>
        <el-row class="btn">
          <el-button type="primary" @click="fh">
           保存
          </el-button>
          <el-button plain @click="fh">
            取消
          </el-button>
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
      },
      options: [{
          value: '选项1',
          label: '广东省'
        }, {
          value: '选项2',
          label: '湖南省'
        }, {
          value: '选项3',
          label: '四川省'
        }, {
          value: '选项4',
          label: '湖北省'
        }],
         options2: [{
          value: '选项1',
          label: '广州市'
        }, {
          value: '选项2',
          label: '北江市'
        }, {
          value: '选项3',
          label: '西江市'
        }, {
          value: '选项4',
          label: '南路市'
        }],
        options3: [{
          value: '选项1',
          label: '天河区'
        }, {
          value: '选项2',
          label: '花都区'
        }, {
          value: '选项3',
          label: '从化区'
        }, {
          value: '选项4',
          label: '黄埔区'
        }],
        value: '',
        value2: '',
        value3: '',
      }
    
  },
  methods: {
    fh(){
      this.$router.go(-1);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 1300px;
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
  height: 1100px;
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
.tpsc {
  margin: 20px 30px;
}
.btn {
  margin: 40px 130px;
}
.describe {
  width: 300px;
  margin: 20px 80px;
}
.describe1 {
  position: absolute;
  margin: 20px 30px;
}
.radio {
  margin: -40px 320px;
}
.radio1 {
  margin: 0px 40px;
}
.changdi2 {
  width: 100px;
  margin: 5px;
}
.changdi {
  width: 100px;
}
.jli2 {
  margin-left: -15px;
  margin-top: -20px;
}
</style>