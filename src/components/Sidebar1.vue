<template>
  <div class="sidebar">
    <el-row>
      <el-row class="tac">
        <el-col :span="7">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1" class="el-submenu__title1">
              <template slot="title">
                <i class="el-icon-takeaway-box"></i>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="/grxx" tag="div">• 个人信息</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/passwordUp" tag="div">• 修改密码</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link to="/bmsz" tag="div">• 部门设置</router-link>
                </el-menu-item>
                <el-menu-item index="1-4">
                  <router-link to="/ygzh" tag="div">• 员工账号</router-link>
                </el-menu-item>
                <el-menu-item index="1-5">
                  <router-link to="/jsgl" tag="div">• 角色管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2" class="el-submenu__title1">
              <template slot="title">
                <i class="el-icon-shopping-cart-2"></i>
                <span>商户门店</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <router-link to="/shzl" tag="div">• 商户资料</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link to="/mdgl" tag="div">• 门店管理</router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                  <router-link to="/zdgl" tag="div">• 终端管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3" class="el-submenu__title1">
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>平台租用</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <router-link to="/gmfw" tag="div">• 购买服务</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <router-link to="/gmjl" tag="div">• 购买记录</router-link>
                </el-menu-item>
                <el-menu-item index="3-3">
                  <router-link to="/sqfp" tag="div">• 申请发票</router-link>
                </el-menu-item>
                <el-menu-item index="3-4">
                  <router-link to="/fpjl" tag="div">• 发票记录</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4" class="el-submenu__title1">
              <template slot="title">
                <i class="el-icon-present"></i>
                <span>消息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <router-link to="/ywxx" tag="div">• 业务消息</router-link>
                </el-menu-item>
                <el-menu-item index="4-2">
                  <router-link to="/xtgg" tag="div">• 系统公告</router-link>
                </el-menu-item>
                <el-menu-item index="4-3">
                  <router-link to="/sjgg" tag="div">• 升级公告</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5" class="el-submenu__title1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>系统日志</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">
                  <router-link to="/dlrz" tag="div">• 登录日志</router-link>
                </el-menu-item>
                <el-menu-item index="5-2">
                  <router-link to="/czrz" tag="div">• 操作日志</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  scoped>
.el-submenu__title1 {
  width: 200px;
  z-index: 12;
}
.tac {
  height: 575px;
  overflow-y: scroll;
  position: relative;
}
.sidebar {
  background: rgba(39, 68, 97, 1);
}
</style>
