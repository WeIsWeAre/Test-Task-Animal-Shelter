import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

window.eventBus = new Vue()

export const store = new Vuex.Store({
  state: {

    edit_state: false,

    loading: false,
    changes_loading: false,

    success_message: "",
    error_message: "",

    animals: [],
    animal_types: [],
    
    api_path: "http://127.0.0.1:8000",
  },
  getters: {

    getStateEdit(state) {
      return state.edit_state;
    },

    getApiPath(state) {
      return state.api_path;
    },

    getAnimals(state) {
      return state.animals;
    },

    getAnimalTypes(state) {
      return state.animal_types;
    },

    getLoading(state) {
      return state.loading;
    },

    getChangesLoading(state) {
      return state.changes_loading;
    },

    getSuccessMessage(state) {
      return state.success_message;
    },

    getErrorMessage(state) {
      return state.error_message;
    },

  },
  mutations: {

    changeEditState(state,edit_state) {
      state.edit_state = edit_state;
    },

    clearMessage(state) {
      state.success_message = "";
    },

    updateLoading(state, data) {
      state.loading = data;
    },

    updateChangesLoading(state, data) {
      state.changes_loading = data;
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

    updateAnimalTypesData(state, data) {
      state.animal_types = data;
    },
   
    combineDataFromServer(state) {
    
      state.animals.forEach(item => {
        let search_type = state.animal_types.find(animal_type => animal_type.id == item.name_type)
        item.name_type = search_type.name_type
      });
    },

  },
  actions: {

    
    changeEditState(context,edit_state) {
      context.commit('changeEditState',edit_state);
    },

    getDataFromServer(context){

      context.commit('updateLoading',true);

       axios.get(context.getters.getApiPath + '/api/animal_types/')
            .then(response => {
              
              context.commit('updateAnimalTypesData',response.data);
              
              context.commit('updateLoading',false);
              context.commit('updateError',"");
           
            })
            .catch(error => {
              context.commit('updateError',"Произошла серверная ошибка " + error.response.data.errors);
              context.commit('updateLoading',false);
  
            }) 

      context.commit('updateLoading',true);

       axios.get(context.getters.getApiPath + '/api/animals/')
            .then(response => {
              
              context.commit('updateAnimalsData',response.data);

              context.commit('updateLoading',false);
              context.commit('updateError',"");
              
              context.commit('combineDataFromServer')

            })
            .catch(error => {
              context.commit('updateError',"Произошла серверная ошибка " + error.response.data.errors);
              context.commit('updateLoading',false);
  
            }) 
    },

    clearMessage(context) {
      context.commit('clearMessage')
    },

    updateError(context, text) {
      context.commit('updateError', text)
    },

    deleteRecordsAnimal(context,records_ids){
      //context.commit('deleteRecordsAnimal', records)

      context.commit('updateChangesLoading',true);
     
       axios.post(context.getters.getApiPath + '/api/animals/delete/',{
        
        'records_ids': records_ids
            
        
       })
            .then(() => {
              
              // удаляем ненужные по Ids
              context.commit('updateChangesLoading',false);
              context.commit('updateError',"");
            

            })
            .catch(error => {
              context.commit('updateError',"Произошла серверная ошибка " + error.response.data.errors);
              context.commit('updateChangesLoading',false);
  
            }) 
    }

  }
})