<template>
    <div class="radio-topic">
        <el-form-item prop="resource">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
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
    .el-checkbox + .el-checkbox {
        margin-left: 0;
    }

    .el-checkbox {
        border: 1px solid #ccc;
        width: 100%;
        padding: 5px 0;
        margin: 10px 0;
    }

    .el-checkbox-group {
        width: 100%;
    }

    .el-checkbox__input {
        margin-left: 15px;
    }
</style>