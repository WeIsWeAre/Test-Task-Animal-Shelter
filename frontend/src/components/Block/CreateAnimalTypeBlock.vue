<template>

    <div class="text-center mb-3 create-report-type-block">

        <div class="container mb-3 mt-2">
            
            <form class="d-flex flex-wrap align-items-end justify-content-center" form="buttonCreateAnimalType" action="#" @submit.prevent="createAnimalType()">
                <div class="mr-auto">
                    <label for="FormControlInputNameAnimalType" class="form-label">Наименование типа</label>
                    <input required v-model="name_type" type="text" class="form-control" maxlength="25"
                        id="FormControlInputNameAnimalType" placeholder="Тип животного">
                </div>
                <div class="mt-lg-3 mr-auto">
                    <button id="buttonCreateAnimalType" :disabled="isChangeLoadingStateTrue" type="submit" class="btn btn-primary">Добавить</button>
                </div>
            </form>

        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            name_type: "",
        }
    },
    methods: {
        createAnimalType() {
            this.$store.dispatch('createRecord',
                {
                    'data_create': {
                        'name_type': this.name_type,
                    },
                    'create_parameters': {
                        "path": '/api/animal_types/',
                        "name_mutation": 'addAnimalType'
                    }
                });
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

<style>
.create-report-type-block {
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    border-radius: 8px;
    border: 1px solid rgba(22, 24, 35, 0.12);
}
</style>