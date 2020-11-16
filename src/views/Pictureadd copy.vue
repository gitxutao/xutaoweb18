<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="新增相册"></Eheader>
    </div>
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="相册名称:">
          <el-input v-model="form.name" class="el-input__inner1" placeholder="长度小于32"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <span class="title">封面:</span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          class="tpsc"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <p>
          <span class="describe1">描述:</span>
        <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea" class="describe"></el-input>
        </p>
        <el-form ref="form" :model="form" label-width="80px" class="sort">
          <el-form-item label="排序:">
            <el-input v-model="form.name" class="el-input__inner1" placeholder="数值越大,排名越前"></el-input>
          </el-form-item>
        </el-form>
        <el-row class="btn">
          <el-button type="primary"><router-link to="/picture" tag="div">保存</router-link></el-button>
          <el-button plain><router-link to="/picture" tag="div">取消</router-link></el-button>
        </el-row>
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
      form: {
        name: ""
      },
      text: "",
      textarea: ""
    };
  }
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 550px;
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
  width: 850px;
  margin: 30px auto;
}
.el-input__inner1 {
  width: 300px;
}
.describe {
  width: 300px;
  margin: 20px 80px;
}
.tpsc {
  margin: 0px 80px;
}
.title {
  margin: 30px 30px;
}
.describe1 {
  position: absolute;
  margin: 20px 30px;
}
.sort {
  margin: 10px 0px;
}
.btn{
  margin: 0px 100px;
}
</style>