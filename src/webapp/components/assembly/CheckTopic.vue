<template>
    <div class="radio-topic">
        <el-form-item prop="resource">
            <el-checkbox-group v-model="resourceArr" :change="setDataToParent()" size="small">
                <el-checkbox v-for="type in data" :label="type.id">{{type.option}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
    </div>
</template>
<script>
  export default {
    props: ['data'],
    data() {
      return {
        resourceArr: []
      }
    },
    methods: {
      setDataToParent() {
//        console.log(this.resourceArr);
        this.$emit('listenToChildEvent', this.resourceArr);
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