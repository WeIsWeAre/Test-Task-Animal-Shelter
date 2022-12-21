<template>

    <div class="text-center changes-loader">

        <div style="width: 5rem; height: 5rem;" class="spinner-border text-warning" role="status"> </div>
        <div class="loader-text">Загрузка...</div>

   </div>


</template>

<script>
   export default {
      
   }

</script>

<style>
.changes-loader{
    position: -webkit-fixed;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
}

.loader-text{
    color: yellow;
}
  
</style>
