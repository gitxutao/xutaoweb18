<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="终端销售单详情"></Eheader>
    </div>
    <div class="content">
      <p class="title">
        <span class="title1">订单信息:</span>
      </p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
  methods: {}
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
  width: 980px;
  height: 400px;
  border: black 1px solid;
  margin: 10px auto;
}
.title {
  width: 980px;
  height: 40px;
  background: #f6f6f6;
  line-height: 40px;
}
.title1 {
  margin-left: 10px;
}
</style>