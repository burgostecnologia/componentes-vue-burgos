<template>
  <div>
      <Produto v-for="produto in $store.state.produtos" :key=produto.id :produto=produto></Produto> 
  </div>
</template>

<script>
import Produto from './produto.vue'
export default {
  components: {
    Produto,
  }
}
</script>

<style>

 
</style>