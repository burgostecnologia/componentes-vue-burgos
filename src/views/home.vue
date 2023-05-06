<template>
  <div>
     <p class="portifolio">Portfólio de componentes</p>
    <!-- <h1>Minha lista de componentes criados</h1> -->
    <div class='cards'>
      <div @click="compCarrinho()" class="card1">
        <img src="../assets/cart-variant.svg"  alt="cart" /> 
        <span>Carrinho de Compras</span>    
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    compCarrinho () { 
      this.$router.push('./carrinhocompra')
    },
  },

}
</script>

<style>
.cards{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  padding: 16px;
}
/* 1111111111 */
.card1 {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 190px;
  height: 254px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.card1:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.card1:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
/* 1111111111 */


</style>