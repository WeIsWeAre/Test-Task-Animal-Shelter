<template>

    <div>

        <b-dropdown :disabled="isChangeLoadingStateTrue" id="dropdown-form" text="Изменить" ref="dropdown" class="m-2">
            <b-dropdown-form @submit.prevent="changeAnimal()">

                <label for="FormControlInputNameAnimal"  class="form-label">Наименование</label>
                <input required v-model="change_name_animal" type="text" class="form-control" maxlength="25" id="FormControlInputNameAnimal" placeholder="Наименование">

                <label for="FormControlInputTypeAnimal" class="form-label">Тип животного</label>
                <select v-model="change_animal_type_id" class="form-select" aria-label="Default select example" id="FormControlInputTypeAnimal">
                    <option :value="''">Пусто</option>
                    <option v-for="animal_type in animal_types" v-bind:key="animal_type.id" :value="animal_type.id">{{animal_type.name_type}}</option>
                </select>
               
                <div class="col-auto">
                <label for="FormControlInputTypeAnimalWeight" class="form-label">Вес</label>
                <input required v-model="change_weight" type="number" class="form-control" id="FormControlInputTypeAnimalWeight">
            </div>

                <b-button  type="submit" :disabled="isChangeLoadingStateTrue" variant="primary" size="sm" class="mt-2"
                    >Изменить</b-button>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>

        </b-dropdown>

    </div>

</template>

<script>
export default {
    data() {
      return {
        change_name_animal: "",
        change_animal_type_id: "",
        change_weight: 0,
      }
    },
    props: {
        animal_change: {},
    } ,
    methods: {
        setAnimal(){
            this.change_name_animal = this.animal_change.name;
            this.change_animal_type_id = this.animal_change.name_type_id;
            this.change_weight = this.animal_change.weight;
        },
        changeAnimal(){
            this.$store.dispatch('changeRecord', 
            { 
                'data_change': {
                    'id': this.animal_change.id,
                    'name': this.change_name_animal,
                    'name_type': this.change_animal_type_id,
                    'weight': this.change_weight,
                    'name_type_not_id': this.animal_types.find(animal_type => animal_type.id == this.change_animal_type_id).name_type,
                },
                'change_parameters':{
                    "path":'/api/animals/'+ this.animal_change.id + "/",
                    "name_mutation":'changeAnimal'
                }
            });
        }
    },
    computed: {
        animal_types() {
            return this.$store.getters.getAnimalTypes;
        },
        isChangeLoadingStateTrue() {
            return this.$store.getters.changes_loading;
        },


    },
    mounted() {
        this.setAnimal();
    }

}

</script>
