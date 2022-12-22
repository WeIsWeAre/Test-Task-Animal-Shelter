<template>
    <div class="edit-block">

        <button :disabled="getActiveMissingAnimal" v-b-modal.modal-missing-animal type="button"
           class="btn btn-primary">СОЗДАТЬ <br>Объявление о пропаже</button>

            <missing-animal-notice></missing-animal-notice>

    </div>
</template>

<script>
import MissingAnimalNotice from '../Reports/MissingAnimalNotice.vue'
export default {
    computed: {
         getActiveMissingAnimal() {
            return !Object.keys(this.$store.getters.getActiveMissingAnimal).length ? true : false;
          
         },
        }, 
    components: {
      "missing-animal-notice": MissingAnimalNotice,
    },

}


</script>
<style>
.edit-block {
    position: -webkit-fixed;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 999;
}
</style>