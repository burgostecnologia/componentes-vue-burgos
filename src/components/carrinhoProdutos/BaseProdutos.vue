<template>
  <div class="BaseProdutos">
      <Produto v-for="produto in $store.state.produtos" :key=produto.id :produto=produto></Produto> 
       <br><br>Quantidade de itens no carrinho: {{ $store.state.carrinho.length }}<br><br>
       <br><br>Carrinho: {{ $store.state.carrinho }}<br><br>
  </div>
</template>

<script>

import Produto from './BaseProduto.vue'
export default {
  components: {
    Produto,
  }
}
</script>

<style>
.BaseProdutos{
  display: flex;
  flex-direction: column;
  align-items: center;

}
 
</style>