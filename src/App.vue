<template lang="pug">
  #app
    #nav
      router-link(to="/") Baconizer
      span  | 
      router-link(to="/about") About
    router-view
</template>

<style lang="scss">
/* 
 * Global styles
 */
@import url('./styles/_all.scss');

#app {
  font-family: $font-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: $magenta;
    }
  }
}
</style>
