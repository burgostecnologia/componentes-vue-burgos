
<template>  
  
    <div class="card">
        {{produto.nome}} 
        (Valor: {{produto.preco}})
        <button class="botao" @click="adicProduto()">Adicionar</button>
        <button class="botao" v-if="temNoCarrinho(produto.id)" @click="removeProduto()">Remover</button>
    </div>
        
</template>

<script>

//  import Produto from './produto.vue' 
export default {
  
    data () {
      return {
        prodEstaNoCarrinho : true
      }
    },
    methods: {
      adicProduto(){
          console.log("Adicionar")
          this.$store.commit('mutAdicProduto',this.produto)
      },
      removeProduto(){
        this.$store.commit("mutRemoveProduto",this.produto.id)
      },
      temNoCarrinho(id){
      // console.log(this.$store.state.carrinho.findIndex(item => item.id === id) )
        return this.$store.state.carrinho.findIndex(item => item.id === id) === -1 ? false : true
      }
    },
    props: {
      produto: Object,
    },

  } 


</script>

<style>
.card{   
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    padding: 6px;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
}
.botao{
  color: black;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);}
</style>