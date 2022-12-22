<template>
    <div>
        <div class="container-lg mt-5">
            <div v-if="loading">
                <main-loader></main-loader>
            </div>
            <div v-else class="row">
                <div class="col-lg-4">
                   <animal-types></animal-types>
                </div>
                <div class="col-lg-8">
                    <arrive-animals></arrive-animals>
                    
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import MainHeader from '../components/MainLoader.vue'
    import ArrivedAnimals from '../components/Table/ArrivedAnimals.vue'
    import AnImalTypes from '../components/Table/AnImalTypes.vue'

    export default {

        data() {

            return {


            }
        },
        components: {
            'main-loader': MainHeader,
            'arrive-animals': ArrivedAnimals,
            'animal-types': AnImalTypes,
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