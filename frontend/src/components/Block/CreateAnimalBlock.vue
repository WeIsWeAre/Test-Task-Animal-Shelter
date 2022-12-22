<template>

    <div class="text-center mb-3 create-animal-block">

        <div class="container mb-3 mt-2">
        <form action="#" @submit.prevent="createaAnimal()" class="row align-items-end">
            <div class="col-auto">
                <label for="FormControlInputNameAnimal"  class="form-label">Наименование</label>
                <input required v-model="name_animal" type="text" class="form-control" maxlength="25" id="FormControlInputNameAnimal" placeholder="Наименование">
            </div>
            <div class="col-auto">
                <label for="FormControlInputTypeAnimal" class="form-label">Тип животного</label>
                <select v-model="animal_type" class="form-select" aria-label="Default select example" id="FormControlInputTypeAnimal">
                    <option v-for="animal_type in animal_types" v-bind:key="animal_type.id" :value="animal_type.id">{{animal_type.name_type}}</option>
                </select>
            </div>
            <div class="col-auto">
                <label for="FormControlInputTypeAnimalWeight" class="form-label">Вес</label>
                <input required v-model="weight" type="number" class="form-control" id="FormControlInputTypeAnimalWeight">
            </div>
            <div class="col-auto mt-lg-3">
                <button type="submit" class="btn btn-primary">Добавить</button>
            </div>
        </form>
        </div>
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
    methods:{
        createaAnimal(){
            this.$store.dispatch('createRecord', 
            {
                'data_create': {
                    'name': this.name_animal,
                    'name_type': this.animal_type,
                    'weight': this.weight,
                },
                'create_parameters':{
                    "path":'/api/animals/',
                    "name_mutation":'addAnimal'
                }
            });
        }

    },
    computed: {
    animal_types() {
        return this.$store.getters.getAnimalTypes;
    },


},
}

</script>

<style>
.create-animal-block {
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    border-radius: 8px;
    border: 1px solid rgba(22,24,35,0.12);
}
</style>