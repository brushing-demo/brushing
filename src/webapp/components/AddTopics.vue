<template>
    <div class="add-topics-con">
        <el-form label-width="80px">
            <el-form-item label="题目">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="题目类型">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="单选题" value="shanghai"></el-option>
                    <el-option label="多选题" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题目选项" class="topic-type-item">
                <el-button class="topic-choice-del" type="warning" icon="el-icon-minus" size="small" circle></el-button>
                <el-button class="topic-choice-add" type="primary" icon="el-icon-plus" size="small" circle></el-button>
                <el-input v-model="form.name1"></el-input>
            </el-form-item>
            <el-form-item label="题目答案">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
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
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style>
    .add-topics-con {
        width:800px;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 40px;
        margin:0 auto;
    }

    .topic-type-item {
        width: 80%;
        position: relative;
    }

    .topic-type-item .topic-choice-add {
        position: absolute;
        top: 0;
        left: 100%;
    }

    .topic-type-item .topic-choice-del {
        position: absolute;
        top: 0;
        left: 110%;
    }

    .topic-type-item input {
        margin-bottom: 10px;
    }
</style>