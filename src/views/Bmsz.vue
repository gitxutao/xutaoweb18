<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="部门设置"></Eheader>
    </div>
    <el-input placeholder="请输入部门名称/编码" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    <el-row class="btn">
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      <el-dialog title="商品类别-新增/编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="上级部门" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" placeholder="所以部门" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="编码" :label-width="formLabelWidth">
            <el-input v-model="form.region" autocomplete="off" placeholder="05" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="form.date1" autocomplete="off" placeholder="财务部"></el-input>
          </el-form-item>
          <el-form-item label="排序" :label-width="formLabelWidth">
            <el-input v-model="form.date2" autocomplete="off" placeholder="0"></el-input>
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
        <el-table-column prop="userid" label="序号" width="190"></el-table-column>
        <el-table-column prop="money" label="编码" width="190"></el-table-column>
        <el-table-column prop="name" label="部门名称" width="190"></el-table-column>
         <el-table-column prop="id" label="排序" width="190"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template3>
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
        tableData:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
          
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
    },
    
  },
  created() {
        this.axios.get("http://yapi.dapengjiaoyu.com/mock/380/order").then((res)=>{
            var atter=[];
            for(var i=1;i<8;i++){
                atter.push(res.data.data[i]);
            }
            this.tableData=atter
        })
    },
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