<template>
    <div class="edit-block">

        <button v-if="editState == false" v-on:click="changeEditState(true)" type="button"
            class="btn btn-success">РАЗРЕШИТЬ ИЗМЕНЕНИЯ</button>
        <button v-else v-on:click="changeEditState(false)" type="button" class="btn btn-danger">ЗАПРЕТИТЬ
            ИЗМЕНЕНИЯ</button>
    </div>

</template>

<script>
export default {

    computed: {
        editState() {
            return this.$store.getters.getStateEdit;
        },
    },
    methods: {
        changeEditState(edit_state) {
            this.$store.dispatch('changeEditState', edit_state);
        }

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