import {createRouter,createWebHistory} from 'vue-router'

import HomeView from '../views/Home.vue'
import CarrinhoCompra from '../views/CarrinhoCompras.vue'

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