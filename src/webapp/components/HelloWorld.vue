<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="hello-ben bello-bem--init">
            <button class="hello-bem__btn" @clik="increment">加1 +1</button>
            <button class="hello-bem__btn" @clik="decrement">减1 -1</button>
            <h3>count is {{count}}</h3>
        </div>

    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters({count: 'getCount'})
    },
    methods: {
      test() {
        alert('测试');
        axios('getUsetData')
      },
      ...mapActions(['increment', 'decrement'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    :root {
        --mainColor: yellowgreen;
    }

    .hello-bem {
        border: 1px solid yellowgreen;
    }

    .hello-bem__btn {
        background: #673ab7;
        padding: 10px;
        color: white;
    }

    .hello-bem--init {
        padding: 1em;
    }
</style>
