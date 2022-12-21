<template>
    <div>
        <div class="container-fluid mt-5">

            <div class="row">
                <div class="col">


                    <div v-if="loading">
                        <main-loader></main-loader>
                    </div>
                    <div v-else>

                        <div class="text-center" v-if="animals.length == 0">
                            <h5> Список поступивших животных пуст</h5> 
                        </div>
                        <div v-else>

                            <h3 class="text-center mb-5"> Поступившие животные </h3>

                            <table class="table table-style table-responsive-md">
                                <thead>
                                    <tr>
                                        <th scope="col">№ п/п</th>
                                        <th scope="col">Наименование</th>
                                        <th scope="col">Тип животного</th>
                                        <th scope="col">Вес</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr v-for="data in animals" v-bind:key="data.id">

                                        <td>{{ data.id }} </td>
                                        <td>{{ data.name }} </td>
                                        <td>{{ data.name_type }} </td>
                                        <td>{{ data.weight }} </td>
                                      
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import MainHeader from '../components/MainLoader.vue'

    export default {

        data() {

            return {


            }
        },
        components: {
            'main-loader': MainHeader,
        },
        methods: {

         
        },

        computed: {

            animals() {
                return this.$store.getters.getAnimals;
            },
            loading() {
                return this.$store.getters.getLoading;
            }

        },
        created(){
            this.$store.dispatch('getDataFromServer');
        },
        mounted() {


        }
    }
</script>


<style>
    .report-container {
        background-color: #BDD0D4;
        border-radius: 10px;
        height: auto;
        padding: 25px;
    }
</style>