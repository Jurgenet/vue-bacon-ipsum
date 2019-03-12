<template lang="pug">
  - var rootClass = 'about'

  div(class=rootClass)
    h4 powered by Vue
    img(class=`${rootClass}__logo` src="../assets/logo.png")
</template>

<script>
export default {
  name: 'about',
};
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;

  align-items: center;

  &__logo {
    animation: logo-spin infinite 20s linear;
    height: 10vmin;
    pointer-events: none;
  }
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
