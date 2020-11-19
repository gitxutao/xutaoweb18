<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="员工账号"></Eheader>
    </div>
    <div class="main1">
      <div>
        <select name="" id="xlk2">
         <option value="" class="xlk3">全部状态</option>
          <option value="" class="xlk3">启用</option>
          <option value="" class="xlk3">禁用</option>
        </select>
        <el-input placeholder="请输入工号编码" v-model="input3" class="input-with-select">
          <el-button
            slot="append"
            icon="el-icon-search"
            type="primary"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading"
          ></el-button>
        </el-input>
        <p class="gjss" @click="dj()">高级搜索</p>
        <div v-show="test" class="gjsstk">
          <div class="top">
            <h3>高级搜索</h3>
          </div>
          <div class="content">
            <div class="content1">
              <el-form
                :label-position="labelPosition"
                label-width="80px"
                :model="formLabelAlign"
                class="item1"
              >
                <el-form-item label="工号编码">
                  <el-input
                    v-model="formLabelAlign.name"
                    class="item"
                    placeholder="请输入工号编码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="操作门店">
                  <select name id="xlk">
                    <option value>未选择</option>
                  </select>
                </el-form-item>
                <ul class="lsj">
                  <li>登录次数</li>
                  <li>
                    <el-input v-model="input"  class="lsjsrk"></el-input>
                  </li>
                  <li>—</li>
                  <li>
                    <el-input v-model="input1"  class="lsjsrk"></el-input>
                  </li>
                </ul>
                <p class="dxk">
                  员工状态
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">启用</el-radio>
                    <el-radio :label="6">禁用</el-radio>
                  </el-radio-group>
                </p>
              </el-form>
            </div>
            <div class="content2">
               <el-form
                :label-position="labelPosition"
                label-width="80px"
                :model="formLabelAlign"
                class="item1"
              >
                   <el-form-item label="所属部门">
                  <select name id="xlk">
                    <option value>未选择</option>
                  </select>
                </el-form-item>
                
                   <el-form-item label="账号角色">
                  <select name id="xlk">
                    <option value>未选择</option>
                  </select>
                </el-form-item>
                
                   <el-form-item label="创建时间">
                  <select name id="xlk">
                    <option value>未选择</option>
                  </select>
                </el-form-item>
               </el-form>
            </div>
          </div>
          <div class="bottom">
            <el-row class="btn2">
          <el-button type="primary" @click="openFullScreen1">确认</el-button>
          <el-button plain @click="fh">取消</el-button>
        </el-row>
          </div>
        </div>
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
        header-cell-style="background: rgba(242, 242, 242, 1);" border
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="工号编码" width="90"></el-table-column>
        <el-table-column prop="name" label="姓名" width="150"></el-table-column>
        <el-table-column prop="data1" label="手机号码" width="110" show-overflow-tooltip></el-table-column>
        <el-table-column prop="data2" label="状态" width="80"></el-table-column>
        <el-table-column prop="data3" label="操作门店" width="150"></el-table-column>
        <el-table-column prop="data4" label="登录次数" width="93"></el-table-column>
        <el-table-column prop="data5" label="最后登录时间" width="160"></el-table-column>
        <el-table-column prop="name" label="..." width="100">
          <!-- <el-button  type="text" size="small"><router-link to="/archivesUp" tag="div">修改</router-link></el-button>
          <el-button type="text" size="small" @click="open1">删除</el-button>-->
          <el-tooltip placement="bottom">
            <div slot="content">
              <ul>
                <li @click="open3">详情</li>
                <li @click="open2">修改</li>
                <li>上架/下架</li>
                <li @click="open1">删除</li>
              </ul>
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
const cityOptions = ["新品上架", "热卖推荐", "清仓优惠"];
export default {
  components: {
    Eheader
  },
  data() {
    return {
      fullscreenLoading: false,
      input3: "",
      input: "",
      input1: "",
      radio: 3,
      radio1: 3,
      radio2: 3,
      radio3: 3,
      radio4: 3,
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      test: false,
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      tableData: [
        {
          date: "00001",
          name: "产品大神（幸福店）",
          data1: "1888888",
          data2: "启用",
          data3: "产品大神（幸福店）",
          data4: "10",
          data5: "2018-04-28 12:10:08",
        },
        {
          date: "00001",
          name: "产品大神（幸福店）",
          data1: "1888888",
          data2: "启用",
          data3: "产品大神（幸福店）",
          data4: "10",
          data5: "2018-04-28 12:10:08",
        },
         {
           date: "00001",
          name: "产品大神（幸福店）",
          data1: "1888888",
          data2: "启用",
          data3: "产品大神（幸福店）",
          data4: "10",
          data5: "2018-04-28 12:10:08",
        },
        {
           date: "00001",
          name: "产品大神（幸福店）",
          data1: "1888888",
          data2: "启用",
          data3: "产品大神（幸福店）",
          data4: "10",
          data5: "2018-04-28 12:10:08",
        },
        {
           date: "00001",
          name: "产品大神（幸福店）",
          data1: "1888888",
          data2: "启用",
          data3: "产品大神（幸福店）",
          data4: "10",
          data5: "2018-04-28 12:10:08",
        },
        {
           date: "00001",
          name: "产品大神（幸福店）",
          data1: "1888888",
          data2: "启用",
          data3: "产品大神（幸福店）",
          data4: "10",
          data5: "2018-04-28 12:10:08",
        },
        {
           date: "00001",
          name: "产品大神（幸福店）",
          data1: "1888888",
          data2: "启用",
          data3: "产品大神（幸福店）",
          data4: "10",
          data5: "2018-04-28 12:10:08",
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    fh(){
     this.test=false
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    dj() {
      this.test = true;
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      this.test=false
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
    open2() {
      this.$router.push({
        path: "/archivesUp"
      });
    },
    open3() {
      this.$router.push({
        path: "/archivesUp"
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
  margin: 10px 10px;
}
.btn {
  float: right;
  margin: 10px 0px;
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
}
.gjss {
  position: absolute;
  z-index: 5;
  margin: -40px 380px;
  font-size: 15px;
  cursor: pointer;
}
.gjsstk {
  width: 1070px;
  height: 380px;
  position: absolute;
  z-index: 5;
  margin: -70px -50px;
  background-color: white;
   box-shadow: darkgrey 5px 5px 15px 5px;
}
.top {
  width: 1070px;
  height: 60px;
}
.content {
  width: 1070px;
  height: 240px;
}
.bottom {
  width: 1070px;
  height: 95px;
}
.top h3 {
  margin: 20px 30px;
}
.content1 {
  width: 50%;
  height: 240px;
  float: left;
}
.content2 {
  width: 49.5%;
  height: 240px;
  float: left;
}
.item {
  width: 300px;
  height: 40px;
}
.item1 {
  margin: 0px 40px;
}
#xlk {
  width: 300px;
  height: 40px;
}
.lsjsrk {
  width: 130px;
  height: 20px;
}
.lsj {
  margin: 0px 0px;
}
.lsj li {
  list-style: none;
  float: left;
  padding-left: 10px;
}
.dxk {
  float: left;
  margin: 20px 15px;
}
.dxk1 {
  margin: 0px -45px;
}
.content3{
  margin: 0px 60px;
}
.content3 li{ 
list-style-type:none;
padding-top: 26px;
}
.btn2{
  margin: 0px 50px;
}
#xlk2{
  border: none;
}

</style>
