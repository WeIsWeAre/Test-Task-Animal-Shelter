<template>

    <div class="text-center changes-loader">

        <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Ожидайте...</span>
    </div>

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
