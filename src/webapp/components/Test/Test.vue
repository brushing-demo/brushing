<template>
    <div>
    <el-radio v-model="msg" label="1">备选项</el-radio>
    <span>Test template {{ msg }}</span>

    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return { msg: "" };
  },
  mounted() {
    let data = {
      "uid": 123,
      "qtype": "judgment",
      "judgment": {
        "qid": 123,
        "title": "题干",
        "subject": "详细说明",
        "answer": false,
        "analysis": "题目解析"
      }
    };
    axios.post("/exam/question/add", data).then(res => {
      console.log(res);
      this.msg = res.data;
    });
  }
};
</script>