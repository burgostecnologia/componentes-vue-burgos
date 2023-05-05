import { createStore } from "vuex"

export default createStore({
    state: {
        produtos: [
            {
                id: 1,
                nome: 'Produto 1',
                preco: 25.00,
                descricao: 'descrição produto 1',
                foto: ''
            },
            {
                id: 2,
                nome: 'Produto 2',
                preco: 15.00,
                descricao: 'descrição produto 2',
                foto: ''
            },
            {
                id: 3,
                nome: 'Produto 3',
                preco: 45.00,
                descricao: 'descrição produto 3',
                foto: ''
            },
        ] ,
        carrinho: [],
    },
    mutations:{
        mutAdicProduto(state, data){ //state o valor anterior e data o atual
            state.carrinho.push(data)
        },
        mutRemoveProduto(state, id){
            const index = state.carrinho.findIndex(item => item.id === id)
            state.carrinho.splice(index,1)
        }
    }
})