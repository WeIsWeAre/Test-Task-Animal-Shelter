import VueRouter from 'vue-router'
import AnimalTable from './views/AnimalTable.vue'


export default new VueRouter({  
routes :
[  
    {  
        path:'/animal_shelter',
        name:'animals',
        component: AnimalTable,  
    },
    
]
,mode : 'history',});