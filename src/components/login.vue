<template>
  <div id="app">
    <!-- <img
      class="logo"
      src="../../assets/img/Management_img/u26_state0.png"
      width="10%"
      height="5%"
      alt
    />-->
    <el-row>
      <el-col :span="7" :offset="15">
        <div class="grid-content bg-purple-dark">
          <p class="title">花生米超市后台系统</p>
          <div class="input_list">
            <div>
              <el-input placeholder="请输入账号" v-model="username" clearable ref="input">
                <i slot="prefix" class="el-icon-user"></i>
              </el-input>
              <el-alert title="账号不能为空" type="error" :closable="false" show-icon v-show="username1"></el-alert>
              <el-alert
                title="请输入正确的账号"
                type="error"
                :closable="false"
                show-icon
                v-show="username2"  class="username2"
              ></el-alert>
            </div>
            <div>
              <el-input
                type="password"
                placeholder="请输入密码"
                v-model="password"
                clearable
                ref="input1"
              >
                <i slot="prefix" class="el-icon-lock"></i>
              </el-input>
              <el-alert title="密码不能为空" type="error" :closable="false" show-icon v-show="password1"></el-alert>
              <el-alert
                title="请输入正确的密码"
                type="error"
                :closable="false"
                show-icon
                v-show="password2" class="username2"
              ></el-alert>
            </div>
            <div>
              <el-input placeholder="请输入验证码" v-model="yzm1" clearable class="yzm" ref="input2">
                <i slot="prefix" class="el-icon-document"></i>
              </el-input>
              <el-alert title="图形验证码不能为空" type="error" :closable="false" show-icon v-show="yzm2"></el-alert>
              <el-alert title="请输入正确的验证码" type="error" :closable="false" show-icon v-show="yzm3" class="yzm4"></el-alert>
              <img class="yzms" src="../assets/7.png" width="102" height="44" alt />
            </div>
          </div>
          <el-button type="primary" @click="denglu()">登录</el-button>
          <router-link to="/main">
            <el-link :underline="false" type="warning" class="xy">免校验直接登录</el-link>
          </router-link>

          <p></p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      yzm1: "",
      username1: false,
      username2: false,
      password1: false,
      password2: false,
      yzm2: false,
      yzm3: false
    };
  },

  computed: {
    num: {
      get: function() {
        return this.num1;
      },
      set: function(val) {
        this.num1 = val.toUpperCase();
      }
    }
  },
  methods: {
    denglu() {
      if (this.username == "") {
        this.username1 = true;
      } else if (this.password == "") {
        this.password1 = true;
      } else if (this.yzm1 == "") {
        this.yzm2 = true;
      } else if (this.username != "admin") {
        this.username2 = true;
        this.username1 = false;
      } else if (this.password != "123456") {
        this.password2 = true;
        this.password1 = false;
      }else if(this.yzm1 != "PAN5"){
        this.yzm3=true;
        this.yzm2 = false;
      } else {
        this.$message({
          message: "登录成功 ",
          type: "success"
        });
        this.$router.push({
          path: "/main"
        });
      }

      // if (this.username != "admin") {
      //   this.usernameF1 = true;
      //    this.usernameF = false;
      //   this.$nextTick(() => {
      //     this.$refs.input.focus();
      //   });
      // } else if (this.pwd != "123456") {
      //   this.usernameP1 = true;
      //   this.$nextTick(() => {
      //     this.$refs.inpu1t.focus();
      //   });
      // } else if (this.num1 != "PAN5") {
      //   this.usernameF1 = true;
      //   this.$nextTick(() => {
      //     this.$refs.input2.focus();
      //   });
      // }
    }
  }
};
</script>
<style scoped>
#app {
  background: url("../assets/u0_state0.jpg");
  width: 100%;
  height: 625px;
}
.logo {
  margin: 50px 0 0 78px;
}
.el-link {
  margin: 14px 0 0 254px;
}
.el-button {
  margin: 15px 0 0 50px;
  width: 302px;
  background: repeating-linear-gradient(to right, rgb(27, 30, 207)) !important;
  border: 0;
}
.el-button:hover {
  background: repeating-linear-gradient(
    to right,
    rgba(0, 225, 255, 0.7)
  ) !important;
}
.el-alert--error {
  position: absolute;
  width: 269px;
  margin: -27px 0 0 -47px;
  background: transparent !important;
  color: red !important  ;
}
.yzms {
  position: absolute;
  top: 383px;
  right: 168px;
  height: 36px;
}
.el-col {
  background: rgba(255, 255, 255, 0.8);
  height: 400px;
  margin-top: 225px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.title {
  margin: 20px 0;
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  color: blue;
  text-align: center;
}
.el-input {
  width: 300px;
  height: 60px;
  margin: 18px 0 0 -37px;
}
.yzm {
  width: 170px !important;
}
i {
  font-size: 20px;
  margin-top: 10px;
}
.input_list {
  margin: 0 0 0 86px;
}

.el-col[data-v-10d9df09] {
  margin-top: 130px;
}
.xy {
  color: blue;
}
</style>

