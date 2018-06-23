
<template>
    <div class="header">
        <el-row :gutter="10">
            <el-col :xs="4" :sm="6" :md="4" class="header-logo">刷题系统</el-col>
            <el-col :xs="16" :sm="12" :md="16">
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#303133"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <router-link to="/">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/brushingList">答题中心</router-link>

                    </el-menu-item>
                    <!--<el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>-->
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :xs="4" :sm="6" :md="4"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>






    </div>
</template>
<script>
  export default {
    data(){
      return{
        msg:'hello header pages',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
    .header{
        background-color: #303133;
        color: #ffffff;
        line-height:60px;
    }
    .header-logo{
        font-size:20px;
        text-align: center;
    }
    .el-menu--horizontal{
        border:none;
    }
    .el-submenu{
        width:160px;
    }
</style>
