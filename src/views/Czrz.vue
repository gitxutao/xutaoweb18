<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="操作日志"></Eheader>
    </div>
    <el-dropdown trigger="click" class="xlk">
      <span class="el-dropdown-link">
        全部时间
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
         <el-dropdown-item>全部时间</el-dropdown-item>
        <el-dropdown-item>最近一天</el-dropdown-item>
        <el-dropdown-item>最近一周</el-dropdown-item>
        <el-dropdown-item>最近一月</el-dropdown-item>
        <el-dropdown-item>最近一三个月</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown trigger="click" class="xlk1">
      <span class="el-dropdown-link">
        操作类型
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>全部状态</el-dropdown-item>
        <el-dropdown-item>采购入库</el-dropdown-item>
        <el-dropdown-item>调拨入库</el-dropdown-item>
        <el-dropdown-item>盘盈入库</el-dropdown-item>
        <el-dropdown-item>销售退货入库</el-dropdown-item>
        <el-dropdown-item>其他出库</el-dropdown-item>
        <el-dropdown-item>采购退货出库</el-dropdown-item>
        <el-dropdown-item>调拨出库</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-input placeholder="请输入人员名称/编码" v-model="input3" class="input-with-select">
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
      <el-dialog title="商品类别-新增/编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="上级类别" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="编码" :label-width="formLabelWidth">
            <el-input v-model="form.region" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="form.date1" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="排序" :label-width="formLabelWidth">
            <el-input v-model="form.date2" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false,open2()">保 存</el-button>
        </div>
      </el-dialog>
    </el-row>
    <div class="main1">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        header-cell-style="background: rgba(242, 242, 242, 1);"
      >
        <el-table-column prop="date" label="序号" width="100"></el-table-column>
        <el-table-column prop="name" label="登录工号" width="100"></el-table-column>
        <el-table-column prop="address" label="姓名" width="98"></el-table-column>
        <el-table-column prop="data1" label="操作时间" width="180"></el-table-column>
        <el-table-column prop="data2" label="操作模块" width="80"></el-table-column>
        <el-table-column prop="data3" label="操作类型" width="100"></el-table-column>
        <el-table-column prop="data4" label="详情" width="290"></el-table-column>
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
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
        },
        {
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
        },
        {
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
        },
        {
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
        },
        {
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
        },
        {
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
        },
        {
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
        },
         {
          date: "1",
          name: "0001",
          address: "十月大神",
          data1: "2018-04-18 12:12:12",
          data2: "商品",
          data3: "新增",
          data4: "新增商品【清风抽取式面巾纸150抽X2层】"
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
        message: "恭喜你，这是一条成功消息",
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
  margin: 0px 50px;
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
</style>