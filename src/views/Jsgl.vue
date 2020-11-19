<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="角色管理"></Eheader>
    </div>
    <el-input placeholder="请输入角色名称/编码" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    <el-row class="btn">
      <el-button>导出</el-button>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      <el-dialog title="角色管理-新增/编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="编辑" :label-width="formLabelWidth" :rules="[
      { required: true},
    ]">
            <el-input v-model="form.name" autocomplete="off" placeholder="01" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth" :rules="[
      { required: true},
    ]">
            <el-input v-model="form.region" autocomplete="off" placeholder="系统管理员"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false,open2()">保 存</el-button>
        </div>
      </el-dialog>
    </el-row>
    <div class="main1">
      <el-table :data="tableData" border style="width: 100%"
       header-cell-style="background: rgba(242, 242, 242, 1);">
        <el-table-column prop="date" label="编码" width="100"></el-table-column>
        <el-table-column prop="name" label="角色名称" width="257"></el-table-column>
        <el-table-column prop="address" label="排序" width="257"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template3>
              <el-button type="text" >授权</el-button>
            <el-button @click="dialogFormVisible = true" type="text" size="small">修改</el-button>
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
          name: "系统管理员",
          address: "1"
        },
        {
          date: "02",
          name: "老板",
          address: "2"
        },
        {
          date: "03",
          name: "店长",
          address: "3"
        },
        {
          date: "04",
          name: "财务",
          address: "4"
        },
        {
          date: "05",
          name: "运营经理",
          address: "5"
        },
        {
          date: "06",
          name: "仓库管理员",
          address: "6"
        },
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
  height: 550px;
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