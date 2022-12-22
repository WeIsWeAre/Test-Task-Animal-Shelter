import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

window.eventBus = new Vue()

export const store = new Vuex.Store({
  state: {

    loading: false,
    changes_loading: false,

    success_message: "",
    error_message: "",

    active_missing_animal: {},

    animals: [],
    animal_types: [],
    
    api_path: "http://127.0.0.1:8000",
  },
  getters: {

    getActiveMissingAnimal(state){
      return state.active_missing_animal;
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

    changeActiveMissingAnimal(state,active_missing_animal){
      state.active_missing_animal = active_missing_animal;
    },

    changeAnimal(state,change_animal) {
      state.animals.map(animal => animal.id == change_animal.id ? animal : change_animal)

      state.animals.forEach(animal => {
     
          if(animal.id == change_animal.id){
            animal.id = change_animal.id;
            animal.name = change_animal.name;
            animal.name_type = change_animal.name_type_not_id;
            animal.weight = change_animal.weight;
       
          }
      });
    },

    addAnimal(state,add_animal) {
      add_animal.name_type_id = add_animal.name_type;
      add_animal.name_type = state.animal_types.find(animal_type => animal_type.id == add_animal.name_type).name_type
      state.animals.push(add_animal);
    },

    deleteAnimalType (state, records_ids){
      
      records_ids.forEach(id => {
        state.animal_types = state.animal_types.filter(animal_type => animal_type.id !== id)
      });

      state.animals.forEach(animal => {
     
        if(animal.name_type_id == records_ids)
        { animal.name_type_id = "";}})


    },

    deleteAnimals (state, records_ids){
      
      records_ids.forEach(id => {
        state.animals = state.animals.filter(animal => animal.id !== id)
      });

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
       
        if(item.name_type === ""){
          item.name_type = ""; item.name_type_id = ""
        }
        else{
          let search_type = state.animal_types.find(animal_type => animal_type.id == item.name_type)
          item.name_type_id = item.name_type;
          item.name_type = search_type.name_type
        }
      
      });
    },

  },
  actions: {

    setActiveMissingAnimal(context,active_missing_animal) {
      context.commit('changeActiveMissingAnimal',active_missing_animal)
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
              context.commit('updateError',"Произошла ошибка " + error.response);
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
          context.commit('updateError',"Произошла ошибка " + error.response);
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
        context.commit('updateError',"Произошла ошибка " + error.response);
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
        context.commit('updateError',"Произошла ошибка " + error.response.data);
        context.commit('updateChangesLoading',false);

      }) 
    },

    changeRecord(context,data){

      context.commit('updateChangesLoading',true);
       axios.patch(context.getters.getApiPath + data.change_parameters.path,data.data_change)
      .then(() => {  
        
  
        context.commit(data.change_parameters.name_mutation, data.data_change)
        context.commit('updateChangesLoading',false);
        context.commit('updateError',"");
      })
      .catch(error => {
        context.commit('updateError',"Произошла ошибка " + error.response.data);
        context.commit('updateChangesLoading',false);

      }) 
    },
  
    

  }
})