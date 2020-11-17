<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="会员列表"></Eheader>
    </div>
    <div class="main1">
      <div>
        <el-input placeholder="请输入会员手机号码" v-model="input3" class="input-with-select">
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
            <router-link to="/hyLb1add" tag="div">新增</router-link>
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
        <el-table-column prop="date" label="会员卡号" width="120"></el-table-column>
        <el-table-column prop="name" label="发卡门店" width="160"></el-table-column>
        <el-table-column prop="data1" label="手机号码" width="110" show-overflow-tooltip></el-table-column>
        <el-table-column prop="data2" label="可用积分" width="80"></el-table-column>
        <el-table-column prop="data3" label="储值账户余额" width="110"></el-table-column>
        <el-table-column prop="data4" label="累计消费金额" width="110"></el-table-column>
        <el-table-column prop="data5" label="累计消费次数" width="110"></el-table-column>
        <el-table-column prop="data6" label="最后消费日期" width="110"></el-table-column>
        <el-table-column prop="name" label="..." width="100">
          <!-- <el-button  type="text" size="small"><router-link to="/archivesUp" tag="div">修改</router-link></el-button>
          <el-button type="text" size="small" @click="open1">删除</el-button>-->
          <el-tooltip placement="bottom">
            <div slot="content">
              <ul>
                <li @click="open3">详情</li>
                <li @click="open1">启用/禁用</li>
                <li @click="dialogFormVisible = true">设置登录密码</li>
                <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  </div>
                </el-dialog>
                <li @click="open1">设置支付密码</li>
              </ul>
            </div>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            <el-button style="border: none;    padding: 0px 0px;">...</el-button>
          </el-tooltip>
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
      dialogTableVisible: false,
        dialogFormVisible: false,
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
      input3: "",
      test: false,
      tableData: [
        {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
        },
        {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
        },
         {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
        },
         {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
        },
        {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
        },
        {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
        },
        {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
        },
        {
          date: "888 888",
          name: "产品大神（幸福店）",
          data1: "18888888",
          data2: "88",
          data3: "0.00",
          data4: "88.00",
          data5: "4",
          data6: "2018-04-28",
          data7: "上架"
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
    },
    open1() {
      this.$confirm("请确认是否启用/禁用？", "操作提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },
    open2() {
      this.$router.push({
        path: "/archivesUp"
      });
    },
    open3() {
      this.$router.push({
        path: "/hyLb1See"
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
  margin: 10px 0px;
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
.tck {
  width: 100px;
  height: 100px;
  border: 1px black solid;
}
</style>
