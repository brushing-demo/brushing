<template>
    <div class="add-topics-con">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="题目" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="题目类型" prop="qtype">
                <el-select v-model="ruleForm.qtype" placeholder="请选择">
                    <el-option label="单选题" value="single_choice"></el-option>
                    <el-option label="多选题" value="multiple_choice"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题目选项" class="topic-type-item">
                <el-button class="topic-choice-add" @click="topicChoiceAddHandle()" type="primary" icon="el-icon-plus"
                           size="small">添加题目选项
                </el-button>
            </el-form-item>
            <el-form-item
                    v-for="(qtypeOption, index) in ruleForm.qtypeOption"
                    :label="'题目选项' + (index+1)"
                    :key="qtypeOption.key"
                    :prop="'qtypeOption.' + index + '.option'"
                    :rules="{required: true, message: '内容不能为空', trigger: 'blur'}">
                <el-input v-model="qtypeOption.option"></el-input>
                <el-button @click.prevent="topicChoiceDelHandle(qtypeOption)" size="small">删除</el-button>
            </el-form-item>
            <el-form-item label="题目答案" prop="answer">
                <el-input v-model="ruleForm.answer" type="number" min="1"></el-input>
            </el-form-item>
            <el-form-item label="题目解析">
                <el-input type="textarea" v-model="ruleForm.analysis"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  import axios from "axios";

  export default {
    data() {
      return {
        ruleForm: {
          title: '',     //题目
          qtype: '',    //题目类型
          qtypeOptionId: 0,
          qtypeOption: [{"id": 0, "option": ""}],   //题目选项
          answer: '',    //答案
          analysis: ''   //题目解析（可空）
        },
        rules: {
          title: {required: true, message: '题目不能为空', trigger: 'blur'},
          qtype: {required: true, message: '请选择题目类型', trigger: 'change'},
          answer: {required: true, message: '题目答案不能为空，必须是数值类型，并且为每题的题号', trigger: 'blur'}
        }
      }
    },
    methods: {
      //添加题目选项
      topicChoiceAddHandle() {
        this.ruleForm.qtypeOptionId++;
        this.ruleForm.qtypeOption.push({
          "id": this.ruleForm.qtypeOptionId,
          "option": ""
        });
      },
      //删除一行题目选项
      topicChoiceDelHandle(item) {
        var index = this.ruleForm.qtypeOption.indexOf(item);
        if (index !== -1) {
          this.ruleForm.qtypeOptionId--;
          this.ruleForm.qtypeOption.splice(index, 1)
        }
      },
      //提交数据
      onSubmit(formName) {
        console.log(this.ruleForm);
//        let arr = Array.from(this.ruleForm.answer);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {
              "uid": 123,
              "qtype": this.ruleForm.qtype,
              "judgment": {
                "qid": 123,
                "title": this.ruleForm.title,
                "subject": '',
                "answer": Array.from(this.ruleForm.answer),
                "analysis": this.ruleForm.analysis,
                "choice": this.ruleForm.qtypeOption
              }
            };
            console.log(data);
            axios.post("/exam/question/add", data).then(res => {
              console.log(res);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });





      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style>
    .add-topics-con {
        width: 800px;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 40px;
        margin: 0 auto;
    }

    .topic-type-item {
        width: 80%;
        position: relative;
    }

    .topic-type-item .topic-choice-add {
        position: absolute;
        top: 0;
        /*left: 100%;*/
    }

    .topic-type-item .topic-choice-del {
        position: absolute;
        top: 0;
        left: 110%;
    }

    .topic-type-item input {
        margin-bottom: 10px;
    }

    .add-topics-con .el-input {
        width: 90%;
    }
</style>