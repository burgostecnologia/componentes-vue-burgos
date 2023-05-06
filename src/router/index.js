import {createRouter,createWebHistory} from 'vue-router'

import HomeView from '../views/home.vue'
import CarrinhoCompra from '../views/carrinhocompras.vue'

const routes = [
    {
        path:'/', 
        component:HomeView
    },
    {
        path:'/carrinhocompra', 
        component:CarrinhoCompra
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router