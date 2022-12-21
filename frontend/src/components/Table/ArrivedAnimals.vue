<template>

    <div>

        <div class="text-center" v-if="animals.length == 0">
            <h5> Список поступивших животных пуст</h5>
        </div>
        <div v-else>

            <h3 class="text-center mb-5"> Поступившие животные </h3>

            <table class="table-responsive-md table table-dark table-style table-responsive-md">
                <thead>
                    <tr>
                        <th scope="col">№ п/п</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Тип животного</th>
                        <th scope="col">Вес</th>
                        <th scope="col"> <button :disabled="!editState" v-on:click="deleteRecordsAnimal()" type="button" class="btn btn-danger">Удалить</button>
                        </th>

                    </tr>
                </thead>
                <tbody>


                    <tr v-for="(data,index) in animals" v-bind:key="data.id">

                        <td>{{ index + 1 }} </td>
                        <td>{{ data.name }} </td>
                        <td>{{ data.name_type }} </td>
                        <td>{{ data.weight }} </td>
                        <div class="form-check">
                            <input :value="data.id" v-model="animals_delete_ids" :disabled=!editState
                                class="form-check-input" type="checkbox" :id="'deleteAnimalCheck' + data.id">
                            <label class="form-check-label" for="defaultCheck1">
                                Удалить
                            </label>
                        </div>
                    </tr>
                </tbody>
            </table>


        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            animals_delete_ids: [],

        }
    },
    methods:{
        deleteRecordsAnimal(){

            this.$store.dispatch('deleteRecords',{"ids":this.animals_delete_ids,"path":'/api/animals/delete/',"name_mutation":'deleteAnimals'});
        }
    },
    computed: {

        animals() {
            return this.$store.getters.getAnimals;
        },
        editState() {
            return this.$store.getters.getStateEdit;
        },

    },

}

</script>
