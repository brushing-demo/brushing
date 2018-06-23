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
    axios.get("/tests/hahaha").then(res => {
      console.log(res);
      this.msg = res.data;
    });
  }
};
</script>