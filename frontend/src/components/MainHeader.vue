<template>
    <div class="container mt-5">

        <p class="text-left">
            АС СКП "Технология"
        </p>
        <h3 class="text-center "><strong>Универсальный отчёт </strong></h3>
        <hr>

        <router-link v-if="getRouteName != 'create'" :to="{ name: 'create' }">
            <b-button variant="outline-success" class="mr-5"> Создание отчета </b-button>
        </router-link>

        <router-link v-if="getRouteName != 'reports'" :to="{ name: 'reports' }">
            <b-button variant="outline-primary"> Открыть отчёты </b-button>
        </router-link>

    </div>
</template>

<script>
    export default {


        computed: {
            getRouteName() {
                return this.$route.name;
                
            },

        },

    }
</script>


<style>


</style>