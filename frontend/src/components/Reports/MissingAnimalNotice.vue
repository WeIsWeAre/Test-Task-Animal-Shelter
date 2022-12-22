<template>

    <div class="text-center">

      <b-modal size="xl" :ok-only="true" :hide-footer="true" id="modal-missing-animal" title="Объявление о пропаже">
     
      <p class=" text-center title-missing-animal-notice">ПРОПАЛО ЖИВОТНОЕ {{ getActiveMissingAnimal.name }}</p>
      
      <div class="d-flex flex-wrap justify-content-left align-items-center">
         <div class="px-4">
            <img class="img_missing_animal" src="../../assets/temp_photo.jpg">
         </div>
         <div class="px-4 animal-signs-list">        
            <div class="d-flex">
               кличка : <div class="line"></div> 
            </div>
            <div class="d-flex">
               порода : <div class="line"></div> 
            </div>
            <div class="d-flex">
              окрас :<div class="line"></div> 
            </div>
            <div class="d-flex">
               цвет глаз : <div class="line"></div> 
            </div>
            <div class="d-flex">
                возраст : <div class="line"></div> 
            </div>
            <div class="d-flex">
              ошейник :  <div class="line"></div> 
            </div>
            <div class="d-flex">
               пигментация :<div class="line"></div> 
            </div>
            <div class="d-flex">
                место пропажи : <div class="line"></div> 
            </div>

         </div>
      </div>
   
      <div class="d-flex">
         <div class="footer-missing-animal-notice">КОНТАКТНЫЕ ДАННЫЕ и информация о вознаграждении:  </div><div class="footer-underline"></div> 
      </div>

      <button v-if="isVisible" type="button"
           class="btn btn-primary mt-3" v-on:click="Print()">ПЕЧАТЬ
         </button>

      </b-modal>
      
   

   </div>

</template>

<script>
   export default {
      data(){
         return {
            isVisible: true,
        }
      },
      computed: {
         getActiveMissingAnimal() {
            return this.$store.getters.getActiveMissingAnimal;
               
         },


        },
        methods:{
         Print(){
            this.isVisible = false;
            setTimeout(()=> {
               
               window.print();
               this.isVisible = true;
            }, 1000);
         }
        }  
   }
   

</script>

<style>
.footer-underline{
   border-bottom: 1px solid rgb(22, 24, 35);
  width: 300px;
}
.line{
  border-bottom: 1px solid rgb(22, 24, 35);
  width: 300px;
}
.footer-missing-animal-notice{
 font-size: 20px;
 font-weight: bold;
}
.animal-signs-list{
   font-weight: bold;
   font-size: 25px;
}
.modal-backdrop {
   opacity: 1 !important;
   background-color: rgb(22, 24, 35) !important;
}
.img_missing_animal{
   height: 350px;
   width: auto;
}
.title-missing-animal-notice{
   font-size: 40px;
   font-weight: bold;
}
</style>