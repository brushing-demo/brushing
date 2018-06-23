<template>
    <div class="radio-topic">
        <h2>【 单选题 】</h2>
        <div class="subject-question">
            下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度
        </div>
        <el-form class="demo-ruleForm">
            <el-form-item prop="resource">
                <el-radio-group v-model="form.resource">
                    <el-radio label="线下场地免费"></el-radio>
                    <el-radio label="线下场地免费1"></el-radio>
                    <el-radio label="线下场地免费2"></el-radio>
                    <el-radio label="线下场地免费3"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item class="text-right">
                <el-button type="danger">提前交卷</el-button>
                <el-button type="success" @click="pagesGetHandler(isIndex+1)">下一题</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        pagesTitle: '收起答题卡',
        isIndex: 0,  //pages当前页
        isShow: true,
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
    .el-radio + .el-radio {
        margin-left: 0;
    }

    .el-radio {
        border: 1px solid #ccc;
        width: 100%;
        padding: 15px 0;
        margin: 10px 0;
    }

    .el-radio-group {
        width: 100%;
    }

    .el-radio__input {
        margin-left: 15px;
    }
</style>