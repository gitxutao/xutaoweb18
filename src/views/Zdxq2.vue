<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="商城销售单详情"></Eheader>
    </div>
    <div class="content">
      <div>
        <p class="title">
          <span class="title1">订单信息:</span>
        </p>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="订单号:" width="180"></el-table-column>
          <el-table-column prop="name" label="ZDXS20180428100812" width="190"></el-table-column>
          <el-table-column prop="address" label="订单状态："></el-table-column>
          <el-table-column prop="data1" label="交易完成"></el-table-column>
          <el-table-column prop="data2" label="下单时间："></el-table-column>
          <el-table-column prop="data3" label="2018-04-28 12:12:12" width="190"></el-table-column>
        </el-table>
      </div>
      <div class="content1">
        <p class="title">
          <span class="title1">商品信息:</span>
        </p>
        <el-table :data="tableData1" border style="width: 100%">
          <el-table-column prop="date4" label="商品:" width="180"></el-table-column>
          <el-table-column prop="date5" label="常规销售价" width="190"></el-table-column>
          <el-table-column prop="date6" label="用户购买价"></el-table-column>
          <el-table-column prop="date7" label="数量" width="100"></el-table-column>
          <el-table-column prop="date8" label="商品优惠" width="220"></el-table-column>
          <el-table-column prop="date9" label="小计" width="100"></el-table-column>
        </el-table>
      </div>
       <div class="content2">
        <p class="title">
          <span class="title1">支付信息:</span>
        </p>
        <el-table :data="tableData2" border style="width: 100%">
          <el-table-column prop="date10" label="支付方式" width="120"></el-table-column>
          <el-table-column prop="date11" label="支付金额" width="120"></el-table-column>
          <el-table-column prop="date12" label="支付时间"></el-table-column>
          <el-table-column prop="date13" label="支付状态"></el-table-column>
          <el-table-column prop="date14" label="支付流水/会员卡号/凭证号" width="190"></el-table-column>
          <el-table-column prop="date15" label="备注" width="190"></el-table-column>
        </el-table>
      </div>
      <el-row class="btn">
        <el-button plain @click="fh">
          返回
        </el-button>
      </el-row>
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
      tableData: [
        {
          date: "门店名称：",
          name: "产品大神（幸福店）",
          address: "商品金额：",
          data1: "155.02",
          data2: "商品数量",
          data3: "16"
        },
        {
          date: "终端编码：",
          name: "001",
          address: "优惠金额：",
          data1: "5.0",
          data2: "会员手机：",
          data3: "----"
        },
        {
          date: "收银人员：",
          name: "syds",
          address: "订单金额：",
          data1: "155.02",
          data2: "支付时间：",
          data3: "2018-04-28 12:12:12"
        }
      ],
      tableData1: [
        {
          date4: "商品名称",
          date5: "￥10.00",
          date6: "￥5.00",
          date7: "X 3",
          date8: "商品优惠标签---优惠---优惠总额---【活动编码/改价授权账号】",
          date9: "￥15.00"
        },
        {
          date4: "商品名称",
          date5: "￥20.00",
          date6: "￥10.00",
          date7: "X 2",
          date8: "折扣优惠20元【CX2018070401】",
          date9: "￥20.00"
        }
        ,
        {
          date4: "商品名称",
          date5: "￥30.01",
          date6: "￥30.01",
          date7: "X2",
          date8: "------",
          date9: "￥60.02"
        } ,
        {
          date4: "商品主标题",
          date5: "￥20.01",
          date6: "￥10.00",
          date7: "X3",
          date8: "立减优惠30元【CX2018070403】",
          date9: "￥30.02"
        }
      ],
      tableData2: [
        {
          date10: "抹零支付",
          date11: "0.02",
          date12: "2018-04-28 12:12:12",
          date13: "支付成功",
          date14: "",
          date15: "0.02元抹零，无需支付"
        },
        {
          date10: "现金",
          date11: "50",
          date12: "2018-04-28 12:12:12",
          date13: "支付成功",
          date14: "",
          date15: ""
        },
        
      ]
    };
  },
  methods: {
    fh(){
      this.$router.go(-1);
    }
  }
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 900px;
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
  height: 233px;
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
.content1 {
  margin: 15px 0px;
}
.content2 {
  margin: 15px 0px;
}
</style>