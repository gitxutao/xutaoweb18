<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="业务消息"></Eheader>
    </div>
    <div class="title">
        <p>9条未读消息<a href="#" @click="open2">全部标记为已读</a></p>
    </div>
    <div class="main1">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        
      >
        <el-table-column prop="date" label="*" width="100"></el-table-column>
        <el-table-column prop="name" label="您有一笔采购入库单待审核" width="640"></el-table-column>
        <el-table-column prop="address" label="2018-05-18 10:00:18" width="208"></el-table-column>
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
      input3: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          date: "",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
        },
        {
          date: "",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
        },
        {
          date: "*",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
        },
        {
           date: "",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
        },
        {
          date: "",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
        },
        {
          date: "*",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
        },
        {
          date: "",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
        },
         {
           date: "*",
          name: "您有一笔采购入库单待审核",
          address: "2018-04-18 12:12:12"
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
        message: "恭喜你，操作成功",
        type: "success"
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
  height: 550px;
  margin: 115px 240px;
  position: absolute;
}
.main1 {
  position: absolute;
  width: 950px;
  height: 550px;
  margin: 50px 50px;
}
.input-with-select {
  width: 270px;
  height: 20px;
  margin: 10px 26px;
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
.xlk {
  margin: 0px 50px;
}
.xlk1 {
  margin: 0px -20px;
}
.title{
    float: right;
    margin: 15px 70px;
}
</style>