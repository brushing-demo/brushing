<template>
    <div class="list-con">
        <div v-if="isQuestionBrushs == 0"
             v-loading="loading">
            <div class="list-header">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="brushSpeed"></el-progress>
            </div>
            <div class="subject-main">
                <div class="subject-content">
                    <h2>【 {{formatState(listActive.qtype)}} 】</h2>
                    <div class="subject-question">
                        {{listActive[listActive.qtype].title}}
                    </div>
                    <el-form class="demo-ruleForm">

                        <component :is="which_to_show"
                                   :data="listActive[listActive.qtype].choice"
                                   @listenToChildEvent="getDataFromChild">
                        </component>

                        <!--<RadioTopic :data="listActive[listActive.qtype].choice" v-on:listenToChildEvent="getDataFromChild" v-if="listActive.qtype=='single_choice'"></RadioTopic>-->
                        <!--<CheckTopic :data="listActive[listActive.qtype].choice" v-on:listenToChildEvent="getDataFromChild" v-else-if="listActive.qtype=='multiple_choice'"></CheckTopic>-->

                        <el-form-item class="text-right">
                            <el-button type="danger" @click="openSubmitHandler">提交试卷</el-button>
                            <el-button type="success" @click="pagesGetHandler(currentIndex+1,'btn')" :disabled="isNextPageBtn">下一题</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="answer-sheet">
                <h3 @click="pagesShowHandler()">{{pagesTitle}}：<i
                        :class="{'el-icon-arrow-down':(isShow==true),'el-icon-arrow-up':(isShow==false)}"></i></h3>
                <div class="pages" v-show="isShow">
                    <ul>
                        <li @click="pagesGetHandler(index,'pages')" :class="{'pages-action':(index==currentIndex)}"
                            v-for="(o, index) in this.list.length" :key="o">{{o}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios';
  import RadioTopic from '../components/assembly/RadioTopic.vue';
  import CheckTopic from '../components/assembly/CheckTopic.vue';

  export default {
    components: {
      first: RadioTopic,
      second: CheckTopic,
      RadioTopic,
      CheckTopic
    },
    data() {
      return {
        which_to_show:'',   //题型模板
        loading: true,  //数据加载
        isQuestionBrushs: -1,    //是否有题库列表
        brushSpeed: 0,   //答题进度
        list: [],    //总数
        listActive: {},  //当前页题目内容
        pagesTitle: '收起答题卡',
        currentIndex: 0,  //pages当前页
        isShow: true,   //答题卡显示/隐藏
        isNextPageBtn: false //下一步按钮状态

      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getListData();
      });
    },
    methods: {
      //题型状态显示转换
      formatState (type) {
        return type == 'single_choice' ? '单选题' : type == 'multiple_choice' ? '多选题' : '其他';
      },
      //计算已做题百分比
      countPercent(num,len){
        return Math.round(((num+1)/len)*100)
      },
      //获取子组件数值
      getDataFromChild(data){
        console.log('child',data);
      },
      //动态加载子组件
      toshow: function (type) {   //切换组件显示
        let arr = ["first", "second"];
        if (type == 'single_choice'){
          this.which_to_show = arr[0];
        }else{
          this.which_to_show = arr[1];
        }

      },
      //获取题目列表
      getListData() {
        let data = {
          "uid": 123,
          "page": 1,
          "count": 20,
          "condition": [{"auditing": 0}]
        };
        axios.post("/exam/question/list", data).then(res => {
          if (res.status == 200 && res.data.status == 0) {
            let newData = res.data.result.list;
            let newArr = newData.filter((item, index, newData) => {
              return item.qtype == 'single_choice' || item.qtype == 'multiple_choice';
            });

            this.list = newArr;
            this.brushSpeed = this.countPercent(this.currentIndex,this.list.length);
            this.listActive = this.list[0];
            this.toshow(this.listActive.qtype);
            this.isQuestionBrushs = res.data.status;
            this.loading = false;
          }
          console.log(this.list);
        });
      },
      //交卷弹窗
      openSubmitHandler() {
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
      //是否显示答题卡
      pagesShowHandler() {
        if (this.isShow == true) {
          this.pagesTitle = '收起答题卡';
        } else {
          this.pagesTitle = '展开答题卡';
        }
        this.isShow = !this.isShow;
      },
      //下一题按钮，以及答题卡页码按钮
      pagesGetHandler(index,type) {
        if (this.list.length == index){
          this.isNextPageBtn = true;
          this.openSubmitHandler();
        }else{
          if (type == 'btn'){
            this.currentIndex++;
          }else{
            this.currentIndex = index;
          }
          this.brushSpeed = this.countPercent(this.currentIndex,this.list.length);
          this.isNextPageBtn = false;
          this.listActive = this.list[this.currentIndex];
          this.toshow(this.listActive.qtype);

          console.log(this.$refs.which_to_show.resource)
        }
      }


    }
  }
</script>
<style>
    .list-error {
        text-align: center;
        line-height: 200px;
    }

    .list-con {
        width: 80%;
        min-height: 400px;
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