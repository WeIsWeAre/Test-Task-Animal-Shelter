<template>
    <div class="container mt-5">

        <p class="text-left">
            {{  SuccessMessage }}
        </p>
        <p class="text-left">
            {{  ErrorMessage }}
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
            SuccessMessage() {
                return this.$store.getters.getSuccessMessage;
            },
            ErrorMessage() {
                return this.$store.getters.getErrorMessage;
            },

        },

    }
</script>


<style>


</style>