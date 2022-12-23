<template>
  <div id="app">

    <changes-loader v-if=chagesLoadingState ></changes-loader>
    
 
    <create-report-block></create-report-block>
    <main-header></main-header>
    <router-view></router-view>

  </div>
</template>

<script>

  import MainHeader from './components/MainHeader.vue'
  import CreateReportBlock from './components/Block/CreateReportBlock.vue'
  import ChangesLoader from './components/ChangesLoader.vue'


  export default {
    name: 'App',
    components: {
      "main-header": MainHeader,
      "create-report-block": CreateReportBlock,
      "changes-loader": ChangesLoader,
    },
    data() {
      return {


      }
    },
    watch: {
      $route() {
          this.$store.dispatch('clearMessage');
          this.$store.dispatch('clearProcessedData');
 
      }
    },
    methods: {



    },
    computed: {
      chagesLoadingState() {
        return this.$store.getters.getChangesLoading;
        
      },

    },

    mounted() {


    }
  }
</script>

<style>
  body {
    background-color: #ffffff !important;
  }

  #app {
    color: #074E5E;
    font-family: 'Roboto', sans-serif;
    min-width: 600px;
  }

  .table-style>tbody>tr>td {
    word-break: break-all;
    border-radius: 1px;
  }

  .bold {
    font-weight: 900;
  }

  .checkbox-2x {
    transform: scale(2);
    -webkit-transform: scale(2);
}

  button {
    border-radius: 5px !important;
  }
</style>