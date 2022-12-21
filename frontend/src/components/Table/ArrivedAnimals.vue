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
                                        <th scope="col">*</th>
                            
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr v-for="data in animals" v-bind:key="data.id">

                                        <td>{{ data.id }} </td>
                                        <td>{{ data.name }} </td>
                                        <td>{{ data.name_type }} </td>
                                        <td>{{ data.weight }} </td>
                                        <div  class="form-check">
                                                <input :disabled=!editState class="form-check-input" type="checkbox" value="" :id="'deleteAnimalCheck'+ data.id">
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
