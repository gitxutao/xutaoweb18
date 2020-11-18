<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="商品档案"></Eheader>
    </div>
    <div class="main1">
      <div>
        <select name="" id="xlk2">
         <option value="" class="xlk3">全部状态</option>
          <option value="" class="xlk3">上架</option>
          <option value="" class="xlk3">下架</option>
        </select>
        <el-input placeholder="请输入商品名称/编码" v-model="input3" class="input-with-select">
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
                <el-form-item label="关键词">
                  <el-input
                    v-model="formLabelAlign.name"
                    class="item"
                    placeholder="请输入商品名称/编码/助记码/关键字"
                  ></el-input>
                </el-form-item>
                <el-form-item label="商品类别">
                  <select name id="xlk">
                    <option value>全部分类</option>
                  </select>
                </el-form-item>
                <ul class="lsj">
                  <li>零售价区间</li>
                  <li>
                    <el-input v-model="input" placeholder="￥" class="lsjsrk"></el-input>
                  </li>
                  <li>—</li>
                  <li>
                    <el-input v-model="input1" placeholder="￥" class="lsjsrk"></el-input>
                  </li>
                </ul>
                <p class="dxk">
                  <span class="dxk1">商品标签</span>
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                    >全选</el-checkbox>
                    <el-checkbox
                      class="dxk2"
                      v-for="city in cities"
                      :label="city"
                      :key="city"
                    >{{city}}</el-checkbox>
                  </el-checkbox-group>
                </p>
              </el-form>
            </div>
            <div class="content2">
              <ul class="content3">
                <li>
                  积分赠送
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">积分赠送</el-radio>
                    <el-radio :label="6">不赠送积分</el-radio>
                  </el-radio-group>
                </li>
                <li>
                  运费计算
                  <el-radio-group v-model="radio1">
                    <el-radio :label="3">买家承担</el-radio>
                    <el-radio :label="6">卖家包邮</el-radio>
                  </el-radio-group>
                </li>
                <li>
                  商城设置
                  <el-radio-group v-model="radio2">
                    <el-radio :label="3">设置商城</el-radio>
                    <el-radio :label="6">未设置商城</el-radio>
                  </el-radio-group>
                </li>
                <li>
                  促销状态
                  <el-radio-group v-model="radio3">
                    <el-radio :label="3">正常</el-radio>
                    <el-radio :label="6">促销中</el-radio>
                  </el-radio-group>
                </li>
                <li>
                  商品状态
                  <el-radio-group v-model="radio4">
                    <el-radio :label="3">上架</el-radio>
                    <el-radio :label="6">下架</el-radio>
                  </el-radio-group>
                </li>
              </ul>
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
        <el-table-column prop="date" label="编码" width="120"></el-table-column>
        <el-table-column prop="name" label="名称" width="120"></el-table-column>
        <el-table-column prop="data1" label="单位" width="110" show-overflow-tooltip></el-table-column>
        <el-table-column prop="data2" label="类别" width="80"></el-table-column>
        <el-table-column prop="data3" label="零售价" width="70"></el-table-column>
        <el-table-column prop="data4" label="最低销售价" width="83"></el-table-column>
        <el-table-column prop="data5" label="市场指导价" width="70"></el-table-column>
        <el-table-column prop="data6" label="成本参考价" width="70"></el-table-column>
        <el-table-column prop="data7" label="状态" width="70"></el-table-column>
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
          date: "62100000001",
          name: "王小虎",
          data1: "包",
          data2: "生活用品",
          data3: "8.00",
          data4: "5.00",
          data5: "18.00",
          data6: "3.00",
          data7: "上架"
        },
        {
          date: "62100000001",
          name: "王小虎",
          data1: "包",
          data2: "生活用品",
          data3: "8.00",
          data4: "5.00",
          data5: "18.00",
          data6: "3.00",
          data7: "上架"
        },
         {
          date: "62100000001",
          name: "王小虎",
          data1: "包",
          data2: "生活用品",
          data3: "8.00",
          data4: "5.00",
          data5: "18.00",
          data6: "3.00",
          data7: "上架"
        },
        {
          date: "62100000001",
          name: "王小虎",
          data1: "包",
          data2: "生活用品",
          data3: "8.00",
          data4: "5.00",
          data5: "18.00",
          data6: "3.00",
          data7: "上架"
        },
        {
          date: "62100000001",
          name: "王小虎",
          data1: "包",
          data2: "生活用品",
          data3: "8.00",
          data4: "5.00",
          data5: "18.00",
          data6: "3.00",
          data7: "上架"
        },
        {
          date: "62100000001",
          name: "王小虎",
          data1: "包",
          data2: "生活用品",
          data3: "8.00",
          data4: "5.00",
          data5: "18.00",
          data6: "3.00",
          data7: "上架"
        },
        {
          date: "62100000001",
          name: "王小虎",
          data1: "包",
          data2: "生活用品",
          data3: "8.00",
          data4: "5.00",
          data5: "18.00",
          data6: "3.00",
          data7: "上架"
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
  height: 400px;
  position: absolute;
  z-index: 10;
  margin: -70px -50px;
  background-color: white;
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
  margin: 0px -20px;
}
.lsj li {
  list-style: none;
  float: left;
  padding-left: 10px;
}
.dxk {
  float: left;
  margin: 20px 50px;
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
  margin: 20px 50px;
}
#xlk2{
  border: none;
}

</style>
