<template>

    <div>

        <h3 class="text-center mb-3"> Поступившие животные </h3>
        <create-animal-block></create-animal-block>

        <div class="text-center" v-if="animals.length == 0">
            <h5> Список поступивших животных пуст</h5>
        </div>
        <div class="arrived-animals-container" v-else>

            <table class="table-responsive-md table table-primary table-bordered table-responsive-md">
                <thead>
                    <tr>
                        <th scope="col">№ п/п</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Тип животного</th>
                        <th scope="col">Вес</th>
                        <th scope="col">Включить в объявление</th>
                        <th scope="col">Изменение записи</th>
                        <th scope="col" > <button :disabled="isChangeLoadingStateTrue" v-on:click="deleteRecordsAnimal()" type="button" class="btn btn-danger">Удалить</button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                   
               

                    <tr v-for="(data,index) in animals" v-bind:key="data.id">

                        <td>{{ index + 1 }} </td>
                        <td>{{ data.name }} </td>
                        <td>{{ data.name_type }} </td>
                        <td>{{ data.weight }} </td>
                        <td> 
                            <b-form-radio :change="setActiveMissingAnimal()" v-model="includeInReport" :name="'includeInReport'+data.id" :value=data>Включить</b-form-radio> 
                       </td>
                        <td> <change-block :animal_change="data"></change-block> </td>
                        <td><div class="form-check">
                            <input :value="data.id" v-model="animals_delete_ids" :disabled="isChangeLoadingStateTrue"
                                class="form-check-input" type="checkbox" :id="'deleteAnimalCheck' + data.id">
                            <label class="form-check-label" for="defaultCheck1">
                                Удалить
                            </label>
                        </div></td>
                    </tr>
                </tbody>
            </table>


        </div>

    </div>

</template>

<script>
import CreateAnimalBlock from "../Block/CreateAnimalBlock.vue"
import ChangeBlock from "../Block/ChangeBlock.vue"

export default {
    data() {
        return {
            animals_delete_ids: [],
            includeInReport: {},
        }
    },
    components: {
        'create-animal-block': CreateAnimalBlock,
        'change-block': ChangeBlock,
    },
    methods:{
        setActiveMissingAnimal(){
            this.$store.dispatch('setActiveMissingAnimal', this.includeInReport);
        },
        deleteRecordsAnimal(){
            this.$store.dispatch('setActiveMissingAnimal', "");
            this.$store.dispatch('deleteRecords',
            {"ids":this.animals_delete_ids,
            "path":'/api/animals/delete/',
            "name_mutation":'deleteAnimals'
        });
        }
    },
    computed: {
        isChangeLoadingStateTrue() {
            return this.$store.getters.getChangesLoading;
        },
        animals() {
            return this.$store.getters.getAnimals;
        },


    },

}

</script>

<style>
.arrived-animals-container{
    
    overflow-y: scroll;
    height: 350px;
}

</style>
