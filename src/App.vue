<script>
  
</script>

<template>
  <div class="app">
    <nav>
      <router-link to='/' class='titulo'>Início</router-link> &nbsp;
    </nav>

    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a> -->
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://burgostecnologia.bohr.io" target="_blank">
      <img src="./assets/logo.png" class="logo" alt="logo  BurgosTecnologia" />
    </a>    

    <!-- <p class="portifolio">Portfólio de componentes</p> -->

    <router-view></router-view>
  </div>
 
</template>

<style>

/* @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Prompt:wght@300&display=swap');
 

.portifolio{
  font-family: 'Dancing Script', cursive;
  font-size: 48px;
}

.titulo{
  font-family: 'Prompt', sans-serif;
  font-size: 48px;
}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #e5e6ecaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
