<template>
  <div class="box">
    <el-container>
      <el-header>
        <img class="logo" src="../assets/img/logo.png" alt="">
        <h1 class="header">客户系统</h1>
      </el-header>
      <el-container class="fullPage">
        <el-aside width="15%">
          <Nav></Nav>
        </el-aside>
        <el-main class="main-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
    
  
  </div>
</template>

<script>
import '../assets/mod/LodopFuncs.js'
import Nav from './components/nav'
export default {
  name: 'index',
  components: {
     Nav
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    // console.log(1)
    // 如果为本地，模拟登陆获取token
    if(window.location.hostname=="localhost"){
      this.$axios.post("/user/login/test",{
    
      })
      .then(function(){
        console.log("登陆成功")})
      .catch(function(){
          console.log("登陆失败，请重新登陆")
      })
  
    }  
  },
  created(){
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .box{
    height: 100%;
  }
    // 头部样式
  .logo{
    position: absolute;
    left: 40px;
    top: 6px ;
  }
  .el-header{
    line-height:50px;
    padding: 0 80px 0;
    background-color: #38B7F6;
    color: #fff;
    height: 50px !important;
  }
  // 页面主体样式
  .el-container{
    height: 100%;
    .main-content{
      background: #F5F7F9;
      padding: 12px;
    }
  }
  
</style>