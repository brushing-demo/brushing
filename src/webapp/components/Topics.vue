<template>
    <div class="topics">
        <div v-for="topic in Topics">
            <p>topic.title</p>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  const fetchInitialData = ({store, router}) => {
    return store.dispatch('getTopics')
  };

  //asyncData留占位过程，异步请求 告知ssr先去占位
  export default {
    asyncData: fetchInitialData,
    name: 'Topics',
    computed: {
      ...mapGetters({topics: 'getTopics'})
    },
    moundted() {
        fetchInitialData({store:this.$store})
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
