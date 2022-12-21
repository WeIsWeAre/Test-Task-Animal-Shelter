<template>
  <div id="app">

    <changes-loader v-if=chagesLoadingState ></changes-loader>
    <edit-block></edit-block>
    <main-header></main-header>
    <router-view></router-view>

  </div>
</template>

<script>

  import MainHeader from './components/MainHeader.vue'
  import StateEditBlock from './components/Block/StateEditBlock.vue'
  import ChangesLoader from './components/ChangesLoader.vue'

  export default {
    name: 'App',
    components: {
      "main-header": MainHeader,
      "edit-block" : StateEditBlock,
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
    border-radius: 3px;
  }

  .bold {
    font-weight: 900;
  }

  button {
    border-radius: 20px !important;
  }
</style>