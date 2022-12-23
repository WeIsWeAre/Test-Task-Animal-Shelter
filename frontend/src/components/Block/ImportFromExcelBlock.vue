<template>
    <div class="excel-import-block mb-3">
        <div class="d-flex flex-wrap justify-content-center align-items-end mb-3 mt-2">
        
            <div class="mr-3" col-auto>Загрузка поступивших животных из файла {{ excel_file ? excel_file.name : '' }}
                <b-form-file v-model="excel_file" :state="Boolean(excel_file)" placeholder="Выберите файл..."
                drop-placeholder="Поместите файл..."></b-form-file>
            </div>
      
            <div col-auto><b-button v-on:click="ImportFromExcel()" variant="outline-primary mt-2">Загрузить</b-button></div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            excel_file: null

        }
    },
    methods: {
        ImportFromExcel()
        {   let fd = new FormData();
            fd.append("excel_file", this.excel_file);
            this.$store.dispatch('ImportFromExcel',fd)
        }
    },

}


</script>
<style>
.excel-import-block {
    font-size: 15px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    border-radius: 8px;
    border: 1px solid rgba(22, 24, 35, 0.12);
}
</style>