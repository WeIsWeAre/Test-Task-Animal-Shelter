<template>

    <div>
        
        <h3 class="text-center mb-3"> Типы животных </h3>
        <create-report-type-block></create-report-type-block>

        <div class="text-center" v-if="animal_types.length == 0">
            <h5> Список типов животных пуст</h5>
        </div>
        <div v-else>

            <table class="table-responsive-md table table-primary table-bordered table-responsive-md">
                <thead>
                    <tr>
                        <th scope="col">№ п/п</th>
                        <th scope="col">Тип</th>
                        <th scope="col"> 
                             <button :disabled="isChangeLoadingStateTrue" v-on:click="deleteRecordsAnimalType()" type="button" class="btn btn-danger">Удалить</button>
                         </th>

                    </tr>
                </thead>
                <tbody>


                    <tr v-for="(data, index) in animal_types" v-bind:key="data.id">

                        <td>{{ index + 1 }} </td>
                        <td>{{ data.name_type }} </td>
                        <td>
                            <div class="form-check">
                                <input :value="data.id" v-model="animal_types_delete_ids" :disabled="isChangeLoadingStateTrue"
                                    class="form-check-input checkbox-2x" type="checkbox" :id="'deleteAnimalTypeCheck' + data.id">
                                <label class="form-check-label" for="defaultCheck1">
                                    Удалить
                                </label>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>

        </div>

    </div>

</template>

<script>

import CreateAnimalTypeBlock from "../Block/CreateAnimalTypeBlock.vue"

export default {
    data() {
        return {
            animal_types_delete_ids: [],

        }
    },
    components: {
      "create-report-type-block": CreateAnimalTypeBlock,
    },
    methods:{
        deleteRecordsAnimalType(){

            this.$store.dispatch('deleteRecords',
            {"ids":this.animal_types_delete_ids,
            "path":'/api/animal_types/delete/',
            "name_mutation":'deleteAnimalType'});
        }
    },
    computed: {

        animal_types() {
            return this.$store.getters.getAnimalTypes;
        },
        isChangeLoadingStateTrue() {
            return this.$store.getters.getChangesLoading;
        },


    },

}

</script>
