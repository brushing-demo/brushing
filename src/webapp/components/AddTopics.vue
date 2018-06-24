<template>
    <div class="add-topics-con">
        <el-form label-width="80px">
            <el-form-item label="题干">
                <el-input v-model="title" placeholder="题干"></el-input>
            </el-form-item>
            <el-form-item label="题目说明">
                <el-input v-model="subject" placeholder="详细说明（可空）"></el-input>                
            </el-form-item>
            <el-form-item label="题目类型">
                <el-select v-model="qtype" @change="changeType" prop="qtype" placeholder="请选择">
                    <el-option label="单选题" value="single_choice"></el-option>
                    <el-option label="多选题" value="multiple_choice"></el-option>
                    <el-option label="判断题" value="judgment"></el-option>
                    <el-option label="简答题" value="short_answer"></el-option>
                    <el-option label="代码题" value="coding"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题目选项" class="topic-type-item" v-if="qtype=='single_choice' || qtype=='multiple_choice'">
                <div class="choice-container">
                    <div class="choice-item" v-for="item in choice">
                        <el-input class="choice-input" v-model="item.option" placeholder="选项"></el-input>
                        <el-button type="danger" icon="el-icon-delete" class="choice-remove" @click="removeOption" circle></el-button>
                    </div>
                </div>
                <el-button type="primary" @click="addOption">添加选项</el-button>
            </el-form-item>
            <el-form-item label="题目答案" v-if="qtype=='single_choice'">
                <el-radio-group v-model="answer">
                    <el-radio  v-for="item in choice" :label="item.id" name="choice">{{ item.option }}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="题目答案" v-if="qtype=='multiple_choice'">
                <el-checkbox-group v-model="multiple_choice_answer">
                    <el-checkbox v-for="item in choice" :label="item.id" name="choice">{{ item.option }}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="题目答案" v-if="qtype=='short_answer' || qtype=='coding'">
                <el-input type="textarea" v-model="answer" placeholder="答案"></el-input>
            </el-form-item>
            <el-form-item label="题目答案" v-if="qtype=='judgment'">
                <el-radio-group v-model="answer">
                    <el-radio label="1" >是</el-radio>
                    <el-radio label="0" >否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="题目解析">
                <el-input type="textarea" v-model="analysis" placeholder="题目解析（可空）"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交题目</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      subject: "",
      qtype: "",
      answer: "",
      multiple_choice_answer: [],
      analysis: "",
      choice: [
        {
          id: 0,
          option: ""
        }
      ]
    };
  },
  computed: {
  },
  methods: {
    onSubmit() {
      console.log(this);
    },
    changeType() {
      this.answer = "";
      this.analysis = "";
      this.choice = [
        {
          id: 0,
          option: ""
        }
      ];
      console.log(this);
    },
    addOption() {
      if (this.choice.length > 5) {
        return false;
      }
      this.choice.push({
        id: this.choice.length,
        option: ""
      });
    },
    removeOption(index) {
      this.choice.splice(index, 1);
    }
  }
};
</script>

<style>
.add-topics-con {
  width: 800px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 40px;
  margin: 0 auto;
}

.choice-container {
}

.choice-item {
  position: relative;
  margin-bottom: 10px;
}

.choice-input {
  width: 80%;
}

.choice-remove {
  position: absolute;
  top: 0;
  left: 95%;
}
</style>