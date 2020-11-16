<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="家居家纺图片"></Eheader>
    </div>
    <div>
      <div class="content">
        <ul class="content1">
          <li>
            <el-radio v-model="radio1" label="1" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
          <li>
            <el-radio v-model="radio1" label="2" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
          <li>
            <el-radio v-model="radio1" label="3" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
          <li>
            <el-radio v-model="radio1" label="4" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
          <li>
            <el-radio v-model="radio1" label="5" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
          <li>
            <el-radio v-model="radio1" label="6" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
           <li>
            <el-radio v-model="radio1" label="6" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
           <li>
            <el-radio v-model="radio1" label="6" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
           <li>
            <el-radio v-model="radio1" label="6" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
           <li>
            <el-radio v-model="radio1" label="6" border class="bk">
              <img src="../assets/12.png" alt />
            </el-radio>
          </li>
        </ul>
      </div>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
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
      radio1: "1"
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
.content {
  width: 980px;
  height: 503px;
  border: 1px solid black;
  margin: 0px auto;
}
.main1 {
  position: absolute;
  width: 950px;
  height: 550px;
  margin: 0px 50px;
}
.bk {
  width: 170px;
  height: 170px;
}
.bk img {
  width: 150px;
  height: 150px;
  margin: -5px -25px;
}
.content1{
  margin: 50px 0px;
}
.content1 li{
  list-style: none;
  float: left;
  padding: 13px;
}
.block{
  margin: 0px 249px;
}
</style>