<template>
    <div class="radio-topic">
        <el-radio-group v-model="form.resource">
            <el-radio v-for="type in form.types" :label="type.id">{{type.val}}</el-radio>
            <!--<el-radio label="线下场地免费"></el-radio>
            <el-radio label="线下场地免费1"></el-radio>
            <el-radio label="线下场地免费2"></el-radio>
            <el-radio label="线下场地免费3"></el-radio>-->
        </el-radio-group>

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
          types: [{id:1,val:'aaa'},{id:2,val:'bbb'}],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
        btn(){
          console.log(this.form);
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