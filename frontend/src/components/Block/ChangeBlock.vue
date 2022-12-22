<template>

    <div>

        <b-dropdown :disabled="!editState" id="dropdown-form" text="Изменить" ref="dropdown" class="m-2">
            <b-dropdown-form @submit.prevent="changeAnimal()">

                <label for="FormControlInputNameAnimal"  class="form-label">Наименование</label>
                <input required v-model="name_animal" type="text" class="form-control" maxlength="25" id="FormControlInputNameAnimal" placeholder="Наименование">

                <label for="FormControlInputTypeAnimal" class="form-label">Тип животного</label>
                <select v-model="animal_type" class="form-select" aria-label="Default select example" id="FormControlInputTypeAnimal">
                    <option v-for="animal_type in animal_types" v-bind:key="animal_type.id" :value="animal_type.id">{{animal_type.name_type}}</option>
                </select>
               
                <div class="col-auto">
                <label for="FormControlInputTypeAnimalWeight" class="form-label">Вес</label>
                <input required v-model="weight" type="number" class="form-control" id="FormControlInputTypeAnimalWeight">
            </div>

                <b-button :disabled="!editState && isChangeLoadingStateTrue" variant="primary" size="sm" class="mt-2"
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
        name_animal: "",
        animal_type: "",
        weight: 0,
      }
    },
    props: {
        animal_change: {},
    } ,
    methods: {
        setAnimal(){
            this.name_animal = this.animal_change.name;
            this.animal_type = this.animal_change.name_type;
            this.weight = this.animal_change.weight;
        },
        changeAnimal(){
            this.$store.dispatch('changeRecord', 
            {
                'data_change': {
                    'name': this.name_animal,
                    'name_type': this.animal_type,
                    'weight': this.weight,
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
        editState() {
            return this.$store.getters.getStateEdit;
        },

    },
    mounted() {
        this.setAnimal();
    }

}

</script>
