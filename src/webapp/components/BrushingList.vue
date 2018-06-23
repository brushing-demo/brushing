<template>
    <div class="list-con">
        <div class="list-header">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        </div>
        <div class="subject-main">
            <div class="subject-content">
                <h2>【 单选题 】</h2>
                <div class="subject-question">
                    下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度
                </div>
                <el-form class="demo-ruleForm">
                    <RadioTopic v-if="topicStype=='single_choice'"></RadioTopic>
                    <CheckTopic v-else-if="topicStype=='multiple_choice'"></CheckTopic>

                    <el-form-item class="text-right">
                        <el-button type="danger" @click="openSubmitHandler">提交试卷</el-button>
                        <el-button type="success" @click="pagesGetHandler(isIndex+1)">下一题</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="answer-sheet">
            <h3 @click="pagesShowHandler()">{{pagesTitle}}：<i
                    :class="{'el-icon-arrow-down':(isShow==true),'el-icon-arrow-up':(isShow==false)}"></i></h3>
            <div class="pages" v-show="isShow">
                <ul>
                    <li @click="pagesGetHandler(index)" :class="{'pages-action':(index==isIndex)}"
                        v-for="(o, index) in 20" :key="o">{{o}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
  import RadioTopic from '../components/assembly/RadioTopic.vue';
  import CheckTopic from '../components/assembly/CheckTopic.vue';

  export default {
    components: {
      RadioTopic,
      CheckTopic
    },
    data() {
      return {
        pagesTitle: '收起答题卡',
        isIndex: 0,  //pages当前页
        isShow: true,
        topicStype: 'single_choice',     //题型
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      openSubmitHandler(){
        this.$confirm('提交试卷, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      },
      pagesShowHandler() {
        if (this.isShow == true) {
          this.pagesTitle = '收起答题卡';
        } else {
          this.pagesTitle = '展开答题卡';
        }
        this.isShow = !this.isShow;
      },
      pagesGetHandler(index) {
        console.log(index);
        this.isIndex = index;
      }
    }
  }
</script>
<style>

    .list-con {
        width: 80%;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin: 0 auto;
    }

    .list-header {
        padding: 20px;
        background-color: #606266;
    }

    .subject-main {
        margin: 20px;
    }

    .answer-sheet {
        border-top: 1px dashed #ccc;
    }

    .answer-sheet h3 {
        line-height: 30px;
        padding-left: 25px;
    }

    .pages ul {
        padding: 0 25px;
    }

    .pages li {
        width: 35px;
        height: 35px;
        line-height: 35px;
        margin-right: 20px;
        margin-bottom: 10px;
        display: inline-block;
        border: 1px solid #ccc;
        text-align: center;
    }

    .pages-action {
        background: #409EFF;
        color: #ffffff;
    }
</style>