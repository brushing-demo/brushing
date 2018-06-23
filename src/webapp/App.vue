<template>
    <div id="app" class="home">
        <el-container>
            <Header></Header>
            <!--<el-header><Header></Header></el-header>-->
            <el-main class="main">
                <router-view/>
            </el-main>
            <el-footer><Footer></Footer></el-footer>
        </el-container>
    </div>
</template>
<script>
  import Footer from './components/assembly/Footer.vue';
  import Header from './components/assembly/Header.vue';

  export default {
    data() {
      return {
        name: 'vue+wbpack'
      }
    },
    components:{
      Header,
      Footer
    }
  }
</script>
<style>
    body{
        margin:0;
        padding:0;
    }
    ul,li{
        list-style: none;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: right;
    }
    .el-row,.el-footer{
        margin:0 !important;
    }
    .home>p{
        background: yellow;
    }
    .main{
        min-height:400px;
    }
    .el-footer{
        background-color: #303133;
        color: #ffffff;
        height:40px !important;
        line-height: 40px;
        width:100%;
        position: fixed;
        bottom:0;
    }
</style>