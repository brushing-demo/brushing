<template>
    <div>
        <el-row>
            <el-col :span="16" :offset="4" class="index-con">
                <ul>
                    <li>客观题：单选20道</li>
                    <li>完成时间： 120分钟</li>
                    <li>难度系数：<i class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i></li>
                    <li>总分： 100分</li>
                </ul>
                <ol>
                    <li>1、本套试卷来源于网上，由牛客网注册用户提供，除非经特别声明，牛客网不拥有该资料版权，亦不承担任何法律责任。</li>
                    <li>2、未经网站或作者的同意不得转载，否则构成侵权，本网站或作者保留诉诸法律的权利。</li>
                    <li>3、如发现本网站载有侵犯您著作权的侵权信息，可依法向我们提出权利申请，申请方式点击查看。</li>
                </ol>
                <p class="text-center">
                    <router-link to="/brushingList">
                        <el-button type="primary">开始答题</el-button>
                    </router-link>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      };
    }
  }
</script>
<style>
    .index-con{
        border:1px solid #ccc;
        border-radius:6px;
        padding:40px 0;
    }
    .index-con ul{
        padding: 50px 0 50px 450px;
        background:url("../assets/images/target.png") no-repeat 200px;
    }
    .index-con ul li i{
        color:#E6A23C;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>