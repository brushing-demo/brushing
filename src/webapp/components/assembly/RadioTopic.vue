<template>
    <div class="radio-topic">
        <el-radio-group v-model="resource" :change="setDataToParent()">
            <el-radio v-for="type in data" :label="type.id">{{type.option}}</el-radio>
        </el-radio-group>
    </div>

</template>
<script>
  export default {
    props:['data'],
    data() {
      return {
        resource: ''
      }
    },
    methods: {
      setDataToParent:function(){
//        console.log(this.resource);
        this.$emit('listenToChildEvent',this.resource);
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