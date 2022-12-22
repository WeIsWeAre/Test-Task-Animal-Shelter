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

    changeAnimal(state,change_animal) {
      
      state.animals.forEach(animal => {
        if(animal.id === change_animal.id){
          animal.name_animal = change_animal.name_animal;
          animal.animal_type = change_animal.animal_type;
          animal.weight = change_animal.weight;
        }
      });
      return state.animals;

    },

    addAnimal(state,add_animal) {
      return state.animals.push(add_animal);
    },

    deleteAnimalType (state, records_ids){
      
      records_ids.forEach(id => {
        state.animal_types = state.animal_types.filter(animal_type => animal_type.id !== id)
      });

    },

    deleteAnimals (state, records_ids){
      
      records_ids.forEach(id => {
        state.animals = state.animals.filter(animal => animal.id !== id)
      });

    },

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
        search_type.name_type = search_type.name_type ? search_type.name_type :  "Не определен"
        item.name_type = search_type.name_type
      });
    },

  },
  actions: {

    
    changeEditState(context,edit_state) {
      context.commit('changeEditState',edit_state);
    },

    clearMessage(context) {
      context.commit('clearMessage')
    },

    updateError(context, text) {
      context.commit('updateError', text)
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
              context.commit('updateError',"Произошла серверная ошибка " + error.response.data);
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
          context.commit('updateError',"Произошла серверная ошибка " + error.response.data);
          context.commit('updateLoading',false);

        }) 
    },

    deleteRecords(context,data){

      context.commit('updateChangesLoading',true);
       axios.post(context.getters.getApiPath + data.path,{'records_ids': data.ids })
      .then(() => {  
        context.commit(data.name_mutation, data.ids)
        context.commit('updateChangesLoading',false);
        context.commit('updateError',"");
      })
      .catch(error => {
        context.commit('updateError',"Произошла серверная ошибка " + error.response.data);
        context.commit('updateChangesLoading',false);

      }) 
    },

    createRecord(context,data){

      context.commit('updateChangesLoading',true);
       axios.post(context.getters.getApiPath + data.create_parameters.path,data.data_create)
      .then((response) => {  
      
        let tmp = data.data_create;
        tmp.id = response.data;

        context.commit(data.create_parameters.name_mutation, tmp)
        context.commit('updateChangesLoading',false);
        context.commit('updateError',"");
      })
      .catch(error => {
        context.commit('updateError',"Произошла серверная ошибка " + error.response.data);
        context.commit('updateChangesLoading',false);

      }) 
    },
  
    

  }
})