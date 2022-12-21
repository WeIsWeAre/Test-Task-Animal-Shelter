import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

window.eventBus = new Vue()

export const store = new Vuex.Store({
  state: {

    loading: false,
    success_message: "",
    error_message: "",

    animals: [],

  },
  getters: {

    getAnimals(state) {
      return state.animals;
    },

    getLoading(state) {
      return state.loading;
    },

    getSuccessMessage(state) {
      return state.success_message;
    },

    getErrorMessage(state) {
      return state.error_message;
    },

  },
  mutations: {

    clearMessage(state) {
      state.success_message = "";
    },

    updateLoading(state, data) {
      state.loading = data;
    },

    updateError(state, text) {
      state.error_message = text;
    },

    updateSuccessMessage(state, text) {
      state.success_message = text;
    },

    updateAnimalsData(state, data) {
      state.animals = data;
    },
   

  },
  actions: {

    getDataFromServer(context){
       axios.get(window.location.origin + '/api/animals')
            .then(response => {
              
              context.commit('updateAnimalsData',response.data);

              context.commit('updateLoading',false);
              context.commit('updateError',"");
           

            })
            .catch(error => {
              context.commit('updateError',"Произошла ошибка сервера");
              context.commit('updateLoading',false);
              context.commit('updateError',error.response.data.errors);
          
            }) 
    },
  
    clearMessage(context) {
      context.commit('clearMessage')
    },

    updateError(context, text) {
      context.commit('updateError', text)
    },

  }
})