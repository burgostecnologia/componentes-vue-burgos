<script>
import Produtos from './components/carrinhoProdutos/produtos.vue'
export default({
  components: {
    Produtos
  }
}
)
  
</script>

<template>
  <div>
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/carrinhocompra'>Carrinho Compras</router-link>
    </nav>
    <router-view></router-view>

    <Produtos></Produtos>
    <br><br>Quantidade de itens no carrinho: {{ $store.state.carrinho.length }}<br><br>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

  </div>
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
