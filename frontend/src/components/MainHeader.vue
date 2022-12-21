<template>
    <div class="container mt-5">

        <p class="text-left">
            Текст
        </p>
        <h3 class="text-center "><strong>Регистрация животных, поступивших в приют</strong></h3>
        <hr>

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