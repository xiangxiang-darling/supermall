<template>
  <div class="profile_container_fa">
    <div class="profile_container">
      <div class="register">
        <p>Login Now</p>
        <div>
          <i class="fa fa-user-o"></i>
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div>
          <i class="fa fa-braille"></i>
          <input type="password" placeholder="请输入密码" />
        </div>
        <div>
          <i class="fa fa-braille"></i>
          <input type="password" placeholder="确认密码" />
        </div>
        <input type="button" value="注册" @click="register()" />
        <a href="javascript:;" id="to_login" @click="toLogin()">已有账号去登录</a>
      </div>
      <div class="log">
        <p>Welcom To Home</p>
        <div>
          <i class="fa fa-user-o"></i>
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div>
          <i class="fa fa-braille"></i>
          <input type="password" name id placeholder="请输入密码" />
        </div>
        <input type="button" value="登录" />
        <a href="javascript:;" id="to_regin" @click="toRegin()">没有账号去注册</a>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../network/axios";
export default {
  name: "profile",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {},
  methods: {
    toRegin() {
      let a = document.querySelector(".profile_container");
      a.style.transform = "translateY(0)";
    },
    toLogin() {
      let a = document.querySelector(".profile_container ");
      a.style.transform = "translateY(-630px)";
    },
    register() {
      request({})
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.profile_container_fa {
  width: 500px;
  height: 580px;
  overflow: hidden;
  margin: 50px auto;
  margin-bottom: 100px;
}
.profile_container {
  transition: all ease-in 0.5s;
  text-align: center;
  width: 500px;
  height: 1000px;
  background-color: tomato;
  margin: 50px auto;
  overflow: hidden;
  border: unset;
}
.register,
.log {
  padding-top: 80px;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-color: rgba(3, 108, 116, 0.966);
  text-align: center;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.472);
  position: relative;
}
.register i,
.log i {
  display: inline-block;
  width: 30px;
  height: 34px;
  /* border: 1px solid rgba(0, 0, 0, 0.281); */
  text-align: center;
  line-height: 34px;
  color: rgb(200, 198, 46);
}
.register input,
.log input {
  height: 30px;
  width: 300px;
  margin-top: 40px;
  border: unset;
  background-color: rgba(255, 255, 255, 0.452);
}
.register > input,
.log > input {
  width: 100px;
  height: 50px;
  background-color: rgba(0, 128, 128, 0.657);
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  right: 80px;
  transition: all ease-in-out 0.5;
}
.register > p,
.log > p {
  color: rgba(255, 255, 255, 0.664);
  font-size: 36px;
  font-family: "xin";
}
.register > a,
.log > a {
  position: absolute;
  left: 110px;
  top: 400px;
  font-size: 18px;
  border: 1px solid;
}
.log > a {
  top: 325px;
}
.register > a:hover,
.log > a:hover {
  color: thistle;
}
.register > input:active,
.log > input:active {
  border: none;
}
.register > input:hover,
.log > input:hover {
  border: 1px solid rgba(255, 255, 255, 0.431);
}
</style>