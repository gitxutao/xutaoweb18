<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="商品档案"></Eheader>
    </div>
    <div class="main1">
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            全部状态
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>全部状态</el-dropdown-item>
            <el-dropdown-item>上架</el-dropdown-item>
            <el-dropdown-item>下架</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input placeholder="请输入商品名称/编码" v-model="input3" class="input-with-select">
          <el-button
            slot="append"
            icon="el-icon-search"
            type="primary"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading"
          ></el-button>
        </el-input>
        <el-row class="btn">
          <el-button plain>导出</el-button>
          <el-button type="primary">
            <router-link to="/archivesadd" tag="div">新增</router-link>
          </el-button>
        </el-row>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        header-cell-style="background: rgba(242, 242, 242, 1);"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="编码" width="120"></el-table-column>
        <el-table-column prop="name" label="名称" width="130"></el-table-column>
        <el-table-column prop="addrarchivesUpess" label="单位" width="110" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="类别" width="110"></el-table-column>
        <el-table-column prop="name" label="零售价" width="110"></el-table-column>
        <el-table-column prop="name" label="市场指导价" width="110"></el-table-column>
        <el-table-column prop="name" label="状态" width="100"></el-table-column>
        <el-table-column prop="name" label="..." width="100">
          <el-button  type="text" size="small"><router-link to="/archivesUp" tag="div">修改</router-link></el-button>
            <el-button type="text" size="small" @click="open1">删除</el-button>
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
import Eheader from "../components/Eheader";
export default {
  components: {
    Eheader
  },
  data() {
    return {
      fullscreenLoading: false,
      input3: "",
      test:false,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
    ,
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
  margin: 10px 50px;
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
.btn1 {
  z-index: 10;
}
.tck{
  width: 100px;
  height: 100px;
  border: 1px black solid;
}
</style>
