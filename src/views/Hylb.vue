<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="会员类别"></Eheader>
    </div>
    <el-input placeholder="请输入采购单号" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    <el-row class="btn">
      <el-button type="primary"><router-link to="/hylbadd" tag="div">新增</router-link></el-button>
    </el-row>
    <div class="main1">
      <el-table :data="tableData" border style="width: 100%"
       header-cell-style="background: rgba(242, 242, 242, 1);">
        <el-table-column prop="date" label="编码" width="150"></el-table-column>
        <el-table-column prop="name" label="等级名称" width="150"></el-table-column>
        <el-table-column prop="address" label="所属经验值" width="150"></el-table-column>
        <el-table-column prop="data1" label="会员特价" width="150"></el-table-column>
        <el-table-column prop="data2" label="积分倍数" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="140">
          <template3>
            <el-button type="text" size="small"><router-link to="/hylbadd" tag="div">修改</router-link></el-button>
            <el-button type="text" size="small" @click="open1">删除</el-button>
          </template3>
        </el-table-column>
      </el-table>
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
      dialogTableVisible: false,
        dialogFormVisible: false,
        fullscreenLoading: false,
        input3:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      tableData: [
        {
          date: "01",
          name: "注册会员",
          address: "0",
          data1:'不支持',
          data2:'1.0',
        },
         {
          date: "02",
          name: "白银会员",
          address: "500",
          data1:'支持',
          data2:'1.0',
        },
        {
          date: "03",
          name: "黄金会员",
          address: "2000",
          data1:'支持',
          data2:'1.5',
        },
        {
          date: "04",
          name: "钻石会员",
          address: "10000",
          data1:'支持',
          data2:'2.0',
        }
      ]
    };
  },
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    open() {
      this.$alert("添加成功", {
        confirmButtonText: "确定"
      });
    },
     open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
    open1() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
</style>