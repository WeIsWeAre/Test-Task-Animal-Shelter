<template>

    <div>

        <div class="text-center" v-if="animal_types.length == 0">
                            <h5> Список типов животных пуст</h5> 
                        </div>
                        <div v-else>

                            <h3 class="text-center mb-5"> Типы животных </h3>

                            <table class="table-responsive-md table table-dark table-style table-responsive-md">
                                <thead>
                                    <tr>
                                        <th scope="col">№ п/п</th>
                                        <th scope="col">Тип</th>
                                        <th scope="col">*</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr v-for="(data,index) in animal_types" v-bind:key="data.id">

                                        <td>{{ index }} </td>
                                        <td>{{ data.name_type }} </td>
                                        <td>
                                            <div class="form-check">
                                                <input :disabled=!editState class="form-check-input" type="checkbox" value="" :id="'deleteAnimalTypeCheck'+ data.id">
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
export default {

    computed: {

        animal_types() {
            return this.$store.getters.getAnimalTypes;
        },
        editState() {
            return this.$store.getters.getStateEdit;
        },
        

},

}

</script>
