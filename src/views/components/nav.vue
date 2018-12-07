<template>
  <div class="nav" id="nav">
    <el-menu
        :default-active="defaultCheck"
        class="el-menu-vertical-demo"
        background-color="#232B2D"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router=true
      >
        <el-submenu v-for="(routeList, index) in routeLists" :key="index" :index="routeList.index">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{routeList.name}}</span>
            </template>
            <el-menu-item v-for='(child) in routeList.childs' :index="child.path" :key="child.index">
                <i class="el-icon-document  "></i>
                <span slot="title">{{child.name}}</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
        routeLists: [
                { 
                    index:"1",  
                    name:"用户",
                    childs:[
                      {index:"1-1",  name:"公海用户",path:"/highSeaUser"},
                      {index:"1-2",  name:"有效已分配",path:"/effectDistribution"},
                      {index:"1-3",  name:"有效未分配",path:"/effectUndistribution"},
                      {index:"1-4",  name:"无效用户",path:"/uneffect"},
                    ]
                },
                
                
        ]
    }
  },
  computed:{
    //   根据路由得到默认选中项
      defaultCheck(){
          let i =this.$route.path=="/"?"/highSeaUser":this.$route.path
          return i
      }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 左侧导航栏
  #nav{
    height: 100%;
    background-color: #313540;
    .el-menu{
        border-right: 0!important;
      }
    .el-submenu{
      .el-menu-item-group__title{
        padding-top: 0px;
      }
    }
  }
  
</style>
