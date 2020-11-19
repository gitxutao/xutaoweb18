<template>
  <div class="main">
    <div class="eheader">
      <Eheader title="购买服务"></Eheader>
    </div>
     <div class="content">
         <ul>
             <li>
                 
             </li>
         </ul>
     </div>
  </div>
</template>
<script>
import Eheader from "../components/Eheader.vue";
export default {
  components: {
    Eheader
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
.content{
    width: 960px;
    height: 530px;
    border: 1px solid black;
    margin: 0px auto;
}
</style>